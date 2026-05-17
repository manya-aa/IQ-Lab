import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050d1a] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0066ff]/10 via-[#050d1a]/90 to-[#050d1a]" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, #00d4ff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
    );
}
