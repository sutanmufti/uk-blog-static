<script lang="ts">
    import Section from "$lib/Section.svelte";
    import SectionNoImage from "$lib/SectionNoImage.svelte";


    const p1 = "My name is Sutan. I am an MSc Infrastructure Planning, Appraisal, and Development UCL graduate. I graduated in 2021 and worked in the UK in 2022 as a software engineer. I've encountered some queries I struggled to answer during my time here in the UK. I had to ask friends, scour the internet, and just explore it myself. Most of these questions are basic though! For instance, how do I apply for graduate visa in the UK? How to access health care?"
    const p2 = "Considering the rudiments of the queries, I guess I should not be the only one. I mean, they are so basic. Friends coming to the UK also are asking me the same questions. This looks like an opportunity to create something that is helpful for people. How do we do it? We interview friends and collect personal experiences."
    const p3 = "So, what do we do? we collect experiences and stories in the UK that helps you survive for your daily needs. Stories are based on facts, reviews, and personal opinions."
</script>
<SectionNoImage title='About Us' content='{p1}'/>
<SectionNoImage content='{p2}'/>
<!-- <SectionNoImage content='{p3}'/> -->
<Section title='The United Kingdom' content='The vision of this blog site is to become a source of information based on facts and stories of what Indonesians have gone through in the UK. This can be reviews, stories, or experiences. The end in mind is to help Indonesians to learn about living in the UK.'/>
<SectionNoImage title='Towards Community Resilience' content='A sense of community is what we have as a foreigner in a foreign country (if this makes sense). As people with the same background, we can watch and support for each other. Mistakes that have happened can be avoided. Lessons learned.'/>
