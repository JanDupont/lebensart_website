<template>
	<DuoContentGrid bgColor="#010606" style="margin-top: 12px">
		<template v-slot:left_and_bottom>
			<img
				style="max-height: 500px; border-radius: 10px; max-width: 100%"
				src="../assets/img/LebensArt_Hermeskeil_Dupont_news.jpeg"
			/>
		</template>

		<template v-slot:right_and_top>
			<div align="left" style="min-width: 300px; max-width: 50%">
				<div class="topLine">{{ t("NewsPage.topLine") }}</div>
				<div class="heading">{{ t("NewsPage.heading") }}</div>
				<div class="dates-container">
					<div v-for="(date, index) in dates" :key="index" class="date-entry">
						<div class="date-day">{{ date.day }}</div>
						<div class="date-details">
							<span class="date-date">{{ date.date }}</span>
							<span class="date-separator">•</span>
							<span class="date-time">{{ date.time }}</span>
						</div>
					</div>
				</div>
			</div>
		</template>
	</DuoContentGrid>
</template>

<script setup lang="ts">
import DuoContentGrid from "./baseComponents/Duo_Content_Grid.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, tm } = useI18n();

const dates = computed(() => {
	const datesData: { day: string; date: string; time: string }[] = tm("NewsPage.dates");
	return Array.isArray(datesData) ? datesData : [];
});
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
	white-space: pre-line;
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
.dates-container {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 8px;
}
.date-entry {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.date-day {
	font-size: 14px;
	font-weight: 600;
	color: #cc1010;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}
.date-details {
	display: flex;
	align-items: center;
	gap: 12px;
	font-size: 18px;
	color: white;
}
.date-date {
	font-weight: 500;
}
.date-separator {
	color: #cc1010;
	font-weight: bold;
}
.date-time {
	font-weight: 300;
}
@media only screen and (max-width: 600px) {
	.newsImg {
		max-width: 300px;
	}
}
</style>
