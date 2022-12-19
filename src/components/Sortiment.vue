<template>
	<div class="sortimentContainer">
		<WaveDivider :divider-color="'#010606'" :top="true" />
		<v-row align="center" justify="center" style="height: 100%; width: 80%; margin: auto; padding: 80px 0">
			<v-card v-for="item in items" width="400" class="ma-2">
				<v-img height="200" :src="item.src" cover class="text-white"></v-img>
				<v-card-text style="background-color: #010606">
					<div class="font-weight-bold text-white text-h6">{{ item.title }}</div>
				</v-card-text>
			</v-card>
		</v-row>
		<WaveDivider :divider-color="'#010606'" :top="false" />
	</div>
</template>

<script setup lang="ts">
import WaveDivider from "../components/WaveDivider.vue";

const items = [
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Brände.jpg", title: "Spirituosen | Brände | Liköre" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Feinkost.jpg", title: "Feinkost" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Essig_Öl.jpg", title: "Essig | Öl" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Nudeln.jpg", title: "Pasta | Pesto" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Dips.jpg", title: "Dips | Gewürzmischungen" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Senf.jpg", title: "Senfe | Senfmühle" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Pralinen.jpeg", title: "Pralinen | Schokoladen" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Tee.jpg", title: "Tee | Zubehör" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Spueltuch.jpg", title: "nachhaltig | vegan" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Deko.jpg", title: "Deko" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Tischdeko.jpg", title: "Tischdeko" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Trendschmuck.jpeg", title: "Trendschmuck" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Gutschein.jpeg", title: "Gutscheine" },
	{ src: "src/assets/img/sortiment/LebensArt_Dupont_Verpackung.jpg", title: "Verpackungsservice" },
];
</script>

<style scoped lang="scss">
.sortimentContainer {
	position: relative;
	min-height: 80vh;
	width: 100%;
	margin-top: 12px;
	background-color: #cfbea5;
	@media screen and (max-width: 600px) {
		padding-top: 50px;
		padding-bottom: 70px;
	}
}
.sortimentImage {
	width: 200px;
	height: auto;
}
</style>
