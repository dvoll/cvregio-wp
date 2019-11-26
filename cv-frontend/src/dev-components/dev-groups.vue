<template>
    <section class="cv-section alignfull">
        <cv-card-container>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor.
                </p>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <info-row label="Teilnehmer" title="Jungen von 7 bis 12 Jahren" iconName="edit" />
                <info-row label="Zeit" title="samstags, 15 - 17 Uhr" iconName="edit" />
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <div></div>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <div></div>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor.
                </p>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <div></div>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <div></div>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <div></div>
            </cv-card>
        </cv-card-container>
    </section>
</template>
<script>
import CvCard from '../static-components/cv-card.vue';
import CvCardContainer from '../static-components/cv-card-container.vue';
import InfoRow from '../static-components/info-row.vue';

export default {
    components: {
        CvCard,
        CvCardContainer,
        InfoRow,
    },
};
</script>
<style lang="scss"></style>
