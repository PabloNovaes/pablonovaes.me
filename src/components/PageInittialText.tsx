import { motion } from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .2
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}


interface PageInnitalTextProps {
    title: string;
    content?: string;
}
export function PageInnitalText({ title, content }: PageInnitalTextProps) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            id="content"
            className="grid gap-4 h-fit">
            <motion.h1 variants={item}
                className="text-4xl font-bold">
                {title}
            </motion.h1>
            <motion.p variants={item}>
                {content}
            </motion.p>
        </motion.div>
    )
}