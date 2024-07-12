import { PageInnitalText } from '@/components/PageInittialText';
import { Reveal } from '@/components/Reveal';
import { stackImages } from '@/data/stack';
import { motion } from 'framer-motion';


export interface ImageProps {
    name?: string;
    src?: string;
    invert?: boolean;
}

export function Stack() {
    const types = ['Front-End', "Back-End", 'Design', "Versionamento", "Testes"]

    return (
        <>
            <PageInnitalText
                title='Minhas Tecnologias'
                content='Abaixo estão todas as tecnologias na qual possuo conhecimento e utilizo para desenvolver.' />

            <section className='grid gap-8 mt-6'>
                {types.map(type => {
                    return (
                        <div key={type}>
                            <Reveal>
                                <motion.h2
                                    initial={{ opacity: 0, x: -40 }}
                                    className='item relative opacity-0 font-telegraf font-semibold' key={type}>
                                    {type}
                                </motion.h2>
                            </Reveal>

                            <div className='grid gap-2 mt-2 place-content-end grid-cols-2 lg:grid-cols-3'>
                                {stackImages.filter((stack) => stack.type === type)
                                    .map(({ name, src, invert }) => {
                                        return (
                                            <Reveal key={name}>
                                                <motion.div id="content"
                                                    initial={{ opacity: 0, x: -40 }}
                                                    className="item opacity-0 flex p-2.5 items-center gap-4 h-fit rounded-xl bg-primary-foreground">
                                                    <div style={{ fill: 'red' }} className={`invert-0 stack-img-container p-2 flex items-center justify-center rounded-lg relative overflow-hidden ${invert && 'dark:invert'}`}>
                                                        <img src={src} alt={name} className="size-6 z-10" />
                                                        <img src={src} alt={name} className=" size-10 blur-lg scale-150 absolute opacity-80 z-0 dark:opacity-30" />
                                                    </div>
                                                    <p className="font-semibold text-sm">{name}</p>
                                                </motion.div>
                                            </Reveal>
                                        )
                                    })}
                            </div>
                        </div>
                    )
                })}
            </section >
        </>
    );
}
