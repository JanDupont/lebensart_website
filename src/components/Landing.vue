<template>
	<div class="heroContainer">
		<WaveDivider :divider-color="'#000000'" :top="true" />
		<WaveDivider :divider-color="'#010606'" :top="false" />
		<img src="../assets/img/LebensArt_Dupont_Hermeskeil_Header.png" class="heroImg" />
		<!-- <InfoBanner /> -->
		<!-- <v-snackbar v-model="snackbar" color="info" :timeout="-1" multi-line location="top" style="margin-top: 100px">
			<h2>Aktionstage Bratwurstsenf</h2>
			Donnerstag & Freitag (3-4 April) 10-12 & 15-18 Uhr
			<br />
			Samstag 10-12 Uhr
			<template #actions>
				<v-btn icon="mdi-close" @click="snackbar = false"> </v-btn>
			</template>
		</v-snackbar> -->
	</div>
</template>

<script setup lang="ts">
import WaveDivider from "../components/WaveDivider.vue";
import InfoBanner from "./LandingInfoBanner.vue";

import { ref } from "vue";
const snackbar = ref(true);
</script>

<style>
.heroContainer {
	position: relative;
	height: 100vh;
	width: 100%;
}
.heroImg {
	height: 100vh;
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	filter: brightness(80%);
}
</style>
