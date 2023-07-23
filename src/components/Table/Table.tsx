import React from "react";
import './Table.scss';
import { Post } from "@/types/table";
import { sortDirection } from "@/types/enum";

type TypePropsTable = {
    columns: Array<{
        key: string;
        label: string;
        sort: sortDirection | null;
    }>
    data: Array<Post>;
    handlerHeadClick: Function;
}

export default function Table({ columns, data, handlerHeadClick }: TypePropsTable) {

    return (
        <div className="data-table">
            <table className="data-table__wrap">
                <thead className="data-table__thead">
                    <tr className="data-table__tr">
                        {
                            columns && columns.map(({ key, label, sort }) =>
                                <th key={`thead-data-${key}`}
                                    onClick={sort !== null ? () => handlerHeadClick(key) : () => { }}
                                    className={`data-table__th data-table__th_${key}`}
                                >
                                    <div className={`data-table__th-content data-table__th-content_${key} ${sort !== null ? `data-table__sort data-table__sort_${sort === sortDirection.asc ? 'asc' : 'desc'}` : ''} `}>
                                        {label}
                                    </div>
                                </th>
                            )
                        }
                    </tr>
                </thead >
                <tbody className="data-table__tbody">
                    {
                        data && data.map((item) =>

                            <tr
                                className="data-table__tr"
                                key={`tbody-row-${item.id}`}
                            >
                                {
                                    columns && columns.map(({ key }) =>
                                        <td key={`tbody-data-${key}`}

                                            className={`data-table__td data-table__td_${key}`}
                                        >
                                            {item[key]}
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

