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
import DevHeader from '../dev-components/dev-header.vue';
import DevGroups from '../dev-components/dev-groups.vue';

export default {
    components: {
        DevHeader,
        DevGroups,
    },
};
</script>

<style lang="scss"></style>
