import Vue from 'vue'
import VueRouter from 'vue-router'
/* import { component } from 'vue/types/umd' */

const Entry = () => import('@/views/Wuchanghui/Entry')
const Home = () => import('@/views/Wuchanghui/home/Home')
const Intro = () => import('@/views/Intro')
const Profile = () => import('@/views/Wuchanghui/profile/Profile')
const FrontEnd = () => import('@/views/Front-end')
const BackEnd = () => import('@/views/Back-end')

const UserInfo = () => import('@/views/Wuchanghui/profile/UserInfo')
const Progress = () => import('@/views/Wuchanghui/profile/Progress')
const MeetingAppoint = () => import('@/views/Wuchanghui/profile/MeetingAppoint')
const Groups = () => import('@/views/Wuchanghui/profile/Groups')

Vue.use(VueRouter)

const profChildren = [
    {
        path: '',
        redirect: 'userInfo'
    },
    {
        path: 'userInfo',
        component: UserInfo
    },
    {
        path: 'progress',
        component: Progress
    },
    {
        path: 'meetingAppoint',
        component: MeetingAppoint
    },
    {
        path: 'groups',
        component: Groups
    }
]

const routes = [{
        path: '/',
        redirect: '/start'
    },
    {
        path: '/start',
        component: Entry
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/intro',
        component: Intro
    },
    {
        path: '/profile',
        component: Profile,
        children: profChildren
    },
    {
        path: '/front-end',
        component: FrontEnd
    },
    {
        path: '/back-end',
        component: BackEnd
    },
    {
        path: '/loginReg',
        name: 'loginReg',
        component: resolve => (require(["../views/login/loginReg.vue"], resolve)),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

//解决路径重复报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

