<template>
	<Navigation app />
	<div id="lebensart" width="100%" style="background-color: #010606">
		<Landing />
		<News id="news" />
		<About id="about" />
		<DHL id="dhl" />
		<Sortiment id="sortiment" />
		<OpeningHours id="öffnungszeiten" />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Navigation from "../components/Navigation.vue";
import Landing from "../components/Landing.vue";
import News from "../components/News.vue";
import About from "../components/About.vue";
import DHL from "../components/DHL.vue";
import Sortiment from "../components/Sortiment.vue";
import OpeningHours from "../components/OpeningHours.vue";
import Footer from "../components/Footer.vue";
</script>
