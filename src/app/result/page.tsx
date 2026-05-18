"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import ParticleBackground from "@/components/ParticleBackground";
import SoundToggle from "@/components/SoundToggle";
import ShareButton from "@/components/ShareButton";
import ResultCard from "@/components/ResultCard";
import { calculateResult, decodeResult } from "@/utils/calculate";
import { useSound } from "@/hooks/useSound";
import { Answer } from "@/types";

const RadarChart = dynamic(() => import("@/components/RadarChart"), { ssr: false });

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { soundEnabled, toggleSound, playSuccess } = useSound();
  const [showConfetti, setShowConfetti] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const result = useMemo(() => {
    const encoded = searchParams.get("data");
    if (!encoded) return null;

    const answers = decodeResult(encoded);
    if (!answers || answers.length === 0) return null;

    return calculateResult(answers);
  }, [searchParams]);

  useEffect(() => {
    if (result) {
      setShareUrl(`${window.location.origin}/result?data=${searchParams.get("data")}`);
      playSuccess();
      // Trigger confetti
      setShowConfetti(true);
      try {
        import("canvas-confetti").then((confetti) => {
          confetti.default({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ff4655", "#ff6b7a", "#00e5ff", "#ffd700", "#ffffff"],
          });
        });
      } catch { /* ignore */ }
    }
  }, [result, searchParams, playSuccess]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-2xl font-bold text-white mb-4">未找到测试结果</h1>
          <p className="text-[#8b8b8b] mb-8">请先完成测试再查看结果</p>
          <motion.button
            onClick={() => router.push("/test")}
            className="px-8 py-3 rounded-xl bg-[#ff4655] text-white font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            开始测试
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const { personality, dimensionScores, matchPercentage } = result;

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden pb-20">
      <ParticleBackground />
      <SoundToggle enabled={soundEnabled} onToggle={toggleSound} />

      {/* Glow backgrounds */}
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-5 pointer-events-none"
        style={{ backgroundColor: personality.color }} />

      <div className="relative z-10">
        {/* Top nav */}
        <div className="w-full max-w-2xl mx-auto px-4 pt-6 pb-4">
          <button
            onClick={() => router.push("/")}
            className="text-[#8b8b8b] hover:text-white text-sm transition-colors flex items-center gap-1"
          >
            <span>←</span> 返回首页
          </button>
        </div>

        {/* Radar chart section */}
        <motion.div
          className="w-full max-w-2xl mx-auto px-4 mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="glass rounded-3xl p-6 w-full flex justify-center">
            <RadarChart scores={dimensionScores} size={280} />
          </div>
        </motion.div>

        {/* Result card */}
        <ResultCard
          personality={personality}
          dimensionScores={dimensionScores}
          matchPercentage={matchPercentage}
        />

        {/* Action buttons */}
        <motion.div
          className="w-full max-w-2xl mx-auto px-4 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ShareButton personality={personality} shareUrl={shareUrl} />

          <motion.button
            onClick={() => {
              router.push("/test");
            }}
            className="px-6 py-3 rounded-xl border border-[#ffffff20] text-[#b0b0b0] hover:text-white hover:border-[#ffffff40] text-sm font-medium transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            重新测试
          </motion.button>
        </motion.div>

        {/* Bottom padding */}
        <div className="h-16" />
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 border-4 border-transparent border-t-[#ff4655] rounded-full animate-spin" />
            <p className="text-[#8b8b8b] text-sm">加载中...</p>
          </div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
