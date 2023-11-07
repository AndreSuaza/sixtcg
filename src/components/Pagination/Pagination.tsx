import { useLayoutEffect, useState } from "react";
import './Pagination.css'

interface Props { 
    totalCount: number; 
    limit: number;
    pageChangeMethod: (limit: number, offset: number) => Promise<void>;
    children: JSX.Element;
}

export const Pagination = ({ children, totalCount, limit, pageChangeMethod }: Props) => {

    const [pageNumber, setPageNumber] = useState([])
    const [actualPage, setActualPage] = useState(1);

    useLayoutEffect(() => {       
        let pages: any = [];
        for (let i = 1; i <= Math.ceil(totalCount/limit); i++) {
            pages = [...pages, i];
        }
        setPageNumber(pages);
    }, [totalCount])

    const pagePurn = (page: number) => {

        const pageToGo = limit*(page-1);
        
        if(pageNumber.length >= page && page > 0) {
            setActualPage(page);
            pageChangeMethod(limit, pageToGo);  
        } 
    }

    return ( 
        <>
            <ul className="list-none m-0 p-0 overflow-hidden">
                <li className={`float-left px-3 py-1 text-white ${actualPage-1 > 0 ? 'bg-indigo-500 cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage-1)}>{"<"}</li>
                {pageNumber.map((index) => {
                        return <li className={`float-left px-3 py-1 cursor-pointer ${actualPage === index ? 'text-white  bg-indigo-500' : 'text-black  bg-white'}`} key={index} onClick={() => pagePurn(index)}>
                            {index}
                        </li>
                })}
                <li className={`float-left px-3 py-1 text-white cursor-pointer ${actualPage+1 <= pageNumber.length ? 'bg-indigo-500 cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage+1)}>{">"}</li>
            </ul>
            {children}
            <ul className="list-none m-0 p-0 overflow-hidden">
                <li className={`float-left px-3 py-1 text-white ${actualPage-1 > 0 ? 'bg-indigo-500 cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage-1)}>{"<"}</li>
                {pageNumber.map((index) => {
                        return <li className={`float-left px-3 py-1 cursor-pointer ${actualPage === index ? 'text-white  bg-indigo-500' : 'text-black  bg-white'}`} key={index} onClick={() => pagePurn(index)}>
                            {index}
                        </li>
                })}
                <li className={`float-left px-3 py-1 text-white cursor-pointer ${actualPage+1 <= pageNumber.length ? 'bg-indigo-500 cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage+1)}>{">"}</li>
            </ul>
        </>
        
        )

}