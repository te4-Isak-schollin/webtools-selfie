<template>
    <a :href="link">
        <slot :social="social"> </slot>
    </a>
</template>

<script>
export default {
    name: 'wt-social-link',
    props: ["link", "image", "text"],
    
    data:function() {
        return {
            social: {
                facebook: "/static/social-fb.svg",
                twitter: "/static/social-twitter.svg",
                faceB: "share on Facebook",
                twittr: "share on Twitter"
                
            },
        }
    }

  
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