import { motion } from "framer-motion";
import { Mail, Globe, Linkedin, BookOpen, Award, GraduationCap } from "lucide-react";

const phd = [
    {
        name: "Vandana Yadav",
        year: "PhD Scholar",
        topic: "Biotechnology Research",
        email: "vandanay1996@gmail.com",
        interests: ["Biotechnology", "Research"],
        award: "GATE 2016",
        linkedin: "http://www.linkedin.com/in/vandana-yadav-9a5631148",
        institute: "SOBT, GBU",
        photo: "/pics/pic1.jpeg"
    },
    {
        name: "Shubhi Rana",
        year: "PhD Scholar",
        topic: "Biotechnology Research",
        email: "shubhi10rana@gmail.com",
        interests: ["Biotechnology", "Research"],
        award: "",
        linkedin: "https://www.linkedin.com/in/shubhi-rana-777a90146/",
        institute: "SOBT, GBU",
        photo: "/pics/pic3.jpeg"
    },
    {
        name: "Sakshi Singh",
        year: "PhD Scholar",
        topic: "Biotechnology Research",
        email: "singhsakshi7300@gmail.com",
        interests: ["Biotechnology", "Research"],
        award: "",
        linkedin: "https://www.linkedin.com/in/sakshi-singh-a160783b4",
        institute: "School of Biotechnology, GBU",
        photo: "/pics/pic5.jpeg"
    }
    // { name: "Priya Sharma", year: "3rd Year PhD", topic: "CRISPR delivery vectors for in vivo correction of monogenic metabolic disorders", email: "priya.sharma@iitb.ac.in", interests: ["Gene Therapy", "CRISPR", "AAV Vectors"], award: "CSIR-JRF 2022", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&q=80" },
    // { name: "Rahul Kumar", year: "4th Year PhD", topic: "Graph neural networks for protein\u2013drug interaction and druggable pocket prediction", email: "rahul.kumar@iitb.ac.in", interests: ["ML/AI", "Structural Biology", "Drug Discovery"], award: "PM Research Fellowship", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80" },
    // { name: "Ananya Singh", year: "2nd Year PhD", topic: "Programmable synthetic gene circuits for adaptive cellular computation", email: "ananya.singh@iitb.ac.in", interests: ["Synthetic Biology", "Gene Circuits", "Metabolic Eng."], award: "DBT-BioCARe Fellow 2023", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face&q=80" },
    // { name: "Vikram Patel", year: "5th Year PhD", topic: "Whole-cell bacterial biosensors with quantitative ratiometric output for environmental monitoring", email: "vikram.patel@iitb.ac.in", interests: ["Biosensors", "Microbiology", "Environmental Bio."], award: "SERB-SRF 2022", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80" },
    // { name: "Meera Joshi", year: "3rd Year PhD", topic: "AlphaFold2-guided identification of druggable pockets in oncoproteins using embedding-based ML", email: "meera.joshi@iitb.ac.in", interests: ["Protein Structure", "Oncology", "Computational Bio."], award: "GATE Scholar 2022", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&q=80" },
    // { name: "Arjun Das", year: "1st Year PhD", topic: "Multi-omics integration for discovery of epigenetic biomarkers in early-stage colorectal cancer", email: "arjun.das@iitb.ac.in", interests: ["Multi-omics", "Cancer Biology", "Epigenetics"], award: "IITB Institute Fellowship", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80" },

];

