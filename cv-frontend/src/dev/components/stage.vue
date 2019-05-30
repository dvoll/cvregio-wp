<template>
    <cv-stage>
        <div v-for="(item, index) in items" :key="item.title" class="cv-stage__item cv-stage-card">
            <div
                class="cv-stage-card__bg"
                data-background-url="./placeholder/05.jpg"
                :style="'background-image: url(./placeholder/0' + (index + 1) + '.jpg)'"
            ></div>
            <div class="cv-stage-card__overlay"></div>
            <div class="cv-stage-card__body">
                <div class="cv-stage-card__title-wrapper">
                    <p class=" cv-stage-card__title">{{ item.title }}</p>
                </div>
                <div class="cv-stage-card__description">
                    {{ item.description }}
                </div>
                <div class="cv-stage-card__link">
                    <a v-if="item.link" href="/">{{ item.link }}</a>
                </div>
            </div>
        </div>
    </cv-stage>
</template>

<script>
//@ts-check
const stage = {
    data() {
        return {
            items: [
                {
                    title: 'Willkommen im CVJM Kirchlengern',
                    description:
                        'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt',
                    link: 'Zum Artikel',
                },
                {
                    title: 'Martinssinger spenden an Lichtblicke',
                    description: 'Es gibt im Moment in diese Mannschaft',
                },
                {
                    title: 'Willkommen im CVJM Kirchlengern',
                    description: 'Dies ist ein Typoblindtext.',
                    link: 'Zur Seite',
                },
                {
                    title: 'Martinssinger spenden an Lichtblicke',
                    description: 'Es gibt im Moment in diese Mannschaft',
                },
                {
                    title: 'Willkommen',
                    description:
                        'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt',
                    link: 'Zum Artikel',
                },
                {
                    title: 'Martinssinger spenden an Lichtblicke',
                    description: 'Es gibt im Moment in diese Mannschaft',
                },
            ],
        };
    },
};
export default stage;
</script>

<style lang="scss" >
</style>