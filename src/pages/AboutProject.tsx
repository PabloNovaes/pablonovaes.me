import { PageInnitalText } from "@/components/PageInittialText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const animteObs = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: .8,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

interface ObservationProps {
    content: string
}

const Observation = ({ content }: ObservationProps) => (
    <motion.span
        variants={animteObs}
        className="mt-5">
        <p className="gap-2 inline-flex items-center">
            <b>Obs:</b> {content}
        </p>

    </motion.span>
)

export function AboutProjects() {
    const [imageURL, setImage] = useState('')

    const location = useLocation().pathname.split('/')[2]
    const { name, image, description, deploy, codeUrl, observation, stack } = projects[location]

    useEffect(() => {
        async function importImage() {
            const { default: src } = await import(image)
            return setImage(src)
        }

        importImage()
    }, [image])

    return (
        <>
            <div className="mb-4 relative w-full border bg-primary-foreground overflow-hidden shadow-md rounded-lg text-zinc-50">
                <img src={imageURL} className="object-cover w-full" />
                <span className="absolute left-0 bottom-0 pl-3 pb-3 pt-8 w-full bg-gradient-to-t from-black tex to-transparent"></span>
            </div>
            <div className="flex gap-2 mb-4 flex-wrap">
                {stack.map(tech => (
                    <Badge variant={"secondary"} className="rounded-full bg-primary-foreground text-current">
                        {tech}
                    </Badge>
                ))}
            </div>
            <PageInnitalText
                title={name}
                content={description}
            />
            <div className="flex gap-2 left-4 mt-4 bottom-4">
                <a href={deploy} target="_blank">
                    <Button className="flex gap-2">
                        Visitar
                        <ArrowTopRightIcon />
                    </Button>
                </a>
                <a href={codeUrl} target="_blank">
                    <Button variant={'outline'} className="flex gap-2 ">
                        Ver codigo
                        <GitHubLogoIcon />
                    </Button>
                </a>
            </div>
            {observation && <Observation content={observation} />}
        </>
    )
}