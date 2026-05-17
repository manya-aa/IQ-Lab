import { Link } from "wouter";
import { Dna, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050d1a] border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer group mb-6">
                            <Dna className="w-8 h-8 text-[#00d4ff] group-hover:rotate-180 transition-transform duration-700" />
                            <span className="font-display font-bold text-2xl tracking-tight text-white">IQ<span className="text-[#00d4ff]">Lab</span></span>
                        </div>
                    </Link>
                    <p className="max-w-md text-sm leading-relaxed mb-6 text-gray-400">
                        Decoding life at the molecular level. A premier research laboratory at Gautam Buddha University dedicated to advancing biotechnology and genetic engineering for human benefit.
                    </p>
                    <div className="flex gap-3">
                        <a href="mailto:imteyazqamar@gbu.ac.in" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] text-gray-400 transition-colors">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-display font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {[["Home", "/"], ["Research", "/research"], ["Team", "/team"], ["Publications", "/publications"], ["Contact", "/contact"]].map(([label, href]) => (
                            <li key={href}>
                                <Link href={href}>
                                    <span className="hover:text-white cursor-pointer transition-colors">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-display font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h3>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex gap-3"><MapPin className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" /><span>Dept. of Biotechnology ,  Gautam Buddha University, Greater Noida, Gautam Buddh Nagar, Uttar Pradesh, India - 201312</span></li>
                        <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#00d4ff] shrink-0" /><span>imteyazqamar@gbu.ac.in</span></li>
                        <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#00d4ff] shrink-0" /><span>(+91) 120-234-4820</span></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Dr. Imteyaz Qamar BioTech Research Laboratory, GBU. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed for Scientific Excellence.</p>
            </div>
        </footer>
    );
}
