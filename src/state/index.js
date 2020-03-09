import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showGroups: false,
    groupieObj: [],
    nameList: [],
    stateOutput: false,
    activeGroupie: {},
    pickedNames: []
  },
  mutations: {
    setGroupieObj(state, data){
      this.state.groupieObj = data;
    },
    removeGroup(state, index){
      let arr = this.state.groupieObj;
      arr.splice(index, 1);
      localStorage.setItem('groupie', JSON.stringify(arr));
    },
    pickName(state, timing){
      
      let activeGroupie = this.state.activeGroupie;
      let excludedName = activeGroupie.nameList.shift();

      setTimeout(()=>{  
        this.state.pickedNames.push(excludedName);
        this.state.activeGroupie = activeGroupie;
      },timing);
    
    },
    pickRandName(state, timing){
    
      let activeGroupie = this.state.activeGroupie;
    
      shuffle(activeGroupie.nameList)
    
      setTimeout(()=>{
        this.state.pickedNames.push(activeGroupie.nameList[0]);
        this.state.activeGroupie = activeGroupie;  
      },timing);
    
    },
    cleanPickedNames(state){
      this.state.pickedNames = [];
    },
    setPickedName(state){
      let activeGroupie = this.state.activeGroupie;
      this.state.pickedNames.push(activeGroupie.nameList[0]);
    },
    updateGroupieObj(state, data){
      let arr = this.state.groupieObj;
      arr.push(data);
      localStorage.setItem('groupie', JSON.stringify(arr));
    },
    updateNameList(state, arr){
      let newArr = arr.split(`\n`);
      this.state.nameList = newArr;
    },
    toggleShowGroups(state){
      this.state.showGroups = !this.state.showGroups;
    },
    toggleState(state){
      this.state.stateOutput = !this.state.stateOutput;
    },
    setActiveGroupie(state, obj){
      this.state.activeGroupie = obj;
    }
  }
});

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