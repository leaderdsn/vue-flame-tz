import { createWebHistory, createRouter } from 'vue-router'
import ThePeople from '@/views/peoples/ThePeople.vue'
import ThePeoples from '@/views/peoples/ThePeoples.vue'
import TheFavorites from '@/views/favorites/TheFavorites.vue'
import TheHome from '@/views/TheHome.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: TheHome,
		meta: {
			menu: true
		}
	},
	{
		path: '/peoples',
		name: 'Peoples',
		component: ThePeoples,
		meta: {
			menu: true
		},
	},
	{
		path: '/people/:id',
		name: 'People',
		component: ThePeople,
	},
	{
		path: '/favorites',
		name: 'Favorites',
		component: TheFavorites,
		meta: {
			menu: true
		}
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
})

export default router