<script lang="ts">
    export let currentpage: number;
    export let maxpage: number;
    import Fa from 'svelte-fa'
    import { faCaretRight, faCaretLeft, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
    import { base } from '$app/paths';
    
    const nextpage = currentpage + 1
    const pervpage = currentpage - 1
    // https://fontawesome.com/search?m=free&o=r


</script>


<div class='main'>
    {#if currentpage != 0}
    <span class='char arrow'>
        <a href="{base}/story/{pervpage}">
            <Fa class='test' icon={faCaretLeft} scale={2}/>
        </a>
    </span>
    {/if}
    <span class='char'>
        Page {currentpage}
    </span>
    {#if currentpage != maxpage}
    <span class='char arrow'>
        <a href="{base}/story/{nextpage}">
            <Fa icon={faCaretRight} scale={2}/>
        </a>
    </span>
    {/if}
</div>


<style>
    .main {
        /* border: 1px solid black; */
        display: flex;
        justify-content: center;
    }
    .test{ 
        border: 1px solid red;
    }
    .arrow {

    }
    a, a:visited {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    .char {
        margin: 15px
    }
</style>