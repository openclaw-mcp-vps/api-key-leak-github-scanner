export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Scan GitHub Repos for<br />
          <span className="text-[#58a6ff]">Accidentally Committed API Keys</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time GitHub webhook scanning using regex patterns and entropy analysis.
          Instant Slack alerts with commit details and remediation steps the moment a secret leaks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Protecting Repos — $39/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold">50+</div>
            <div className="text-[#8b949e] mt-1">Secret Patterns</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold">&lt;5s</div>
            <div className="text-[#8b949e] mt-1">Alert Latency</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold">∞</div>
            <div className="text-[#8b949e] mt-1">Repos Monitored</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited GitHub repositories",
              "Real-time webhook scanning",
              "50+ secret detection patterns",
              "Shannon entropy analysis",
              "Instant Slack notifications",
              "Commit details & remediation tips",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-bold text-white mb-2">How does the scanning work?</h3>
            <p className="text-[#8b949e] text-sm">We register a GitHub webhook on your repos. Every push triggers our scanner which runs 50+ regex patterns and Shannon entropy checks against each diff to detect API keys, tokens, and secrets.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-bold text-white mb-2">Which secret types are detected?</h3>
            <p className="text-[#8b949e] text-sm">AWS keys, GitHub tokens, Stripe keys, Twilio, SendGrid, Google API keys, private keys, JWT secrets, database URLs, and dozens more — plus high-entropy strings that look like secrets.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-bold text-white mb-2">What happens when a secret is found?</h3>
            <p className="text-[#8b949e] text-sm">You get an instant Slack alert with the repo name, commit SHA, file path, matched pattern type, and step-by-step remediation instructions to revoke and rotate the exposed credential.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} API Key Leak Scanner. All rights reserved.
      </footer>
    </main>
  );
}
