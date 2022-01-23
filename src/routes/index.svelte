<script>
    import { toGamer } from '$lib/toGamer';
    import { writable } from 'svelte/store';

    let input = writable('กายดี้เทพซ่า');
    let result = toGamer($input);
    
    input.subscribe(value => {
        input.set(value);
        result = toGamer(value);
    });
</script>

<div class="grid h-screen place-items-center">
    <div>
        <div class="flex flex-col justify-center gap-6">
            <p class="md:text-8xl text-6xl m-4 text-center font-bold animate-bounce">
                🎮toGamer
            </p>
            <div class="flex flex-col gap-4">
              <input type="text" class="border border-gray-500 rounded-lg p-3" bind:value={$input}>
              <input type="text" class="border border-gray-500 rounded-lg p-3" bind:value={result}>
            </div>
        </div>
    </div>
</div>