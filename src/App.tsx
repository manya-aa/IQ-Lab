import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Team from "./pages/Team";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
    const [location] = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/research" component={Research} />
                    <Route path="/team" component={Team} />
                    <Route path="/publications" component={Publications} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

function App() {
    return (
        <ThemeProvider>
            <WouterRouter>
                <div className="relative font-sans selection:bg-[#00d4ff] selection:text-[#050d1a]">
                    <AnimatedBackground />
                    <Navbar />
                    <Router />
                </div>
            </WouterRouter>
        </ThemeProvider>
    );
}

export default App;
