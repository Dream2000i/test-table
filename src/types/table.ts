import { PayloadAction } from "@reduxjs/toolkit";
import { sortDirection } from "./enum";

export type TableState = {
    pagination:{
        count: number;
        offset: number;
    }
    posts: Array<Post>;
    originalPosts: Array<Post>;
    sorts: {
        field: string | null;
        direction: sortDirection | null;
    }
}


export type Post = Record<string, string | number>;

export type TPayloadAction = PayloadAction<Post[] | undefined, string, { arg: void; requestId: string; requestStatus: "fulfilled"; }, never>