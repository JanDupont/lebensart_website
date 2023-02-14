<template>
	<DuoContentGrid bgColor="#010606" style="margin-top: 12px">
		<template v-slot:left_and_bottom>
			<div v-if="!showMap" class="öffnungszeitenMap d-flex align-center justify-center">
				<img src="../assets/img/fakeMap.png" class="öffnungszeitenMap" style="filter: brightness(17%)" />
				<div style="position: absolute">
					<div class="text-h5 text-white">{{ t("OpeningHoursPage.maps.headline") }}</div>
					<br />
					<div class="text-white">{{ t("OpeningHoursPage.maps.info1") }}</div>
					<div class="text-white">{{ t("OpeningHoursPage.maps.info2") }}</div>
					<br />
					<v-btn color="success" @click="showMap = !showMap">{{ t("OpeningHoursPage.maps.action") }}</v-btn>
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
				<div class="topLine">{{ t("OpeningHoursPage.topLine") }}</div>
				<div class="heading">{{ t("OpeningHoursPage.heading") }}</div>
				<div class="text-white">
					<strong>{{ t("OpeningHoursPage.days.1.short") }} </strong> {{ t("OpeningHoursPage.days.1.time") }}
					<br />
					<strong>{{ t("OpeningHoursPage.days.2.short") }} </strong> {{ t("OpeningHoursPage.days.2.time") }}
					<br />
					<strong>{{ t("OpeningHoursPage.days.3.short") }} </strong>{{ t("OpeningHoursPage.days.3.time") }}
					<br />
					<strong>{{ t("OpeningHoursPage.days.4.short") }} </strong>{{ t("OpeningHoursPage.days.4.time") }}
					<br />
					<br />
					<strong>{{ t("OpeningHoursPage.phone") }}</strong>
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
import { useI18n } from "vue-i18n";

const { t } = useI18n();

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
