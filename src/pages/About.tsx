import { PageInnitalText } from "@/components/PageInittialText";
import { Stack } from "./Stack";

export function About() {
    return (
        <div className="grid gap-12">
            <PageInnitalText title="Sobre mim"
                content="Olá, é um prazer em ter você aqui, me chamo Pablo, atualmente tenho 19 anos e moro na capital de São Paulo. Sou desenvolvedor Web, atualmente estou mais focado em Front-End porem tenho conhecimentos de Back-End" />
            <div className="grid gap-5">
                <PageInnitalText
                    title='Minhas Tecnologias'
                    content='Abaixo estão todas as tecnologias na qual possuo conhecimento e utilizo para desenvolver' />
                <Stack />
            </div>
        </div>
    )
}