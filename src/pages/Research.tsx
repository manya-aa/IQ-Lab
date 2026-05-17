import { motion } from "framer-motion";
import { Dna, Microscope, Database, FlaskConical, Brain, Beaker, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Designing Potential Antagonists of ASF/SF2 for Cancer Therapy",
        type: "Completed",
        grant: "ICMR Project Grant",
        amount: "₹ 41 L",
        domain: "Cancer Biology",
        year: "2017–2020",
        desc: "Focused on designing and evaluating ASF/SF2 antagonists as therapeutic targets for inhibiting cancer progression and tumor development."
    },
    {
        title: "Structural and Functional Characterization of SRrp508",
        type: "Completed",
        grant: "CSIR Research Project",
        amount: "₹ 28 L",
        domain: "Molecular Biology",
        year: "2016–2019",
        desc: "Investigated the structural and functional properties of SRrp508 to understand its regulatory role in cellular and transcriptional mechanisms."
    },
    {
        title: "Structural Studies on Dihydrouridine Synthase from P. aeruginosa",
        type: "Completed",
        grant: "ICMR Research Grant",
        amount: "₹ 38 L",
        domain: "Microbiology",
        year: "2015–2018",
        desc: "Conducted cloning, expression, and structural characterization studies on dihydrouridine synthase associated with Pseudomonas aeruginosa."
    },
    {
        title: "Targeting Senescent Cancer Cells and SASP Mechanisms",
        type: "Ongoing",
        grant: "Institutional Research Program",
        amount: "—",
        domain: "Biomedical Research",
        year: "Current",
        desc: "Exploring therapies targeting senescent cancer cells and SASP pathways to reduce tumor recurrence and chemotherapy resistance."
    },
];

const domains =[
    { icon: Microscope, label: "Cancer Biology" },
    { icon: Dna, label: "Gene Regulation" },
    { icon: Brain, label: "Cellular Senescence" },
    { icon: FlaskConical, label: "Molecular Oncology" },
    { icon: Database, label: "Computational Biology" },
    { icon: Beaker, label: "Drug Discovery" },
];

export default function Research() {
    return (
        <div className="pt-20">
            <section className="bg-[#0a1628] dark:bg-[#050d1a] py-28 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4 block">IQLab</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Research & Projects</h1>
                        <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">Six active research domains spanning cancer biology, gene regulation, computational biology, molecular oncology, cellular senescence, and therapeutic drug discovery.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white dark:bg-[#0f1e3d] py-20 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-display font-bold text-[#0a1628] dark:text-white mb-10">Research Domains</motion.h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {domains.map((d, i) => (
                            <motion.div key={d.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#0f2244] rounded-2xl border border-gray-100 dark:border-white/10 hover:border-[#00b8d9]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                                <div className="w-10 h-10 rounded-xl bg-[#0a1628]/5 dark:bg-[#00d4ff]/10 flex items-center justify-center">
                                    <d.icon className="w-5 h-5 text-[#0066ff] dark:text-[#00d4ff]" />
                                </div>
                                <span className="text-xs font-semibold text-[#0a1628] dark:text-gray-200 text-center leading-tight">{d.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-[#0a1628] py-24 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
                        {/*<span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-3 block">Funded Projects</span>*/}
                        <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white">Active & Recent Projects</h2>
                    </motion.div>
                    <div className="space-y-6 max-w-5xl">
                        {projects.map((project, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white dark:bg-[#0f2244] rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.type === "Ongoing" ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-700/30" : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300"}`}>{project.type}</span>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/30">{project.domain}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0a1628] dark:text-white leading-snug">{project.title}</h3>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-xs text-gray-400 mb-1">{project.year}</div>
                                        <div className="text-lg font-bold text-[#0066ff] dark:text-[#00d4ff]">{project.amount}</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b8d9]" />
                                    {project.grant}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0a1628] dark:bg-[#050d1a] py-24 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                        <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">How we work</span>
                        <h2 className="text-3xl font-display font-bold text-white">Research Methodology</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                        {[
                            {
                                step: "01",
                                title: "Research Planning",
                                desc: "Developing hypotheses through literature review, molecular insights, and identification of therapeutic targets in cancer and metabolic diseases."
                            },
                            {
                                step: "02",
                                title: "Experimental & Computational Studies",
                                desc: "Combining molecular biology experiments, cancer cell line studies, structural biology, and in-silico drug discovery approaches."
                            },
                            {
                                step: "03",
                                title: "Validation & Therapeutic Interpretation",
                                desc: "Validating molecular mechanisms through biochemical analysis and translating findings into potential therapeutic applications."
                            },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-white/10 rounded-2xl p-8 hover:border-[#00d4ff]/30 transition-colors duration-300">
                                <div className="text-[#00d4ff]/30 font-display font-bold text-5xl mb-4">{item.step}</div>
                                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-[#0f1e3d] py-20 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
                        <span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-3 block">International/ National</span>
                        <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white">Research Collaborations</h2>
                    </motion.div>
                    <div className="flex flex-wrap gap-4">
                        {[
                                "Korea University College of Medicine",
                            "Chonnam National University",
                            "Indian Institute of Science (IISc)",
                            "National Institute of Immunology",
                            "Indian Council of Medical Research (ICMR)",
                            "Council of Scientific & Industrial Research (CSIR)"
                            ].map((inst, i) => (
                            // ["Max Planck Institute of Biochemistry", "EMBL Heidelberg", "National University of Singapore", "Broad Institute, MIT", "Wellcome Sanger Institute", "TIFR Mumbai"].map((inst, i) => (
                            <motion.div key={inst} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#0066ff]/40 hover:text-[#0066ff] dark:hover:text-[#00d4ff] cursor-default transition-colors duration-200">
                                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                                {inst}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
