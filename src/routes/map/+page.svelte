<script lang="ts">
    import { onMount } from 'svelte';
    export let data;
    import SearchBar from '../story/[page]/SearchBar.svelte';
    import { base } from '$app/paths';

    const {stories} = data
    
    onMount(async ()=>{
        const L = await import ('leaflet')  
        const map = L.map('map').setView([51.505, -0.09], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 14,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            
        }).addTo(map);


        var myIcon = L.icon({
            iconUrl: `${base}/marker.png`,
            iconSize: [38, 50],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            // shadowUrl: 'my-icon-shadow.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });

        stories.forEach(d=>{
            if (d.latlong){
                const [lat,lon] = d.latlong;

                L.marker([lat, lon],
                    {
                        icon: myIcon
                    }
                ).bindPopup(`<a href="${base}/view/${d.markdownfile}"> ${d.title}, ${d.description} </a>`).addTo(map);
            }
        })
        
    })

</script>
<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin="" data-sveltekit-reload/>

    <title>Story Map</title>
</svelte:head>
<SearchBar/>
<div id="map" data-sveltekit-reload></div>


<style>
#map { height: 800px; }

@media only screen and (max-width: 600px) {
    #map { 
        margin-top: 10px;
        height: 600px; 
    }
}
</style>