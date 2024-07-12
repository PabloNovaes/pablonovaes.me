import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

interface PageInnitalTextProps {
    title: string;
    content?: string;
    transitionDelay?: number
}
export function PageInnitalText({ title, content }: PageInnitalTextProps) {
    return (
        <Reveal>
            <motion.div
                id="content"
                initial={{x: -40, opacity: 0}}
                className="item h-fit grid gap-4">
                <motion.h1 className="item text-3xl font-telegraf font-semibold">
                    {title}
                </motion.h1>
                <motion.p>
                    {content}
                </motion.p>
            </motion.div >
        </Reveal>
    )
}