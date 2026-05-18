"use client";

import { useEffect, useRef } from "react";
import { Dimension, dimensionLabels } from "@/types";

interface RadarChartProps {
  scores: Record<Dimension, number>;
  size?: number;
}

const ALL_DIMENSIONS: Dimension[] = [
  "aimStyle", "teamwork", "tacticalHabits", "emotionControl",
  "leadership", "aggression", "mapAwareness", "mentality",
];

export default function RadarChart({ scores, size = 280 }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.35;
    const levels = 5;
    const count = ALL_DIMENSIONS.length;
    const angleStep = (Math.PI * 2) / count;

    ctx.clearRect(0, 0, size, size);

    // Draw grid
    for (let level = 1; level <= levels; level++) {
      const r = (radius / levels) * level;
      ctx.beginPath();
      for (let i = 0; i <= count; i++) {
        const angle = angleStep * i - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = level === levels ? "#ffffff30" : "#ffffff10";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axes
    for (let i = 0; i < count; i++) {
      const angle = angleStep * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.strokeStyle = "#ffffff15";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw score polygon
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const value = scores[ALL_DIMENSIONS[i]] / 100;
      const r = radius * value;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 70, 85, 0.2)";
    ctx.fill();
    ctx.strokeStyle = "#ff4655";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw score dots
    for (let i = 0; i < count; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const value = scores[ALL_DIMENSIONS[i]] / 100;
      const r = radius * value;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ff4655";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw labels
    ctx.fillStyle = "#b0b0b0";
    ctx.font = "11px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 0; i < count; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const labelR = radius + 20;
      const x = cx + labelR * Math.cos(angle);
      const y = cy + labelR * Math.sin(angle);
      ctx.fillText(dimensionLabels[ALL_DIMENSIONS[i]], x, y);
    }
  }, [scores, size]);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto"
    />
  );
}
