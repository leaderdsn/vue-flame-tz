import { createWebHistory, createRouter } from 'vue-router'
import ThePeople from '@/views/peoples/ThePeople.vue'
import ThePeoples from '@/views/peoples/ThePeoples.vue'
import TheFavorites from '@/views/favorites/TheFavorites.vue'
import TheHome from '@/views/TheHome.vue'

const routes = [
	{
		path: '/',
		name: 'Главная',
		component: TheHome,
	},
	{
		path: '/peoples',
		name: 'Люди',
		component: ThePeoples,
		children: [
			{
				path: '/peoples/:id',
				component: ThePeople,
			},
		]
	},
	{
		path: '/favorites',
		name: 'Избранное',
		component: TheFavorites,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router