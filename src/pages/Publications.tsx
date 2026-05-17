import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, ExternalLink, Filter } from "lucide-react";

const publications = [
    {
        year: 2025,
        title: "Unveiling Therapeutic Potential: In Silico Discovery of Prognostic Markers and Potential Inhibitors for TGFβR1 in Pancreatic Cancer",
        authors: "Singh S., Gupta H., Sinha S., Kaushik A. C., Kapoor S., Awasthi A. K., Qamar I., Sahi S.",
        journal: "Computational Biology and Chemistry",
        doi: "10.1016/j.compbiolchem.2025.108646",
        citations: null,
        type: "Research"
    },
    {
        year: 2025,
        title: "Palmitic Acid Adjunctive Therapy Upregulates bax/bcl-2 Ratio and Displays Apoptosis as Mode of Anti-Tumorigenic Effects in Multiple Myeloma Cells",
        authors: "Kapoor S., Gupta N., Raja K. D., Qamar I., Singh A., Sharma A.",
        journal: "Leukemia & Lymphoma",
        doi: "10.1080/10428194.2025.2547246",
        citations: null,
        type: "Research"
    },
    {
        year: 2024,
        title: "Exploring the Role of Pyridoxal Kinase: A Key Player in Vitamin B6 Metabolism",
        authors: "Banerjee P., Singh R., Urmi R., Singh M., Chandra A., Singh N., Qamar I.",
        journal: "Endocrinol Metab Int J",
        doi: null,
        citations: null,
        type: "Research"
    },
    {
        year: 2024,
        title: "In Silico Discovery of Dual Ligands Targeting MAO-B and AA2AR from African Natural Products Using Pharmacophore Modelling, Molecular Docking, and Molecular Dynamics Simulations",
        authors: "Boulaamane Y., Touati I., Qamar I., Ahmad I., Patel H., Chandra A., Britel M. R., Maurady A.",
        journal: "Chemistry Africa",
        doi: "10.1007/s42250-024-01074-2",
        citations: null,
        type: "Research"
    },
    {
        year: 2024,
        title: "Ligand Based-Design of Potential Schistosomiasis Inhibitors Through QSAR, Homology Modeling, Molecular Dynamics, Pharmacokinetics, and DFT Studies",
        authors: "Ja’afaru S. C., Uzairu A., Chandra A., Sallau M. S., Ndukwe G. I., Ibrahim M. T., Qamar I.",
        journal: "J Taibah Univ Med Sci",
        doi: "10.1016/j.jtumed.2024.02.003",
        citations: null,
        type: "Research"
    },
    {
        year: 2023,
        title: "New Insights into Pyridoxal Kinase Inhibitors and Their Antileukemic Effects",
        authors: "Banerjee P., Singh T., Qamar I.",
        journal: "Cureus",
        doi: "10.7759/cureus.48176",
        citations: null,
        type: "Research"
    },
    {
        year: 2023,
        title: "Identification of High-Affinity Pyridoxal Kinase Inhibitors Targeting Cancer Therapy: An Integrated Docking and Molecular Dynamics Simulation Approach",
        authors: "Banerjee P., Chandra A., Mohammad T., Singh N., Hassan M. I., Qamar I.",
        journal: "J Biomol Struct Dyn",
        doi: "10.1080/07391102.2023.2246580",
        citations: null,
        type: "Research"
    },
    {
        year: 2023,
        title: "Repurposing of Drugs Against Methyltransferase as Potential Zika Virus Therapies",
        authors: "Shukla R., Chandra A., Kumar A., Kandpal P., Avashthi H., Goel V. K., Qamar I., Singh N., Kelvin D. J., Singh T. R.",
        journal: "Scientific Reports",
        doi: "10.1038/s41598-023-33341-6",
        citations: null,
        type: "Research"
    },
    {
        year: 2023,
        title: "Drugs Swapping in Coronavirus Strains: A Structural Biology View",
        authors: "Gurjar V., Kamil S. I., Chandra A., Qamar I., Singh N.",
        journal: "J Biomol Struct Dyn",
        doi: "10.1080/07391102.2023.2169963",
        citations: null,
        type: "Research"
    },
    {
        year: 2022,
        title: "Prognostic Utility of Key Copy Number Alterations in T Cell Acute Lymphoblastic Leukemia",
        authors: "Kumari S., Ali M. S., Singh J., Arora M., Verma D., Pandey A. K., Benjamin M., Bakhshi S., Palanichamy J. K., Sharma A., Singh I., Tanwar P., Singh A. R., Pushpam D., Qamar I., Chopra A.",
        journal: "Hematol Oncol",
        doi: "10.1002/hon.3030",
        citations: null,
        type: "Research"
    },
    {
        year: 2022,
        title: "Expression of Regucalcin, a Calcium-Binding Protein is Regulated by Hypoxia-Inducible Factor-1α",
        authors: "Singh T., Banerjee P., Uditi, Singh N., Qamar I.",
        journal: "Life Sciences",
        doi: null,
        citations: null,
        type: "Research"
    },
    {
        year: 2021,
        title: "High SPAG5 Expression is Associated with Oncological Features in Endometrial Carcinoma",
        authors: "Arora M., Kumari S., Singh J., Palanichamy J. K., Qamar I., Chauhan S. S., Chopra A.",
        journal: "Medical Oncology",
        doi: "10.21203/rs.3.rs-833018/v1",
        citations: null,
        type: "Research"
    },
    {
        year: 2021,
        title: "Molecular Associations and Clinical Significance of Core NHEJ Pathway Genes in Renal Clear Cell Carcinoma",
        authors: "Singh J., Arora M., Kumari S., Verma D., Palanichamy J. K., Qamar I., Chauhan S. S., Chopra A.",
        journal: "Gene Reports",
        doi: "10.1016/j.genrep.2021.101167",
        citations: null,
        type: "Research"
    },
    {
        year: 2020,
        title: "Identification of a Novel and Potent Small Molecule Inhibitor of SRPK1: Mechanism of Dual Inhibition of SRPK1 for the Inhibition of Cancer Progression",
        authors: "Chandra A., Ananda H., Singh N., Qamar I.",
        journal: "Aging",
        doi: null,
        citations: null,
        type: "Research"
    },
    {
        year: 2021,
        title: "Exploring Potential Inhibitor of SARS-CoV2 Replicase from FDA Approved Drugs Using In Silico Drug Discovery Methods",
        authors: "Chandra A., Gurjar V., Ahmed M. Z., Alqahtani A. S., Qamar I., Singh N.",
        journal: "J Biomol Struct Dyn",
        doi: "10.1080/07391102.2021.1879863",
        citations: null,
        type: "Research"
    },
    {
        year: 2020,
        title: "Identification of Potential Inhibitors of SARS-CoV-2 Endoribonuclease (EndoU) from FDA Approved Drugs: A Drug Repurposing Approach",
        authors: "Chandra A., Gurjar V., Qamar I., Singh N.",
        journal: "J Biomol Struct Dyn",
        doi: "10.1080/07391102.2020.1772102",
        citations: null,
        type: "Research"
    },
    {
        year: 2020,
        title: "Identification of Hot Spot Residues on Serine-Arginine Protein Kinase-1 by Molecular Dynamics Simulation Studies",
        authors: "Chandra A., Goyal N., Qamar I., Singh N.",
        journal: "J Biomol Struct Dyn",
        doi: "10.1080/07391102.2020.1739557",
        citations: null,
        type: "Research"
    },
    {
        year: 2019,
        title: "Structural Studies on Dihydrouridine Synthase A (DusA) from Pseudomonas aeruginosa",
        authors: "Goyal N., Chandra A., Qamar I., Singh N.",
        journal: "Int J Biol Macromol",
        doi: "10.1016/j.ijbiomac.2019.03.209",
        citations: null,
        type: "Research"
    },

    {
        year: 2024,
        title: "Revolutionizing Biomedicine: Aptamer-Based Nanomaterials and Nanodevices for Therapeutic Applications",
        authors: "Urmi R., Banerjee P., Singh M., Singh R., Chhillar S., Sharma N., Chandra A., Singh N., Qamar I.",
        journal: "Biotechnol Rep",
        doi: "10.1016/j.btre.2024.e00843",
        citations: null,
        type: "Review"
    },
    {
        year: 2024,
        title: "Unveiling the Molecular Secrets: A Comprehensive Review of Raman Spectroscopy in Biological Research",
        authors: "Anshuman Chandra, Vimal Kumar, Umesh Chandra Garnaik, Rima Dada, Imteyaz Qamar, Vijay Kumar Goel, Shilpi Agarwal",
        journal: "ACS Omega",
        doi: "10.1021/acsomega.4c00591",
        citations: null,
        type: "Review"
    },
    {
        year: 2021,
        title: "Mechanistic Insights into Immunological Therapy for Targeting Diabetic Retinopathy",
        authors: "Mohammad Anas, Pallabi Banerjee, Nidhi Singh and Imteyaz Qamar",
        journal: "Journal of Endocrinology and Disorders",
        doi: "10.31579/2640-1045/073",
        citations: null,
        type: "Review"
    },
    {
        year: 2020,
        title: "Traditional Nutritional and Health Practices Targeting Lifestyle Behavioral Changes in Humans",
        authors: "Singh A., Banerjee P., Anas M., Singh N., Qamar I.",
        journal: "J Lifestyle Med",
        doi: null,
        citations: null,
        type: "Review"
    },
    {
        year: 2020,
        title: "Moyamoya: An Overview of the Disease with Specific Reference to Diagnosis and Treatment",
        authors: "Singh G., Sharma E., Banerjee P., Qamar I.",
        journal: "IJMPR",
        doi: null,
        citations: null,
        type: "Review"
    },
    {
        year: 2020,
        title: "An Overview of SARS-COV-2 (COVID-19) Disease Pandemic",
        authors: "Rai S., Banerjee P., Chandra A., Qamar I.",
        journal: "Novel Research in Microbiology Journal",
        doi: null,
        citations: null,
        type: "Review"
    },

    {
        year: 2025,
        title: "Cellular Senescence, Age-Related Disorders, and Emerging Treatments",
        authors: "Imteyaz Qamar, Pawan Kumar Maurya",
        journal: "Springer Nature",
        doi: "10.1007/978-981-96-1041-9",
        citations: null,
        type: "Book"
    },
    {
        year: 2022,
        title: "Cardiovascular Toxicity and Therapeutic Modalities Targeting Cardio-Oncology: From Basic Research to Advanced Study",
        authors: "Imteyaz Qamar, Pawan Kumar Maurya",
        journal: "Elsevier Inc.",
        doi: "10.1016/C2020-0-03089-6",
        citations: null,
        type: "Book"
    },
    {
        year: 2022,
        title: "Novel Therapeutic Approaches Targeting Oxidative Stress",
        authors: "Imteyaz Qamar, Pawan Kumar Maurya",
        journal: "Academic Press Elsevier Inc.",
        doi: "10.1016/C2020-0-03485-7",
        citations: null,
        type: "Book"
    }
];

