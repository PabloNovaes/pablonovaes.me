import { PageInnitalText } from "@/components/PageInittialText";
import { projectsImages } from "@/data/projects";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function Projects() {
  

  return (
    <>
      <PageInnitalText title="Meus projetos" 
      content="Aqui eu mostrarei apenas os projetos que eu acredito que mereçam ser destacados, por mais simples que sejam."
       />
      {
        projectsImages.map((img, indx) => {

          return (
            <motion.div 
            initial={{opacity: 0, x: -30}}
            animate={{
              opacity: 1, x: 0, transition: {
                duration: 0.5, delay: indx * .4
              }
            }}
            key={img.name}
             className="card w-full border bg-primary-foreground overflow-hidden shadow-md mt-4 rounded-lg relative  text-zinc-50">
              <img src={img.src} className="object-cover w-full" />
              <p className="absolute left-0 bottom-0 pl-3 pb-3 pt-8 w-full bg-gradient-to-t from-black tex to-transparent">{img.name}</p>
              <div className="card-blur invisible absolute bg-zinc-800/50 dark:bg-zinc-950/50 grid place-content-center backdrop-blur-[3px] inset-0 opacity-0">
                <NavLink to={`${img.link}`} className="card-text text-3xl flex justify-center cursor-pointer relative ">
                  Ver
                  <span className="absolute opacity-0 w-full left-0 h-[2px] bg-zinc-300 -bottom-4"></span>
                </NavLink>
              </div>
            </motion.div>
          )
        })
      }


    </>
  )
}