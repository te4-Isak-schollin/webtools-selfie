<template>
     <div class="container">
        <wtmenu/>
        <section id="output">
            <article class="left">
                
            </article> 
            <wtnamelist class="main">
                <h1 id="active-name" :class="{ spin: spin}">
                    <section class="slider">
                        <span class="name" v-for="name in activeGroupie.nameList" :key="name">{{ name }}</span>
                    </section>
                </h1>
                    <a v-if="activeGroupie.nameList.length > 0" class="big-btn" @click="getName">{{ btnText }}</a>
                    <a v-if="activeGroupie.nameList.length < 1" class="big-btn" @click="resetNames">Restart namn</a>
                    <p v-if="activeGroupie.excludeName" class="names-left">{{ activeGroupie.nameList.length }} namn kvar</p>
            </wtnamelist>
                <wtnamepicker class="right">
                <ul class="picked-names" v-if="activeGroupie.showPicked">
                    <li v-for="(name, index) in pickedNames" :key="index">{{name}}</li>
                </ul>
            </wtnamepicker>
        </section> 
    </div>
</template>

<script>

import wtmenu from '@/components/Menu';
import wtnamepicker from '@/components/NamePicker.vue'
import wtnamelist from '@/components/NameList.vue'
import io from 'socket.io-client';
 

export default {
    name: 'wt-output',
    components: {
        wtmenu,
        wtnamepicker,
        wtnamelist
    },
    data(){
        return {
            spin: false,
            btnText: `Slump me a namn`
        }
    },
    
    methods:{
        resetNames(){

           let data = {
                excludeName: true,
                showPicked: this.$store.state.activeGroupie.showPicked,
                nameList: this.$store.state.pickedNames
            }

            shuffle(data.nameList);

            this.$store.commit('setActiveGroupie', data);
            this.$store.commit('cleanPickedNames');
            

        },
        getName(){
                if(!this.spin){
                this.spin = true;

                let el = document.querySelector(`.slider`);
                let timing = el.childElementCount*50;

                el.style.animationDuration = `${timing}ms`;
            

                setTimeout(() => {
                    this.spin = false;
                },timing);

                if(!this.$store.state.activeGroupie.excludeName){

                    this.$store.commit(`pickRandName`, timing);

                } else {
                
                    this.$store.commit(`pickName`, timing);
                
                }
            }
        }
    },
    computed: {
        activeGroupie(){
            let arr = this.$store.state.activeGroupie;
            return arr;
        },
        pickedNames(){
            let arr = this.$store.state.pickedNames;
            return arr;
        }
    },
    created(){
    const socket = io('http://localhost:3000');

    socket.on('select', (data) => {
    // Trigga spin
    this.getName()
        })
    }
}

// Fisher Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
};

</script>

<style>

.container {
    width: 100vw;
    height: 100vh;
    position: absolute;
}


#output {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.left {
flex: 1;
}

.main {
    flex:3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#active-name {
    font-size: 1.8rem;
    margin: 0;
    height: 3rem;
    width: 100%;
    text-align: center;
    overflow: hidden;
    color: white;
}

#active-name .slider span {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

}

.spin .slider {
    animation-name: spin;
    animation-timing-function: linear;
}

@keyframes spin {
    from { transform: translate3d(0,0,0);  }
      to { transform: translate3d(0,-100%,0);  }
}

#next-name {
    font-size: 1.2rem;
    font-weight: 300;
    color: rgba(0,0,0,.6);
}

.names-left {
    color: rgba(0,0,0,.6);
    font-style: italic;
}

.right {
    flex: 1;
    display: flex;
    padding: 1rem;
}

.picked-names {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    margin-top: auto;
}
.picked-names li {
    text-align: right;
    margin: 0 0 .25rem 0;
    color: rgba(0,0,0,.6);
    font-size: .9rem;
    animation: fade .3s ease;
}

@keyframes fade {
    from { transform: translateX(30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
}


.big-btn {
    display: block;
    margin: 4rem 0 0 0;
    padding: 1rem 2rem;
    border: 1px solid rgba(0,0,0,.6);
    color: rgba(0,0,0,.6);
    font-size: 1.2rem;
    border-radius: 3px;
}

.big-btn:hover {
    cursor: pointer;
    background: rgba(0,0,0,.8);
    color: white;
}

.big-btn:active {
    cursor: pointer;
    background: rgba(0,0,0,1);
}

@media screen and (max-width:640px ) {
    .container {

    }

    .left, .right {
        display: none;
    }

    .big-btn {
        position: absolute;
        padding: 1rem 4rem;
        bottom:40px;
    }

}

</style>
