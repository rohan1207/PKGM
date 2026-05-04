import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import NewHero from "@/components/home/NewHero.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import HomeSections from "@/components/home/HomeSections.jsx";

export default function Home() {
  return (
    <>
      {/* Phone / small screens — full site hidden until md (768px) */}
      <div
        className="fixed inset-0 z-[200] flex min-h-dvh flex-col items-center justify-center gap-5 bg-cream px-8 text-center md:hidden"
        role="dialog"
        aria-labelledby="mobile-soon-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 18%, rgba(255,193,7,0.12), transparent 42%), radial-gradient(circle at 78% 8%, rgba(66,165,245,0.14), transparent 38%), radial-gradient(circle at 50% 100%, rgba(76,175,80,0.1), transparent 48%)",
          }}
        />
        <div className="relative flex max-w-[20rem] flex-col items-center gap-4">
          <img src="/logo.png" alt="PGKM" className="h-16 w-auto object-contain" />
          <h1 id="mobile-soon-heading" className="text-[1.35rem] font-semibold leading-snug text-ink sm:text-[1.5rem]">
            Mobile website coming soon.
          </h1>
          <p className="text-sm leading-relaxed text-ink/[0.58]">
            Thanks for stopping by — the full PGKM site is optimised for larger screens right now.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral/90">Stay tuned</p>
        </div>
      </div>

      <div className="relative hidden min-h-screen bg-cream text-ink md:block">
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,193,7,0.08), transparent 45%), radial-gradient(circle at 80% 0%, rgba(66,165,245,0.1), transparent 40%), radial-gradient(circle at 50% 100%, rgba(76,175,80,0.07), transparent 45%)",
          }}
        />
        <Navbar />
        <main>
          <NewHero />
          <HeroSection />
          <HomeSections />
        </main>
        <Footer />
      </div>
    </>
  );
}
