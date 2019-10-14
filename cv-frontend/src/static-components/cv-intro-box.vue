<template>
    <div class="cv-intro-box alignwide alignwide--only-right">
        <div class="cv-intro-box__header">
            <slot name="header" />
        </div>
        <div class="cv-intro-box__content">
            <div class="cv-intro-box__col cv-intro-box__col1">
                <slot name="column1" />
            </div>
            <div class="cv-intro-box__col cv-intro-box__col2">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cv-intro-box__wrapper--overlay.entry-header {
    position: relative;

    @include media(tablet) {
        margin-top: -80px;
    }
}

.cv-intro-box--overlay {
    padding: 10px 10px 0 10px;
    margin: 0 -5px;
    border: 1px solid $color__background-hr;
    background-color: white;
    border-radius: 4.5px;
    // margin-bottom: -200px;
    // transform: translateY(-100px);

    @include media(mobile) {
        // margin: 0 0 0 -30px;
    }

    @include media(tablet) {
        padding: 25px 30px 0 30px;
        margin: 0 -30px;
    }

    @include media(desktop) {
        grid-column: content-start / main-end !important;
    }

    &__header {
        margin-bottom: 30px;
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
    }

    &__col {
        padding-bottom: 40px;
    }

    &__col1 {
        flex-shrink: 0;
        margin-right: 30px;
    }

    &__col2 {
        font-size: 1.2rem;
        line-height: 1.8;
        flex-shrink: 1;
        flex-basis: 300px;
        flex-grow: 1;
        min-width: 300px;
    }
}
</style>