"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Question, Option } from "@/types";

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  direction: number; // 1 = forward, -1 = backward
}

export default function QuestionCard({ question, selectedOption, onSelect, direction }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={question.id}
          custom={direction}
          initial={{ x: direction * 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Question */}
          <motion.div
            className="mb-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-[#ff4655] border border-[#ff4655]/30 rounded-full bg-[#ff4655]/5">
              Q{question.id}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              {question.question}
            </h2>
          </motion.div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <OptionButton
                key={option.id}
                option={option}
                index={index}
                isSelected={selectedOption === option.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OptionButton({
  option, index, isSelected, onSelect,
}: {
  option: Option;
  index: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  const letters = ["A", "B", "C", "D"];

  return (
    <motion.button
      onClick={() => onSelect(option.id)}
      className={`w-full p-4 md:p-5 rounded-xl border text-left flex items-center gap-4 transition-all duration-200 group ${
        isSelected
          ? "border-[#ff4655] bg-[#ff4655]/10 shadow-[0_0_20px_rgba(255,70,85,0.15)]"
          : "border-[#ffffff15] bg-[#1a1a1a]/60 hover:border-[#ffffff30] hover:bg-[#1a1a1a]/80 backdrop-blur-sm"
      }`}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
          isSelected
            ? "bg-[#ff4655] text-white"
            : "bg-[#ffffff10] text-[#8b8b8b] group-hover:bg-[#ffffff15] group-hover:text-white"
        }`}
      >
        {letters[index]}
      </span>
      <span className={`text-sm md:text-base transition-colors ${
        isSelected ? "text-white font-medium" : "text-[#b0b0b0] group-hover:text-white"
      }`}>
        {option.text}
      </span>
      {isSelected && (
        <motion.span
          className="ml-auto text-[#ff4655] text-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          ✓
        </motion.span>
      )}
    </motion.button>
  );
}
