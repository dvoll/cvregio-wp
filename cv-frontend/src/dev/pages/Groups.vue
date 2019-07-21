<template>
    <div>
        <div class="design-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <dev-header></dev-header>
        <div id="content" class="site-content">
            <section id="primary" class="content-area">
                <main id="main" class="site-main">
                    <article
                        id="post-78"
                        class="post-78 page type-page status-publish hentry entry"
                    >
                        <div class="entry-content entry-content--starting-top">
                            <!-- <section class="wp-block-cv-blocks-cv-stage undefined alignfull"> -->
                            <h1>Unsere Angebote</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </p>
                            <dev-groups></dev-groups>
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
import DevHeader from '../components/dev-header.vue';
import DevGroups from '../components/dev-groups.vue';

export default {
    components: {
        DevHeader,
        DevGroups,
    },
};
</script>

<style lang="scss">
.design-grid {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    opacity: 0.5;

    display: grid;
    grid-template-columns: 1fr minmax(800px, 4fr) 1fr 2fr;
    grid-gap: 10px;

    > * {
        width: 100%;
        height: 300px;
        border: 1px solid green;
    }
}
</style>

