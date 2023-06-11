<script lang="ts">
    import { base } from "$app/paths";
    export let title: string = ''
    export let content: string = 'content ahdslkj siuhwe qiurh wqiuehr qoweiuhr wieuhr weiaulhr oiewauhqoriwuehnkjdmnjbcv iusdhaoisudhfa lsdkjflb '



</script>

<div class='main'>
    <div class='content'>
        <div class='text'>
            {#if title}
            <h1>
                {title}
            </h1>
            {/if}
            {content}
        </div>
        <div class='image' >

        </div>
    </div>
</div>


<style>
    h1 {
        font-size: 1.35em;
        font-weight: 500;
        color: black;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .main {
        display: flex;
        justify-content: center;
    }
    .content{
        height: fit-content;
        width: 1200px;
        /* border: 1px solid black; */
        display: flex;
        align-items: stretch;
        margin-top: 15px;
    }
    .text {
        width: 700px;
        /* margin-left: 15px; */
        /* border: 1px solid red; */
    }
    .image{
        /* border: 1px solid blue; */
        height: 0;
        width: auto;
        flex-grow: 1;
        background-size: cover;
        background-position: center;
    }




    @media only screen and (max-width: 600px) {
        .content {
            display: flex;
            flex-direction: row-reverse;
            /* height: 500px; */
            width: 300px;
        }
        .image {
            display: block;
            height: 0px;
        }
        .text {
            width: auto;
            margin-left: 0;
        }
    }
</style>