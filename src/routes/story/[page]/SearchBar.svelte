<script lang='ts'>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faCaretDown, faCaretUp, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
    import { fade } from 'svelte/transition';
    // import f from '@fortawesome/free-solid-svg-icons';


    // const ok = f.faSearchDollar

    let searchvalue: string;
    let isclicking: boolean;
    let focusborder = ''
    let onfocusStatus = false
    $: if (onfocusStatus) {
        focusborder = `
            border: 2px solid rgb(0, 83, 207);
        `
    } else {
        focusborder = `
            border: none;
        `
    }
</script>

<div class='main'>
    <!-- <div class='inputcontainer' style={focusborder}> -->
        <form action="" class='inputcontainer' style={focusborder}>
            {#if !searchvalue && !onfocusStatus}
            <div class='submitbutton' style='margin-left: 5px; margin-right: 10px' transition:fade={{duration: 100}}>
                <Fa icon={faMagnifyingGlass}/>
            </div>
            {/if}
            <input class='searchbar' type="text" on:focusin={()=>{onfocusStatus = true}} on:focusout={()=>{onfocusStatus = false}} bind:value={searchvalue} placeholder='Any stories in mind?'>
            {#if searchvalue}
                <button class='submitbutton button' on:click={()=>{searchvalue=''}}>
                    <Fa icon={faXmark}/>
                </button>

                <div class='submitbutton'>
                    |
                </div>

                <button class='submitbutton button'>
                    <Fa icon={faMagnifyingGlass}/>
                </button>
            
            {/if}
        </form>
    <!-- </div> -->
</div>


<style>
    .button:hover {
        color: black;
        cursor: pointer;
    }

    .submitbutton {
        width: fit-content;
        font-size: 1em;
        border: none;
        background-color: inherit;
        color: grey;
        text-align: center;
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
        
    }
    .main {
        display: flex;
        justify-content: center;
        margin: 15px 0 15px 0;
        /* border: 1px solid blue; */
        /* color: rgb(0, 83, 207); */
    }

    .inputcontainer{
        width: 900px;
        height: 40px;
        display: flex;
        font-size: 1.5em;
        color: grey;
        background-color: rgb(243, 243, 243);
        border: none;
        padding: 15px;
        border-radius: 50px;
        align-items: stretch;

    }

    .searchbar {
        flex-grow: 1;
        outline: none;
        border: none;
        background-color: inherit;
        font-size: 1.25em;
        color: inherit;
    }
    .searchbar::placeholder{
        color: rgb(195, 195, 195);
        font-size: 1em;
    }
    .searchbar:focus {
        border: none;
        outline: none;

    }

    /* .searchbar {
        width: 900px;
        height: 40px;
        font-size: 2em;
        color: grey;
        background-color: rgb(237, 237, 237);
        border: none;
        padding: 15px;
        border-radius: 20px;
    } */

</style>