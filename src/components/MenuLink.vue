<template>
    <a href="#" v-show="isShown" @click="emit()">
        <div class="icon">
            <slot :images="images"> </slot>
        </div>
        <div class="tip">
            <span class="label"><slot name="label"></slot></span>
        </div>
    </a>


</template>     

<script>

export default {
    name: 'wt-menu-link',
    props: { 
            isShown: Boolean
    },
    methods: {
        emit() {
            this.$emit("onClickEvent")
        },
       
    },
    data:function() {
        return {
            images: {
                saved: "/static/icon-nav.svg",
                back: "/static/icon-back.svg"
            }
        }
    }
    
}
</script>

<style>
 a .icon {
    flex: .4;
    display: flex;

}

 a .tip {
    flex: 1;
    display: flex;
    align-items: center;
}

 
</style>
