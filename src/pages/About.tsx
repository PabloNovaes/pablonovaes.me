import { PageInnitalText } from "@/components/PageInittialText";

export function About() {
    return (
        <div className="
        grid gap-8">
            <PageInnitalText title="Sobre mim"
                content={`
                Olá, é um prazer em ter você aqui, me chamo Pablo, atualmente tenho 19 anos e moro na capital de São Paulo. 
                Sou desenvolvedor Web e por hora, mantenho-me mais focado em Front-End porém tenho conhecimentos de Back-End e futuramente pretendo aprender mais sobre. `}
            />
            <PageInnitalText
                title="Experiência relevante"
                transitionDelay={.3}
                content={`
                    Comecei a estudar programação a pouco mais de 1 ano e seis meses, 
                    tenho formação Técnica em Desenvolvimento de Sistemas pela ETEC Uirapuru. Lá eu participei do desenvolvimento de um projeto full-stack
                    destinado ao meu TCC, onde fui responsavel por toda codifição do projeto, da prototipagem de média e alta definição, e do design.
                `} />
        </div>
    )
}