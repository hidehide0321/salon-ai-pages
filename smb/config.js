(function () {
  'use strict';

  var formEndpoint = 'https://haishin-test.angelia-ld.com/forms/aibiz-hp';

  window.HIDE_AI_SITE_CONFIG = Object.freeze({
    formEndpoint: formEndpoint
  });

  document.querySelectorAll('form[data-gas-form]').forEach(function (form) {
    form.action = formEndpoint;
  });
})();
