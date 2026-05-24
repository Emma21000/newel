import { RiCloseLargeLine, RiMenuFold2Fill } from "react-icons/ri";

export const data_menu = {
    logo: '/all-images/newel.jpg',
    pages: [
        {
            title: "home",
            path: "/home"
        },
        {
            title: "services",
            path: "/services"
        },
        {
            title: "projects",
            path: "/projects"
        },
        {
            title: "contact",
            path: "/contact"
        },
    ],
    icons: {
        open: <RiMenuFold2Fill />,
        close: <RiCloseLargeLine />
    }
}