const assistants = [
    {
        name: "Neelanshu Gaurav",
        year: "Research Fellow",
        topic: "Radiation Biotechnology",
        email: "gauravneelanshu@gmail.com",
        interests: ["Radiation Biotechnology", "Biomedical Research"],
        award: "DRDO-SRF",
        linkedin: "https://www.linkedin.com/in/neelanshu-gaurav-123777191",
        institute: "DRDO-INMAS",
        photo: "/pics/pic2.png"
    },
    {
        name: "Shraddha Kapoor",
        year: "Research Scholar",
        topic: "Biochemistry Research",
        email: "shraddha.kapoor7@gmail.com",
        interests: ["Biochemistry", "Medical Research"],
        award: "ICMR SRF (Direct), GATE Qualified",
        linkedin: "",
        institute: "AIIMS Delhi",
        photo: "/pics/pic4.jpeg"
    },

    // { name: "Kavya Nair", role: "Senior Research Assistant", dept: "Molecular Biology", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&q=80" },
    // { name: "Saurav Bose", role: "Research Assistant", dept: "Bioinformatics", photo: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=200&h=200&fit=crop&crop=face&q=80" },
    // { name: "Tanya Menon", role: "Lab Manager", dept: "Operations", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=face&q=80" },
];

const alumni = [
    { name: "Dr. Rohan Verma", placement: "Assistant Professor, BITS Pilani", year: "PhD 2022", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face&q=80" },
    { name: "Dr. Sneha Iyer", placement: "Postdoc Fellow, Max Planck Institute", year: "PhD 2021", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&q=80" },
    { name: "Dr. Aditya Ghosh", placement: "Scientist, Novartis India", year: "PhD 2020", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80" },
    { name: "Dr. Riya Desai", placement: "Assistant Professor, IISc Bangalore", year: "PhD 2019", photo: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=200&h=200&fit=crop&crop=face&q=80" },
    { name: "Dr. Kiran Malhotra", placement: "Principal Scientist, Sun Pharma", year: "PhD 2018", photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face&q=80" },
];

export default function Team() {
    return (
        <div className="pt-20">
            <section className="bg-[#0a1628] dark:bg-[#050d1a] py-28 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4 block">People</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Our Team</h1>
                        <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">A diverse, rigorous, and collaborative community of researchers driven by curiosity and a shared belief in the transformative power of biotechnology.</p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white dark:bg-[#0f1e3d] py-20 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
                        <span className="text-[#00b8d9] text-xs font-semibold uppercase tracking-widest mb-8 block">Principal Investigator</span>
                        <div className="flex flex-col md:flex-row gap-10 items-start">
                            <div className="shrink-0">
                                <div className="w-44 h-52 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10">
                                    <img src="pics/IMG_2361.jpg" alt="Dr. Imteyaz Qamar" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white mb-1">Dr. Imteyaz Qamar, Ph.D.</h2>
                                <p className="text-[#0066ff] dark:text-[#00d4ff] font-semibold mb-1">Assistant Professor</p>
                                <p className="text-gray-400 text-sm mb-5">School of Biotechnology, GBU</p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-6">
                                    Dr. Imteyaz Qamar completed his Ph.D. in Molecular Endocrinology from Chonnam National University and pursued his postdoctoral research under the Brain Korea-21 Fellowship program at Chonnam National University, South Korea. He also served as a Visiting Research Professor at Korea University. Currently, he is working as an Assistant Professor at the Gautam Buddha University, where he continues his research and academic contributions in molecular cancer biology and biotechnology.
                                    {/*Dr. Imteyaz Qamar received his Ph.D. from Chonnam National University and completed postdoctoral research at Chonnam National University under the Brain Korea-21 fellowship. He joined Gautam Buddha University in 2010. His research focuses on cancer biology, transcriptional gene regulation, cellular senescence, endocrine disorders, and in-silico drug discovery.*/}
                                    {/*Dr. Qamar received his Ph.D. from College of Medicine,Seoul and completed postdoctoral training at the Max Planck Institute of Biochemistry. He joined IIT Bombay in 2004. His work spans CRISPR gene therapy, AI-driven protein structure prediction, and synthetic biology. Recognised with the Shanti Swarup Bhatnagar Prize (2018) and TWAS Prize (2021).*/}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {[
                                        "Excellence in Teaching Award 2021",
                                        "STE Meritorious Award 2019",
                                        "Young Faculty Award 2019",
                                        "Outstanding Scientist Award 2018",
                                        "Outstanding Scientist Award 2016"
                                    ].map((a) => (
                                        // ["Shanti Swarup Bhatnagar Prize 2018", "TWAS Prize 2021", "SERB Distinguished Fellow", "INSA Fellow"].map((a) => (
                                        <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-full text-xs font-semibold text-amber-700 dark:text-amber-400">
                      <Award className="w-3 h-3" />{a}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    {[{
                                        icon: Linkedin,
                                        label: "LinkedIn",
                                        target: "_blank",
                                        href: "https://www.linkedin.com/in/dr-imteyaz-qamar-1173b935/"}

                                        //{ icon: Globe, target:"_blank",label: "Faculty Profile", href: }
                                        , { icon: BookOpen, label: "Google Scholar", target:"_blank", href: "https://scholar.google.com/citations?user=wRrkpLoAAAAJ&hl=en&oi=ao" },{
                                            icon: BookOpen,
                                            label: "ORCID",
                                            target: "_blank",
                                            href: "https://orcid.org/0000-0003-2390-1808"
                                        },
                                        ].map((btn) => (
                                        <a key={btn.label} href={btn.href} target={btn.target} className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:border-[#0066ff]/40 dark:hover:border-[#00d4ff]/40 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors">
                                            <btn.icon className="w-4 h-4" /> {btn.label}
                                        </a>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-[#0a1628] py-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
                        <span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-3 block">Graduate Students</span>
                        <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white">PhD Scholars</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {phd.map((member, i) => (
                            <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,100,255,0.12)" }} className="bg-white dark:bg-[#0f2244] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-300 group">
                                <div className="relative h-52 overflow-hidden">
                                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0a1628]">{member.year}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-[#0a1628] dark:text-white mb-0.5 group-hover:text-[#0066ff] dark:group-hover:text-[#00d4ff] transition-colors">{member.name}</h3>
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                                        <span className="text-amber-600 dark:text-amber-400 text-xs font-semibold">{member.award}</span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{member.topic}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {member.interests.map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-100 dark:border-blue-700/30">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 pt-4 border-t border-gray-50 dark:border-white/10">
                                        <a href={`mailto:${member.email}`} target="_blank" className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors text-xs font-medium"><Mail className="w-3.5 h-3.5" /> Email</a>
                                        <span className="text-gray-200 dark:text-white/10">|</span>
                                        <a href={member.linkedin} target="_blank"
                                           className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors text-xs font-medium"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</a>
                                        {/*<span className="text-gray-200 dark:text-white/10">|</span>*/}
                                        {/*<a href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors text-xs font-medium"><BookOpen className="w-3.5 h-3.5" /> Scholar</a>*/}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-[#0a1628] py-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
                        {/*<span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-3 block">Graduate Students</span>*/}
                        <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white">Research Scholars</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {assistants.map((member, i) => (
                            <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,100,255,0.12)" }} className="bg-white dark:bg-[#0f2244] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-300 group">
                                <div className="relative h-52 overflow-hidden">
                                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0a1628]">{member.year}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-[#0a1628] dark:text-white mb-0.5 group-hover:text-[#0066ff] dark:group-hover:text-[#00d4ff] transition-colors">{member.name}</h3>
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                                        <span className="text-amber-600 dark:text-amber-400 text-xs font-semibold">{member.award}</span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{member.topic}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {member.interests.map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-100 dark:border-blue-700/30">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 pt-4 border-t border-gray-50 dark:border-white/10">
                                        <a href={`mailto:${member.email}`} target="_blank" className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors text-xs font-medium"><Mail className="w-3.5 h-3.5" /> Email</a>
                                        <span className="text-gray-200 dark:text-white/10">|</span>
                                        <a href={member.linkedin}   target="_blank" className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors text-xs font-medium"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</a>
                                        {/*<span className="text-gray-200 dark:text-white/10">|</span>*/}
                                        {/*<a href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors text-xs font-medium"><BookOpen className="w-3.5 h-3.5" /> Scholar</a>*/}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/*<section className="bg-white dark:bg-[#0f1e3d] py-20 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">*/}
            {/*            /!*<span className="text-[#00b8d9] text-sm font-semibold uppercase tracking-widest mb-3 block">Support Staff</span>*!/*/}
            {/*            <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white">Research Scholars</h2>*/}
            {/*        </motion.div>*/}
            {/*        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">*/}
            {/*            {assistants.map((a, i) => (*/}
            {/*                <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-[#0f2244] rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-md transition-shadow">*/}
            {/*                    <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border-2 border-gray-100 dark:border-white/10 shadow-sm">*/}
            {/*                        <img src={a.photo} alt={a.name} className="w-full h-full object-cover object-[center_20%]" />*/}
            {/*                    </div>*/}
            {/*                    <h3 className="font-bold text-[#0a1628] dark:text-white text-sm mb-0.5">{a.name}</h3>*/}
            {/*                    <p className="text-[#0066ff] dark:text-[#00d4ff] text-xs font-semibold mb-1">{a.role}</p>*/}
            {/*                    <p className="text-gray-400 text-xs">{a.dept}</p>*/}
            {/*                </motion.div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className="bg-[#0a1628] dark:bg-[#050d1a] py-24 transition-colors duration-300">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">*/}
            {/*            <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Where they went</span>*/}
            {/*            <h2 className="text-3xl font-display font-bold text-white">Notable Alumni</h2>*/}
            {/*        </motion.div>*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">*/}
            {/*            {alumni.map((a, i) => (*/}
            {/*                <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 p-5 border border-white/10 rounded-2xl hover:border-[#00d4ff]/30 transition-colors group">*/}
            {/*                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10">*/}
            {/*                        <img src={a.photo} alt={a.name} className="w-full h-full object-cover" />*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <h3 className="text-white font-semibold text-sm group-hover:text-[#00d4ff] transition-colors">{a.name}</h3>*/}
            {/*                        <p className="text-gray-400 text-xs leading-snug mt-0.5">{a.placement}</p>*/}
            {/*                        <p className="text-[#00d4ff]/60 text-xs mt-1">{a.year}</p>*/}
            {/*                    </div>*/}
            {/*                </motion.div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className="bg-white dark:bg-[#0f1e3d] py-20 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">*/}
            {/*    <div className="container mx-auto px-6 max-w-4xl">*/}
            {/*        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 dark:bg-[#0a1628] rounded-3xl p-12 border border-gray-100 dark:border-white/10 text-center">*/}
            {/*            <GraduationCap className="w-10 h-10 text-[#0066ff] dark:text-[#00d4ff] mx-auto mb-4" />*/}
            {/*            <h2 className="text-3xl font-display font-bold text-[#0a1628] dark:text-white mb-4">Join MehtaLab</h2>*/}
            {/*            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">We are actively recruiting PhD students and postdoctoral fellows with strong backgrounds in molecular biology, bioinformatics, or synthetic biology.</p>*/}
            {/*            <div className="flex flex-wrap gap-4 justify-center">*/}
            {/*                <a href="mailto:arjun.mehta@iitb.ac.in" className="px-8 py-4 bg-[#0a1628] dark:bg-[#00d4ff] text-white dark:text-[#050d1a] font-semibold rounded-xl hover:bg-[#0f2244] dark:hover:bg-white transition-colors inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Apply via Email</a>*/}
            {/*                <a href="#" className="px-8 py-4 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-semibold rounded-xl hover:border-[#0066ff]/40 dark:hover:border-[#00d4ff]/40 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors inline-flex items-center gap-2"><Globe className="w-4 h-4" /> View Open Positions</a>*/}
            {/*            </div>*/}
            {/*        </motion.div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}
