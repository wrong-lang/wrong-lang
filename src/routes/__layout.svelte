<script lang="ts">
    import '../tailwind.css'
    import Head from "$lib/components/Head.svelte";
    import Kofi from "$lib/components/Kofi.svelte";
    import SocialButton from "$lib/components/SocialButton.svelte";
    import { darkTheme } from "$lib/store";

    console.log($darkTheme)
</script>

<Head />
<main class="{$darkTheme ? 'dark' : ''}">
  <slot />
</main>
<Kofi name="tinvv" />
<SocialButton />