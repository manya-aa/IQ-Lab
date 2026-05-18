import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Microscope, Dna, Database, Beaker, FlaskConical, Brain, Quote } from "lucide-react";
import { Link } from "wouter";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.ceil(target / (1800 / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);
    return <div ref={ref}>{count}{suffix}</div>;
}

const domains = [
    // { icon: Dna, title: "Genetic Engineering", desc: "CRISPR-based gene therapy and precision genome editing for targeted disease treatment.", color: "#0066ff" },
    { icon: Microscope, title: "Molecular Biology", desc: "Decoding the molecular mechanisms that govern cellular function and gene expression.", color: "#00b8d9" },
    { icon: Database, title: "Bioinformatics", desc: "AI-powered protein folding analysis and large-scale computational genomics.", color: "#0052cc" },
    // { icon: FlaskConical, title: "Synthetic Biology", desc: "Engineering novel biological parts and systems for biotechnology applications.", color: "#00d4ff" },
    { icon: Brain, title: "Biomedical Research", desc: "Discovery of cancer biomarkers and next-generation therapeutic pipelines.", color: "#0066ff" },
    // { icon: Beaker, title: "Microbiology", desc: "Microbial biosensors for environmental monitoring and clinical diagnostics.", color: "#00b8d9" },
];

const news = [
    // { year: "20", title: "Best Paper Award \u2014 IEEE BioTech Conference, Singapore", type: "Award" },
    { year: "2008", title: "Annual Meeting of the Endocrine Society, San Fransisco", type: "Conference" },
    { year: "2016", title: "Outstanding Scientist Award, Chennai", type: "Award" },
    { year: "2019", title: "Young Faculty Award by Centre of Education", type: "Award" },
];

const labFacilities = [
    {
        img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop&q=80",
        title: "Molecular Biology Suite",
        desc: "State-of-the-art PCR and gel electrophoresis systems, CRISPR editing workstations, and next-gen sequencing infrastructure."
    },
    {
        img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&q=80",
        title: "Computational Research Hub",
        desc: "High-performance computing cluster with GPU nodes for AI-driven protein structure prediction and multi-omics analysis."
    },
    {
        img: "https://images.unsplash.com/photo-1530026405845-026793bc6c5b?w=800&h=600&fit=crop&q=80",
        title: "Cell Culture & Imaging Lab",
        desc: "BSL-2 certified cell culture facility with confocal microscopy, flow cytometry, and live-cell imaging capabilities."
    },
];

