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

				<!-- Special Hours Section -->
				<div v-if="specialHours && specialHours.length > 0" class="special-hours-container">
					<div v-for="(item, index) in specialHours" :key="'special-' + index" class="hours-row special">
						<div class="day-col">
							<v-icon color="#cc1010" size="small" class="mr-2">mdi-calendar-alert</v-icon>
							{{ item.label }}
						</div>
						<div class="time-col">{{ item.time }}</div>
					</div>
				</div>

				<!-- Regular Hours List -->
				<div class="hours-list">
					<div v-for="(day, key) in days" :key="key" class="hours-row">
						<div class="day-col">{{ day.short }}</div>
						<div class="time-col">{{ day.time }}</div>
					</div>
				</div>

				<div class="phone-row">
					<a :href="`tel:${phoneNumberRaw}`" class="phone-link">
						<v-icon color="white" class="mr-2">mdi-phone</v-icon>
						{{ t("OpeningHoursPage.phone") }}
					</a>
				</div>
			</div>
		</template>
		<template v-slot:bottomDivider>
			<WaveDivider :divider-color="'#ffb74d'" :top="false" />
		</template>
	</DuoContentGrid>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import DuoContentGrid from "./baseComponents/Duo_Content_Grid.vue";
import WaveDivider from "./WaveDivider.vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const showMap = ref<boolean>(false);

const days = computed(() => {
	const data = tm("OpeningHoursPage.days") as any;
	return typeof data === "object" ? data : {};
});

const specialHours = computed(() => {
	const data = tm("OpeningHoursPage.specialHours") as any;
	return Array.isArray(data) ? data : [];
});

const phoneNumberRaw = computed(() => {
	const phoneStr = t("OpeningHoursPage.phone");
	return phoneStr.replace(/[^0-9+]/g, '');
});
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

.hours-list {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 24px;
}

.special-hours-container {
	margin-bottom: 20px;
	padding: 10px;
	border: 2px solid #cc1010;
	border-radius: 8px;
	background-color: rgba(204, 16, 16, 0.15);
	animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
	0% {
		box-shadow: 0 0 0 0 rgba(204, 16, 16, 0.8);
	}
	70% {
		box-shadow: 0 0 0 12px rgba(204, 16, 16, 0);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(204, 16, 16, 0);
	}
}

.hours-row {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	padding-bottom: 4px;

	&.special {
		border-bottom: none;
		padding-bottom: 0;

		.day-col {
			color: #ff4d4d; /* Brighter red for special alerts */
		}
		.time-col {
			font-weight: bold;
		}
	}
}

.day-col {
	color: #cc1010;
	font-weight: 700;
	font-size: 18px;
	min-width: 80px;
}

.time-col {
	color: white;
	font-size: 18px;
	text-align: right;
}

.phone-row {
	margin-top: 24px;
	display: flex;
	justify-content: flex-start;
}

.phone-link {
	display: inline-flex;
	align-items: center;
	color: white;
	font-size: 18px;
	font-weight: 600;
	text-decoration: none;
	padding: 10px 20px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 50px;
	transition: all 0.3s ease;
	background-color: rgba(255, 255, 255, 0.05);

	&:hover {
		background-color: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.5);
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(0);
	}
}
</style>