const years = [2025, 2024, 2023, 2022, 2021];
const types = ["All", "Research", "Review", "Book"];

export default function Publications() {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedType, setSelectedType] = useState("All");

    const filtered = publications.filter((p) => {
        const yearMatch = selectedYear ? p.year === selectedYear : true;
        const typeMatch = selectedType === "All" ? true : p.type === selectedType;
        return yearMatch && typeMatch;
    });

    // const totalCitations = publications.reduce((s, p) => s + p.citations, 0);

    return (
        <div className="pt-20">
            <section className="bg-[#0a1628] dark:bg-[#050d1a] py-28 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4 block">Academic output</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Publications</h1>
                        <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-12">Research contributions spanning molecular oncology, cancer biology, endocrinology, computational drug discovery, review articles, edited books, and book chapters — with publications in international peer-reviewed journals including Scientific Reports, JBC, Aging, and J Biomolecular Structure & Dynamics.</p>
                        <div className="grid grid-cols-3 gap-6 max-w-lg">
                            {[{ label: "Total Papers", value: 27}, { label: "Total Citations", value: 2097 }, { label: "h-index", value: 24 }].map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="text-4xl font-display font-bold text-[#00d4ff]">{s.value}</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-[#0a1628] py-16 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-3 mb-10 items-center">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                            {types.map((t) => (
                                <button key={t} onClick={() => setSelectedType(t)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${selectedType === t ? "bg-[#0a1628] dark:bg-[#00d4ff] text-white dark:text-[#050d1a] border-[#0a1628] dark:border-[#00d4ff]" : "bg-white dark:bg-[#0f2244] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#0066ff]/40"}`}>{t}</button>
                            ))}
                        </div>
                        <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1" />
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => setSelectedYear(null)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${selectedYear === null ? "bg-[#0a1628] dark:bg-[#00d4ff] text-white dark:text-[#050d1a] border-[#0a1628] dark:border-[#00d4ff]" : "bg-white dark:bg-[#0f2244] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#0066ff]/40"}`}>All Years</button>
                            {years.map((y) => (
                                <button key={y} onClick={() => setSelectedYear(y)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${selectedYear === y ? "bg-[#0a1628] dark:bg-[#00d4ff] text-white dark:text-[#050d1a] border-[#0a1628] dark:border-[#00d4ff]" : "bg-white dark:bg-[#0f2244] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#0066ff]/40"}`}>{y}</button>
                            ))}
                        </div>
                    </motion.div>

                    <p className="text-gray-400 text-sm mb-6">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>

                    <div className="space-y-4">
                        {filtered.map((pub, i) => (
                            <motion.div key={`${pub.title}-${pub.year}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="bg-white dark:bg-[#0f2244] rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-200 group">
                                <div className="flex gap-5">
                                    <div className="hidden sm:block shrink-0 mt-1">
                                        <div className="w-10 h-10 rounded-xl bg-[#0a1628]/5 dark:bg-[#00d4ff]/10 flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-[#0066ff] dark:text-[#00d4ff]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${pub.type === "Research" ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : pub.type === "Review" ? "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" : "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"}`}>{pub.type}</span>
                                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">{pub.year}</span>
                                        </div>
                                        <h3 className="text-[#0a1628] dark:text-white font-bold text-base leading-snug mb-2 group-hover:text-[#0066ff] dark:group-hover:text-[#00d4ff] transition-colors">{pub.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{pub.authors}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                                            <span className="font-semibold text-[#00b8d9]">{pub.journal}</span>
                                            <span>{pub.citations} citations</span>
                                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#0066ff] dark:hover:text-[#00d4ff] transition-colors"><ExternalLink className="w-3 h-3" />{pub.doi}</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
