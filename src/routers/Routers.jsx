import { createBrowserRouter } from "react-router";
import App from "../App";
import Roots from "../roots/Roots";
import About from "../components/ui/About";
import Skills from "../components/ui/projects/Skills";
import Projects from "../components/ui/projects/Projects";
import Contact from "../components/ui/Contact";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/skills",
                Component: Skills,
            },
            {
                path: "/projects",
                Component: Projects,
            },
            {
                path: "/contact",
                Component: Contact,
            },
        ]
    }
    // {
    //     path: "/",
    //     Component: Root,
    //     errorElement: <ErrorPage></ErrorPage>,
    //     hydrateFallbackElement: <p>Loading...</p>,

    //     children: [
    //         {
    //             index: true,
    //             path: "/",
    //             Component: Home,
    //         },
    //         {
    //             path: "/apps",
    //             Component: Apps,
    //         },
    //         {
    //             path: "/installation",
    //             Component: Installations,
    //         },
    //         {
    //             path: "/apps/:id",
    //             Component: AppDetails,
    //         },
    //     ],
    // },
    // {
    //   path: "/footer",
    //   Component:Footer,
    // },
]);