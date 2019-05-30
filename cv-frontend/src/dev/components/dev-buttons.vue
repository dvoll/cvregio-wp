<template>
    <div>
        <dev-header></dev-header>
        <h1>Buttons</h1>
        <p>
            <button class="cv-button">Button</button>
            <button class="cv-button cv-button--primary">Button</button>
            <button class="cv-button cv-button--primary">
                <base-icon icon="arrow-right" primary />Button
            </button>
            <base-icon icon="arrow-right" />
        </p>
    </div>
</template>

<script>
import Vue from 'vue';
import BaseIcon from '../../components/base/BaseIcon.vue';

export default Vue.extend({
    components: {
        BaseIcon,
    },
});
</script>
