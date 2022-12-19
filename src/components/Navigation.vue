<template>
	<v-app-bar color="black">
		<template v-slot:prepend>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</template>

		<v-app-bar-title
			style="color: #cc1010"
			@click="scrollToTop"
			@mouseover="cursorPointer(true)"
			@mouseleave="cursorPointer(false)"
			>LebensArt Dupont Hermeskeil</v-app-bar-title
		>

		<v-spacer class="hidden-md-and-down"></v-spacer>

		<v-btn v-for="item in sidebarItems" class="app-bar-item hidden-md-and-down" @click="jump(item)">
			<v-icon class="mr-1">{{ item.icon }}</v-icon>
			<div class="text-h6">{{ item.title }}</div>
		</v-btn>

		<v-spacer class="hidden-md-and-down"></v-spacer>
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" color="black" bottom temporary>
		<v-list>
			<v-list-item
				v-for="item in sidebarItems"
				:key="item.value"
				class="ma-2"
				density="default"
				:prepend-icon="item.icon"
				:title="item.title"
				:active="item.active"
				:value="item.value"
				@click="jump(item)"
			></v-list-item
		></v-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let drawer = ref(false);

interface SidebarItem {
	icon: string;
	title: string;
	value: string;
	active: boolean;
}
const sidebarItems: SidebarItem[] = [
	{
		icon: "mdi-newspaper",
		title: "News",
		value: "news",
		active: false,
	},
	{
		icon: "mdi-gift",
		title: "Über Uns",
		value: "about",
		active: false,
	},
	{
		icon: "mdi-package-variant",
		title: "DHL-Paketshop",
		value: "dhl",
		active: false,
	},
	{
		icon: "mdi-shopping",
		title: "Sortiment",
		value: "sortiment",
		active: false,
	},
	{
		icon: "mdi-calendar-clock",
		title: "Öffnungszeiten",
		value: "öffnungszeiten",
		active: false,
	},
];
function jump(item: SidebarItem) {
	sidebarItems.forEach((i) => {
		i.active = item.value === i.value;
	});
	document.getElementById(item.value)?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
function cursorPointer(pointer: boolean) {
	if (pointer) {
		document.body.style.cursor = "pointer";
	} else {
		document.body.style.cursor = "default";
	}
}
onMounted(() => {
	sidebarItems.forEach((i) => {
		i.active = window.location.pathname.slice(1) === i.value;
	});
});
</script>

<style>
.activeNavItem {
	color: red;
}
@media only screen and (max-width: 1056px) {
	.app-bar-item {
		display: none;
	}
	.v-toolbar__prepend {
		display: flex;
	}
}
</style>
