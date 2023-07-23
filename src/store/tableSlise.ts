import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '.';
import { getPostsAction } from './actions/posts';
import { TableState, TPayloadAction } from '@/types/table';
import { sortDirection } from '@/types/enum';
import { sortByField } from '@/helpers/sort';

const initialState: TableState = {
    pagination: {
        count: 10,
        offset: 0,
    },
    posts: [],
    originalPosts: [],
    sorts: {
        field: 'id',
        direction: sortDirection.asc,
    },
}


const catalogSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        changeTableSort(state, action: PayloadAction<string>) {
            const sortField = action.payload;
            const currentSort = {
                ...state.sorts
            };

            currentSort.field = sortField;
            if (currentSort.direction === sortDirection.desc) {
                currentSort.direction = sortDirection.asc;
            } else {
                currentSort.direction = sortDirection.desc;
            }

            const postsSort = sortByField(state.posts, currentSort.field, currentSort.direction);

            state.sorts = currentSort;

            state.posts = postsSort;
        },
        changeTablePage(state, action: PayloadAction<number>) {
            const page = action.payload;
            const { count, offset } = { ...state.pagination };
            state.pagination = {
                count,
                offset: count * page - count
            }
        },
        searchTable(state, action: PayloadAction<string>) {
            const query = action.payload;
            const posts = [...state.originalPosts];
            const postsSearch = posts.filter(({ id, title, body },key) => {
                if (key ===3) {
                    console.log(String(body).replace(/(\r\n|\n|\r)/gm, " "));
                    console.log(query);
                    console.log(String(body).replace(/(\r\n|\n|\r)/gm, " ").includes(String(query)));
                    
                }
                if (String(id).includes(String(query)) || String(title).replace(/(\r\n|\n|\r)/gm, " ").includes(String(query)) || String(body).replace(/(\r\n|\n|\r)/gm, " ").includes(String(query))) {
                    return true;
                }
                return false;
            });
            state.sorts = {...initialState.sorts}
            state.pagination = {...initialState.pagination}
            state.posts = postsSearch;
        },
        searchTableReset(state) {
            state.posts = [...state.originalPosts];
            state.sorts = {...initialState.sorts}
            state.pagination = {...initialState.pagination}
        },
   
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostsAction.fulfilled, (state: TableState, action: TPayloadAction) => {
                if (action.payload) {
                    state.posts = action.payload;
                    state.originalPosts = action.payload;
                }
            })
            .addCase(getPostsAction.rejected, (_state: TableState, action) => {
                console.error(`Error: ${action.error.message}`);
            });

    },
});

export const selectPosts = (rootState: RootState) => rootState.table.posts;
export const selectPagination = (rootState: RootState) => rootState.table.pagination;
export const selectSorts = (rootState: RootState) => rootState.table.sorts;

export const { changeTableSort, changeTablePage, searchTable,searchTableReset } = catalogSlice.actions;
//  export const { addTodo, toggleComplete, removeTodo } = productsSlice.actions;

export default catalogSlice.reducer;