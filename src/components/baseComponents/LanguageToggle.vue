<template>
    <button class="mr-5" @click="changeLanguage">
        <v-icon :icon="mdiWeb" color="#cc1010" />
        <span style="color: #cc1010; font-size: large; font-weight: bold">{{ locale }}</span>
    </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { mdiWeb } from '@mdi/js';

const { locale } = useI18n();

function changeLanguage() {
    locale.value = locale.value === 'de' ? 'en' : 'de';
}
</script>
