<template>
    <section class="cv-section alignfull">
        <cv-card-container :singleRow="true" :wider="true" :fixedHeight="false">
            <cv-card
                :fixedHeight="true"
                :wider="true"
                title="Jungscharwochenende der Mädchenjungschar"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/05.jpg"
            >
                <div class="">
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
                :fixedHeight="true"
                :wider="true"
                title="Dem Regen getrotzt und eine Rekordsumme eingesammelt"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/01.jpg"
            >
                <p class="">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor.
                </p>
            </cv-card>
            <cv-card
                :fixedHeight="true"
                :wider="true"
                title="Unsere neue Website"
                subtitle="Allgemein - 22. Juli 2019"
            >
                <!-- imgSrc="/images/02.jpg" -->
                <div>
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
                :fixedHeight="true"
                :wider="true"
                title="Unsere neue Website mit einem langem Titel"
                subtitle="Allgemein - 22. Juli 2019"
                imgSrc="/images/03.jpg"
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
