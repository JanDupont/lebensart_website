<template>
	<DuoContentGrid bgColor="#010606" style="margin-top: 12px">
		<template v-slot:topDivider>
			<WaveDivider :divider-color="'#010606'" :top="true" />
		</template>

		<template v-slot:left_and_bottom>
			<img class="DHLImg" src="../assets/img/DHL.svg" />
		</template>

		<template v-slot:right_and_top>
			<div align="left" style="min-width: 300px; max-width: 50%">
				<div class="topLine">{{ topLine }}</div>
				<div class="heading">{{ heading }}</div>
				<div class="subtitle">
					<v-card color="#ffcc01" class="mb-1">
						<v-card-text>
							<v-icon icon="mdi-package-variant-closed"></v-icon>
							Pakete, Päckchen, Retouren abgeben
						</v-card-text>
					</v-card>
					<v-card color="#ffcc01" class="mb-1">
						<v-card-text>
							<v-icon icon="mdi-postage-stamp"></v-icon>
							Briefmarken, Paketmarken kaufen
						</v-card-text>
					</v-card>
					<v-card color="#ffcc01" class="mb-1">
						<v-card-text>
							<v-icon icon="mdi-printer"></v-icon>
							Paket/ Retouren label drucken
						</v-card-text>
					</v-card>
					<v-card color="success" href="https://www.dhl.de/de/privatkunden.html" target="_blank">
						<div class="text-h6 ma-2" style="text-align: center">
							<v-icon icon="mdi-cube-send"></v-icon>
							Pakete direkt zu uns senden
						</div>
						<div class="d-flex align-center">
							<v-icon icon="mdi-cursor-default-click" width="100%" class="mx-auto"></v-icon>
						</div>
						<v-card-text style="text-align: center">Straßen Name: 422 LebensArt Hermeskeil </v-card-text>
					</v-card>
				</div>
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

const topLine = "Vor Ort";
const heading = "DHL-Paketshop";
</script>

<style scoped>
.DHLContainer {
	position: relative;
	margin-top: 12px;
	height: 80vh;
	width: 100%;
	background-color: #010606;
}
.DHLImg {
	max-height: 300px;
}
.DHLLink {
	color: #ffcc01;
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
	.DHLImg {
		margin-top: 50px;
		max-height: 180px;
	}
}
</style>
