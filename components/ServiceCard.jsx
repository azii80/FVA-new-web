"use client";

import { motion } from "framer-motion";
import {
  Clapperboard,
  Layers,
  Share2,
  Workflow as WorkflowIcon,
  Instagram,
  Youtube,
  Linkedin,
  Music2,
} from "lucide-react";
import { revealItem } from "@/components/ui/Reveal";

const icons = { Clapperboard, Layers, Share2, Workflow: WorkflowIcon };

export function ServiceCard({ service }) {
  const Icon = icons[service.icon];

  return (
    <motion.article
      variants={revealItem}
      className="group relative flex flex-col overflow-hidden rounded-4xl bg-surface p-1.5 shadow-[var(--shadow-soft)] hairline transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative h-[190px] overflow-hidden rounded-[1.375rem] bg-canvas sm:h-[210px]">
        <ServiceVisual kind={service.visual} />
      </div>

      <div className="flex items-start justify-between gap-4 px-5 pb-5 pt-6">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.03em]">
            {service.title}
          </h3>
          <p className="mt-1.5 text-[15px] text-ink-muted">{service.text}</p>
        </div>
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:brand-gradient group-hover:text-white">
          <Icon size={18} strokeWidth={2} />
        </span>
      </div>
    </motion.article>
  );
}

/* --------------------------- card mini-illustrations ---------------------- */

function ServiceVisual({ kind }) {
  if (kind === "editor") return <EditorVisual />;
  if (kind === "split") return <SplitVisual />;
  if (kind === "network") return <NetworkVisual />;
  return <NodesVisual />;
}

/** Create — a stripped-back editing timeline with a scrubbing playhead. */
function EditorVisual() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 p-5">
      <div className="relative flex-1 overflow-hidden rounded-xl brand-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="text-[10px] font-semibold text-white">4K · Graded</span>
        </div>
      </div>

      <div className="relative space-y-1.5 rounded-xl bg-surface p-2.5 hairline">
        {[
          ["w-[70%]", "bg-brand-500/85"],
          ["w-[46%]", "bg-indigo-brand-500/60"],
          ["w-[86%]", "bg-brand-500/35"],
        ].map(([w, c], i) => (
          <div key={i} className="h-2 rounded-full bg-line-soft">
            <div className={`h-full rounded-full ${w} ${c}`} />
          </div>
        ))}
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-2 w-px bg-ink"
          animate={{ left: ["12%", "88%", "12%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/** Repurpose — one source asset fanning out into many formats. */
function SplitVisual() {
  return (
    <div className="absolute inset-0 p-5">
      <svg
        viewBox="0 0 240 170"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fva-src" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2b6bf3" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>

        {/* source */}
        <rect x="8" y="58" width="64" height="54" rx="12" fill="url(#fva-src)" />
        <path d="M32 74 L52 85 L32 96 Z" fill="#fff" opacity="0.95" />

        {/* fan-out wires */}
        {[22, 61, 100, 139].map((y, i) => (
          <path
            key={y}
            d={`M 76 85 C 108 85, 116 ${y + 14}, 148 ${y + 14}`}
            fill="none"
            stroke="#2b6bf3"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-flow"
            style={{ animationDelay: `${i * -1.1}s` }}
          />
        ))}

        {/* outputs */}
        {[
          [22, "#2b6bf3"],
          [61, "#4f46e5"],
          [100, "#2b6bf3"],
          [139, "#4f46e5"],
        ].map(([y, c], i) => (
          <g key={y}>
            <rect
              x="150"
              y={y}
              width="82"
              height="28"
              rx="9"
              fill="#fff"
              stroke="#ececf1"
            />
            <rect x="159" y={y + 9} width="10" height="10" rx="3" fill={c} opacity="0.85" />
            <rect x="176" y={y + 10} width="42" height="4" rx="2" fill="#dfe1ea" />
            <rect x="176" y={y + 17} width="26" height="4" rx="2" fill="#eceef4" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Distribute — content radiating to every platform. */
function NetworkVisual() {
  const platforms = [Instagram, Youtube, Linkedin, Music2];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="relative flex h-[150px] w-[150px] items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="absolute rounded-full ring-1 ring-brand-500/25"
            style={{ inset: `${i * 24}px` }}
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        <span className="brand-gradient relative flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[var(--shadow-brand)]">
          <Share2 size={18} strokeWidth={2.2} />
        </span>

        {platforms.map((P, i) => {
          const angle = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
          const r = 68;
          return (
            <motion.span
              key={i}
              className="absolute flex h-9 w-9 items-center justify-center rounded-xl bg-surface text-ink-muted shadow-[var(--shadow-soft)] hairline"
              style={{
                left: `calc(50% + ${Math.cos(angle) * r}px - 18px)`,
                top: `calc(50% + ${Math.sin(angle) * r}px - 18px)`,
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              <P size={16} strokeWidth={2} />
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

/** Automate — connected workflow nodes with a pulse travelling through. */
function NodesVisual() {
  const nodes = [
    { x: 40, y: 40 },
    { x: 120, y: 26 },
    { x: 120, y: 88 },
    { x: 200, y: 58 },
    { x: 120, y: 140 },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ];

  return (
    <div className="absolute inset-0 p-5">
      <svg viewBox="0 0 240 170" className="h-full w-full" aria-hidden="true">
        {edges.map(([a, b], i) => (
          <path
            key={i}
            d={`M ${nodes[a].x} ${nodes[a].y} C ${(nodes[a].x + nodes[b].x) / 2} ${nodes[a].y}, ${
              (nodes[a].x + nodes[b].x) / 2
            } ${nodes[b].y}, ${nodes[b].x} ${nodes[b].y}`}
            fill="none"
            stroke="#4f46e5"
            strokeOpacity="0.38"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-flow"
            style={{ animationDelay: `${i * -0.8}s` }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="15" fill="#fff" stroke="#ececf1" />
            <circle
              cx={n.x}
              cy={n.y}
              r="6"
              fill={i % 2 === 0 ? "#2b6bf3" : "#4f46e5"}
              opacity="0.9"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
