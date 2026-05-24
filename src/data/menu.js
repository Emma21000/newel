import { RiCloseLargeLine, RiMenuFold2Fill } from "react-icons/ri";

export const data_menu = {
    logo: '/all-images/newel.jpg',
    pages: [
        {
            title: "HOME",
            path: "/home"
        },
        {
            title: "SERVICES",
            path: "/services"
        },
        {
            title: "PROJECTS",
            path: "/projects"
        },
        {
            title: "CONTACT",
            path: "/contact"
        },
    ],
    icons: {
        open: <RiMenuFold2Fill />,
        close: <RiCloseLargeLine />
    }
}