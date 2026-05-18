import { Personality } from "@/types";

export function generateShareText(personality: Personality): string {
  return `🔫 我在《无畏契约 VALORANT 游戏人格测试》中测出了【${personality.name} - ${personality.code}】！

${personality.title}

${personality.description.slice(0, 80)}...

来测测你是什么人格？`;
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  // Fallback
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    return Promise.resolve(true);
  } catch {
    return Promise.resolve(false);
  } finally {
    document.body.removeChild(textarea);
  }
}

export function shareToTwitter(text: string, url: string): void {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
}

export function shareToWeibo(text: string, url: string): void {
  window.open(
    `https://service.weibo.com/share/share.php?title=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
}
