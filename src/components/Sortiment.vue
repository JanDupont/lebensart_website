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

import BrändeImg from "../assets/img/LebensArt_Dupont_Brände.jpg";
import FeinkostImg from "../assets/img/LebensArt_Dupont_Feinkost.jpg";
import EssigÖlImg from "../assets/img/LebensArt_Dupont_Essig_Öl.jpg";
import PastaPestoImg from "../assets/img/LebensArt_Dupont_Nudeln.jpg";
import DipsImg from "../assets/img/LebensArt_Dupont_Dips.jpg";
import SenfImg from "../assets/img/LebensArt_Dupont_Senf.jpg";
import PralinenImg from "../assets/img/LebensArt_Dupont_Pralinen.jpeg";
import TeeImg from "../assets/img/LebensArt_Dupont_Tee.jpg";
import NachhaltigImg from "../assets/img/LebensArt_Dupont_Spueltuch.jpg";
import DekoImg from "../assets/img/LebensArt_Dupont_Deko.jpg";
import TischdekoImg from "../assets/img/LebensArt_Dupont_Tischdeko.jpg";
import SchmuckImg from "../assets/img/LebensArt_Dupont_Trendschmuck.jpeg";
import GutscheinImg from "../assets/img/LebensArt_Dupont_Gutschein.jpeg";
import VerpackungImg from "../assets/img/LebensArt_Dupont_Verpackung.jpg";

const items = [
	{ src: BrändeImg, title: "Spirituosen | Brände | Liköre" },
	{ src: FeinkostImg, title: "Feinkost" },
	{ src: EssigÖlImg, title: "Essig | Öl" },
	{ src: PastaPestoImg, title: "Pasta | Pesto" },
	{ src: DipsImg, title: "Dips | Gewürzmischungen" },
	{ src: SenfImg, title: "Senfe | Senfmühle" },
	{ src: PralinenImg, title: "Pralinen | Schokoladen" },
	{ src: TeeImg, title: "Tee | Zubehör" },
	{ src: NachhaltigImg, title: "nachhaltig | vegan" },
	{ src: DekoImg, title: "Deko" },
	{ src: TischdekoImg, title: "Tischdeko" },
	{ src: SchmuckImg, title: "Trendschmuck" },
	{ src: GutscheinImg, title: "Gutscheine" },
	{ src: VerpackungImg, title: "Verpackungsservice" },
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
