<script lang='ts'>
    export let title: string;
    export let content: string ;
</script>

<div id='main'>
    <div class='flex'>
        <div id='title'>
            {title}
        </div>
        <div class='stretch'>
            {content}
        </div>
        <a href="#" class='readmore'>
            Read More
        </a>
    </div>
</div>


<style>
    .readmore {
        text-decoration: none;
        color: rgb(16,103,222);
        background-color: white;
        width: 100px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        font-size: 0.8em;
        font-weight: bold;
        /* text-align: center; */
    }
    .flex {
        display: flex;
        flex-direction: column;
        margin: 20px;
        flex-grow: 1;
        /* border: 1px solid blue; */
    }
    .stretch {
        flex-grow: 1;
        color: white;
    }
    #title {
        color: white;
        font-size: larger;
        padding: 0;
        margin-bottom: 10px;
        font-weight: bold;
    }
    #main {
        display: flex;
        background-color: rgb(16,103,222);
        border: 0px solid rgb(220, 220, 220);
        border-radius: 5px;
        width: 300px;
        height: 300px;
        padding: 10px;
        margin: 0 15px 5px 15px;
    }
</style>