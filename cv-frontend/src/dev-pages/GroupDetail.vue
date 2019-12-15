<template>
    <dev-page-layout>
        <template slot="header">
            <dev-header />
            <!-- TODO: Add breadcrump -->
        </template>
        <dev-page-content>
            <template slot="featuredImage">
                <figure class="post-thumbnail">
                    <img
                        width="1200"
                        height="600"
                        src="/images/01.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                        alt=""
                    />
                </figure>
                <!-- srcset="
                    http://192.168.178.199:8082/wp-content/uploads/2019/08/02-1200x600.jpg 1568w,
                    http://192.168.178.199:8082/wp-content/uploads/2019/08/02-1024x680.jpg 1024w,
                    http://192.168.178.199:8082/wp-content/uploads/2019/08/02-768x510.jpg   768w,
                    http://192.168.178.199:8082/wp-content/uploads/2019/08/02-300x199.jpg   300w
                "
                sizes="(max-width: 1568px) 100vw, 1568px" -->
            </template>
            <template slot="header">
                <cv-intro-box>
                    <template slot="header">
                        <h1 class="">Jungschar</h1>
                    </template>
                    <template slot="column1">
                        <info-row label="Ort" title="Rauchfang" />
                        <info-row
                            label="Teilnehmer"
                            title="Jungen von 7 bis 12 Jahren"
                            iconName="edit"
                        />
                        <info-row label="Zeit" title="samstags, 15 - 17 Uhr" iconName="edit" />
                    </template>
                    <template slot="content">
                        Dies ist eine Beispiel-Seite. Sie unterscheidet sich von Beiträgen, da sie
                        stets an derselben Stelle bleibt und (bei den meisten Themes) in der
                        Website-Navigation angezeigt wird.
                    </template>
                </cv-intro-box>
            </template>
            <template slot="sidebar">
                <dev-related-associates />
            </template>
        </dev-page-content>
    </dev-page-layout>
</template>

<script>
import DevHeader from '../dev-components/dev-header.vue';
import DevPageLayout from '../dev-components/dev-page-layout.vue';
import DevPageContent from '../dev-components/dev-page-content.vue';
import CvIntroBox from '../static-components/cv-intro-box.vue';
import InfoRow from '../static-components/info-row.vue';
import DevRelatedAssociates from '../dev-components/dev-related-associates.vue';

export default {
    components: {
        DevHeader,
        DevPageContent,
        DevPageLayout,
        CvIntroBox,
        InfoRow,
        DevRelatedAssociates,
    },
};
</script>

<style lang="scss">
#app {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
}
</style>
