document.addEventListener('DOMContentLoaded', function () {
  var diagnosisUrl = 'https://lin.ee/oMZDqoM';
  var images = [
    {
      url: 'https://line.hide-ai-lab.com/assets/steps/salon/day7-01.jpg',
      alt: 'AIを入れた半年後の理想のサロン像',
      after: '半年後、あなたのサロンがこうなっていたら、どうでしょうか。'
    },
    {
      url: 'https://line.hide-ai-lab.com/assets/steps/salon/day7-02.jpg',
      alt: '6か月の伴走支援ロードマップ',
      after: '6か月支援では、毎月ひとつずつ、サロンに残る仕組みを作っていきます。'
    }
  ];
  var body = document.getElementById('article-body');
  if (!body) return;

  Array.prototype.forEach.call(body.querySelectorAll('a'), function (link) {
    if (link.href.indexOf('/salon_sindan_si-to.html') >= 0) {
      link.href = diagnosisUrl;
      link.textContent = diagnosisUrl;
    }
  });

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
