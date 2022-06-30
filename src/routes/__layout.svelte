<slot />


<style>
    :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #fdfdfd;
        display: grid;
        place-content: center;
        min-height: 100vh;
        text-align: center;
        margin: 0
    }

    div{
        aspect-ratio: 9/16;
        max-width: 500px;
        width: 100%;
        border: 1px solid #eee;
        display: block;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        border-radius: 8px;
        position: relative
    }
</style>