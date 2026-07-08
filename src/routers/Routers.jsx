import { createBrowserRouter } from "react-router";
import App from "../App";
import Roots from "../roots/Roots";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                path: "/",
                Component: App,
            }
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