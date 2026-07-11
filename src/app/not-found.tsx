import Navbar from "@/components/Navbar";
import { LiquidButton } from "@/components/ui/LiquidButton";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center text-slate-900 dark:text-white px-6 text-center pt-24">
                <p className="text-xs font-black tracking-[0.5em] uppercase text-neonPurple mb-4">404</p>
                <h1 className="text-4xl md:text-6xl font-black mb-4">Page not found</h1>
                <p className="text-slate-500 dark:text-white/50 mb-10 max-w-md">
                    The page you&apos;re looking for doesn&apos;t exist or may have moved.
                </p>
                <LiquidButton href="/" color="purple" className="px-8 py-4">
                    Back to Home
                </LiquidButton>
            </main>
        </>
    );
}