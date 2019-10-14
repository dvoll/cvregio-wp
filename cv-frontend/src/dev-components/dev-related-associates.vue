<template>
    <section class="">
        <cv-related-associates
            contactHeading="Haben Sie fragen? Max und Eva freuen sich auf Ihre Nachricht!"
            contactLinKlabel="Nachricht schreiben"
            contactLinkSrc="#"
        >
            <template slot="contact-associates">
                <cv-associate
                    headline="Eva Musterfrau"
                    subline="Leitung"
                    imgSrc="https://picsum.photos/70/70"
                />
            </template>
            <template slot="associates">
                <cv-associate
                    headline="Eva Musterfrau"
                    subline="Mitarbeiter"
                    imgSrc="https://picsum.photos/70/70"
                />
                <cv-associate
                    headline="Max Muster"
                    subline="Mitarbeiter"
                    imgSrc="https://picsum.photos/70/70"
                />
                <cv-associate
                    headline="Maxxie Muster-Musterfrau"
                    subline="Mitarbeiter"
                    imgSrc="https://picsum.photos/70/70"
                />
                <cv-associate
                    headline="Eva Musterfrau"
                    subline="Mitarbeiter"
                    imgSrc="https://picsum.photos/70/70"
                />
                <cv-associate
                    headline="Max Muster"
                    subline="Mitarbeiter"
                    imgSrc="https://picsum.photos/70/70"
                />
                <cv-associate
                    headline="Eva Musterfrau"
                    subline="Mitarbeiter"
                    imgSrc="https://picsum.photos/70/70"
                />
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
