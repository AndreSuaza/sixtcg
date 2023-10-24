import { useLayoutEffect, useState } from "react";
import './Pagination.css'

interface Props { 
    totalCount: number; 
    limit: number;
}

export const Pagination = ({ totalCount, limit }: Props) => {

    const [pageNumber, setPageNumber] = useState([])

    useLayoutEffect(() => {       
        let pages: any = [];
        for (let i = 1; i <= Math.ceil(totalCount/limit); i++) {
            pages = [...pages, i];
        }
        setPageNumber(pages);
    }, [totalCount])

    return ( 
        <ul className="list-none m-0 p-0 overflow-hidden">
            <li className="float-left px-2 py-1 bg-white text-black">{"<"}</li>
            {pageNumber.map((i) => {
                    return <li className="float-left px-2 py-1 bg-white text-black" key={i}>
                        {i}
                    </li>
            })}
            <li className="float-left px-2 py-1 bg-white text-black" >{">"}</li>
        </ul>
        )

}