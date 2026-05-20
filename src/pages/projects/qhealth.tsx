import { useEffect, useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
import { Brain, Settings, Zap, TrendingUp, CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Avigail Choi",
    role: "CEO",
    focus: "AI & Data Science",
    img: "/projects/qhealth-team/avigail-choi.jpeg",
  },
  {
    name: "Richard Weiss",
    role: "CTO – NUS",
    focus: "AI, Reinforcement Learning & Graph Neural Networks",
    img: "/projects/qhealth-team/richard-weiss.png",
  },
];

const advisors = [
  {
    name: "Ying Chen",
    role: "Advisor – NUS",
    focus: "AI Forecasting & Quantum Computing",
    img: "/projects/qhealth-team/ying-chen.png",
  },
  {
    name: "Thorsten Koch",
    role: "Advisor – TU Berlin & Zuse Institute Berlin",
    focus: "Software & Industrial Optimization & Quantum Optimization",
    img: "/projects/qhealth-team/thorsten-koch.png",
  },
  {
    name: "Glen Liau",
    role: "Advisor – NUH / AH",
    focus: "Deputy Chief Medical Informatics Officer, Joint Replacement Surgery",
    img: "/projects/qhealth-team/glen-liau.png",
  },
  {
    name: "Patrick Chia",
    role: "Advisor – NUH",
    focus: "Medical Data Analytics & Hospital System",
    img: "/projects/qhealth-team/patrick-chia.png",
  },
];

const stats = [
  { value: "> 80%", label: "OT Utilization (from 50–60% baseline)" },
  { value: "$5–20M", label: "Annual Revenue Increase per Hospital" },
  { value: "> $30K", label: "Daily Revenue Increase per OT" },
  { value: "3 OTs", label: "Equivalent Capacity Added (no construction)" },
];

const features = [
  {
    title: "Quantum × AI Forecasting",
    description: [
      "Quantum kernels for enhanced accuracy",
      "Surgery duration & emergency prediction",
    ],
    icon: Brain,
  },
  {
    title: "Multi-Objective Optimization",
    description: [
      "Quantum computing → Pareto frontier solutions",
      "Multi-period, multi-constraint scheduling",
    ],
    icon: Settings,
  },
  {
    title: "Real-Time Re-Optimization",
    description: [
      "Intra-day dynamic rescheduling",
      "System-wide OT, staff & resource coordination",
    ],
    icon: Zap,
  },
  {
    title: "Extreme Scenario Modelling",
    description: [
      "Rare events & emergency case handling",
      "GPU + QPU hybrid architecture",
    ],
    icon: TrendingUp,
  },
];

