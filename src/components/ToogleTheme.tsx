import { useTheme } from "@/components/theme-provider";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { Button } from "./ui/button";

export function ToogleTheme() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
        variant={"outline"}
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
            }}
            className="p-3 h-full shadow-sm border
            bg-primary-foreground rounded-full">
            {theme === "dark" ? <MoonStars size={18}/> : <Sun size={18}/>}
        </Button>
    )
}