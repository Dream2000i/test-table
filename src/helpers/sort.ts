import { sortDirection } from "@/types/enum";

export const sortByField = (array: Array<Record<string, number|string>>, field: string, order: sortDirection):Array<Record<string, number|string>> => {
    const sortedArray = [...array];

    const ascendingComparison = (a: Record<string, number|string>, b: Record<string, number|string>) => {
        if (a[field] < b[field]) {
            return -1;
        } else if (a[field] > b[field]) {
            return 1;
        } else {
            return 0;
        }
    };
    const descendingComparison = (a: Record<string, number|string>, b: Record<string, number|string>) => {
        if (a[field] > b[field]) {
            return -1;
        } else if (a[field] < b[field]) {
            return 1;
        } else {
            return 0;
        }
    };

    if (order === sortDirection.asc) {
        sortedArray.sort(ascendingComparison);
    } else if (order === sortDirection.desc) {
        sortedArray.sort(descendingComparison);
    }

    return sortedArray;
}