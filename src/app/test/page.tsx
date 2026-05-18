"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import ParticleBackground from "@/components/ParticleBackground";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import SoundToggle from "@/components/SoundToggle";
import { questions } from "@/data/questions";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSound } from "@/hooks/useSound";
import { encodeResult } from "@/utils/calculate";
import { Answer } from "@/types";

export default function TestPage() {
  const router = useRouter();
  const { soundEnabled, toggleSound, playClick, playTransition } = useSound();

  const [savedAnswers, setSavedAnswers] = useLocalStorage<Answer[]>(
    "valorant-test-answers",
    []
  );
  const [savedIndex, setSavedIndex] = useLocalStorage<number>(
    "valorant-test-index",
    0
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [started, setStarted] = useState(false);

  // Init from localStorage
  useEffect(() => {
    if (savedAnswers.length > 0) {
      setAnswers(savedAnswers);
      setCurrentIndex(Math.min(savedIndex, questions.length - 1));
    }
    const timer = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Save progress
  useEffect(() => {
    if (answers.length > 0) {
      setSavedAnswers(answers);
    }
  }, [answers, setSavedAnswers]);

  useEffect(() => {
    setSavedIndex(currentIndex);
  }, [currentIndex, setSavedIndex]);

  const currentQuestion = questions[currentIndex];
  const selectedOption = answers.find((a) => a.questionId === currentQuestion.id)?.optionId || null;

  const handleSelect = useCallback(
    (optionId: string) => {
      if (isTransitioning) return;
      playClick();

      const newAnswers = [...answers];
      const existingIdx = newAnswers.findIndex(
        (a) => a.questionId === currentQuestion.id
      );
      if (existingIdx >= 0) {
        newAnswers[existingIdx] = { questionId: currentQuestion.id, optionId };
      } else {
        newAnswers.push({ questionId: currentQuestion.id, optionId });
      }
      setAnswers(newAnswers);

      // Auto advance
      if (currentIndex < questions.length - 1) {
        setIsTransitioning(true);
        setDirection(1);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsTransitioning(false);
          playTransition();
        }, 350);
      } else {
        // Last question - go to result
        setTimeout(() => {
          const encoded = encodeResult(newAnswers);
          router.push(`/result?data=${encoded}`);
        }, 400);
      }
    },
    [currentIndex, currentQuestion.id, answers, isTransitioning, playClick, playTransition, router]
  );

  const handlePrev = useCallback(() => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setDirection(-1);
      playTransition();
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(false);
      }, 350);
    }
  }, [currentIndex, isTransitioning, playTransition]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1 && !isTransitioning && selectedOption) {
      setIsTransitioning(true);
      setDirection(1);
      playTransition();
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
      }, 350);
    } else if (currentIndex === questions.length - 1 && selectedOption && !isTransitioning) {
      const encoded = encodeResult(answers);
      router.push(`/result?data=${encoded}`);
    }
  }, [currentIndex, isTransitioning, selectedOption, answers, playTransition, router]);

  const progress = answers.length;
  const isLastQuestion = currentIndex === questions.length - 1;

  if (!started) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="text-4xl mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.div>
          <p className="text-[#8b8b8b] text-sm">准备测试中...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <ParticleBackground />
      <SoundToggle enabled={soundEnabled} onToggle={toggleSound} />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top bar */}
        <div className="w-full max-w-2xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.push("/")}
              className="text-[#8b8b8b] hover:text-white text-sm transition-colors flex items-center gap-1"
            >
              <span>←</span> 返回
            </button>
            <span className="text-[#ff4655] text-sm font-bold">
              {progress} / {questions.length} 题已完成
            </span>
          </div>
          <ProgressBar current={progress} total={questions.length} />
        </div>

        {/* Question area */}
        <div className="flex-1 flex items-center justify-center py-8">
          <QuestionCard
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelect={handleSelect}
            direction={direction}
          />
        </div>

        {/* Bottom nav */}
        <div className="w-full max-w-2xl mx-auto px-4 pb-8 safe-bottom">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0 || isTransitioning}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                currentIndex === 0
                  ? "text-[#ffffff20] cursor-not-allowed"
                  : "text-[#b0b0b0] hover:text-white hover:bg-[#ffffff08]"
              }`}
              whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
            >
              ← 上一题
            </motion.button>

            <div className="flex gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!isTransitioning) {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                      playClick();
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-[#ff4655] w-5"
                      : answers.some((a) => a.questionId === questions[i].id)
                      ? "bg-[#ff4655]/50"
                      : "bg-[#ffffff15] hover:bg-[#ffffff25]"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              disabled={!selectedOption || isTransitioning}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedOption
                  ? "bg-[#ff4655]/10 border border-[#ff4655]/30 text-[#ff4655] hover:bg-[#ff4655]/20"
                  : "text-[#ffffff20] cursor-not-allowed"
              }`}
              whileTap={selectedOption ? { scale: 0.95 } : {}}
            >
              {isLastQuestion ? "查看结果 →" : "下一题 →"}
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
