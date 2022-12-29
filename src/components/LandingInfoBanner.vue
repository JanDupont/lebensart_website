<template>
	<v-card class="infoBannerCard" color="black">
		<v-img
			class="infoBannerCardImg"
			src="/assets/img/LebensArt_Dupont_Hermeskeil_infoImg_Silvester.jpg"
			cover
		></v-img>
		<div class="ma-2 text-h6 text-white">
			Öffnungszeiten bis Silvester:
			<br />
			<br />
			<strong>Fr</strong> (30.12): 10-11:30 & 15-19:00
			<br />
			<strong>Sa</strong> (31.12): 10-12:00 Uhr
		</div>
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
.infoBannerCardImg {
	height: 200px;
	@media screen and (max-width: 600px) {
		height: 130px;
	}
}
</style>
