import { PageInnitalText } from "@/components/PageInittialText";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImageProps } from "./Stack";

export function Projects() {
  const [images, setImages] = useState<ImageProps[]>([])

  useEffect(() => {

    async function importImage() {
      const loadedImages: ImageProps[] = []
      for (const project of Object.keys(projects)) {
        const { image, name } = projects[project]
        const { default: src } = await import(image)
        loadedImages.push({ src, name })
      }

      setImages(loadedImages)
    }

    importImage()
  }, [])


  return (
    <>
      <PageInnitalText title="Meus projetos"
      content="Aqui eu mostrarei apenas os projetos que eu acredito que mereçam ser destacados, por mais simples que sejam."
       />
      {
        images.map((img) => {

          return (
            <div key={img.name} className="card w-full border bg-primary-foreground overflow-hidden shadow-md mt-4 rounded-lg relative  text-zinc-50">
              <img src={img.src} className="object-cover w-full" />
              <p className="absolute left-0 bottom-0 pl-3 pb-3 pt-8 w-full bg-gradient-to-t from-black tex to-transparent">{img.name}</p>
              <div className="card-blur invisible absolute bg-zinc-800/50 dark:bg-zinc-950/50 grid place-content-center backdrop-blur-[3px] inset-0 opacity-0">
                <NavLink to={`${img.name?.toLocaleLowerCase()}`} className="card-text text-3xl flex justify-center cursor-pointer relative ">
                  Ver
                  <span className="absolute opacity-0 w-full left-0 h-[2px] bg-zinc-300 -bottom-4"></span>
                </NavLink>
              </div>
            </div>
          )
        })
      }


    </>
  )
}