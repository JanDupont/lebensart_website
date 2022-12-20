<template>
	<v-footer class="bg-orange-lighten-2 text-center d-flex flex-column">
		<div class="d-flex">
			<v-btn
				class="mx-4"
				icon="mdi-facebook"
				variant="text"
				href="https://www.facebook.com/LebensartHermeskeil/"
				target="_blank"
			></v-btn>
			<v-btn
				class="mx-4"
				icon="mdi-instagram"
				variant="text"
				href="https://www.instagram.com/lebensarthermeskeil/?hl=de"
				target="_blank"
			></v-btn>
		</div>

		<div class="text-h6">Adresse</div>
		<p>Rosenweg 12</p>
		<p>54411 Hermeskeil</p>
		<p>info@lebensart-dupont.de</p>
		<p>06503/8933</p>

		<a href="/impressum">Impressum & Datenschutz</a>

		<div><strong>LebensArt</strong> © {{ new Date().getFullYear() }} — All rights reserved.</div>

		<div>
			Website by Jan Dupont
			<v-btn
				icon="mdi-github"
				variant="text"
				href="https://github.com/JanDupont"
				target="_blank"
				style="margin-left: -15px"
			></v-btn>
		</div>
	</v-footer>
</template>

<script setup lang="ts"></script>
