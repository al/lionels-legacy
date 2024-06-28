<template>
  <div
    class="ml-subscribe-form ml-subscribe-form-15961160 mt-4"
    id="mlb2-15961160"
  >
    <div class="row-form">
      <form
        class="ml-block-form"
        action="https://assets.mailerlite.com/jsonp/1003257/forms/125276057865553655/subscribe"
        data-code=""
        method="post"
        target="_blank"
      >
        <div class="flex flex-col md:flex-row">
          <div class="ml-validate-email ml-validate-required flex-grow md:mb-0 md:mr-2 mb-3">
            <input
              class="h-12 appearance-none rounded border w-full border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-orange-600 focus:shadow-outline focus:outline-none"
              autocomplete="email"
              data-inputmask=""
              name="fields[email]"
              placeholder="Email"
              type="email"
            />
          </div>

          <div class="primary inline-flex">
            <button
              class="w-full items-center justify-center primary h-12 rounded bg-orange-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-orange-900 focus:shadow-outline focus:outline-none"
              type="submit"
            >
              Subscribe
            </button>
            <button
              class="hidden loading w-full items-center justify-center primary h-12 rounded bg-gray-500 px-6 font-medium tracking-wide text-white shadow-md"
              disabled="disabled"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>

        <p class="my-4 text-sm text-gray-500">
          If you would like to receive occasional updates about our awareness campaign, subscribe
          here.
        </p>

        <div class="ml-form-recaptcha ml-validate-required flex justify-center md:justify-normal">
          <div
            class="g-recaptcha inline-block"
            data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"
          ></div>
        </div>
        <input
          name="ml-submit"
          type="hidden"
          value="1"
        />
        <input
          name="anticsrf"
          type="hidden"
          value="true"
        />
      </form>
    </div>
    <div class="hidden row-success">
      <h4 class="font-semibold text-orange-accent-400">Thank you!</h4>

      <p class="mt-4 text-gray-500">You have been added to our subscriber list.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  ;[
    'https://www.google.com/recaptcha/api.js',
    'https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127',
  ].forEach((url) => {
    document.head.appendChild(Object.assign(document.createElement('script'), { src: url }))
  })

  window.ml_webform_success_15961160 = () => {
    var $ = window.ml_jQuery || window.jQuery
    $('.ml-subscribe-form-15961160 .row-success').show()
    $('.ml-subscribe-form-15961160 .row-form').hide()
  }

  fetch('https://assets.mailerlite.com/jsonp/1003257/forms/125276057865553655/takel')
})
</script>

<style scoped>
.ml-error input {
  border-color: #ff0000;
}

.ml-form-recaptcha :deep(iframe) {
  border: solid 1px transparent;
  border-radius: 4px;
  transform: scale(0.8);
  transform-origin: 0 0;
}

.ml-form-recaptcha.ml-error :deep(iframe) {
  border-color: #ff0000;
}
</style>
