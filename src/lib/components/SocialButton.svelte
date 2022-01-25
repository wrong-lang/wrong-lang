<script>
    import { Facebook, Twitter } from 'svelte-share-buttons-component';

    const url = 'https://wrong-lang.vvx.bar/';
    const title = 'สำหรับใครที่ชอบลืมเปลี่ยนภาษาเวลาพิมพ์ ใช้นี่สิ!';
</script>

<div class="absolute bottom-0 right-0 p-3 flex flex-row gap-2">
    <Facebook class="rounded-full share-button" quote="{title}" {url} />
    <Twitter class="rounded-full share-button" text="{title}" {url} hashtags="svelte,wronglang" via="tinvv" />
</div>