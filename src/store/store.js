import Vue from 'vue';
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: []
    },
    getter: {
        getPosts: (state) => state.posts
    }
    ,
    mutations: {
       SET_POSTS (state, posts) {
            state.posts = posts;
       },
       ADD_POST(state, post) {
        state.posts.push(post)
       },
       DELETE_POST(state, idPost) {
        state.posts.forEach((post,index) => {
            if (post._id === idPost) {
                state.posts.splice(index, 1)
            }
        })
       },
       UPDATE_POST(state, postEdited) {  
        state.posts.forEach((post,index) => {
            if (post._id === postEdited._id) {
                state.posts[index] = postEdited;
            }
        })
       }
    },
    actions: {
        async getPosts({ commit }) {
            try {
                const data = await axios.get('http://localhost:8000/api')
                commit("SET_POSTS", data.data.data)
            }
            catch (err) {
                console.log(err.message)
            }
        },
        async createNewPost(context, newPost) {
            try {
                const data = await axios.post('http://localhost:8000/api/create', newPost)
                context.commit("ADD_POST", data.data.data)
            }
            catch (err) {
                console.log(err.message)
            }
        },
        async deletePost(context, idPost) {
            try {
                await axios.delete(`http://localhost:8000/api/${idPost}`)
                context.commit("DELETE_POST", idPost)
            }
            catch (err) {
                console.log(err.message)
            }
        },
        async updatePost(context, postEdited) {
            try {
                let idPost = postEdited.id;
                let dataEdit = {name: postEdited.name};
                let data = await axios.patch(`http://localhost:8000/api/${idPost}`, dataEdit);
                context.commit("UPDATE_POST", data.data.data)
            }
            catch (err) {
                console.log(err.message)
            }
         }
    }
    })