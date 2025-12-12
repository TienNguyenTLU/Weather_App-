"use client";

import React, { useMemo } from "react";

type Point = { hour: string; temp: number };

export default function TemperatureChart24h() {
  const data: Point[] = useMemo(() => {
    const now = new Date();
    const base = 22;
    const amplitude = 6;
    const arr: Point[] = [];
    for (let i = 0; i < 24; i++) {
      const d = new Date(now.getTime() + i * 60 * 60 * 1000);
      const h = d.getHours().toString().padStart(2, "0");
      const t = base + Math.sin((i / 24) * Math.PI * 2) * amplitude + (i % 5 === 0 ? 0 : (i % 3) - 1);
      arr.push({ hour: `${h}:00`, temp: Math.round(t) });
    }
    return arr;
  }, []);

  const width = 720;
  const height = 260;
  const margin = { top: 24, right: 16, bottom: 28, left: 40 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const temps = data.map(d => d.temp);
  const minT = Math.min(...temps) - 2;
  const maxT = Math.max(...temps) + 2;

  const x = (i: number) => (i / (data.length - 1)) * innerW + margin.left;
  const y = (t: number) => {
    const ratio = (t - minT) / (maxT - minT);
    return margin.top + innerH - ratio * innerH;
  };

  const path = data
    .map((d, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(d.temp)}`)
    .join(" ");

  const gridYValues = [0, 0.25, 0.5, 0.75, 1].map(r => minT + r * (maxT - minT));

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-gray-200 dark:border-[#2D2D35] bg-white dark:bg-[#15161C]">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-[#2D2D35]">
          <h3 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">Next 24 hours temperature</h3>
        </div>
        <div className="px-2 py-3">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
            <rect x={margin.left} y={margin.top} width={innerW} height={innerH} fill="none" stroke="transparent" />

            {gridYValues.map((v, idx) => (
              <g key={idx}>
                <line
                  x1={margin.left}
                  x2={margin.left + innerW}
                  y1={y(v)}
                  y2={y(v)}
                  stroke="currentColor"
                  className="text-gray-200 dark:text-[#2D2D35]"
                />
                <text
                  x={margin.left - 8}
                  y={y(v) + 4}
                  textAnchor="end"
                  className="fill-gray-500 dark:fill-gray-400 text-[10px]"
                >
                  {Math.round(v)}°
                </text>
              </g>
            ))}

            <path d={path} fill="none" stroke="currentColor" className="text-blue-500" strokeWidth={2} />

            {data.map((d, i) => (
              <g key={i}>
                <circle cx={x(i)} cy={y(d.temp)} r={3} className="fill-blue-500" />
                <text x={x(i)} y={height - 6} textAnchor="middle" className="fill-gray-500 dark:fill-gray-400 text-[10px]">
                  {i % 3 === 0 ? d.hour : ""}
                </text>
                <title>{`${d.hour} • ${d.temp}°`}</title>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

