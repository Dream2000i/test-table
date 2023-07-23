import React, { useEffect } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { changeTablePage, selectPagination, selectPosts } from "@/store/tableSlise";
import { useNavigate, useParams } from "react-router";

export default function Controls() {
    const dispatch = useAppDispatch();

    const { offset, count } = useAppSelector(selectPagination);
    const dataLenght = useAppSelector(selectPosts).length;

    const pages = Number(Math.ceil(dataLenght / count));
    const currentPage = Number(pages - Math.ceil((dataLenght - offset) / count) + 1);

 
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const page = Number(params.page);
        console.log(page);
        if (page === currentPage) return;
        if (isNaN(page) || page < 1 || page > pages) {
            return navigate(`/${currentPage}`);
        }

        dispatch(changeTablePage(page));

    }, [params]);

    return (
        <>{
            pages >1 &&
            <Pagination
            pages={pages}
            currentPage={currentPage}
            />
        }
        </>
    );
}

