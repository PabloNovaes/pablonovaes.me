import { PageInnitalText } from "@/components/PageInittialText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


interface ObservationProps {
    content: string
}

const Observation = ({ content }: ObservationProps) => (
    <span className="mt-5">
        <p className="gap-2 inline-flex items-center">
            <b>Obs:</b> {content}
        </p>

    </span>
)
const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .3
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export function AboutProjects() {
    const location = useLocation().pathname.split('/')[2]
    const { name, description, deploy, codeUrl, observation, stack, midia } = projects.filter(project => project.link === location)[0]

    window.scrollTo(0, 0)
    return (
        <>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                className="grid">
                <motion.div variants={item} className="mb-4 relative w-full border bg-primary-foreground overflow-hidden shadow-md rounded-lg text-zinc-50">
                    {
                        midia.includes("https")
                            ? <video autoPlay src={midia} className="object-cover w-full" />

                            : <img src={midia} className="object-cover w-full" />
                    }                    <span className="absolute left-0 bottom-0 pl-3 pb-3 pt-8 w-full bg-gradient-to-t from-black tex to-transparent"></span>
                </motion.div>
                <motion.div variants={item} className="flex gap-2 mb-4 flex-wrap">
                    {stack.map(tech => (
                        <Badge variant={"secondary"} key={tech}>
                            {tech}
                        </Badge>
                        // text-violet-400 bg-violet-600/30
                    ))}
                </motion.div>
                <PageInnitalText
                    transitionDelay={.4}
                    title={name}
                    content={description}
                />
                <motion.div variants={item} className="flex gap-2 left-4 mt-6 bottom-4">
                    {deploy && <a href={deploy} target="_blank">
                        <Button className="flex gap-2">
                            Visitar
                            <ArrowTopRightIcon />
                        </Button>
                    </a>}
                    {codeUrl &&
                        <a href={codeUrl} target="_blank">
                            <Button variant={'outline'} className="flex gap-2 ">
                                Ver codigo
                                <GitHubLogoIcon />
                            </Button>
                        </a>
                    }
                </motion.div>
                {observation && <Observation content={observation} />}
            </motion.div>
        </>
    )
}