<template>
    <v-card class="infoBannerCard" color="black">
        <!-- cover -->
        <div class="ma-2 pa-6 text-h6 text-white">
            Wegen Krankheit geschlossen, Pakete können trotzdem abgeholt werden.
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.infoBannerCard {
    position: absolute;
    top: 10%;
    left: calc(95vw - 400px);
    z-index: 10;
    width: 400px;
    @media screen and (max-width: 600px) {
        top: 5%;
        left: calc(47vw - 150px);
        width: 300px;
    }
}
.infoBannerCardImg {
    height: 200px;
    @media screen and (max-width: 600px) {
        height: 130px;
    }
}
</style>