const QHealth = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageWrapRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(800);
  const [scale, setScale] = useState(1);
  const lastPinchDist = useRef<number | null>(null);

  // 自适应容器宽度
  const measureWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, [measureWidth]);

  // 捏合缩放 touch 处理
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 2) return;
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (lastPinchDist.current !== null) {
      const ratio = dist / lastPinchDist.current;
      setScale(s => Math.min(4, Math.max(0.5, s * ratio)));
    }
    lastPinchDist.current = dist;
  }, []);

  const handleTouchEnd = useCallback(() => {
    lastPinchDist.current = null;
  }, []);

  // Prevent Ctrl+S / Ctrl+P on this page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["s", "p", "u"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative text-white text-center py-40 px-8 bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <img
            src="/projects/q-health-logo.png"
            alt="Q-Health Logo"
            className="mx-auto mb-6 h-28 md:h-36 w-auto drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Quantum &times; AI for Healthcare Operations
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-4xl mx-auto leading-relaxed text-slate-200">
            Maximizing Use of Hospital Operating Theatres through Advanced Prediction and Scheduling
          </p>
          <p className="text-emerald-300 font-semibold text-base">
            We save costs, enhance efficiency, and increase wellbeing —<br className="hidden md:block" />
            without sacrificing responsiveness to emergencies.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-slate-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">
              The Problem
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Capacity is not the hospital bottleneck — it's the ability to make decisions under uncertainty.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-teal-600 leading-none">01</div>
                <h3 className="text-xl font-extrabold text-slate-800">Wasted Resources</h3>
              </div>
              <p className="leading-relaxed text-slate-600 text-sm">
                30% of Operating Theatres remain idle. Only 50–60% of active OTs are effectively utilized due to conservative buffering for safety.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-emerald-600 leading-none">02</div>
                <h3 className="text-xl font-extrabold text-slate-800">Unpredictability</h3>
              </div>
              <p className="leading-relaxed text-slate-600 text-sm">
                Surgical durations are stochastic and emergency cases are unpredictable. Static scheduling and manual coordination cannot adapt in real time.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-cyan-600 leading-none">03</div>
                <h3 className="text-xl font-extrabold text-slate-800">Patient & Staff Burden</h3>
              </div>
              <p className="leading-relaxed text-slate-600 text-sm">
                Patients wait 6–8 months for surgery. Staff face 2–3 hours of daily overtime. Classical algorithms cannot solve this at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / Features */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
              Our Approach
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Quantum-Augmented AI Real-Time Decision Engine: Static Schedules → Real-Time Orchestration under Uncertainty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border border-slate-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-8 h-8 text-teal-600 flex-shrink-0" />
                    <h4 className="font-bold text-slate-800 text-base">{feature.title}</h4>
                  </div>
                  <div className="text-slate-600 leading-relaxed text-left space-y-2">
                    {feature.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Validated Impact */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">
            Validated Impact
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Real hospital data: 19 OTs over two years — equivalent to adding operating rooms without building new ones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const colors = ["text-teal-600", "text-emerald-600", "text-cyan-600", "text-green-600"];
              return (
                <Card
                  key={stat.label}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  <div className={`text-3xl md:text-4xl font-black mb-3 ${colors[index]}`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Target Outcomes */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { pct: "+30%", label: "Throughput", detail: "Moving from 50–60% to >80% utilization, adding capacity of 3 new OTs without construction." },
              { pct: "−20%", label: "Patient Wait Time", detail: "Addressing the current bottleneck where patients wait 6–8 months for surgery." },
              { pct: "−30%", label: "Staff Overtime", detail: "Reducing the current 2–3 hours of daily overtime through better intra-day re-optimization." },
            ].map((item) => (
              <Card key={item.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow">
                <div className="text-3xl font-black text-teal-600 mb-1">{item.pct}</div>
                <div className="font-bold text-slate-800 mb-2">{item.label}</div>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">Our Team</h2>
          </div>

          <h3 className="text-xl font-bold text-center mb-6 text-slate-700">Core Team</h3>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {teamMembers.map((m) => (
              <Card key={m.name} className="py-5 px-6 shadow hover:shadow-md transition-shadow w-64 bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-base mb-3">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-bold text-base mb-0.5">{m.name}</p>
                <p className="text-teal-600 font-semibold text-sm mb-1">{m.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{m.focus}</p>
              </Card>
            ))}
          </div>

          <h3 className="text-xl font-bold text-center mb-6 text-slate-700">Advisors</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {advisors.map((a) => (
              <Card key={a.name} className="py-5 px-6 shadow hover:shadow-md transition-shadow w-64 bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-base mb-3">
                  {a.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-bold text-base mb-0.5">{a.name}</p>
                <p className="text-slate-500 text-sm mb-1">{a.role}</p>
                <p className="text-teal-600 font-semibold text-xs leading-relaxed">{a.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="bg-slate-900 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Product Demo</h2>
            <p className="text-slate-400">See Q-Health in action</p>
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onContextMenu={(e) => e.preventDefault()}
          >
            <video
              ref={videoRef}
              controls
              controlsList="nodownload nofullscreen"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="w-full max-h-[560px] bg-black"
              playsInline
            >
              <source src="https://github.com/Hanmingh/Chen/releases/download/v1.0-media/q-health-demo.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </section>

      {/* Investor Deck */}
      <section className="bg-slate-50 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">Investor Deck</h2>
            <p className="text-slate-500">Q-Health pitch deck — view only</p>
          </div>

          <div
            ref={containerRef}
            className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* 控制栏：翻页 + 缩放 */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100 border-b border-slate-200 select-none gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                  disabled={pageNumber <= 1}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-sm font-semibold disabled:opacity-40 hover:bg-slate-50 active:scale-95 transition-all"
                >← Prev</button>
                <span className="text-sm text-slate-600 font-medium whitespace-nowrap">
                  {pageNumber} / {numPages || "—"}
                </span>
                <button
                  onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                  disabled={pageNumber >= numPages}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-sm font-semibold disabled:opacity-40 hover:bg-slate-50 active:scale-95 transition-all"
                >Next →</button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setScale(s => Math.max(0.5, +(s - 0.25).toFixed(2)))}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-lg font-bold hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center"
                >−</button>
                <span className="text-xs text-slate-500 w-10 text-center">{Math.round(scale * 100)}%</span>
                <button
                  onClick={() => setScale(s => Math.min(4, +(s + 0.25).toFixed(2)))}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-lg font-bold hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center"
                >+</button>
                <button
                  onClick={() => setScale(1)}
                  className="px-2 py-1 rounded-lg bg-white border border-slate-300 text-xs text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
                >Reset</button>
              </div>
            </div>

            {/* PDF canvas 渲染区 — 双指捏合缩放 + 单指滑动 */}
            <div
              className="overflow-auto bg-slate-200 flex justify-center py-4"
              style={{ WebkitOverflowScrolling: "touch", minHeight: "500px", maxHeight: "75vh" }}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={pageWrapRef}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                  transition: "transform 0.15s ease",
                }}
              >
                <Document
                  file="/projects/q-health-deck.pdf"
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  loading={<div className="text-slate-400 py-20 px-8 text-center">Loading...</div>}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={containerWidth > 32 ? containerWidth - 32 : containerWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-3">
            This document is confidential and for viewing purposes only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-8">
          <p className="m-0">
            © 2025 Q-Health Technologies. All rights reserved. |{" "}
            <span className="text-teal-400">Quantum × AI for Healthcare Operations</span>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default QHealth;
