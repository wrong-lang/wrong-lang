<script>
    import { quotes } from '$lib/quotes';

    export let quote = quotes[Math.floor(Math.random() * quotes.length)];

    export let random = () => {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    }
</script>

<div class="grid h-screen place-items-center">
    <div>
        <div class="flex flex-col justify-center gap-6">
            <p class="md:text-8xl text-6xl m-4 text-center font-bold animate-bounce">
                Awesome Quotes
            </p>
            <div class="text-3xl text-center flex-none animate-pop">
                <span class="before:block before:absolute before:-inset-4 before:bg-blue-500 before:-skew-y-2 relative inline-block">
                <span class="relative text-white">
                    {quote}
                </span>
            </span>
            </div>
            <center>
                <button on:click={() => random()} class="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-sm mt-8 hover:bg-blue-600 active:scale-90 duration-200">
                    Random
                </button>
            </center>
        </div>
    </div>
</div>