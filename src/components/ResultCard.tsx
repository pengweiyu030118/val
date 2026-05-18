"use client";

import { motion } from "framer-motion";
import { Personality, Dimension, dimensionLabels } from "@/types";

interface ResultCardProps {
  personality: Personality;
  dimensionScores: Record<Dimension, number>;
  matchPercentage: number;
}

export default function ResultCard({ personality, dimensionScores, matchPercentage }: ResultCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 space-y-6">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-6xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          {personality.icon}
        </motion.div>
        <motion.div
          className="inline-block px-4 py-1 mb-3 text-xs font-bold tracking-widest rounded-full border"
          style={{ color: personality.color, borderColor: `${personality.color}40`, backgroundColor: `${personality.color}10` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {personality.code}
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {personality.name}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          style={{ color: personality.color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {personality.title}
        </motion.p>
        <motion.div
          className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff08] border border-[#ffffff10]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-[#8b8b8b] text-sm">匹配度</span>
          <span className="text-[#ff4655] text-xl font-bold">{matchPercentage}%</span>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.div
        className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#ff4655] rounded-full inline-block" />
          人格介绍
        </h3>
        <p className="text-[#b0b0b0] leading-relaxed text-sm">{personality.description}</p>
        <p className="text-[#b0b0b0] leading-relaxed text-sm mt-3">{personality.styleAnalysis}</p>
      </motion.div>

      {/* Dimension bars */}
      <motion.div
        className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#00e5ff] rounded-full inline-block" />
          能力维度
        </h3>
        <div className="space-y-3">
          {Object.entries(dimensionScores).map(([key, value], i) => (
            <motion.div
              key={key}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.05 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#b0b0b0] text-xs">{dimensionLabels[key as Dimension]}</span>
                <span className="text-white text-xs font-bold">{value}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#ffffff10] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#ff4655] to-[#ff6b7a]"
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Role & Agents */}
      <motion.div
        className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#ff4655] rounded-full inline-block" />
          游戏定位
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1.5 rounded-lg bg-[#ff4655]/10 border border-[#ff4655]/20 text-[#ff4655] text-sm font-medium">
            {personality.suitableRole}
          </span>
        </div>
        <div className="mb-3">
          <span className="text-[#8b8b8b] text-xs uppercase tracking-wider">推荐英雄</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {personality.recommendedAgents.map((agent) => (
              <span
                key={agent}
                className="px-3 py-1.5 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white text-sm"
              >
                {agent}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[#b0b0b0] text-sm mt-3">
          <span className="text-[#8b8b8b]">团队作用：</span>{personality.teamFunction}
        </p>
      </motion.div>

      {/* Strengths & Weaknesses */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-5">
          <h3 className="text-[#2ecc71] font-bold text-sm mb-3">优势</h3>
          <ul className="space-y-1.5">
            {personality.strengths.map((s) => (
              <li key={s} className="text-[#b0b0b0] text-sm flex items-center gap-2">
                <span className="text-[#2ecc71] text-xs">+</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-5">
          <h3 className="text-[#ff4655] font-bold text-sm mb-3">弱点</h3>
          <ul className="space-y-1.5">
            {personality.weaknesses.map((w) => (
              <li key={w} className="text-[#b0b0b0] text-sm flex items-center gap-2">
                <span className="text-[#ff4655] text-xs">-</span> {w}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Suggestions */}
      <motion.div
        className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ffffff10] rounded-2xl p-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#ffd700] rounded-full inline-block" />
          提升建议
        </h3>
        <ul className="space-y-2">
          {personality.suggestions.map((s, i) => (
            <motion.li
              key={s}
              className="text-[#b0b0b0] text-sm flex items-start gap-2"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <span className="text-[#ffd700] mt-0.5">◆</span> {s}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
