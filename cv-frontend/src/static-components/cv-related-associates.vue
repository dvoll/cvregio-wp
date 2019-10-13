<template>
    <div class="cv-related-associates">
        <div class="cv-related-associates__contact-container">
            <slot name="contact-associates" />
            <div class="cv-related-associates__contact">
                <h6 v-if="contactHeading">{{ contactHeading }}</h6>
                <a v-if="contactLinkSrc" :href="contactLinkSrc">{{ contactLinkLabel }}</a>
            </div>
        </div>
        <div class="cv-related-associates__full-list">
            <slot name="associates"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contactHeading: {
            type: String,
        },
        contactLinkLabel: {
            type: String,
            default: 'Nachricht schreiben',
        },
        contactLinkSrc: {
            type: String,
        },
    },
};
</script>

<style lang="scss">
.cv-related-associates__contact-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > .cv-associate {
        flex: 0 0 150px;
    }

    > .cv-related-associates__contact {
        min-width: 200px;
        max-width: 300px;
    }
}

.cv-related-associates__full-list {
    display: flex;
    flex-wrap: wrap;

    > * {
        flex: 1 0 150px;
    }
}

// @supports (display: grid) {
//     .cv-related-associates__contact-container,
//     .cv-related-associates__full-list {
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//     }

//     .cv-related-associates__contact {
//         // grid-column-start: 5;
//         // grid-column-end: -1;
//         grid-column: span 3;
//         background: azure;
//     }
// }
</style>