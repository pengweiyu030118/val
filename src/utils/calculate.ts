import { Answer, Dimension, TestResult, Personality } from "@/types";
import { questions } from "@/data/questions";
import { personalities } from "@/data/personalities";

const ALL_DIMENSIONS: Dimension[] = [
  "aimStyle", "teamwork", "tacticalHabits", "emotionControl",
  "leadership", "aggression", "mapAwareness", "mentality",
];

// 计算各维度得分
export function calculateDimensionScores(answers: Answer[]): Record<Dimension, number> {
  const scores: Record<Dimension, number> = {
    aimStyle: 0, teamwork: 0, tacticalHabits: 0, emotionControl: 0,
    leadership: 0, aggression: 0, mapAwareness: 0, mentality: 0,
  };

  const counts: Record<Dimension, number> = { ...scores };

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.id === answer.optionId);
    if (!option) continue;

    for (const dim of ALL_DIMENSIONS) {
      scores[dim] += option.scores[dim];
      counts[dim]++;
    }
  }

  // 平均分，归一化到0-100
  const normalized: Record<Dimension, number> = { ...scores };
  for (const dim of ALL_DIMENSIONS) {
    normalized[dim] = counts[dim] > 0 ? Math.round(scores[dim] / counts[dim]) : 50;
  }

  return normalized;
}

// 匹配最佳人格
export function matchPersonality(dimensionScores: Record<Dimension, number>): {
  personality: Personality;
  matchPercentage: number;
} {
  let bestMatch = personalities[0];
  let bestScore = -Infinity;

  for (const personality of personalities) {
    const similarity = calculateSimilarity(dimensionScores, personality.dimensionProfile);
    if (similarity > bestScore) {
      bestScore = similarity;
      bestMatch = personality;
    }
  }

  // 将相似度转为百分比
  const matchPercentage = Math.min(100, Math.max(0, Math.round((bestScore + 1) * 50)));

  return { personality: bestMatch, matchPercentage };
}

// 余弦相似度
function calculateSimilarity(
  a: Record<Dimension, number>,
  b: Record<Dimension, number>
): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (const dim of ALL_DIMENSIONS) {
    dotProduct += a[dim] * b[dim];
    normA += a[dim] * a[dim];
    normB += b[dim] * b[dim];
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// 完整计算测试结果
export function calculateResult(answers: Answer[]): TestResult {
  const dimensionScores = calculateDimensionScores(answers);
  const { personality, matchPercentage } = matchPersonality(dimensionScores);

  return {
    personality,
    dimensionScores,
    matchPercentage,
    timestamp: Date.now(),
  };
}

// base64url 编码 (兼容所有环境)
function toBase64Url(str: string): string {
  // 使用 TextEncoder + 标准 base64 转 base64url
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// base64url 解码 (兼容所有环境)
function fromBase64Url(encoded: string): string {
  const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

// 编码结果用于分享
export function encodeResult(answers: Answer[]): string {
  const str = answers.map((a) => `${a.questionId}:${a.optionId}`).join(",");
  return toBase64Url(str);
}

// 解码分享结果
export function decodeResult(encoded: string): Answer[] | null {
  try {
    const str = fromBase64Url(encoded);
    return str.split(",").map((pair) => {
      const [questionId, optionId] = pair.split(":");
      return { questionId: parseInt(questionId), optionId };
    });
  } catch {
    return null;
  }
}
