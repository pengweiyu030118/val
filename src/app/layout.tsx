import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "无畏契约 VALORANT 游戏人格测试 | 测出你的游戏人格",
  description:
    "通过20+道专业题目，精准分析你的VALORANT游戏人格！从枪法风格、团队协作、战术习惯等8个维度深度解析你的游戏定位。看看你是冷静指挥官、冲锋决斗者还是潜伏大师？",
  keywords:
    "VALORANT,无畏契约,游戏人格测试,MBTI,电竞,人格测试,FPS,拳头游戏",
  openGraph: {
    title: "无畏契约 VALORANT 游戏人格测试",
    description: "测出你的VALORANT游戏人格！看看你是哪种类型的玩家？",
    type: "website",
    locale: "zh_CN",
    siteName: "VALORANT 游戏人格测试",
  },
  twitter: {
    card: "summary_large_image",
    title: "无畏契约 VALORANT 游戏人格测试",
    description: "测出你的VALORANT游戏人格！看看你是哪种类型的玩家？",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
