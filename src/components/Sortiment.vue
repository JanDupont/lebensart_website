<template>
	<div class="sortimentContainer">
		<WaveDivider :divider-color="'#010606'" :top="true" />
		<v-row align="center" justify="center" style="height: 100%; width: 80%; margin: auto; padding: 80px 0">
			<v-card v-for="index in 14" :key="index" width="400" class="ma-2">
				<v-img
					height="200"
					:src="t('SortimentPage.' + String(index) + '.src')"
					cover
					class="text-white"
				></v-img>
				<v-card-text style="background-color: #010606">
					<div class="font-weight-bold text-white text-h6">
						{{ t("SortimentPage." + String(index) + ".title") }}
					</div>
				</v-card-text>
			</v-card>
		</v-row>
		<WaveDivider :divider-color="'#010606'" :top="false" />
	</div>
</template>

<script setup lang="ts">
import WaveDivider from "../components/WaveDivider.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
