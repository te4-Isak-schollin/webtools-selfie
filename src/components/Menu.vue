<template>
    <nav>
        <wtmenulink @onClickEvent="showGroups" :isShown="!checkState" >
            <template v-slot="slotProps">
                <img :src="slotProps.images.saved" alt="Sparade grupper">
            </template>
            <template v-slot:label>Hantera grupper</template>
        </wtmenulink>
        <wtmenulink @onClickEvent="back" :isShown="checkState" >
            <template v-slot="slotProps">
                <img :src="slotProps.images.back" alt="Tillbaka">
            </template>
            <template v-slot:label>Tillbaka</template>
        </wtmenulink>

<!-- label="Tillbaka" img="/static/icon-back.svg" text="Tillbaka" -->
        <!--
            <a href="#" @click="remote" v-if="checkState">
            <div class="icon">
                <img src="/static/icon-remote.svg" alt="Activate remote">
            </div>
            <div class="tip">
                <span class="label">Fjärrkontroll</span>
            </div>
        </a>
        -->
        
    </nav>
</template>

<script>
import wtmenulink from '@/components/MenuLink.vue';

export default {
    name: 'wt-menu',
    components: {
        wtmenulink
    },
    data(){
       return { 
        }
    },
    methods: {
        showGroups(){
            this.$store.commit(`toggleShowGroups`);
        },
        back(){
            this.$store.commit('toggleState');
            this.$store.commit(`cleanPickedNames`);
            this.$router.push({name: 'wt-input'});
        },
        remote(e){
            console.log(e);
        }
    },
    computed: {
        checkState(){
            return this.$store.state.stateOutput;   
        }
    }
}
</script>

<style>

nav {
    position: fixed;
    margin: 2rem 0 0 2rem;
    width: 220px;
    height: 300px;
    z-index: 9;
}
nav a {
    display: flex;
    flex: 1;
    align-items: center;
    margin: 0 0 .75rem 0;
}


 nav a:hover .icon img,  a.active .icon img {
    background: rgba(255,255,255,1);
}

 nav a:active .icon img {
    background: rgba(255,255,255,1);
}

 nav a img {
    height: 2rem;
    width: 2rem;
    padding: .6rem;
    border-radius: 999em;
    background: rgba(255,255,255,.8);
}

 nav a span.label { 
    background: #4B4A57;
    position: relative;
    color: white;
    padding: .25rem .75rem;
    border-radius: 2px;
    display: none;
}

 nav a span.label:after {
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(0, 0, 0, 0);
	border-right-color: #4B4A57;
	border-width: 5px;
	margin-top: -5px;
}

 nav a:hover span.label {
    display: block;
    animation: slide .2s ease;
}

@keyframes slide {
    from {  transform: translate3d(30px,0,0); opacity: 0;   }
      to {  transform: translate3d(0,0,0); opacity: 1;      }
}

</style>
