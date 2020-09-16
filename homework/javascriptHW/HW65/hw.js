/*global $*/
(function () {
  'use strict';

  const thePage = $('#fileToLoad');
  const page = $('#page');
  const theForm = $('#form');
  theForm.submit(event => {
    event.preventDefault();
    fetch(thePage.val())
      .then(r => r.text())
      .then((text) => page.text(text))
      .catch(() => window.pcs.messageBox.show('bad error!'));
    theForm[0].reset();
  });
}());