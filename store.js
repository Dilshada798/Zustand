// import {create} from 'zustand';
// import axios from 'axios';

// const postStore = create((api) => ({
//   posts: [],
//   fetchPosts: async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//      api ({ posts: response.data });
//     } catch (error) {
//       console.log('Error :', error);
//     }
//   },
// }));

// export default postStore;



import { create } from 'zustand';
import axios from 'axios';

const postStore = create((api) => ({
  posts: [],
  fetchPosts: async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: { 'Cache-Control': 'no-cache' },
      });
      api({ posts: response.data });
    } catch (error) {
      console.log('Error:', error);
    }
  },
  deletePost: async (postId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      api((state) => {
        const updatedPosts = state.posts.filter((post) => post.id !== postId);
        return { posts: updatedPosts };
      });
    } catch (error) {
      console.log('Error:', error);
    }
  },
}));

export default postStore;

