<!-- The content -->
<script lang='ts'>
    import Hero from "./Hero.svelte";
    import Features from "./Features.svelte";
    import ContactBanner from "./ContactBanner.svelte";
    import Footer from "./Footer.svelte";
    import BigCard from "./BigCard.svelte";
    import { base } from "$app/paths";
    import Section from "$lib/Section.svelte";
    import SectionNoImage from "$lib/SectionNoImage.svelte";

    
</script>


<svelte:head>
    <!-- <meta charset="UTF-8"> -->
    <title>UKI Home</title>
    <meta name="description" content="Indonesian Survival Guide in the UK by Rekayasa Data Spasial on CeritaPeta.co.uk. This site is contains stories of Indonesians in the UK.">
</svelte:head>



<Hero/>
<Section image='robert-keane-LkTchdpm9OI-unsplash.jpg' title='Discover Stories' content='We colect stories from our Indonesian friends and families in the UK.'/>
<Section reversed={true} image='robert-tudor-EjHr26LqfhI-unsplash.jpg' title='UK Experience' content='The stories are contextualised to living in the UK. The UK includes England, Wales, Scotland, Northern Ireland.'/>
<Section image='becca-tapert-u5e1kqW6E3M-unsplash.jpg' title='Indonesian Context' content='The stories brought in this blog site came from Indonesians accross the UK. A sense of comunity is at the centre of this site. Although it is designed for Indonesian, it does not mean it is not relevant to non-Indonesian.'/>
<!-- <BigCard imagesrc='{base}/robert-keane-LkTchdpm9OI-unsplash.jpg' title='Discover Stories' content='We colect stories from our Indonesian friends and families in the UK.'/>
    <BigCard direction='row-reverse' imagesrc='{base}/robert-tudor-EjHr26LqfhI-unsplash.jpg' title='UK Experience' content='Our stories are from Indonesians in the UK. Personal and traceable. This should be a long sentence. What it will do is that it will consume the picture above.'/>
    <BigCard imagesrc='{base}/becca-tapert-u5e1kqW6E3M-unsplash.jpg' title='Indonesian Context' content='The stories brought in this blog site came from Indonesians accross the UK. A sense of comunity is at the centre of this site. Although it is designed for Indonesian, it does not mean it is not relevant to non-Indonesian.'/> -->
<Features/>
<SectionNoImage title='Do you have any queries about living in the UK?' content='Your question might also were already asked by other Indonesians, and we might know stories relevant to your queries. On the other hand, if you have stories that you feel others might benefit, this is the platform to share such stories. We are a community making the best of living in the UK :&#41;'/>
    
<!-- <ContactBanner/> -->