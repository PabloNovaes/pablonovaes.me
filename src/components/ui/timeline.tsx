
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
    date: string;
    title: string;
    content: string;
};

const timelineData: TimelineEntry[] = [
    {
        date: "09/2024 - 06/2025",
        title: "Livo Aplicativo",
        content:
            `Atuei na modernização de aplicações web existentes, utilizando tecnologias modernas como
React, Vite, Tailwind CSS, Zod, entre outras. Mantendo um foco em código limpo,
componentização eficiente e boas práticas de desenvolvimento.
Busquei sempre melhorar a experiência do usuário, a performance da aplicação e a
manutenibilidade do código.`,
    },
];

export function Timeline() {
    return (
        <section className="bg-background">
            <div className="relative mx-auto max-w-4xl">
                <Separator
                    orientation="vertical"
                    className="absolute top-4 left-2 bg-muted"
                />
                {timelineData.map((entry, index) => (
                    <div key={index} className="relative mb-10 pl-8">
                        <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-foreground" />
                        <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                            {entry.title}
                        </h4>

                        <h5 className="text-md top-3 -left-34 rounded-xl tracking-tight text-muted-foreground xl:absolute">
                            {entry.date}
                        </h5>

                        <Card className="my-5 border-none shadow-none bg-transparent">
                            <CardContent className="px-0 xl:px-2">
                                <div
                                    className="prose text-foreground"
                                    dangerouslySetInnerHTML={{ __html: entry.content }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}

