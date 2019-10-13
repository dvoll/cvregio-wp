<template>
    <section class="">
        <cv-related-associates
            contactHeading="Haben Sie fragen?"
            contactLinKlabel="Nachricht schreiben"
            contactLinkSrc="#"
        >
            <template slot="contact-associates">
                <cv-associate headline="Eva Musterfrau" subline="Leitung" imgSrc="/" />
            </template>
            <template slot="associates">
                <cv-associate headline="Eva Musterfrau" subline="Mitarbeiter" imgSrc="/" />
                <cv-associate headline="Max Muster" subline="Mitarbeiter" imgSrc="/" />
                <cv-associate
                    headline="Maxxie Muster-Musterfrau"
                    subline="Mitarbeiter"
                    imgSrc="/"
                />
                <cv-associate headline="Eva Musterfrau" subline="Mitarbeiter" imgSrc="/" />
                <cv-associate headline="Max Muster" subline="Mitarbeiter" imgSrc="/" />
            </template>
        </cv-related-associates>
    </section>
</template>

<script>
import CvRelatedAssociates from '../static-components/cv-related-associates.vue';
import CvAssociate from '../static-components/cv-associate.vue';

export default {
    components: {
        CvRelatedAssociates,
        CvAssociate,
    },
};
</script>

<style lang="scss">
</style>