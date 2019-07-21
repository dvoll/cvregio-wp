<template>
    <section class="cv-section alignwide">
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
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(290px, 310px));

    // @media screen and (min-width: 768px) {
    //     margin-left: -100px;
    //     margin-right: -100px;
    // }

    // @media screen and (min-width: 1168px) {
    //     margin-left: -160px;
    //     margin-right: -220px;
    // }

    > * {
        justify-self: center;
    }
}
</style>
