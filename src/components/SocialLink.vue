<template>
    <a :href="link">
        <img :src="image" :alt="text">
    </a>
</template>

<script>
export default {
    name: 'wt-social-link',
    props: ["link", "image", "text"]
  
}
</script>

<style>

 a:hover {
    opacity: .8;
}

 a:active {
    opacity: 1;
}

 img {
    width: 1.5rem;
    margin: 0 .25rem;

}

</style>