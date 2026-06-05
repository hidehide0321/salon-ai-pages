document.addEventListener('DOMContentLoaded', function () {
  var imageUrl = 'https://line.hide-ai-lab.com/assets/steps/salon/day4-02.jpg';
  var imageAlt = 'リピート率を上げる近道は来店後フォローです';
  var body = document.getElementById('article-body');
  if (!body || body.querySelector('.step-image')) return;

  var paragraphs = Array.prototype.slice.call(body.querySelectorAll('p'));
  var target = paragraphs.find(function (paragraph) {
    return paragraph.textContent.indexOf('ここを言葉にする必要があります。') >= 0;
  });
  if (!target) return;

  var figure = document.createElement('figure');
  figure.className = 'step-image';

  var image = document.createElement('img');
  image.src = imageUrl;
  image.alt = imageAlt;
  image.loading = 'lazy';

  figure.appendChild(image);
  target.insertAdjacentElement('afterend', figure);
});
