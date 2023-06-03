<script lang='ts'>
    export let imagesrc:string;
    export let reversed = false;
    export let title: string;
    export let content: string;

    const bg = 
    `
    background-image: url("${imagesrc}");
    background-size: cover;
    `
</script>

<div class='main'>
    <div class='card' >
        <div class='mainimg' style={bg}>

        </div>
        <!-- <img src="{imagesrc}" alt="" class='mainimg'> -->
        <div class='content'>
            <div class='title caption'>
                {title} 
             </div>
             <div class='caption'>
                 {content}
             </div>
        </div>
    </div>
</div>


<style>
    .title {
        color: black;
        font-size: 1.25em;
    }
    .mainimg {
        width: 800px;
        /* height: 400px; */
        display: inline-block;
        /* height: 300px; */
        object-fit: cover;
        object-position: center;
        
    }
    .caption {
        margin: 5px;
        /* flex-grow: 1; */
    }
    .content {
        display: flex;
        width: 300px;
        flex-direction: column;
        justify-content: center;
        background-color: rgb(239, 239, 239);
        /* align-items: stretch; */
    }
    
    .main {
        /* border: 1px solid blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0 20px 0;
    }
    .card {
        display: flex;
        /* border: 1px solid red; */
        /* align-items: stretch; */
        
        width: 1100px;
        height: 400px;
    }

    @media only screen and (max-width: 600px) {
        .card {
            width: 350px;
            flex-direction: column;
            /* height: fit-content; */
        }
        
        .main {
            flex-direction: column;
            /* height: fit-content; */
        }

        .mainimg {
            height: 800px;
            width: 350px;
            /* height: 400px; */
            display: inline-block;
            /* height: 300px; */
            object-fit: cover;
            object-position: center;
            
        }

        .content {
            width: 350px;
            height: 350px;
            /* margin-left: 20px; */
            flex-direction: column;
            justify-content: center;
            background-color: rgb(239, 239, 239);
            /* align-items: stretch; */
        }

        .caption {
            margin-left: 20px;
        }


        
}
</style>