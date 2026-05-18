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

// 编码结果用于分享 (浏览器兼容的 base64url)
export function encodeResult(answers: Answer[]): string {
  const str = answers.map((a) => `${a.questionId}:${a.optionId}`).join(",");
  // 使用 btoa 进行 base64 编码，然后转为 base64url 格式
  try {
    const base64 = btoa(unescape(encodeURIComponent(str)));
    return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  } catch {
    // fallback: 直接使用 encodeURIComponent
    return encodeURIComponent(str);
  }
}

// 解码分享结果
export function decodeResult(encoded: string): Answer[] | null {
  try {
    let str: string;
    // 尝试 base64url 解码
    if (encoded.includes("%")) {
      str = decodeURIComponent(encoded);
    } else {
      const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
      str = decodeURIComponent(escape(atob(base64)));
    }
    return str.split(",").map((pair) => {
      const [questionId, optionId] = pair.split(":");
      return { questionId: parseInt(questionId), optionId };
    });
  } catch {
    return null;
  }
}
