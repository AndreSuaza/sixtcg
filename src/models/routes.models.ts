import { title } from "process";

export interface Route {
    path: string;
    name: string;
    title: string;
}

export const Routes = [
    {
        path: "/como-jugar",
        name: "¿Como Jugar?"
    },
    {
        path: "/products",
        name: "Productos",
        title: "Ir a Productos"
    },
    {
        path: "/eventos",
        name: "Eventos",
        title: "Ir a los Eventos"
    },
    {
        path: "/cartas",
        name: "Listado De Cartas",
        title: "Ir al Listado De Cartas"
    },
    {
        path: "/laboratorio",
        name: "Laboratorio",
        title: "Ir al Laboratorio de Mazos"
    },
    {
        path: "/tiendas",
        name: "Tiendas",
        title: "Conoce nuestras tiendas oficiales"
    },

]