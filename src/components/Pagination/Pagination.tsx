import { useLayoutEffect, useState } from "react";
import './Pagination.css'

interface Props { 
    totalCount: number; 
    limit: number;
    pageChangeMethod: (limit: number, offset: number) => Promise<void>;
    children: JSX.Element;
    extendedForm?: boolean;
}

export const Pagination = ({ children, totalCount, limit, pageChangeMethod, extendedForm = true }: Props) => {

    const [pageNumber, setPageNumber] = useState([])
    const [actualPage, setActualPage] = useState(1);

    useLayoutEffect(() => {       
        let pages: any = [];
        for (let i = 1; i <= Math.ceil(totalCount/limit); i++) {
            pages = [...pages, i];
        }
        setPageNumber(pages);
        setActualPage(1);
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
                <li className={`float-left px-3 py-1 text-white ${actualPage-1 > 0 ? 'bg-primary cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage-1)}>{"<"}</li>
                {extendedForm && pageNumber.map((index) => {
                        return <li className={`float-left px-3 py-1 cursor-pointer ${actualPage === index ? 'text-white  bg-primary' : 'text-black  bg-white'}`} key={index} onClick={() => pagePurn(index)}>
                            {index}
                        </li>
                })}
                <li className={`float-left px-3 py-1 text-white cursor-pointer ${actualPage+1 <= pageNumber.length ? 'bg-primary cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage+1)}>{">"}</li>
                {!extendedForm && <li className="bg-gray-200 float-left px-3 py-1 text-primary ml-2">Pag {actualPage} de {pageNumber.length}</li>}
            </ul>
            {children}
            <ul className="list-none m-0 p-0 overflow-hidden">
                <li className={`float-left px-3 py-1 text-white ${actualPage-1 > 0 ? 'bg-primary cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage-1)}>{"<"}</li>
                {extendedForm && pageNumber.map((index) => {
                        return <li className={`float-left px-3 py-1 cursor-pointer ${actualPage === index ? 'text-white  bg-primary' : 'text-black  bg-white'}`} key={index} onClick={() => pagePurn(index)}>
                            {index}
                        </li>
                })}
                <li className={`float-left px-3 py-1 text-white cursor-pointer ${actualPage+1 <= pageNumber.length ? 'bg-primary cursor-pointer' : 'bg-gray-200 cursor-default' }`} onClick={() => pagePurn(actualPage+1)}>{">"}</li>
                {!extendedForm && <li className="bg-gray-200 float-left px-3 py-1 text-primary ml-2">Pag {actualPage} de {pageNumber.length}</li>}
            </ul>
        </>
        
        )

}