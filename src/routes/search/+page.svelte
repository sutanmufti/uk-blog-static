<script lang='ts'>
    export let form;
    // export let data;

    import { base } from '$app/paths';
    import SearchBar from '../story/[page]/SearchBar.svelte';
    import Paginaton from '../story/[page]/Paginaton.svelte';
    import type { Story } from '@story/storylog';
    const {stories,keywords} = <{stories: Story[];keywords:string}> form

    const a = stories

</script>


<SearchBar/>
<!-- {JSON.stringify(data)} -->
<div class='container' data-sveltekit-reload>
    {#if stories.length > 0}
    <div class='main'>
        <!-- <Paginaton currentpage={data.page} maxpage={data.maxpage}/> -->

        {#each stories as s,i}
            <a href="{base}/view/{s.markdownfile}">
                <div class='story'>
                    <div class='content'>
                        <div class='title'>
                            {s.title}
                        </div>
                        <div>
                            {s.created}
                        </div>
                        <div>
                            {s.author}
                        </div>
                        <div>
                            {s.description}
                        </div>
                    </div>
                </div>
            </a>
        
        {/each}

    <!-- <Paginaton currentpage={data.page} maxpage={data.maxpage}/> -->
    </div>
    {:else}
    
    <h1>
        No result for {keywords}
    </h1>

    {/if}
    
</div>

<style>
    .content {
        margin: 15px;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .main{
        width: 1000px;
    }
    .story{
        margin: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 150px;
        /* border: 1px solid blue; */

    }
    .story:hover {
        background-color: rgb(245, 245, 245);
        border-radius: 20px;
        border: 1px solid rgb(225, 225, 225);
    }
    .title {
        font-size: larger;
        color: rgb(37, 37, 37);
        font-weight: bolder;
    }

    @media only screen and (max-width: 600px) {
        .main{
            width: 400px;
        }
}
</style>
