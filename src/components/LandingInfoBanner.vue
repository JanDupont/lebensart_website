<template>
	<v-card class="infoBannerCard" color="black">
		<v-img src="/assets/img/LebensArt_Dupont_Hermeskeil_infoImg.jpg" height="200px" cover></v-img>
		<v-card-title class="text-white"> Wir wünschen schöne Weihnachten </v-card-title>
	</v-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.infoBannerCard {
	position: absolute;
	top: 10%;
	left: calc(95vw - 400px);
	z-index: 10;
	width: 400px;
	@media screen and (max-width: 600px) {
		top: 5%;
		left: calc(47vw - 150px);
		width: 300px;
	}
}
</style>
