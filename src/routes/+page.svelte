<!-- The content -->
<script lang='ts'>
    import Hero from "./Hero.svelte";
    import Features from "./Features.svelte";
    import ContactBanner from "./ContactBanner.svelte";
    import Footer from "./Footer.svelte";
    import BigCard from "./BigCard.svelte";
    import { base } from "$app/paths";
</script>


<svelte:head>
    <meta charset="UTF-8">
    <title>UKI Home</title>
    <meta name="description" content="Indonesian Survival Guide in the UK by Rekayasa Data Spasial on CeritaPeta.co.uk. This site is contains stories of Indonesians in the UK.">
</svelte:head>



<Hero/>
<BigCard imagesrc='{base}/robert-keane-LkTchdpm9OI-unsplash.jpg' title='Discover Stories' content='Lorem Ipsum Dolor Siamet'/>
<BigCard direction='row-reverse' imagesrc='{base}/robert-tudor-EjHr26LqfhI-unsplash.jpg' title='UK Experience' content='Our stories are from Indonesians in the UK. Personal and traceable. This should be a long sentence. What it will do is that it will consume the picture above.'/>
<BigCard imagesrc='{base}/becca-tapert-u5e1kqW6E3M-unsplash.jpg' title='Discover Stories' content='Lorem Ipsum Dolor Siamet'/>
<Features/>

<ContactBanner/>