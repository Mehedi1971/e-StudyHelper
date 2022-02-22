import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Links from '../views/Links.vue'
import CourseMaterials from '../views/CourseMaterials.vue'
import Forum from '../views/Forum.vue'
import EditProfile from '../views/EditProfile.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import QuestionBank from '../views/QuestionBank.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/links',
    name: 'Links',
    component: Links,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/updateprofile/:id',
    name: 'UpdateProfile',
    component: UpdateProfile,
  },
  {
    path: '/questionBank',
    name: 'QuestionBank',
    component: QuestionBank,
  },
  {
    path: '/coursematerials',
    name: 'CourseMaterials',
    component: CourseMaterials,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
