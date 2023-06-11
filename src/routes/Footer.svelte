<script>

    import { base } from "$app/paths";

</script>
<footer>
    <div class='footer-container'>
        <div class='content'>
            <a href="{base}/about">
                About Us
            </a>
        </div>
        <div class='content'>
            Contribute
        </div>
    </div>
</footer>



<style>
    a {
        all: unset;
        cursor: pointer;
    }
    footer {
        display: sticky;
        background-color: rgb(245, 245, 245);
        bottom: 0;
        margin-top: 20px;
    }
    .footer-container {
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
    }
    .content {
        margin: 20px;
        color: black;
        font-weight: bolder;
        /* border: 1px solid blue; */
    }
</style>