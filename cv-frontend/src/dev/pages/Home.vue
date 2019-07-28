<template>
    <div>
        <dev-header></dev-header>
        <div id="content" class="site-content">
            <section id="primary" class="content-area">
                <main id="main" class="site-main">
                    <article
                        id="post-78"
                        class="post-78 page type-page status-publish hentry entry"
                    >
                        <div class="entry-content entry-content--starting-top">
                            <stage></stage>
                            <!-- <section class="wp-block-cv-blocks-cv-stage undefined alignfull"> -->
                            <h1>Willkommen beim <br />CVJM Stift Quernheim e.V.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </p>
                            <h2>Neuigkeiten</h2>
                            <dev-news></dev-news>
                        </div>
                    </article>
                </main>
                <!-- #main -->
            </section>
            <!-- #primary -->
        </div>
    </div>
</template>

<script>
import stage from '../components/stage.vue';
import DevHeader from '../components/dev-header.vue';
import DevNews from '../components/dev-news.vue';

export default {
    components: {
        stage,
        DevHeader,
        DevNews,
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
