<script lang='ts'>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    export let data;

    const {meta} =data

    
    const {tags} = meta


    
</script>
    <div class='story-center'>
        <div>
            <div class='meta'>
                <h1 class='meta-title nomargin'> {data.meta.title}</h1>
                <p class='meta-p nomargin'> {data.meta.created}</p>
                {#if tags}
                    {#each tags as t,i}
                    <div class='tags-container nomargin'>
                            <span class='tags'>{t}</span>
                        </div>
                    {/each}
                {/if}
                <p class='meta-p nomargin'> Written by {data.meta.author}</p>
                {#if data.meta.image}
                <p style="text-align: center;">
                    <img class='main-image' src="{base}/{data.meta.image}" alt="">
                </p>
                {/if}
            </div>
            <div class='story'>
                {@html data.story}
            </div>
        </div>
    </div>


<style>
    .tags {
        margin: 5px 7px 5px 7px;
        color: rgb(143, 143, 143);

    }
    .tags-container {
        background-color: rgb(237, 237, 237);
        display: inline-block;
        margin: 20px 0px 20px 15px;
        border-radius: 15px;
    }
    .meta-title {
        color: rgb(37, 37, 37);
        text-align: start;
        margin: 0;
        margin-left: 15px;
        font-weight: 600;
    }
    .meta-p {
        margin: 0px;
        margin-left: 15px;
    }
    .meta {
        margin: 20px 0 20px 0;
    }
    .main-image {
        width: 800px;
        height: 400px;
        object-fit: cover;
        border: 1px solid rgb(209, 209, 209);
        border-radius: 20px;
        margin: 20px 0 0 15px;
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
    
    :global(blockquote){
        margin: 0;
        border: 1px solid rgb(240, 240, 240);
        background-color: rgb(250, 250, 250);
        border-radius: 15px;
    }

    :global(blockquote)> :global(p) {
        margin: 40px;
        color: black;
    }
    

    @media only screen and (max-width: 900px) {
        .nomargin {
            margin: 0;
            margin-bottom: 10px;
        }
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
            text-align: start;
            margin: 0;
            margin-bottom: 15px;

        }

        .main-image {
            width: 300px;
            height: 200px;
            margin: 0;
        }

        
    }
   
</style>


