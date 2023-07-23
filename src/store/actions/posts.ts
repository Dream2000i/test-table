import { getPosts } from "@/api/posts.api";
import { Post} from "@/types/table";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsAction = createAsyncThunk(
    'catalog/getPosts',
    async () => {
        const response = await getPosts();
        if (response.status === 200) {
            return response.data as Post[];
          }
    }
);

