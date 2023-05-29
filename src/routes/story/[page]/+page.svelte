<script lang='ts'>
    export let data;
    import { base } from '$app/paths';
    const {stories} = data
</script>

<div class='container'>
    <div class='main'>

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
    </div>
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
        background-color: rgb(222, 222, 222);
        border-radius: 20px;
        border: 1px solid rgb(175, 175, 175);
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
