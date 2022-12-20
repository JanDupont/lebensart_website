<template>
	<div
		class="ContentWrapper"
		style="position: relative; min-height: 80vh; width: 100%; margin: auto"
		:style="{ backgroundColor: props.bgColor }"
	>
		<slot name="topDivider"></slot>
		<v-row align="center" class="ContentRow pt-5" style="margin: auto">
			<v-col order="2" order-lg="1" cols="12" lg="6" align="center">
				<slot name="left_and_bottom"></slot>
			</v-col>
			<v-col order="1" order-lg="2" cols="12" lg="6" align="center">
				<slot name="right_and_top"></slot>
			</v-col>
		</v-row>
		<slot name="bottomDivider"></slot>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	bgColor: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss">
.ContentWrapper {
	@media screen and (max-height: 900px) {
		padding-top: 100px;
		padding-bottom: 150px;
	}
	@media screen and (max-width: 600px) {
		padding-top: 50px;
		padding-bottom: 70px;
	}
}
.ContentRow {
	min-height: 80vh;
	width: 100%;
	@media screen and (max-width: 600px) {
		height: 100%;
	}
}
</style>
