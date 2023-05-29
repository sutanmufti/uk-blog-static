<script lang='ts'>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    export let data;


    
</script>
    <div class='story-center'>
        <div>
            <div class='meta'>
                <h1 class='meta-title'> {data.meta.title}</h1>
                <p class='meta-p'> {data.meta.author}</p>
                <p class='meta-p'> {data.meta.created}</p>
                {#if data.meta.image}
                    <img class='main-image' src="{base}/{data.meta.image}" alt="">
                {/if}
            </div>
            <div class='story'>
                {@html data.story}
            </div>
        </div>
    </div>


<style>
    .meta-title {
        color: rgb(37, 37, 37);
        text-align: start;
        margin: 0;
        font-weight: 600;
    }
    .meta-p {
        margin: 0px;
    }
    .meta {
        margin: 20px 0 20px 0;
    }
    .main-image {
        width: 800px;
        height: 400px;
        object-fit: contain;
        border: 1px solid rgb(209, 209, 209);
        border-radius: 20px;
        margin: 20px 0 0 0;
    }
    .story-center {
        margin: 30px 0 30px 0;
        display: flex;
        justify-content: center;
    }

    .story {
        width: 800px;
        margin: 15px;        
    }
    

    @media only screen and (max-width: 900px) {
        .story {
            width: 300px;
            margin: 15px;        
        }

        .meta {
            width: 300px;
            margin: 15px;     
            /* text-align: center; */
        }

        .meta-title {
            text-align: center;
            margin-bottom: 15px;
        }

        .main-image {
            width: 300px;
            height: 200px;
        }
    }
   
</style>


