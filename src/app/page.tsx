"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ParticleBackground from "@/components/ParticleBackground";
import SoundToggle from "@/components/SoundToggle";
import { useSound } from "@/hooks/useSound";

export default function HomePage() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const { soundEnabled, toggleSound, playClick } = useSound();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleStart = () => {
    playClick();
    router.push("/test");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />
      <SoundToggle enabled={soundEnabled} onToggle={toggleSound} />

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff4655] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00e5ff] rounded-full blur-[150px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4655] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#ff4655] flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(255,70,85,0.4)]">
              V
            </div>
            <div>
              <p className="text-[#8b8b8b] text-xs tracking-[0.3em] uppercase">VALORANT</p>
              <p className="text-white text-sm font-bold tracking-widest">游戏人格测试</p>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-[#ff4655] border border-[#ff4655]/30 rounded-full bg-[#ff4655]/5"
            initial={{ scale: 0 }}
            animate={loaded ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: "spring" }}
          >
            你是什么类型的 VALORANT 玩家？
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
            测出你的
            <br />
            <span className="text-gradient">无畏契约人格</span>
          </h1>
          <p className="mt-6 text-[#8b8b8b] text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            25道专业题目 &middot; 8种人格类型 &middot; 深度游戏分析
            <br />
            了解你的枪法风格、战术习惯、团队定位
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ y: 30, opacity: 0 }}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            onClick={handleStart}
            className="relative group px-10 py-4 rounded-2xl bg-gradient-to-r from-[#ff4655] to-[#c0392b] text-white font-bold text-lg tracking-wider overflow-hidden shadow-[0_0_40px_rgba(255,70,85,0.3)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">开始测试 →</span>
          </motion.button>
          <p className="text-center mt-3 text-[#8b8b8b] text-xs">
            预计用时 3-5 分钟
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          {[
            { icon: "🎯", title: "8维人格分析", desc: "枪法·战术·心态全维度" },
            { icon: "⚡", title: "专业题目设计", desc: "覆盖所有游戏核心场景" },
            { icon: "📊", title: "精准结果匹配", desc: "雷达图+多维数据展示" },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass rounded-2xl p-5 text-center hover:border-[#ff4655]/20 transition-all duration-300 group cursor-default"
              initial={{ y: 20, opacity: 0 }}
              animate={loaded ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#ff4655] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#8b8b8b] text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-16 text-[#ffffff20] text-xs"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          VALORANT 游戏人格测试 · 仅供娱乐参考 · 非官方产品
        </motion.p>
      </div>
    </main>
  );
}
