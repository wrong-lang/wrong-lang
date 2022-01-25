import { browser } from "$app/env";
import { writable } from "svelte/store";

const storage = browser
  ? JSON.parse(window.localStorage['wrong-lang-settings'] || '{}') || {}
  : {}

function storeSettings() {
  if (browser) {
    window.localStorage['wrong-lang-settings'] = JSON.stringify(storage)
  }
}

export let modal = writable(storage.modal ?? true)
export let darkTheme = writable(storage.darkTheme ?? false)

modal.subscribe(value => {
  storage.modal = value
  storeSettings()
});

darkTheme.subscribe(value => {
  storage.darkTheme = value
  storeSettings()
});