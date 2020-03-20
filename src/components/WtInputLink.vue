<template>
    <div @click="emit()">
    <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'wt-input-link',

    methods: {
        emit() {
            this.$emit("onClickEvent")
        },
    }
}
</script>

<style>

.h3 {
    margin: 0;
    padding: 0;
}

.group-name {
    grid-area: group-name;
    background: #E6E6E6;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 0 0 1rem;
}

.group-leader {
    grid-area: group-leader;
    background: #DBDBDB;
    display: flex;
    align-items: center;
    padding: 0 0 0 1rem;
}

#input-group-name, #input-group-leader {
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid #4B4A57;
    border-radius: 3px;
    margin: 0 1rem 0 0;
}

#input-group-name.selected, #input-group-leader.selected {
    background: #4B4A57 url('/static/icon-close-white.svg') no-repeat;
    background-size: 100%;
}

</style>