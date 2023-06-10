<script lang="ts">
    import { onMount } from 'svelte';
    export let data;
    import SearchBar from '../story/[page]/SearchBar.svelte';
    import { base } from '$app/paths';
    import { faBlackboard } from '@fortawesome/free-solid-svg-icons';

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

        const myDivIcon = L.divIcon({className: 'my-div-icon', html: 'ok'});

        stories.forEach(d=>{
            if (d.latlong){
                const [lat,lon] = d.latlong;

                L.marker([lat, lon],
                    {
                        icon: myDivIcon,
                       
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

    <style>

        .my-div-icon {
            background-color: black;
            display: block ;
            width: 90px; 
            height: 90px;
        }
    </style>

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