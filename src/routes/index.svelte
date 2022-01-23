<script>
    import { wrongLang } from '$lib/wrongLang';
    import { correctLang } from "$lib/correctLang.js";
    import { writable } from 'svelte/store';

    let input = writable('l;ylfu8iy[');
    let result = writable('');
    
    input.subscribe(value => {
        input.set(value);
        result.set(wrongLang(value));
    });
    
    result.subscribe(value => {
        result.set(value);
        input.set(correctLang(value));
    });
</script>

<div class="grid h-screen place-items-center">
    <div>
        <div class="flex flex-col justify-center gap-6">
            <p class="md:text-8xl text-6xl m-4 text-center font-bold animate-bounce">
                ⌨wrongLang
            </p>
            <div class="flex flex-col gap-4">
              <input type="text" class="border border-gray-500 rounded-lg p-3" bind:value={$input}>
              <input type="text" class="border border-gray-500 rounded-lg p-3" bind:value={$result}>
            </div>
        </div>
    </div>
</div>