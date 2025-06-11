import { PageInnitalText } from "@/components/PageInittialText";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { Bag, Student } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function Projects() {
  return (
    <>
      <PageInnitalText title="Principais projetos"
        content="Aqui eu mostrarei apenas os projetos que eu acredito que mereçam ser destacados, por mais simples que sejam."
      />
      <div className="sm:grid grid-cols-2 gap-x-4">

        {projects.map(({ name, category, midia, link }) => {

          return (
            <Reveal>
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -40 }}
                className="card item opacity-0 w-full border bg-primary-foreground overflow-hidden shadow-md mt-4 rounded-lg relative text-zinc-50">
                {
                  midia.includes(".mp4")
                    ? <video autoPlay src={midia} className="object-cover w-full" />
                    : <img src={midia} className="object-cover w-full" />
                }
                <div className="flex items-end justify-between absolute left-0 bottom-0 px-3 pb-2 pt-8 w-full bg-gradient-to-t from-black tex to-transparent">
                  <p>{name}</p>
                  <Badge className="mb-1 flex gap-1 bg-primary-foreground text-primary">
                    {category !== 'trabalho'
                      ? <Student size={15} weight="fill" />
                      : <Bag size={15} weight="fill" />
                    }
                    {category}
                  </Badge>
                </div>
                <div className="card-blur invisible absolute bg-zinc-800/50 dark:bg-zinc-950/50 grid place-content-center backdrop-blur-[3px] inset-0 opacity-0">
                  <NavLink to={`${link}`} className="card-text text-2xl flex justify-center cursor-pointer relative ">
                    Ver
                    <span className="absolute opacity-0 w-full left-0 h-[2px] bg-zinc-300 -bottom-4"></span>
                  </NavLink>
                </div>
              </motion.div>
            </Reveal>
          )
        })
        }
      </div>
    </>
  )
}
