<template>
    <div>
        <dev-single-layout>
            <dev-header slot="header"></dev-header>
            <dev-article />
            <div class="burger burger-slip">
                <div class="burger-lines"></div>
            </div>
            <dev-article-comments />
        </dev-single-layout>
    </div>
</template>

<script>
import DevHeader from '../dev-components/dev-header.vue';
import DevSingleLayout from '../dev-components/dev-single-layout.vue';
import DevArticle from '../dev-components/dev-article.vue';
import DevArticleComments from '../dev-components/dev-article-comments.vue';

export default {
    components: {
        DevHeader,
        DevArticleComments,
        DevArticle,
        DevSingleLayout,
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
