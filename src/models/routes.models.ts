import { title } from "process";

export interface Route {
    path: string;
    name: string;
    title: string;
}

export const Routes = [
    {
        path: "/cartas",
        name: "Listado De Cartas",
        title: "Ir al Listado De Cartas"
    },
    {
        path: "/como-jugar",
        name: "¿Como Jugar?"
    },
    {
        path: "/productos",
        name: "Productos",
        title: "Ir a Productos"
    },
    {
        path: "/laboratorio",
        name: "Laboratorio",
        title: "Ir al Laboratorio de Mazos"
    },
    // {
    //     path: "/events",
    //     name: "Eventos"
    // }
]