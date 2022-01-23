<script>
    import { Email, Reddit, Facebook, Line, Twitter } from 'svelte-share-buttons-component';

    const url = 'https://quotes.vvx.bar/';
    const title = 'Awesome Quotes';
    const desc = 'An awesome quotes generator!';
</script>

<div class="absolute bottom-0 right-0 p-3 flex flex-row gap-2">
    <Reddit class="share-button" {title} {url} />
    <Facebook class="share-button" quote="{title}" {url} />
    <Twitter class="share-button" text="{title}" {url} hashtags="svelte,quotes" via="username" />
    <Line class="share-button" {url} />
</div>