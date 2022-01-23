<script>
    import { wrongLang } from '$lib/wrongLang';
    import { correctLang } from "$lib/correctLang.js";
    import { writable } from 'svelte/store';

    let input = writable('l;ylfu8iy[');
    let result = writable('');
    let thLayout = writable('Kedmanee')
    let enLayout = writable('Qwerty')
    
    input.subscribe(value => {
        input.set(value);
        result.set(wrongLang(value, $thLayout, $enLayout));
    });
    
    result.subscribe(value => {
        result.set(value);
        input.set(correctLang(value, $thLayout, $enLayout));
    });
    
    thLayout.subscribe(value => {
        thLayout.set(value);
        result.set(wrongLang($input, value, $enLayout));
    });

    enLayout.subscribe(value => {
      enLayout.set(value);
      input.set(correctLang($result, $thLayout, value));
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
          <div class="grid md:grid-cols-1 grid-cols-2 gap-3">
            <div class="flex md:flex-row flex-col gap-4 justify-center items-center">
              <p>Thai Layout: </p>
              <button class="{$thLayout === 'Kedmanee'   ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white" on:click={() => $thLayout = 'Kedmanee'}>Kedmanee</button>
              <button class="{$thLayout === 'Manoonchai' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white" on:click={() => $thLayout = 'Manoonchai'}>Manoonchai</button>
              <button class="{$thLayout === 'Pattachote' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white" on:click={() => $thLayout = 'Pattachote'}>Pattachote</button>
            </div>
          <div class="flex md:flex-row flex-col gap-4 justify-center items-center">
            <p>English Layout: </p>
            <button class="{$enLayout === 'Qwerty' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white" on:click={() => $enLayout = 'Qwerty'}>Qwerty</button>
            <button class="{$enLayout === 'Dvorak' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white" on:click={() => $enLayout = 'Dvorak'}>Dvorak</button>
            <button class="{$enLayout === 'Colemak' ? 'bg-green-500': 'bg-blue-500'} px-4 py-2 rounded-lg text-white" on:click={() => $enLayout = 'Colemak'}>Colemak</button>
          </div>
          </div>
        </div>
    </div>
</div>