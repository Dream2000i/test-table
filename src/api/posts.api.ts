import { ApiApp } from '.';
import { API_POSTS } from '../constant';
// import { appApi } from '.


const postsApi = {
    getPosts: () => ApiApp.get(API_POSTS),
    createPosts: () => ApiApp.post(API_POSTS, {}),
    editPosts: (id: number) => ApiApp.put(API_POSTS + '/' + id, {}),
    deletePosts: (id: number) => ApiApp.delete(API_POSTS + '/' + id)
};


export const { getPosts, createPosts, editPosts, deletePosts } = postsApi;