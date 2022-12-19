<template>
	<DuoContentGrid bgColor="#cfbea5" style="margin-top: 12px">
		<template v-slot:topDivider>
			<WaveDivider :divider-color="'#010606'" :top="true" />
		</template>

		<template v-slot:left_and_bottom>
			<img class="aboutImg" src="../assets/img/Gift.svg" />
		</template>

		<template v-slot:right_and_top>
			<div align="left" style="min-width: 300px; max-width: 50%">
				<div class="topLine">{{ topLine }}</div>
				<div class="heading text-black">{{ heading }}</div>
				<div class="subtitle text-black" style="white-space: pre-wrap">{{ subtitle }}</div>
			</div>
		</template>

		<template v-slot:bottomDivider>
			<WaveDivider :divider-color="'#010606'" :top="false" />
		</template>
	</DuoContentGrid>
</template>

<script setup lang="ts">
import DuoContentGrid from "./baseComponents/Duo_Content_Grid.vue";
import WaveDivider from "../components/WaveDivider.vue";

const topLine = "Herzlich Willkommen";
const heading = "Bei uns finden Sie für jeden Anlass das passende Geschenk.";
const subtitle = `Spirituosen, Liköre, Wein, Essige, Öle, Feinkost, Dips, Gewürzmischungen, Pasta, Pesto, Fruchtaufstriche, Tee, Pralinen, Schokoladen, Deko, individuelle Präsentkörbe und vieles mehr...\n\nAm 1.7.2008 haben wir, Silvia und Martin Dupont, das 1. Feinkost-Deko-Geschenke-Geschäft in Hermeskeil, Rosenweg 12, eröffnet.`;
</script>

<style scoped>
.aboutImg {
	max-height: 400px;
}
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
	max-width: 430px;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
}
@media only screen and (max-width: 600px) {
	.aboutImg {
		margin-top: 50px;
		max-height: 180px;
	}
}
</style>
