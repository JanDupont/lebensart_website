<template>
	<DuoContentGrid bgColor="#010606" style="margin-top: 12px">
		<template v-slot:left_and_bottom>
			<div v-if="!showMap" class="öffnungszeitenMap d-flex align-center justify-center">
				<img src="../assets/img/fakeMap.png" class="öffnungszeitenMap" style="filter: brightness(17%)" />
				<div style="position: absolute">
					<div class="text-h5 text-white">Google Maps verwenden</div>
					<br />
					<div class="text-white">Dabei werden dazu relevante Daten</div>
					<div class="text-white">an Google weitergeleitet</div>
					<br />
					<v-btn color="success" @click="showMap = !showMap">Zustimmen</v-btn>
				</div>
			</div>

			<iframe
				v-if="showMap"
				class="öffnungszeitenMap"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.1977340560356!2d6.939151315923227!3d49.650573452554276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795852c7489513f%3A0x289e6d154a452c4e!2sLebensArt%20Dupont!5e0!3m2!1sen!2sde!4v1614959962859!5m2!1sen!2sde"
				height="400px"
				width="400px"
				frameborder="0"
				scrolling="no"
				loading="lazy"
			/>
			<div>Hi</div>
		</template>

		<template v-slot:right_and_top>
			<div align="left" style="min-width: 300px; max-width: 50%">
				<div class="topLine">{{ topLine }}</div>
				<div class="heading">{{ heading }}</div>
				<div class="text-white">
					<strong>Di, Do, Fr: </strong> 10.00-11:30 Uhr und 15:00-19:00 Uhr
					<br />
					<strong>Mi: </strong>10:00-11:30 Uhr
					<br />
					<strong>Sa: </strong>10:00-12:00 Uhr
					<br />
					<br />
					<strong>Tel.: 06503/8933</strong>
					<br />
					<br />
					<strong>Corona-Situation</strong>
					<br />
					Entsprechende Hygienevorkehrungen sind getroffen.
					<br />
					Halten Sie bitte Abstand.
					<br />
					Mundschutz- /Nasenbedeckungen ausschließlich OP-Masken und FFP2-Masken tragen!
					<br />
					Vielen Dank für Ihr Verständnis.
					<br />
					Bleiben Sie gesund!
				</div>
			</div>
		</template>
		<template v-slot:bottomDivider>
			<WaveDivider :divider-color="'#ffb74d'" :top="false" />
		</template>
	</DuoContentGrid>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DuoContentGrid from "./baseComponents/Duo_Content_Grid.vue";
import WaveDivider from "./WaveDivider.vue";

let topLine = "SO ERREICHEN SIE UNS";
let heading = "Öffnungszeiten";

const showMap = ref<boolean>(false);
</script>

<style scoped lang="scss">
.öffnungszeitenMap {
	width: 400px;
	height: 400px;
	@media screen and (max-width: 480px) {
		width: 280px;
		height: 280px;
	}
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
</style>
