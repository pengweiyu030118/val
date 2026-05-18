// 人格维度
export type Dimension =
  | "aimStyle"        // 枪法风格
  | "teamwork"        // 团队协作
  | "tacticalHabits"  // 战术习惯
  | "emotionControl"  // 情绪管理
  | "leadership"      // 指挥能力
  | "aggression"      // 激进程度
  | "mapAwareness"    // 地图意识
  | "mentality";      // 游戏心态

// 选项
export interface Option {
  id: string;
  text: string;
  scores: Record<Dimension, number>;
}

// 题目
export interface Question {
  id: number;
  question: string;
  options: Option[];
}

// 人格类型
export interface Personality {
  id: string;
  name: string;
  code: string;
  title: string;
  description: string;
  styleAnalysis: string;
  suitableRole: string;
  recommendedAgents: string[];
  teamFunction: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  dimensionProfile: Record<Dimension, number>;
  color: string;
  icon: string;
}

// 用户答案
export interface Answer {
  questionId: number;
  optionId: string;
}

// 测试结果
export interface TestResult {
  personality: Personality;
  dimensionScores: Record<Dimension, number>;
  matchPercentage: number;
  timestamp: number;
}

// 维度中文映射
export const dimensionLabels: Record<Dimension, string> = {
  aimStyle: "枪法风格",
  teamwork: "团队协作",
  tacticalHabits: "战术习惯",
  emotionControl: "情绪管理",
  leadership: "指挥能力",
  aggression: "激进程度",
  mapAwareness: "地图意识",
  mentality: "游戏心态",
};
