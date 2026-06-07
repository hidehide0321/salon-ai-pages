document.addEventListener('DOMContentLoaded', function () {
  var images = [
    {
      url: 'https://line.hide-ai-lab.com/assets/steps/salon/day6-02.jpg',
      alt: '作戦会議で確認するリピート・単価・教育・時間の4つのポイント',
      after: '最後に、時間です。'
    },
    {
      url: 'https://line.hide-ai-lab.com/assets/steps/salon/day6-01.jpg',
      alt: '作戦会議のゴールと実務に落とし込む具体例',
      after: 'こうして実務に落とし込みます。'
    }
  ];
  var body = document.getElementById('article-body');
  if (!body) return;

  var paragraphs = Array.prototype.slice.call(body.querySelectorAll('p'));
  images.forEach(function (item) {
    var alreadyInserted = Array.prototype.some.call(body.querySelectorAll('.step-image img'), function (image) {
      return image.src === item.url;
    });
    if (alreadyInserted) return;

    var target = paragraphs.find(function (paragraph) {
      return paragraph.textContent.indexOf(item.after) >= 0;
    });
    if (!target) return;

    var figure = document.createElement('figure');
    figure.className = 'step-image';

    var image = document.createElement('img');
    image.src = item.url;
    image.alt = item.alt;
    image.loading = 'lazy';

    figure.appendChild(image);
    target.insertAdjacentElement('afterend', figure);
  });
});
