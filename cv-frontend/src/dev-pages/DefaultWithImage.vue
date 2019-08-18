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
                        width="1568"
                        height="1042"
                        src="http://192.168.178.199:8082/wp-content/uploads/2019/08/02-1568x1042.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                        alt=""
                        srcset="
                            http://192.168.178.199:8082/wp-content/uploads/2019/08/02-1568x1042.jpg 1568w,
                            http://192.168.178.199:8082/wp-content/uploads/2019/08/02-300x199.jpg    300w,
                            http://192.168.178.199:8082/wp-content/uploads/2019/08/02-768x510.jpg    768w,
                            http://192.168.178.199:8082/wp-content/uploads/2019/08/02-1024x680.jpg  1024w
                        "
                        sizes="(max-width: 1568px) 100vw, 1568px"
                    />
                </figure>
            </template>
        </dev-page-content>
    </dev-page-layout>
</template>

<script>
import DevHeader from '../dev-components/dev-header.vue';
import DevPageLayout from '../dev-components/dev-page-layout.vue';
import DevPageContent from '../dev-components/dev-page-content.vue';

export default {
    components: {
        DevHeader,
        DevPageContent,
        DevPageLayout,
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
