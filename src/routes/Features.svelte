<script>
    import FeatureCard from "./FeatureCard.svelte";
    import Maptooltip from "./Maptooltip.svelte";
</script>

<!-- <Maptooltip/> -->
<div class='main'>
    Featured Topics:
</div>
<div class='main'>
    <FeatureCard title='Arriving Students' content="Are you a student coming to the UK? Look here and view some stories other students have gone through."/>
    <FeatureCard title='Worker Visa' content="Working in the UK require permits. How do we apply for one? Do I have working permit? This article discusses the topic."/>
    <FeatureCard title='Finding New Homes' content="I am moving into the UK and I don't know where to live! How do I find new homes? What should I look for? Discover more in this article."/>
</div>



<style>
    .main {
        padding: 15px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>