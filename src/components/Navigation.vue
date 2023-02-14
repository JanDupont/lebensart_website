<template>
	<v-app-bar color="black">
		<template v-slot:prepend>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</template>

		<v-app-bar-title
			style="color: #cc1010; font-family: 'BudHand'; font-weight: bold; font-size: x-large"
			@click="scrollToTop"
			@mouseover="cursorPointer(true)"
			@mouseleave="cursorPointer(false)"
			>LebensArt</v-app-bar-title
		>

		<v-spacer class="hidden-md-and-down"></v-spacer>

		<v-btn v-for="item in sidebarItems" class="app-bar-item hidden-md-and-down" @click="jump(item)">
			<v-icon class="mr-1">{{ item.icon }}</v-icon>
			<div class="text-h6">{{ t("SidebarItem." + item.value) }}</div>
		</v-btn>

		<v-spacer class="hidden-md-and-down"></v-spacer>

		<LanguageToggle />
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" color="black" bottom temporary>
		<v-list>
			<v-list-item
				v-for="item in sidebarItems"
				:key="item.value"
				class="ma-2"
				density="default"
				:prepend-icon="item.icon"
				:title="t('SidebarItem.' + item.value)"
				:active="item.active"
				:value="item.value"
				@click="jump(item)"
			></v-list-item
		></v-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import LanguageToggle from "./baseComponents/LanguageToggle.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

let drawer = ref(false);

interface SidebarItem {
	icon: string;
	value: string;
	active: boolean;
}
const sidebarItems = ref<SidebarItem[]>([
	{
		icon: "mdi-newspaper",
		value: "news",
		active: false,
	},
	{
		icon: "mdi-gift",
		value: "about",
		active: false,
	},
	{
		icon: "mdi-package-variant",
		value: "dhl",
		active: false,
	},
	{
		icon: "mdi-shopping",
		value: "sortiment",
		active: false,
	},
	{
		icon: "mdi-calendar-clock",
		value: "öffnungszeiten",
		active: false,
	},
]);
function jump(item: SidebarItem) {
	sidebarItems.value.forEach((i) => {
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
	sidebarItems.value.forEach((i) => {
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
