Vue.component('cv-stage', {
    props: {
        items: {
            type: String,
            default: '[]'
        },
    },
    data() {
        return {
            stageItems: []
        }
    },
    template: `
        <div class="cv-stage">
            <div class="cv-stage__layer-wrapper">
                <div v-for="item in stageItems" :key="item.text">{{item.url}}</div>
            </div>
            <slot name="overlay">
                <div className="cv-stage__overlay" slot="overlay"></div>
            </slot>
        </div>
    `,
    mounted: function() {
        console.log('items', this.items);
        console.log('slt', this.$slots.default);
        this.$slots.default.forEach((elm) => {
            this.stageItems.push({
                text: elm.children[0].children[0].text,
                url: elm.children[1].children[0].text,
            })
        })
    }
})

Vue.component('c-logger', {
    props: {
        args: {
            type: String,
            default: ''
        },
    },
    created: function() {
        console.log('args', this.args);
    },
    render() {
        return null;
    }
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
})