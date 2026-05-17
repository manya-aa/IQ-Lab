import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Users, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";

const WEB3FORMS_KEY = "70ad43d9-6498-47ce-b0d0-f8a41869f341";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setFormState("loading");
        setErrorMessage("");
        const formData = new FormData(formRef.current);
        formData.append("access_key", WEB3FORMS_KEY);
        try {
            const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
            const data = await res.json();
            if (data.success) { setFormState("success"); formRef.current.reset(); }
            else { setFormState("error"); setErrorMessage(data.message || "Submission failed."); }
        } catch { setFormState("error"); setErrorMessage("Network error."); }
    };

    return (
        <div className="pt-20">
            <section className="bg-[#0a1628] dark:bg-[#050d1a] py-28 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4 block">Reach Out</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">Interested in joining the lab, collaborating on a research project, or discussing our work? We would love to hear from you.</p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white dark:bg-[#0f1e3d] py-24 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-3 bg-gray-50 dark:bg-[#0a1628] rounded-3xl p-10 border border-gray-100 dark:border-white/10">
                            <h2 className="text-2xl font-display font-bold text-[#0a1628] dark:text-white mb-2">Send a Message</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">All inquiries are responded to within 2-3 business days.</p>

                            {formState === "success" ? (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/30 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0a1628] dark:text-white mb-2">Message sent successfully</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">We will get back to you shortly.</p>
                                    <button onClick={() => setFormState("idle")} className="text-sm font-medium text-[#0066ff] dark:text-[#00d4ff] hover:underline">Send another message</button>
                                </motion.div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                    <input type="hidden" name="subject" value="New inquiry \u2014 MehtaLab Website" />
                                    <input type="hidden" name="from_name" value="MehtaLab Contact Form" />
                                    <input type="checkbox" name="botcheck" className="hidden" />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                                            <input type="text" name="name" required className="w-full bg-white dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#0a1628] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#0066ff] dark:focus:border-[#00d4ff] focus:ring-2 focus:ring-[#0066ff]/10 transition-all text-sm" placeholder="Dr. Jane Smith" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                                            <input type="email" name="email" required className="w-full bg-white dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#0a1628] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#0066ff] dark:focus:border-[#00d4ff] focus:ring-2 focus:ring-[#0066ff]/10 transition-all text-sm" placeholder="jane@university.edu" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Affiliation / Institution</label>
                                        <input type="text" name="affiliation" className="w-full bg-white dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#0a1628] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#0066ff] dark:focus:border-[#00d4ff] transition-all text-sm" placeholder="University or Organisation" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Nature of Inquiry</label>
                                        <select name="inquiry_type" className="w-full bg-white dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#0a1628] dark:text-white focus:outline-none focus:border-[#0066ff] dark:focus:border-[#00d4ff] transition-all text-sm">
                                            <option>PhD Application</option>
                                            <option>Research Collaboration</option>
                                            <option>Postdoctoral Opportunity</option>
                                            <option>Media / Press</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                                        <textarea rows={5} name="message" required className="w-full bg-white dark:bg-[#0f2244] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#0a1628] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#0066ff] dark:focus:border-[#00d4ff] transition-all text-sm resize-none" placeholder="Please describe your research background and purpose of inquiry..." />
                                    </div>

                                    {formState === "error" && (
                                        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/30 text-red-700 dark:text-red-400 text-sm">
                                            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" /><span>{errorMessage}</span>
                                        </motion.div>
                                    )}

                                    <button type="submit" disabled={formState === "loading"} className="w-full bg-[#0a1628] dark:bg-[#00d4ff] text-white dark:text-[#050d1a] font-semibold py-4 rounded-xl hover:bg-[#0f2244] dark:hover:bg-white active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60">
                                        {formState === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending\u2026</> : "Send Inquiry"}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-2 space-y-6">
                            {[{ icon: MapPin, label: "Location", content: "Department of Biotechnology, GBU, Greater Noida, India" }, { icon: Mail, label: "Email", content: "imteyaz@korea.ac.in \n imteyazqamar@gbu.ac.in " }, { icon: Phone, label: "Telephone", content:"(+91) 120-234-4280 (Office) \n (+91) 9711761564 (Mobile) " }, { icon: Clock, label: "Office Hours", content: "Monday to Friday\n9:00 AM \u2013 5:30 PM IST" }].map((item) => (
                                <div key={item.label} className="flex gap-4 p-6 bg-gray-50 dark:bg-[#0a1628] rounded-2xl border border-gray-100 dark:border-white/10">
                                    <div className="w-10 h-10 rounded-xl bg-[#0a1628] dark:bg-[#0f2244] flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-[#00d4ff]" /></div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                                        {item.content.split("\n").map((line, j) => (<p key={j} className="text-[#0a1628] dark:text-white text-sm font-medium">{line}</p>))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex gap-4 p-6 bg-[#0a1628] dark:bg-[#0f2244] rounded-2xl border border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0"><Users className="w-5 h-5 text-[#00d4ff]" /></div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-1">Collaborations</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">We welcome international research partnerships. Industry and academic collaborators are encouraged to reach out directly.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-[#0a1628] py-16 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 h-64 bg-gray-200 dark:bg-[#0f2244] flex items-center justify-center relative">
                        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(10,22,40,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.04) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
                        <div className="relative text-center">
                            <div className="w-12 h-12 rounded-full bg-[#0a1628] dark:bg-[#00d4ff]/20 flex items-center justify-center mx-auto mb-3 shadow-lg"><MapPin className="w-6 h-6 text-[#00d4ff]" /></div>
                            <p className="text-[#0a1628] dark:text-white font-bold text-sm">GBU, Greater Noida, UttarPradesh</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">28.4201° N, 77.5276° E</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
