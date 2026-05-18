"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#8b8b8b] text-sm font-medium">
          进度
        </span>
        <span className="text-[#ff4655] text-sm font-bold">
          {current} / {total}
        </span>
      </div>
      <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#ffffff10]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#ff4655] to-[#ff6b7a]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
