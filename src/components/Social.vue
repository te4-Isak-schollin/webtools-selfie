<template>
    <footer id="social">
        <wtsociallink :link="fb" image="/static/social-fb.svg" text="Share on Facebook"/>
        <wtsociallink :link="twitter" image="/static/social-twitter.svg" text=" Share on Twitter"/>
    </footer>
</template>

<script>

import wtsociallink from '@/components/SocialLink.vue'

export default {
    components: {
        wtsociallink
    },
    name: 'social',
    data() {
        return {
                fb: `https://www.facebook.com/sharer/sharer.php?u=https%3A//webtools.itgonline.se/appar/v3/selfie/%23/`,
                twitter: `https://twitter.com/home?status=V%C3%A4rldens%20b%C3%A4sta%20namnslumpare!%0Ahttps%3A//webtools.itgonline.se/appar/v3/selfie/%23/`
            }
    }
}

</script>

<style scoped>

#social {
    width: 12vw;
    position: fixed;
    bottom: .75rem;
    right: .75rem;
    text-align: right;
}
</style>
