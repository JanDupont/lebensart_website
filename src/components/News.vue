<template>
	<DuoContentGrid bgColor="#010606" style="margin-top: 12px">
		<template v-slot:left_and_bottom>
			<img style="max-height: 500px" src="../assets/img/LebensArt_Hermeskeil_Dupont_News_Schild.jpg" />
		</template>

		<template v-slot:right_and_top>
			<div align="left" style="min-width: 300px; max-width: 50%">
				<div class="topLine">News</div>
				<div class="heading">Neues</div>
				<div class="subtitle">
					Wir wünschen ein <br />
					GUTES <br />
					NEUES JAHR 🍀🍀🍀
				</div>
			</div>
		</template>
	</DuoContentGrid>
</template>

<script setup lang="ts">
import DuoContentGrid from "./baseComponents/Duo_Content_Grid.vue";
const text = "Wir wünschen ein\nGUTES\nNEUES JAHR 🍀🍀🍀";
</script>

<style lang="scss">
.topLine {
	color: #cc1010;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
}
.subtitle {
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	color: white;
}
.heading {
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: white;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
}
@media only screen and (max-width: 600px) {
	.newsImg {
		max-width: 300px;
	}
}
</style>
