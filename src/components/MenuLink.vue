<template>
    <a href="#" v-show="isShown" @click="emit()">
        <div class="icon">
            <img :src="img" :alt="text">
        </div>
        <div class="tip">
            <span class="label">{{label}}</span>
        </div>
    </a>


</template>     

<script>

export default {
    name: 'wt-menu-link',
    props: { label: String, 
            text: String , 
            img: String, 
            isShown: Boolean
    },
    methods: {
        emit() {
            this.$emit("onClickEvent")
        },
       
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
