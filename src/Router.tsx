import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { DefaultLayout } from "./layout/Default";
import { About } from "./pages/About";
import { AboutProjects } from "./pages/AboutProject";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Stack } from "./pages/Stack";

export function Router() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/projects/:name" element={<AboutProjects />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}
