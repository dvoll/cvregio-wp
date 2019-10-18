<template>
    <section class="cv-section alignfull">
        <cv-card-container :singleRow="true" :wider="true">
            <cv-card
                :wider="true"
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <div class="line-clamp-container">
                    <p class="">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                    </p>
                </div>
            </cv-card>
            <cv-card
                :wider="true"
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <p class="line-clamp">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor.
                </p>
            </cv-card>
            <cv-card
                :wider="true"
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <div></div>
            </cv-card>
            <cv-card
                :wider="true"
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/placeholder/05.jpg"
            >
                <div></div>
            </cv-card>
        </cv-card-container>
    </section>
</template>
<script>
import CvCard from '../static-components/cv-card.vue';
import CvCardContainer from '../static-components/cv-card-container.vue';

export default {
    components: {
        CvCard,
        CvCardContainer,
    },
};
</script>
