import { getPosts } from "@/api/posts.api";
import TableBody from "@/components/Table/Table";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { getPostsAction } from "@/store/actions/posts";
import React, { useEffect } from "react";
import { changeTableSort, selectPagination, selectPosts, selectSorts } from "@/store/tableSlise";
import { sortDirection } from "@/types/enum";

const initialTableColumns = [
    {
        label: 'ID',
        key: 'id',
        sort: sortDirection.asc
    },
    {
        label: 'Заголовок',
        key: 'title',
        sort: sortDirection.asc
    },
    {
        label: 'Описание',
        key: 'body',
        sort: sortDirection.asc
    },
];


export default function TableData() {
    const dispatch = useAppDispatch();

    const data = useAppSelector(selectPosts);
    const { offset, count } = useAppSelector(selectPagination);

    const tableSorts = useAppSelector(selectSorts);

    const tableColumns = initialTableColumns.map((item, key) => {
        if (tableSorts.field === item.key) {
            return { ...item, sort: tableSorts.direction }
        } else {
            return item;
        }
    });

    const tableData = data.filter((_item, key) => key >= offset && key < offset+count);

    const clickSortingTable = (key: string) => dispatch(changeTableSort(key));


    useEffect(() => {
        dispatch(getPostsAction());
    }, []);
    return (
        <>
            <TableBody
                columns={tableColumns}
                data={tableData}
                handlerHeadClick={clickSortingTable}
            />
        </>
    );
}