export default function Home() {
    return (
        <div className="relative">

            {/* HERO \u2014 always dark */}
            <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-[#00d4ff] text-sm font-medium mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                                Gautam Buddha University
                            </div>
                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold text-white mb-4 leading-[1.06]">
                                Dr. Imteyaz<br />Qamar
                            </h1>
                            <h2 className="text-xl md:text-2xl font-display font-light text-cyan-300 mb-6">
                                Assistant Professor
                            </h2>
                            <p className="text-lg text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
                                Engineering the biology of tomorrow through molecular innovation, scientific discovery, and transformative biotechnology research.                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/research">
                                    <button className="px-8 py-4 bg-[#00d4ff] text-[#050d1a] font-semibold rounded-xl hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                                        Explore Research <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                                <Link href="/publications">
                                    <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                                        View Publications
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                        {/*<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }} className="relative flex justify-center lg:justify-end">*/}
                        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }} className="relative flex justify-center lg:justify-end lg:-translate-x-8 lg:-translate-y-8">
                        {/*<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }} className="relative flex justify-center lg:justify-end">*/}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-80 h-80 rounded-full bg-[#00d4ff]/10 blur-3xl" />
                            </div>
                            <div className="relative">
                                <div className="w-80 h-[22rem] md:w-[22rem] md:h-[26rem] rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
                                {/*<div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">*/}
                                    <img src="/pics/IMG_2361.jpg" alt="Dr. Imteyaz Qamar" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 via-transparent to-transparent" />
                                </div>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -bottom-5 -left-8 bg-white dark:bg-[#0f2244] dark:border dark:border-white/10 rounded-2xl px-5 py-4 shadow-xl">
                                    <p className="text-[#0a1628] dark:text-white font-bold text-sm">24+ Years of Research</p>
                                    <p className="text-gray-400 dark:text-gray-400 text-xs mt-0.5">Indian Institute of Science, Bengaluru</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="absolute -top-4 -right-6 bg-[#0a1628] border border-[#00d4ff]/30 rounded-2xl px-5 py-4 shadow-xl">
                                    <p className="text-[#00d4ff] font-bold text-xl">53+</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Publications</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/60">
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </section>

            {/* STATS */}
            <section className="relative z-10 bg-white dark:bg-[#0f1e3d] py-20 shadow-[0_-4px_40px_rgba(0,0,0,0.3)] transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Publications", value: 53 },
                            { label: "Research Papers", value: 27 },
                            { label: "Students Guided", value: 49 },
                            { label: "Years of Experience", value: 24, suffix: "+" },
                        ].map((stat, i) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center px-4 border-r border-gray-100 dark:border-white/10 last:border-r-0">
                                <div className="text-5xl md:text-6xl font-display font-bold text-[#0a1628] dark:text-white mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix ?? ""} />
                                </div>
                                <div className="text-gray-400 text-xs uppercase tracking-widest font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="relative z-10 bg-gray-50 dark:bg-[#0a1628] py-28 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-4 block">About the Laboratory</span>
                            <h2 className="text-4xl font-display font-bold text-[#0a1628] dark:text-white mb-6 leading-tight">
                                Advancing Molecular Research for Human Health
                                {/*Where molecular science meets human health*/}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                The Qamar Lab at Gautam Buddha University is dedicated to advancing interdisciplinary research in cancer biology, molecular oncology, transcriptional gene regulation, and computational drug discovery. The laboratory combines experimental biology with in-silico approaches to investigate the molecular mechanisms underlying cancer progression and associated metabolic disorders, with a particular focus on cancer cachexia.

                                Our research explores how cellular stress pathways, including endoplasmic reticulum (ER) stress and autophagy, contribute to tumor progression, muscle wasting, and systemic metabolic dysfunction during cancer cachexia. The lab is actively involved in studying the crosstalk between tumor cells and peripheral tissues through exosome-mediated signaling, including exosome profiling to identify novel biomarkers and therapeutic targets associated with cachexia progression and treatment response.

                                In addition, the laboratory investigates transcriptional and epigenetic regulation of genes involved in cellular senescence, stress adaptation, inflammation, and tumor survival. By integrating molecular biology, bioinformatics, and computational drug discovery pipelines, the lab aims to identify and validate novel therapeutic candidates targeting cancer-associated pathways. Through this multidisciplinary approach, the Qamar Lab seeks to bridge fundamental cancer research with translational applications for improved diagnostics and therapeutics.
                                {/*The Qamar Lab at Gautam Buddha University is focused on advancing research in cancer biology, transcriptional gene regulation, molecular oncology, and computational drug discovery. The laboratory integrates experimental biology with in-silico approaches to investigate cellular senescence, endocrine regulation, and therapeutic target discovery.*/}

                                {/*With research contributions spanning international collaborations, funded biomedical projects, and publications in journals including Scientific Reports, Journal of Biological Chemistry, Aging, and Journal of Biomolecular Structure and Dynamics, the lab continues to explore translational strategies for cancer therapeutics and molecular medicine.*/}
                                {/*The MehtaLab at IIT Bombay is a premier research group dedicated to advancing the frontiers of biotechnology, genetic engineering, and computational biology. Our interdisciplinary approach bridges fundamental science with translational medicine.*/}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                With over two decades of impactful research, we have trained the next generation of scientists and published landmark findings in Nature Biotechnology, Cell, and PNAS.
                            </p>
                            <div className="border-l-4 border-[#00b8d9] pl-5 py-1">
                                <Quote className="w-5 h-5 text-[#00b8d9]/50 mb-2" />
                                <p className="text-gray-600 dark:text-gray-300 italic text-base leading-relaxed">
                                    "Understanding molecular mechanisms is the foundation for developing next-generation therapeutics against complex diseases."
                                    {/*"The most profound discoveries lie at the intersection of disciplines. We don't just study biology \u2014 we engineer it."*/}
                                </p>
                                <p className="text-gray-400 text-sm mt-3 font-medium">— Dr. Imteyaz Qamar</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    label: "Mission",
                                    text: "Advance molecular oncology and biomedical research through interdisciplinary science and translational therapeutic discovery."
                                },
                                {
                                    label: "Vision",
                                    text: "To build a globally recognised research environment focused on cancer biology, gene regulation, and computational therapeutics."
                                },
                                {
                                    label: "Values",
                                    text: "Scientific integrity, rigorous experimentation, collaborative innovation, and ethical biomedical research."
                                },
                                {
                                    label: "Affiliations",
                                    text: "Gautam Buddha University · ICMR · CSIR · National Institute of Immunology · Chonnam National University · Korea University College of Medicine"
                                },
                            ].map((item) => (
                                <div key={item.label} className="bg-white dark:bg-[#0f2244] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
                                    <div className="text-[#0066ff] font-semibold text-xs uppercase tracking-widest mb-2">{item.label}</div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* RESEARCH DOMAINS */}
            <section className="relative z-10 bg-white dark:bg-[#0f1e3d] py-28 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-2xl">
                        <span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-4 block">What we study</span>
                        <h2 className="text-4xl font-display font-bold text-[#0a1628] dark:text-white mb-4">Research Domains</h2>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Three active research areas, unified by a commitment to molecular-level understanding and real-world biomedical impact.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {domains.map((domain, i) => (
                            <motion.div key={domain.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,100,255,0.12)" }} className="bg-white dark:bg-[#0f2244] border border-gray-100 dark:border-white/10 rounded-2xl p-8 shadow-sm cursor-default group transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${domain.color}15` }}>
                                    <domain.icon className="w-6 h-6" style={{ color: domain.color }} />
                                </div>
                                <h3 className="text-lg font-bold text-[#0a1628] dark:text-white mb-3 group-hover:text-[#0066ff] dark:group-hover:text-[#00d4ff] transition-colors">{domain.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{domain.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/*/!* LAB FACILITIES *!/*/}
            {/*<section className="relative z-10 bg-gray-50 dark:bg-[#0a1628] py-28 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-2xl">*/}
            {/*            <span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-4 block">Infrastructure</span>*/}
            {/*            <h2 className="text-4xl font-display font-bold text-[#0a1628] dark:text-white mb-4">Laboratory Facilities</h2>*/}
            {/*            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">World-class research infrastructure enabling breakthrough discoveries across molecular biology, bioinformatics, and cell biology.</p>*/}
            {/*        </motion.div>*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
            {/*            {labFacilities.map((facility, i) => (*/}
            {/*                <motion.div key={facility.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="group bg-white dark:bg-[#0f2244] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500">*/}
            {/*                    <div className="overflow-hidden h-52 relative">*/}
            {/*                        <img src={facility.img} alt={facility.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />*/}
            {/*                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />*/}
            {/*                    </div>*/}
            {/*                    <div className="p-6">*/}
            {/*                        <h3 className="text-lg font-bold text-[#0a1628] dark:text-white mb-2 group-hover:text-[#0066ff] dark:group-hover:text-[#00d4ff] transition-colors">{facility.title}</h3>*/}
            {/*                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{facility.desc}</p>*/}
            {/*                    </div>*/}
            {/*                </motion.div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 rounded-3xl overflow-hidden h-64 relative group border border-gray-100 dark:border-white/10 shadow-sm">*/}
            {/*            <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&h=500&fit=crop&q=80" alt="MehtaLab main research floor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />*/}
            {/*            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 to-transparent flex items-end p-8">*/}
            {/*                <div>*/}
            {/*                    <p className="text-white font-bold text-xl mb-1">Main Research Floor</p>*/}
            {/*                    <p className="text-gray-300 text-sm">Over 4,000 sq ft of dedicated laboratory and collaborative workspace</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </motion.div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* NEWS \u2014 always dark */}
            <section className="relative z-10 bg-[#0a1628] dark:bg-[#050d1a] py-28 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                        <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4 block">Recent milestones</span>
                        <h2 className="text-4xl font-display font-bold text-white">News & Achievements</h2>
                    </motion.div>
                    <div className="relative max-w-3xl">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
                        {news.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-12 pb-10 last:pb-0">
                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                                </div>
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className="text-[#00d4ff] text-sm font-semibold">{item.year}</span>
                                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-gray-300">{item.type}</span>
                                </div>
                                <p className="text-white font-medium text-lg leading-snug">{item.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 bg-white dark:bg-[#0f1e3d] py-20 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-display font-bold text-[#0a1628] dark:text-white mb-4">Interested in joining IQLab?</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">We welcome motivated PhD applicants, postdocs, and research collaborators from around the world.</p>
                        <Link href="/contact">
                            <button className="px-10 py-4 bg-[#0a1628] dark:bg-[#00d4ff] text-white dark:text-[#050d1a] font-semibold rounded-xl hover:bg-[#0f2244] dark:hover:bg-white transition-colors inline-flex items-center gap-2">
                                Get in Touch <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
