export const metadata = { title: "Contact — AI Video Studio" };

export default function ContactPage() {
  return (
    <section className="container py-16 max-w-xl">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <form action="https://formspree.io/f/xbjvjqko" method="POST" className="space-y-4">
        <input name="name" placeholder="Your name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3" required />
        <input name="email" placeholder="Email" type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3" required />
        <textarea name="message" placeholder="Tell us about your project" rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3" required />
        <button className="px-5 py-3 rounded-xl bg-electric text-white font-medium">Send</button>
      </form>
      <p className="text-sm text-white/60 mt-4">By submitting this form you agree to be contacted about your inquiry.</p>
    </section>
  );
}
