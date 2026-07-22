<template>
    <button class="mr-5" @click="changeLanguage">
        <v-icon color="#cc1010">mdi-web</v-icon>
        <span style="color: #cc1010; font-size: large; font-weight: bold">{{ locale }}</span>
    </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function changeLanguage() {
    locale.value = locale.value === 'de' ? 'en' : 'de';
}
</script>
