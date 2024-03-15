import { ArrowLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function BackToHome() {
    return (
            <NavLink to={"/"}
            className={"p-3 cursor-pointer shadow-sm border bg-primary-foreground rounded-full"}>
                <ArrowLeft />
            </NavLink>
    )
}