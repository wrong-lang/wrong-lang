<script>
    import { wrongLang } from '$lib/wrongLang';
    import { correctLang } from "$lib/correctLang.js";
    import { writable } from 'svelte/store';
    import Modal from '$lib/components/Modal.svelte';
    import { modal, darkTheme } from '$lib/store';

    let input = writable('l;ylfu8iy[');
    let result = writable('');
    let thLayout = writable('Kedmanee')
    let enLayout = writable('Qwerty')
    let mode = writable('decrypt')

    input.subscribe(value => {
        input.set(value);
      if($mode === 'decrypt') {
        result.set(wrongLang(value, $thLayout, $enLayout));
      }
    });

    result.subscribe(value => {
        result.set(value);
      if($mode === 'encrypt') {
        input.set(correctLang(value, $thLayout, $enLayout));
      }
    });
    
    thLayout.subscribe(value => {
        thLayout.set(value);
      if($mode === 'decrypt') {
        result.set(wrongLang($input, value, $enLayout));
      } else {
        input.set(correctLang($result, value, $enLayout));
      }
    });

    enLayout.subscribe(value => {
      enLayout.set(value);
      if($mode === 'decrypt') {
        result.set(wrongLang($input, $thLayout, value));
      } else {
        input.set(correctLang($result, $thLayout, value));
      }
    });
    
    mode.subscribe(value => {
      mode.set(value);
      if(value === 'decrypt') {
        result.set(wrongLang($input, $thLayout, $enLayout));
      } else {
        input.set(correctLang($result, $thLayout, $enLayout));
      }
    });
</script>

<div class="grid h-screen place-items-center bg-white dark:bg-black">
    <div>
        <div class="flex flex-col justify-center gap-6">
              <div class="md:text-8xl text-6xl m-4 text-center font-bold">
                <p class="animate-bounce inline-block text-black dark:text-white">⌨wrongLang</p> <p class="inline-block text-2xl text-gray-500 cursor-pointer animate-spin" on:click={() => $modal = true}>?</p>
              </div>
            <div class="flex flex-col gap-4">
              <input type="text" class="border border-gray-500 rounded-lg p-3" bind:value={$input} placeholder="English goes here...">
              <input type="text" class="border border-gray-500 rounded-lg p-3" bind:value={$result} placeholder="Thai goes here...">
            </div>
          <div class="grid md:grid-cols-2 grid-cols-3 gap-3">
            <p class="md:block hidden text-black dark:text-white">Thai Layout: </p>
            <div class="flex md:flex-row flex-col gap-4 items-center">
              <p class="md:hidden block text-black dark:text-white">Thai Layout: </p>
              <button class="{$thLayout === 'Kedmanee'   ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $thLayout = 'Kedmanee'}>Kedmanee</button>
              <button class="{$thLayout === 'Manoonchai' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $thLayout = 'Manoonchai'}>Manoonchai</button>
              <button class="{$thLayout === 'Pattachote' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $thLayout = 'Pattachote'}>Pattachote</button>
            </div>
            <p class="md:block hidden text-black dark:text-white">English Layout: </p>
            <div class="flex md:flex-row flex-col gap-4 items-center">
              <p class="md:hidden block text-black dark:text-white">English Layout: </p>
              <button class="{$enLayout === 'Qwerty' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $enLayout = 'Qwerty'}>Qwerty</button>
              <button class="{$enLayout === 'Dvorak' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $enLayout = 'Dvorak'}>Dvorak</button>
              <button class="{$enLayout === 'Colemak' ? 'bg-green-500': 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $enLayout = 'Colemak'}>Colemak</button>
          </div>
            <p class="md:block hidden text-black dark:text-white">Mode: </p>
            <div class="flex md:flex-row flex-col gap-4 items-center">
              <p class="md:hidden block text-black dark:text-white">Mode: </p>
              <button class="{$mode === 'decrypt' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $mode = 'decrypt'}>Decrypt</button>
              <button class="{$mode === 'encrypt' ? 'bg-green-500' : 'bg-blue-500'} px-4 py-2 rounded-lg text-white w-32" on:click={() => $mode = 'encrypt'}>Encrypt</button>
            </div>

          </div>
        </div>
    </div>
</div>
<div class="absolute top-0 left-0 p-2 text-gray-500 text-2xl">
  <a on:click={() => $darkTheme = !($darkTheme)} class="cursor-pointer">{$darkTheme ? '🌞' : '🌙' }</a>
</div>
<div class="absolute top-0 right-0 p-2 text-gray-500">
  <a href="https://github.com/tinvv/wrong-lang">Github</a>
</div>
{#if $modal}
  <Modal
    closeModal={() => ($modal = false)}
  />
{/if}