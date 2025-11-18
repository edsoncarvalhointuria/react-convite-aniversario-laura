import { Check, MapPin } from "lucide-react";
import "./app.scss";
import Butterfly from "./icons/Butterfly";
import { motion, stagger, type Variants } from "framer-motion";

const variantsSpan: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
};

const variantsMain: Variants = {
    initial: {},
    animate: { transition: { delayChildren: stagger(0.15) } },
};

const variantsImg: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};

const variantsItens: Variants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
};

function App() {
    return (
        <motion.main
            className="main"
            variants={variantsMain}
            initial="initial"
            animate="animate"
        >
            <div className="body">
                <motion.div
                    className="borboleta"
                    initial={{ rotateY: 180 }}
                    animate={{
                        y: ["0px", "15px", "0px"],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Butterfly />
                </motion.div>
                <motion.div
                    className="borboleta"
                    animate={{
                        y: ["15px", "0px", "15px"],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        delay: 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Butterfly />
                </motion.div>
                <motion.div className="body__img" variants={variantsImg}>
                    <img src="/laura.jpg" alt="Imagem Laura" />
                </motion.div>

                <div className="body__infos">
                    <div className="body__infos-desc">
                        <h1>
                            <motion.span variants={variantsSpan}>L</motion.span>
                            <motion.span variants={variantsSpan}>a</motion.span>
                            <motion.span variants={variantsSpan}>u</motion.span>
                            <motion.span variants={variantsSpan}>r</motion.span>
                            <motion.span variants={variantsSpan}>a</motion.span>
                        </h1>

                        <motion.p variants={variantsItens}>
                            A Borboleta mais linda do nosso jardim está
                            completando seu 1⁰ aninho e você é nosso convidado
                            especial!
                        </motion.p>
                    </div>

                    <motion.data
                        className="body__infos-data"
                        value={"2025-12-21"}
                        variants={variantsItens}
                    >
                        21 de Dezembro de 2025 | ás 12:30h
                    </motion.data>
                </div>
            </div>

            <div className="footer">
                <motion.button
                    variants={variantsItens}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{
                        backgroundColor:
                            "rgb(234.2638297872, 98.5361702128, 119.2723404255)",
                    }}
                    onTap={() => {
                        window.open(
                            "https://forms.gle/RDAPzo7hfxAxeKDJ6",
                            "_blank"
                        );
                    }}
                >
                    <Check size={20} style={{ marginRight: "8px" }} />
                    Clique para confirmar sua presença
                </motion.button>
                <motion.button
                    variants={variantsItens}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{
                        backgroundColor:
                            "rgb(234.2638297872, 98.5361702128, 119.2723404255)",
                    }}
                    onTap={() => {
                        window.open(
                            "https://share.google/IkhKCp4ueM2d9270s",
                            "_blank"
                        );
                    }}
                >
                    <MapPin size={20} style={{ marginRight: "8px" }} />
                    Clique para ver a localização
                </motion.button>
            </div>
        </motion.main>
    );
}

export default App;
