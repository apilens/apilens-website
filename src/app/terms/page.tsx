import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 90%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 90%, transparent 100%)",
        }}
      />

      {/* Content */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          maxWidth: "720px",
          width: "100%",
          margin: "0 auto",
          padding: "4rem 2rem",
          fontFamily: "var(--font-body), system-ui, sans-serif",
          color: "#cccccc",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#666666",
            fontSize: "0.875rem",
            textDecoration: "none",
            marginBottom: "2rem",
          }}
        >
          <svg style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Home
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "1.5rem",
            letterSpacing: "-0.04em",
          }}
        >
          Terms and Conditions
        </h1>

        <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
          Welcome to ApiLens! These terms and conditions outline the rules and regulations for the use of ApiLens's Website.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Agreement to Terms
        </h2>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use ApiLens
          if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Intellectual Property Rights
        </h2>
        <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
          Other than the content you own, under these Terms, ApiLens and/or its licensors own all the intellectual
          property rights and materials contained in this Website.
        </p>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
          You are granted a limited license only for purposes of viewing the material contained on this Website.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Restrictions
        </h2>
        <p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>
          You are specifically restricted from all of the following:
        </p>
        <ul
          style={{
            marginBottom: "1.5rem",
            paddingLeft: "1.25rem",
            lineHeight: 1.8,
            listStyleType: "disc",
          }}
        >
          <li>Publishing any Website material in any other media;</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>Publicly performing and/or showing any Website material;</li>
          <li>Using this Website in any way that is or may be damaging to this Website;</li>
          <li>Using this Website in any way that impacts user access to this Website;</li>
          <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
          <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
          <li>Using this Website to engage in any advertising or marketing.</li>
        </ul>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          No Warranties
        </h2>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
          This Website is provided "as is," with all faults, and ApiLens express no representations or warranties, of
          any kind related to this Website or the materials contained on this Website.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Governing Law & Jurisdiction
        </h2>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.7 }}>
          These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State/Country],
          and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State/Country]
          for the resolution of any disputes.
        </p>

        <p style={{ fontSize: "0.8rem", color: "#555555", marginTop: "3rem" }}>
          Last updated: February 8, 2026
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            color: "#444444",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Open Source · Built for Developers
        </p>
      </footer>
    </div>
  );
}