<script lang="ts">
    import { base } from "$app/paths";
    export let title: string = 'Some Title'
    export let content: string = 'content ahdslkj siuhwe qiurh wqiuehr qoweiuhr wieuhr weiaulhr oiewauhqoriwuehnkjdmnjbcv iusdhaoisudhfa lsdkjflb '
    export let image: string = `${base}/robert-keane-LkTchdpm9OI-unsplash.jpg`

    let imagestyle = `
        background-image: url("${image}")
    `

</script>

<div class='main'>
    <div class='content'>
        <div class='image' style={imagestyle}>

        </div>
        <div class='text'>
            {#if title}
            <h1>
                {title}
            </h1>
            {/if}
            {content}
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
        height: 500px;
        width: 1200px;
        /* border: 1px solid black; */
        display: flex;
        align-items: stretch;
        margin-top: 15px;
    }
    .text {
        width: 400px;
        margin-left: 15px;
        /* border: 1px solid red; */
    }
    .image{
        /* border: 1px solid blue; */
        width: auto;
        flex-grow: 1;
        background-size: cover;
        background-position: center;
    }




    @media only screen and (max-width: 600px) {
        .content {
            display: flex;
            flex-direction: column;
            height: 500px;
            width: 300px;
        }
        .image {
            display: block;
            height: 300px;
        }
        .text {
            width: auto;
            margin-left: 0;
        }
    }
</style>