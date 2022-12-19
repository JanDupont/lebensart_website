import { createRouter, createWebHistory } from "vue-router";

import LebensArt from "../views/LebensArt.vue";
import Impressum from "../views/Impressum.vue";

const routes = [
	{
		path: "/",
		name: "LebensArt",
		component: LebensArt,
	},
	{
		path: "/impressum",
		name: "Impressum",
		component: Impressum,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
