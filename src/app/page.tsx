import Link from "next/link";
import type { ReactNode } from "react";

const LOGIN_URL = "https://app.apilens.ai/auth/login";
const SIGNUP_URL = "https://app.apilens.ai/auth/signup";
const DOCS_URL = "https://docs.apilens.ai";
const GITHUB_URL = "https://github.com/apilens/apilens";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface PricingTier {
  name: string;
  desc: string;
  price: string;
  period: string | null;
  badge: string | null;
  featured: boolean;
  cta: { label: string; href: string };
  features: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    title: "Real-time Request Monitoring",
    desc: "Capture every API call the instant it happens — method, path, status code, and precise latency in one live feed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Error Detection & Alerts",
    desc: "Get notified the moment any endpoint returns 4xx or 5xx responses. Catch production issues before your users file tickets.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Latency Analytics",
    desc: "Identify bottlenecks with P50, P95, and P99 percentile breakdowns. Know exactly which endpoints are slowing you down.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Full Request & Response Logs",
    desc: "Store complete request bodies, response payloads, and headers. Debug any issue with full context — no guessing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Performance Dashboards",
    desc: "Visualize request volume, error rates, and latency trends over time. Share live dashboards with your team.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    desc: "Share live dashboards with your team, manage role-based access, and keep everyone aligned on API health in one place.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const PRICING: PricingTier[] = [
  {
    name: "Starter",
    desc: "Free forever, no credit card required",
    price: "$0",
    period: "/ forever",
    badge: null,
    featured: false,
    cta: { label: "Get started free", href: SIGNUP_URL },
    features: [
      "Up to 5 APIs monitored",
      "7-day log retention",
      "Request & response logging",
      "1,000 requests / day",
      "Email alerts",
      "Community support",
    ],
  },
  {
    name: "Cloud",
    desc: "Managed, hosted by APILens",
    price: "$29",
    period: "/ month",
    badge: "Most Popular",
    featured: true,
    cta: { label: "Start free trial", href: SIGNUP_URL },
    features: [
      "Everything in Starter",
      "Managed cloud hosting",
      "30-day log retention",
      "Team collaboration",
      "Email & Slack alerts",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    desc: "Custom for large teams",
    price: "Custom",
    period: null,
    badge: null,
    featured: false,
    cta: { label: "Contact us", href: "mailto:hello@apilens.ai" },
    features: [
      "Everything in Cloud",
      "Unlimited log retention",
      "SSO & SAML login",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Custom integrations",
    ],
  },
];

const REQUEST_LOG = [
  { method: "GET",    path: "/api/v1/users",              status: 200, latency: 23,  time: "just now", ok: true },
  { method: "POST",   path: "/api/v1/orders",             status: 201, latency: 67,  time: "2s ago",   ok: true },
  { method: "GET",    path: "/api/v1/products?limit=20",  status: 200, latency: 134, time: "5s ago",   ok: true },
  { method: "DELETE", path: "/api/v1/sessions/a8f3c1",    status: 204, latency: 18,  time: "8s ago",   ok: true },
  { method: "GET",    path: "/api/v1/analytics/summary",  status: 500, latency: 892, time: "12s ago",  ok: false },
  { method: "PUT",    path: "/api/v1/users/profile",      status: 422, latency: 45,  time: "18s ago",  ok: null },
];

// ─── Color shortcuts ──────────────────────────────────────────────────────────

const METHOD_COLOR: Record<string, string> = {
  GET: "#818cf8", POST: "#34d399", DELETE: "#f87171", PUT: "#fbbf24",
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        overflowX: "hidden",
        fontFamily: "var(--font-body), system-ui, sans-serif",
        color: "#fff",
      }}
    >
      {/* ── Background grid ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* ── Purple glow orb ── */}
      <div
        style={{
          position: "fixed",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── All content above background ── */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ════════════════════════════════════════
            ANNOUNCEMENT BAR
        ════════════════════════════════════════ */}
        <div
          style={{
            width: "100%",
            background: "rgba(99,102,241,0.1)",
            borderBottom: "1px solid rgba(99,102,241,0.2)",
            padding: "0.5rem 1rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#a5b4fc" }}>
            APILens is now in public beta —{" "}
            <Link
              href={SIGNUP_URL}
              style={{
                color: "#818cf8",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Start monitoring for free →
            </Link>
          </p>
        </div>

        {/* ════════════════════════════════════════
            NAVBAR
        ════════════════════════════════════════ */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1.5rem",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <img
                src="/logo.png"
                alt="apiLens"
                style={{ width: "28px", height: "28px", borderRadius: "6px" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                }}
              >
                apiLens
              </span>
            </Link>

            {/* Center nav links */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.75rem",
              }}
            >
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Docs", href: DOCS_URL },
                { label: "GitHub", href: GITHUB_URL },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "#888",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Link
                href={LOGIN_URL}
                style={{
                  color: "#888",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                }}
              >
                Log in
              </Link>
              <Link
                href={SIGNUP_URL}
                style={{
                  background: "#fff",
                  color: "#000",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "0.4rem 0.875rem",
                  borderRadius: "6px",
                }}
              >
                Sign up free
              </Link>
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "6rem 1.5rem 4rem",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "100px",
              padding: "0.3rem 0.875rem",
              marginBottom: "2rem",
              background: "rgba(99,102,241,0.08)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#6366f1",
                display: "inline-block",
                boxShadow: "0 0 6px #6366f1",
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a5b4fc",
                fontWeight: 500,
              }}
            >
              Developer-First · Public Beta
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1.25rem",
              maxWidth: "800px",
              margin: "0 auto 1.25rem",
            }}
          >
            Full Visibility Into
            <br />
            Your API Health
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "1.125rem",
              color: "#777",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}
          >
            Monitor API performance, catch errors instantly, and analyze latency — all in one powerful dashboard built for developers.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
            }}
          >
            <Link
              href={SIGNUP_URL}
              style={{
                background: "#fff",
                color: "#000",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Start Monitoring Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={LOGIN_URL}
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#ccc",
                fontWeight: 500,
                fontSize: "0.9375rem",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              View Dashboard
            </Link>
          </div>

          {/* ── Dashboard Preview Mockup ── */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              overflow: "hidden",
              background: "#0a0a0a",
              boxShadow:
                "0 0 90px rgba(99,102,241,0.15), 0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                padding: "0.75rem 1rem",
                background: "#111",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  marginLeft: "0.75rem",
                  fontSize: "0.75rem",
                  color: "#444",
                  fontFamily: "var(--font-display)",
                }}
              >
                apiLens — API Monitor
              </span>
              <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                    background: "rgba(34,197,94,0.1)",
                    color: "#22c55e",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  ● Live
                </span>
              </div>
            </div>

            <div style={{ padding: "1.25rem" }}>
              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                {[
                  { label: "Total Requests", value: "1.24M",   trend: "+12% today",  color: "#818cf8" },
                  { label: "Avg Latency",    value: "48ms",    trend: "−8ms vs yesterday", color: "#34d399" },
                  { label: "Error Rate",     value: "0.12%",   trend: "−0.04% today", color: "#34d399" },
                  { label: "Uptime",         value: "99.98%",  trend: "Last 30 days", color: "#a5b4fc" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: "0.875rem",
                      background: "#111",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: "#555",
                        marginBottom: "0.25rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        fontWeight: 600,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: "1.375rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: s.color,
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: "#34d399",
                        marginTop: "0.25rem",
                      }}
                    >
                      {s.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Request log table */}
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "0.625rem 1rem",
                    background: "#111",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-display)",
                      color: "#777",
                      fontWeight: 600,
                    }}
                  >
                    Recent Requests
                  </span>
                  <span style={{ fontSize: "0.625rem", color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Auto-refresh
                  </span>
                </div>
                {REQUEST_LOG.map((req, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "56px 1fr 48px 60px 72px",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      gap: "1rem",
                      borderBottom:
                        i < REQUEST_LOG.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : undefined,
                      background:
                        req.ok === false
                          ? "rgba(239,68,68,0.04)"
                          : req.ok === null
                          ? "rgba(234,179,8,0.03)"
                          : "transparent",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: METHOD_COLOR[req.method] ?? "#888",
                      }}
                    >
                      {req.method}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#777",
                        fontFamily: "monospace",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {req.path}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        color:
                          req.status >= 500
                            ? "#f87171"
                            : req.status >= 400
                            ? "#fbbf24"
                            : "#34d399",
                      }}
                    >
                      {req.status}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        color: req.latency > 500 ? "#f87171" : req.latency > 200 ? "#fbbf24" : "#555",
                      }}
                    >
                      {req.latency}ms
                    </span>
                    <span style={{ fontSize: "0.6875rem", color: "#333" }}>
                      {req.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SOCIAL PROOF STATS
        ════════════════════════════════════════ */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "2rem 1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "1M+",    label: "API requests tracked" },
              { value: "< 1ms",  label: "Instrumentation overhead" },
              { value: "99.9%",  label: "Dashboard uptime" },
              { value: "Free",   label: "No credit card needed" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#555", marginTop: "0.2rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            FEATURES
        ════════════════════════════════════════ */}
        <section
          id="features"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "6rem 1.5rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6366f1",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              Features
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: "0.75rem",
              }}
            >
              Everything you need to own your API reliability
            </h2>
            <p style={{ color: "#555", fontSize: "1rem", maxWidth: "460px", margin: "0 auto" }}>
              Built for developers who care about fast debugging, performance, and zero downtime.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  padding: "1.75rem",
                  background: "#0a0a0a",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: "#818cf8",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#e5e7eb",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════ */}
        <section
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.01)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "6rem 1.5rem",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6366f1",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                Quick Setup
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                }}
              >
                Up and running in 3 steps
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  step: "01",
                  title: "Install the SDK",
                  desc: "Add the APILens package to your Node.js, Python, or Go project with a single npm/pip/go install command.",
                },
                {
                  step: "02",
                  title: "Add one middleware",
                  desc: "Drop in one line of middleware to your Express, Fastify, Django, FastAPI, or Go HTTP server.",
                },
                {
                  step: "03",
                  title: "See everything live",
                  desc: "Open the APILens dashboard and watch your requests, errors, and latency appear in real-time — instantly.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "rgba(99,102,241,0.25)",
                      letterSpacing: "-0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#e5e7eb",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CODE INTEGRATION
        ════════════════════════════════════════ */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "6rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left copy */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6366f1",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                Developer First
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Add one line.
                <br />
                See everything.
              </h2>
              <p
                style={{
                  color: "#555",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                Integrate APILens into your Python app in under 60 seconds. One pip install, one middleware line — no YAML, no config files.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Works with FastAPI, Django, Flask, Express, Go, and more",
                  "Automatic request / response capture",
                  "Zero impact on your API performance",
                  "Structured logs — JSON ready for any log sink",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#22c55e"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ fontSize: "0.875rem", color: "#666" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right code block */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  background: "#111",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#444", fontFamily: "var(--font-display)" }}>
                  Python — FastAPI
                </span>
                <div style={{ marginLeft: "auto" }}>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "4px",
                      background: "rgba(52,211,153,0.1)",
                      color: "#34d399",
                      border: "1px solid rgba(52,211,153,0.2)",
                    }}
                  >
                    Python
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  fontFamily: "'Fira Code', 'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.8125rem",
                  lineHeight: 1.8,
                }}
              >
                <div style={{ color: "#444" }}># Install</div>
                <div>
                  <span style={{ color: "#34d399" }}>pip</span>
                  <span style={{ color: "#ccc" }}> install </span>
                  <span style={{ color: "#86efac" }}>apilens</span>
                </div>
                <div style={{ height: "0.75rem" }} />
                <div style={{ color: "#444" }}># Add to your FastAPI app</div>
                <div>
                  <span style={{ color: "#c084fc" }}>from</span>
                  <span style={{ color: "#ccc" }}> fastapi </span>
                  <span style={{ color: "#c084fc" }}>import</span>
                  <span style={{ color: "#ccc" }}> FastAPI</span>
                </div>
                <div>
                  <span style={{ color: "#c084fc" }}>from</span>
                  <span style={{ color: "#ccc" }}> apilens </span>
                  <span style={{ color: "#c084fc" }}>import</span>
                  <span style={{ color: "#6ee7b7" }}> APILensMiddleware</span>
                </div>
                <div style={{ height: "0.5rem" }} />
                <div>
                  <span style={{ color: "#6ee7b7" }}>app</span>
                  <span style={{ color: "#ccc" }}> = </span>
                  <span style={{ color: "#93c5fd" }}>FastAPI</span>
                  <span style={{ color: "#ccc" }}>()</span>
                </div>
                <div style={{ height: "0.5rem" }} />
                <div>
                  <span style={{ color: "#6ee7b7" }}>app</span>
                  <span style={{ color: "#ccc" }}>.</span>
                  <span style={{ color: "#93c5fd" }}>add_middleware</span>
                  <span style={{ color: "#ccc" }}>(</span>
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <span style={{ color: "#6ee7b7" }}>APILensMiddleware</span>
                  <span style={{ color: "#ccc" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <span style={{ color: "#fbbf24" }}>api_key</span>
                  <span style={{ color: "#ccc" }}>=</span>
                  <span style={{ color: "#86efac" }}>{'"your-api-key"'}</span>
                </div>
                <div>
                  <span style={{ color: "#ccc" }}>)</span>
                </div>
                <div style={{ height: "0.75rem" }} />
                <div style={{ color: "#34d399" }}>{"✓ Dashboard is live — that's it."}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PRICING
        ════════════════════════════════════════ */}
        <section
          id="pricing"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "6rem 1.5rem",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6366f1",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                Pricing
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                Start free, scale as you grow
              </h2>
              <p style={{ color: "#555", fontSize: "1rem" }}>
                No credit card required. Cancel anytime.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
                maxWidth: "960px",
                margin: "0 auto",
              }}
            >
              {PRICING.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    padding: "2rem",
                    borderRadius: "14px",
                    border: tier.featured
                      ? "1px solid rgba(99,102,241,0.45)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: tier.featured ? "rgba(99,102,241,0.07)" : "#0a0a0a",
                    position: "relative",
                  }}
                >
                  {tier.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-13px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#6366f1",
                        color: "#fff",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.875rem",
                        borderRadius: "100px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#555", marginBottom: "1.5rem" }}>
                    {tier.desc}
                  </p>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.25rem",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span style={{ color: "#444", fontSize: "0.875rem", marginLeft: "0.25rem" }}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <Link
                    href={tier.cta.href}
                    style={{
                      display: "block",
                      textAlign: "center",
                      textDecoration: "none",
                      padding: "0.7rem",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      background: tier.featured ? "#6366f1" : "rgba(255,255,255,0.05)",
                      color: tier.featured ? "#fff" : "#888",
                      border: tier.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {tier.cta.label}
                  </Link>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {tier.features.map((f) => (
                      <div
                        key={f}
                        style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ flexShrink: 0, marginTop: "3px" }}
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke={tier.featured ? "#a5b4fc" : "#444"}
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          style={{
                            fontSize: "0.8125rem",
                            color: tier.featured ? "#a5b4fc" : "#555",
                            lineHeight: 1.5,
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1.5rem 6rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "4.5rem 2rem",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.09) 0%, rgba(0,0,0,0) 60%)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: "0.875rem",
              }}
            >
              Stop flying blind on your APIs.
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "1rem",
                marginBottom: "2rem",
                maxWidth: "460px",
                margin: "0 auto 2rem",
              }}
            >
              Join developers who use APILens to keep their APIs fast, reliable, and error-free.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href={SIGNUP_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#fff",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  padding: "0.875rem 2rem",
                  borderRadius: "8px",
                }}
              >
                Get started free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={DOCS_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#888",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Read the docs
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FOOTER
        ════════════════════════════════════════ */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "2.5rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.375rem",
                }}
              >
                <img
                  src="/logo.png"
                  alt="apiLens"
                  style={{ width: "22px", height: "22px", borderRadius: "4px" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  apiLens
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#333" }}>
                Built for Developers · APILens © 2026
              </p>
            </div>

            {/* Links */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {[
                { label: "GitHub", href: GITHUB_URL },
                { label: "Docs", href: DOCS_URL },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "hello@apilens.ai", href: "mailto:hello@apilens.ai" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#444", fontSize: "0.8125rem", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
