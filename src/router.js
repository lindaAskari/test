import { createRouter, createWebHistory } from 'vue-router';


import HomeComponent from './pages/HomeComponent.vue';


import IndexComponent from './pages/users/indexComponent.vue';
import ShowComponent from './pages/users/ShowComponent.vue';
import TemplateComponent from './pages/users/TemplateComponent.vue'

import TemplatePost from './pages/posts/TemplatePost.vue';
import IndexPost from './pages/posts/IndexPost.vue';
import ShowPost from './pages/posts/ShowPost.vue';
import CreatePost from './pages/posts/CreatePost.vue';
import EditPost from './pages/posts/EditPost.vue';


const routes = [
    { path: "/", name: "home", component: HomeComponent },
    {
        path: '/users', name: 'userTemplate', component: TemplateComponent, children: [
            { path: '', name: 'users', component: IndexComponent },
            { path: ':id', name: 'userId', component: ShowComponent }
        ]
    },
    {
        path: '/posts', name: 'postTemplate', component: TemplatePost, children: [
            { path: '', name: 'posts', component: IndexPost },
            { path: ':id', name: 'postId', component: ShowPost },
            { path: 'create', name: 'createPost', component: CreatePost },
            { path: 'edit/:id', name: 'editPost', component: EditPost }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;