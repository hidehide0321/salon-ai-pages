(function () {
  'use strict';

  var formEndpoint = 'https://script.google.com/macros/s/AKfycbwZxt7iDpC7geiusV1vS8n70fdqhGuBMQfJIVuHN4keWNlhOIStegfct8ihZbGy1uhI/exec';

  window.HIDE_AI_SITE_CONFIG = Object.freeze({
    formEndpoint: formEndpoint
  });

  document.querySelectorAll('form[data-gas-form]').forEach(function (form) {
    form.action = formEndpoint;
  });
})();
