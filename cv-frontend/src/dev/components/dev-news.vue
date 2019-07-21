<template>
    <section class="cv-section">
        <h2>Neuigkeiten</h2>
        <div class="cv-news">
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor.
                </p>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <div></div>
            </cv-card>
            <cv-card
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <div></div>
            </cv-card>
        </div>
    </section>
</template>
<script>
import CvCard from '../static-components/cv-card.vue';

export default {
    components: { CvCard },
};
</script>
<style lang="scss">
.cv-news {
    display: grid;
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(290px, 310px));

    @media screen and (min-width: 768px) {
        margin-left: -100px;
        margin-right: -100px;
    }

    > * {
        justify-self: center;
    }
}
</style>
