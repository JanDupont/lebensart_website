<template>
	<v-card class="infoBannerCard" color="black">
		<!-- cover -->
		<!-- <v-img class="infoBannerCardImg" src="/assets/img/LebensArt_Dupont_Hermeskeil_Frühling.jpg"></v-img> -->
		<div class="ma-2 text-h6 text-white">
			<!-- {{ t("InfoBanner.text1") }}
			<br />
			{{ t("InfoBanner.text2") }} -->
			folgende <span style="color: rgb(204, 16, 16)">Öffnungszeiten</span> in der Woche vom 4-8 Juli:
			<br />
			<v-row v-for="tag in öffnungszeiten" class="ma-0 mt-1">
				<v-col cols="12" md="2" class="pa-0" style="color: rgb(204, 16, 16)">
					{{ tag.tag }}
				</v-col>
				<v-col cols="12" md="6" class="pa-0">
					{{ tag.öffnungszeiten }}
				</v-col>
			</v-row>
		</div>
	</v-card>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const öffnungszeiten = [
	{
		tag: "Di:",
		öffnungszeiten: "10-12 Uhr",
	},
	{
		tag: "Mi:",
		öffnungszeiten: "Geschlossen",
	},
	{
		tag: "Do:",
		öffnungszeiten: "10-12 Uhr",
	},
	{
		tag: "Fr:",
		öffnungszeiten: "10-12 Uhr & 17-19 Uhr",
	},
	{
		tag: "Sa:",
		öffnungszeiten: "10-12 Uhr",
	},
];
</script>

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
