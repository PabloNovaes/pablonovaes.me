import { PageInnitalText } from "@/components/PageInittialText";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { stackImages } from "@/data/stack";
import { CornersIn, CornersOut } from "@phosphor-icons/react";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
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
        x: -40
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    }
}

export function AboutProjects() {
    const location = useLocation().pathname.split('/')[2]
    const { name, description, deploy, codeUrl, observation, stack, midia } = projects.filter(project => project.link === location)[0]

    const midiaWrapper = useRef(null)

    const fullscreen = {
        enter() {
            if (midiaWrapper.current === null) return
            const element = midiaWrapper.current as HTMLDivElement
            element.style.position = 'absolute'
            document.documentElement.classList.add("overflow-hidden")
            element.classList.add('inset-0', 'h-full', 'bg-primary-foreground', 'z-10')
            window.scrollTo(0, 0)

        }, exit() {
            if (midiaWrapper.current === null) return
            const element = midiaWrapper.current as HTMLDivElement
            element.style.position = 'relative'
            document.documentElement.classList.remove("overflow-hidden")
            element.classList.remove('inset-0', 'h-full', 'bg-primary-foreground', 'z-10')
            window.scrollTo(0, 0)
        }
    }

    window.scrollTo(0, 0)
    return (
        <>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                className="grid">
                <motion.div ref={midiaWrapper} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, } }} className="video-wrapper opacity-0 mb-4 w-full border shadow-md flex justify-center rounded-xl overflow-hidden relative transition-all duration-400">
                    {midia.includes(".mp4")
                        ? <video autoPlay>
                            <source src={midia} />
                        </video>

                        : <img src={midia} className="object-contain w-full" />
                    }
                    <span className="absolute left-0 bottom-0 pl-3 pb-3 pt-8 w-full bg-gradient-to-t from-black tex to-transparent"></span>
                    <div className="absolute bottom-2 right-2 p-1 flex gap-2 bg-primary-foreground border rounded-xl">
                        <button className="p-1 rounded-lg bg-primary-foreground hover:brightness-150 text-white transition-colors duration-300" onClick={fullscreen.exit} >
                            <CornersIn size={18} />
                        </button>
                        <button className="p-1 rounded-lg bg-primary-foreground hover:brightness-150 text-white transition-colors duration-300" onClick={fullscreen.enter}>
                            <CornersOut size={18} />
                        </button>
                    </div>
                </motion.div>
                <motion.div variants={item} className="flex mb-4 flex-wrap gap-1">


                    {stack.map((tech) => {
                        const { src, invert } = stackImages.filter(stack => stack.name === tech)[0]
                        return (
                            <div className="stack-container-wrapper relative flex justify-center">
                                <p className="text-xs whitespace-nowrap absolute -top-6 bg-primary-foreground rounded-lg p-1 border invisible opacity-0 transition-all duration-200">{tech}</p>
                                <div
                                    key={tech}
                                    className="bg-primary-foreground relative overflow-hidden border stack-img-container p-2 flex items-center justify-center rounded-xl">
                                    <img src={src} className={`size-5 z-1 ${invert && 'dark:invert'}`} />
                                    {/* <img src={src} className={`size-10 blur-lg scale-150 absolute opacity-80 z-0 dark:opacity-30  ${invert && 'dark:invert'}`} /> */}
                                    {/* <span className="duration-200" >
                                        <p className="text-xs ml-1">{tech}</p>
                                    </span> */}
                                </div>
                            </div>
                        )
                    })}
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