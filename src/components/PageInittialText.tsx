import { motion } from "framer-motion";

interface PageInnitalTextProps {
    title: string;
    content?: string;
    transitionDelay?: number
}
export function PageInnitalText({ title, content, transitionDelay }: PageInnitalTextProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: transitionDelay,
                duration: 0.5,
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            angle: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            }
        }
    }
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            id="content"
            className="h-fit grid gap-4">
            <motion.h1 variants={item}
                className="text-3xl font-telegraf font-semibold">
                {title}
            </motion.h1>
            <motion.p variants={item}>
                {content}
            </motion.p>

        </motion.div>
    )
}