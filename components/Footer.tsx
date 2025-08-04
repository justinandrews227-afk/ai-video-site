export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} AI Video Studio</p>
        <p>Made with ❤️ — Deployed on Vercel</p>
      </div>
    </footer>
  );
}
