<script lang="ts">
  export let closeModal: () => void
</script>

<div
  class="fixed z-10 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div
      class="fixed fadein inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
      on:click={() => closeModal()}
    />

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
    >&#8203;</span
    >
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl sm:w-full"
    >
      <div class="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="text-center sm:text-left pb-4">
          <h3
            class="text-3xl leading-6 font-medium text-gray-900 dark:text-gray-100 text-center"
            id="modal-title"
          >
            WrongLang คืออะไร
          </h3>
          <div class="flex flex-col gap-3 text-sm mt-4 w-full justify-between text-black dark:text-white">
            Wrong-Lang เป็นโปรแกรมที่ไว้แปลงหรือสลับภาษาหากคุณลืมเปลี่ยนภาษา<br> คล้าย ๆ กับ Lullar's de = กำ หรือ RightLang
          </div>
        </div>
        <hr>
        <div class="text-center sm:text-left mt-8">
          <h3
            class="text-3xl leading-6 font-medium text-gray-900 dark:text-gray-100 text-center"
            id="modal-title"
          >
            ตัวอย่างการใช้ Wrong-Lang
          </h3>
          <center>
            <iframe class="w-full my-2 rounded-xl" height="302" src="https://www.youtube.com/embed/_FjoNrw24NA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </center>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black focus:ring-green-300 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => {
            closeModal()
          }}
        >
          Done
        </button>
      </div>
    </div>
  </div>
</div>