import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Dna, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
    const [location] = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/research", label: "Research" },
        { href: "/team", label: "Team" },
        { href: "/publications", label: "Publications" },
        { href: "/contact", label: "Contact" },
    ];

    const scrolledBg = theme === "dark"
        ? "bg-[#050d1a]/90 backdrop-blur-md border-b border-[#00d4ff]/20 shadow-[0_4px_30px_rgba(0,212,255,0.1)]"
        : "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? scrolledBg : "bg-transparent"}`}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <Dna className="w-8 h-8 text-[#00d4ff] group-hover:rotate-180 transition-transform duration-700" />
                        <span className="font-display font-bold text-xl tracking-tight text-white dark:text-white">
              IQ<span className="text-[#00d4ff]">Lab</span>
            </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-8">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <div
                                    className={`relative font-medium text-sm tracking-wide cursor-pointer transition-colors hover:text-[#00d4ff] ${location === link.href ? "text-[#00d4ff]" : "text-gray-300"}`}
                                >
                                    {link.label}
                                    {location === link.href && (
                                        <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
                                    )}
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all duration-200 backdrop-blur-sm"
                        aria-label="Toggle theme"
                    >
                        <AnimatePresence mode="wait">
                            {theme === "dark" ? (
                                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <Sun className="w-[18px] h-[18px]" />
                                </motion.div>
                            ) : (
                                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <Moon className="w-[18px] h-[18px]" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                <div className="md:hidden flex items-center gap-3">
                    <motion.button onClick={toggleTheme} whileTap={{ scale: 0.9 }} className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 bg-white/5 text-gray-300">
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.button>
                    <button className="text-white hover:text-[#00d4ff]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 right-0 bg-[#050d1a]/95 backdrop-blur-xl border-b border-[#00d4ff]/20"
                    >
                        <nav className="flex flex-col py-4">
                            {links.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <div onClick={() => setMobileMenuOpen(false)} className={`px-6 py-3 font-medium text-lg cursor-pointer ${location === link.href ? "text-[#00d4ff] bg-[#00d4ff]/10" : "text-gray-300 hover:bg-white/5"}`}>
                                        {link.label}
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
