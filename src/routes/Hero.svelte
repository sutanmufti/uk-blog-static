<script lang='ts'>
    import { base } from "$app/paths";

    let showtooltip = false;
    
    let tooltipclick = false;
    
    let m = { x: 0, y: 0 };
    
    function mousemove (event: { clientX: number; clientY: number; }) {
        m.x = event.clientX;
		m.y = event.clientY;
    }

    function removeTooltip (){
    }

    let searchvalue: string;
</script>

<svelte:window on:click={removeTooltip}></svelte:window>

<div  class='main'>
    <div
    
    class='head headone hero'>
        <div>
            <div style='text-align:start'>
                    <span class='title'>
                    Indonesian survival guide in the UK
                </span>
                </div>
                <div class='caption'>
                    We collect stories from Indonesians accross the UK. This blog site is the entry point for Indonesians with queries regarding living in the UK.
                </div>
                <form  method="POST" action="{base}/search/" class='inputcontainer'>
                    <div class='goto'>
                        <!-- <a href="{base}/story/0"> -->
                            <input class="searchinput" type="text" placeholder="keywords to search?" name="keywords" bind:value={searchvalue}>
                            <button id='go' type='submit'>{(searchvalue)? 'Search Story':'Go to Blog'}</button>
                        <!-- </a> -->
                        <!-- <button id='colaborate'>I am Arriving in London Soon!</button> -->
                    </div>
                </form>
                
                <!-- <form  action="{base}/login?/login" method='POST'>
                    <input class="searchinput" type="text" placeholder="login" name="search">
                </form> -->


        </div>
    </div>
    <div class='head'>
        <!-- <div id='pointscontainer'> -->
            <svg id='points' style='fill:#1067de'>
                <circle on:keydown={()=>{showtooltip = false}} on:click={(event)=>{
                    if (!tooltipclick){
                        m.x = event.clientX;
                        m.y = event.clientY;
                        showtooltip = true
                        console.log(showtooltip)
                        console.log("I am clicked....!");}
                        
                    }}
                    cx="55%" cy="68%" r="5" id='liverpool'/>
                <circle on:mouseenter={()=>{console.log("hover!")}} cx="60%" cy="67%" r="5" id='manchester'/>
                <circle on:mouseenter={()=>{console.log("hover!")}} cx="67%" cy="64%" r="5" id='leeds'/>
                <circle cx="54%" cy="45%" r="5" id='edinburgh'/>
                <circle cx="83%" cy="85%" r="5" id='london'/>
            </svg>
        <!-- </div> -->
        <div id='ukcontainer'>
            <img src="{base}/britain.svg" width='300px' alt="" id='uk'>
        </div>
    </div>


</div>


<style>
    .searchinput {
        /* padding: 10px 20px 10px 20px; */
        margin-bottom: 5px;
        height: 2.5em;
    }
    
    

    #points {
        position: absolute;
        width: 300px;
        height: 500px;
        /* border: 1px solid red; */
        /* top: -80%; */
    }
    #ukcontainer {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .head {
        /* border: 1px solid red; */
        display: flex;
        /* text-align: center; */
        align-items: center;
        justify-content: center;
        text-align: start;
        
    }

    .headone {
        width: 600px;
        height: 60vh;
        margin-left: 10px;
        justify-content: start;
        flex-flow: row;
    }
    .main {
        /* border: 1px solid black; */
        margin: auto;
        text-align: start;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
    }
    .title {
        font-size: 2em;
        text-align:start;
        display: block;
        color: black
    }

    .hero {
        text-align:start;
    }

    .caption {
        font-size: 1em;
        margin-top: 10px;
        display: block;
    }

    .goto {
        margin-top: 20px;
    }
/* 
    #go {
        color: white;
        border: 0;
        padding: 10px 20px 10px 20px;
        background-color: rgb(16,103,222);
        border-radius: 5px;
        cursor: pointer;
        transition: box-shadow 0.2s;
        margin-bottom: 5px;
    } */

    #go {
        color: white;
        border: 0;
        height: 3em;
        /* padding: 10px 20px 10px 20px; */
        background-color: rgb(16,103,222);
        border-radius: 5px;
        cursor: pointer;
        transition: box-shadow 0.2s;
        /* margin-bottom: 5px; */
    }

    #colaborate {
        /* color: white; */
        color: black;
        border: 1px solid rgb(216, 216, 216);
        padding: 10px 20px 10px 20px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        cursor: pointer;
        transition: box-shadow 0.2s
    }
    #colaborate:hover {
        box-shadow: 0 0 5px rgb(16,103,222);
    }

    #go:hover {
        box-shadow: 0 0 5px rgb(16,103,222);
    }



    @media only screen and (max-width: 600px) {
        .goto {
        margin-top: 5px;
    }
        .searchinput {
        width: 250px;
        height: 1.5em;
    }
        .main {
    /* background-color: orange; */
    flex-flow: column;
  }
  .headone {
    width: 80vw;
  }
  /* #uk {
    width: 50vw;
  } */
  /* #points {
    width: 50vw;
    height: 50vw;
  } */
}


circle {
    cursor: pointer;
}


a {
    text-decoration: none;
    color: inherit;
}
</style>