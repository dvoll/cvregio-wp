<template>
    <div class="burger burger-slip" :class="{ open: open }" @click="$emit('click')">
        <div class="burger-lines"></div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.burger {
    height: 3em;
    width: 3em;
    position: relative;
    font-size: 8px;
    cursor: pointer;
    transition: 0.2s all;
    -webkit-tap-highlight-color: transparent;

    // .burger-lines:after {
    //     left: 0;
    //     top: -1em;
    // }

    // .burger-lines:before {
    //     left: 1em;
    //     top: 1em;
    // }

    &:after {
        content: '';
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        // top: -25%;
        // left: -25%;
    }

    .burger-lines {
        top: 50%;
        margin-top: -0.125em;

        &,
        &:after,
        &:before {
            pointer-events: none;
            display: block;
            content: '';
            width: 100%;
            border-radius: 0.25em;
            background-color: $color-primary;
            height: 0.25em;
            position: absolute;
            transform: rotate(0);
        }

        &:after {
            left: 0;
            top: -1em;
        }

        &:before {
            // left: 1em;
            top: 1em;
        }
    }
}

.burger.burger-slip {
    .burger-lines {
        &:after,
        &:before {
            // width: 2em;
        }

        &,
        &:after,
        &:before {
            transition: all 0.2s;
        }
    }

    &.open {
        .burger-lines {
            & {
                transform: translateX(2em);
                background-color: transparent;
            }

            &:before,
            &:after {
                left: 0.5em;
                top: 0px;
            }

            &:before {
                transform: translateX(-2em) rotate(135deg);
            }

            &:after {
                transform: translateX(-2em) rotate(-135deg);
            }
        }
    }
}
</style>