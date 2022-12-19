<template>
	<div class="heroContainer">
		<WaveDivider :divider-color="'#000000'" :top="true" />
		<WaveDivider :divider-color="'#010606'" :top="false" />
		<img src="../assets/img/LebensArt_Dupont_Hermeskeil_Header.jpg" class="heroImg" />
	</div>
</template>

<script setup lang="ts">
import WaveDivider from "../components/WaveDivider.vue";
</script>

<style>
.heroContainer {
	position: relative;
	height: 100vh;
	width: 100%;
}
.heroImg {
	height: 100vh;
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	filter: brightness(80%);
}
</style>
