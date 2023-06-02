<script lang='ts'>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faCaretDown, faCaretUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
    // import f from '@fortawesome/free-solid-svg-icons';


    // const ok = f.faSearchDollar

    

    let onfocusStatus = false
</script>

<div>
    {onfocusStatus} <Fa icon={faMagnifyingGlass} />
</div>
<div class='main'>
    <div class='inputcontainer'>
        <input class='searchbar' type="text" on:focusin={()=>{onfocusStatus = true}} on:focusout={()=>{onfocusStatus = false}}>
        <div>
            <Fa icon={faMagnifyingGlass}/>
        </div>
    </div>
</div>


<style>
    .main {
        display: flex;
        justify-content: center;
        margin: 15px 0 15px 0;
        /* border: 1px solid blue; */
    }

    .inputcontainer{
        width: 900px;
        height: 40px;
        display: flex;
        font-size: 2em;
        color: grey;
        background-color: rgb(237, 237, 237);
        border: none;
        padding: 15px;
        border-radius: 20px;

    }

    .searchbar {
        flex-grow: 1;
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