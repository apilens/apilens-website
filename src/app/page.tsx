import Link from "next/link";

export default function Home() {
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

                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
                    backgroundSize: "4rem 4rem",

                    filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))",

                    maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, #000 90%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, #000 90%, transparent 100%)",
                }}
            />


            {/* Main Content */}
            <main
                style={{
                    position: "relative",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                }}
            >
                {/* Logo */}
                <div style={{marginBottom: "1rem"}}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.png"
                        alt="ApiLens"
                        style={{
                            width: "88px",
                            height: "88px",
                            borderRadius: "20px",
                            filter: "brightness(1.3)",
                        }}
                    />
                </div>

                {/* Brand Name */}
                <h1
                    style={{
                        fontFamily: "var(--font-display), system-ui, sans-serif",
                        fontSize: "5rem",
                        fontWeight: 600,
                        color: "#ffffff",
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.06em",
                        lineHeight: 1,
                    }}
                >
                    apiLens
                </h1>

                {/* Tagline */}
                <p
                    style={{
                        fontFamily: "var(--font-body), system-ui, sans-serif",
                        fontSize: "1.125rem",
                        color: "#666666",
                        textAlign: "center",
                        marginBottom: "3rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                    }}
                >Full visibility into api performance, errors, and latency.
                    {/*api monitoring & analytics*/}
                </p>

                {/* Coming Soon */}
                <div
                    style={{
                        marginBottom: "2.5rem",
                        padding: "0.5rem 1.25rem",
                        border: "1px solid #222222",
                        borderRadius: "100px",
                        background: "rgba(255,255,255,0.03)",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-display), system-ui, sans-serif",
                            fontSize: "0.6875rem",
                            color: "#777777",
                            textTransform: "uppercase",
                            letterSpacing: "0.25em",
                            fontWeight: 500,
                        }}
                    >
                        Coming Soon
                    </p>
                </div>

                {/* Links */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <Link
                        href="https://github.com/apilens/apilens"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#888888",
                            fontSize: "0.875rem",
                            textDecoration: "none",
                            fontWeight: 500,
                        }}
                    >
                        <svg
                            style={{width: "18px", height: "18px"}}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        GitHub
                    </Link>


                    <Link
                        href="mailto:hello@apilens.ai"
                        style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#888888",
                            fontSize: "0.875rem",
                            textDecoration: "none",
                            fontWeight: 500,
                        }}
                    >
                        <svg
                            style={{width: "18px", height: "18px"}}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                        hello@apilens.ai
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer
                style={{
                    position: "relative",
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
