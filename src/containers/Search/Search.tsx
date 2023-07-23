import React from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import { useAppDispatch } from "@/hooks/redux";
import { searchTable, searchTableReset } from "@/store/tableSlise";

export default function Search() {

    const dispatch = useAppDispatch();

    const searchString = (query: string) => {
        if (!query) return dispatch(searchTableReset());
        dispatch(searchTable(query));
    }

    return (
        <SearchForm
            handleSearchValue={searchString}
        />
    );
}

