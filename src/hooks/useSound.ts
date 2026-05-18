"use client";

import { useState, useCallback, useRef } from "react";

// 简单的 Web Audio API 音效生成器
function playClickSound() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 800;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch { /* audio not supported */ }
}

function playSuccessSound() {
  try {
    const ctx = new AudioContext();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.2);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.2);
    });
  } catch { /* audio not supported */ }
}

function playTransitionSound() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.15);
    osc.type = "sine";
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch { /* audio not supported */ }
}

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const enabledRef = useRef(true);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      enabledRef.current = !prev;
      return !prev;
    });
  }, []);

  const playClick = useCallback(() => {
    if (enabledRef.current) playClickSound();
  }, []);

  const playSuccess = useCallback(() => {
    if (enabledRef.current) playSuccessSound();
  }, []);

  const playTransition = useCallback(() => {
    if (enabledRef.current) playTransitionSound();
  }, []);

  return { soundEnabled, toggleSound, playClick, playSuccess, playTransition };
}
