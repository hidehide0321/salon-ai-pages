const STEP_IMAGES = {
  1: [
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day1-03.jpg",
      alt: "サロンオーナーの時間を奪う日常業務",
      after: "どれも大切です。"
    },
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day1-02.jpg",
      alt: "サロン経営を整える4つの視点",
      after: "オーナーが毎回同じことを考え続けていないかどうかです。"
    }
  ],
  3: [
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day3-01.jpg",
      alt: "LINE配信がキャンペーン案内ばかりになる理由",
      after: "ここが幹です。"
    }
  ],
  4: [
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day4-02.jpg",
      alt: "リピート率を上げる近道は来店後フォローです",
      after: "ここを言葉にする必要があります。"
    }
  ],
  5: [
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day5-02.jpg",
      alt: "サロンに接客の型がある場合とない場合の違い",
      after: "お客様の体験にも差が出ます。"
    },
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day5-01.jpg",
      alt: "AIで整える接客の型6つの例",
      after: "こういうものを、少しずつ整えていけます。"
    }
  ],
  6: [
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day6-02.jpg",
      alt: "作戦会議で確認するリピート・単価・教育・時間の4つのポイント",
      after: "作戦会議で見るのは、主に4つです。"
    },
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day6-01.jpg",
      alt: "作戦会議のゴールと実務に落とし込む具体例",
      after: "こうして実務に落とし込みます。"
    }
  ],
  7: [
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day7-01.jpg",
      alt: "AIを入れた半年後の理想のサロン像",
      after: "半年後、あなたのサロンがこうなっていたら、どうでしょうか。"
    },
    {
      url: "https://line.hide-ai-lab.com/assets/steps/salon/day7-02.jpg",
      alt: "6か月の伴走支援ロードマップ",
      after: "6か月支援では、毎月ひとつずつ、サロンに残る仕組みを作っていきます。"
    }
  ]
};

function getStepImageDay() {
  const explicitDay = document.body.dataset.day;
  if (explicitDay) return Number(explicitDay);
  const match = location.pathname.match(/day(\d+)\.html$/);
  return match ? Number(match[1]) : 1;
}

function renderStepImage(image) {
  const figure = document.createElement("figure");
  figure.className = "step-image";
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt || "";
  img.loading = "lazy";
  figure.appendChild(img);
  return figure;
}

function insertStepImages() {
  const images = STEP_IMAGES[getStepImageDay()] || [];
  if (!images.length) return;
  const body = document.getElementById("article-body");
  if (!body || body.dataset.imagesInserted === "true") return;
  const paragraphs = Array.from(body.querySelectorAll("p"));
  images.forEach((image) => {
    if (body.querySelector(`img[src="${image.url}"]`)) return;
    const target = paragraphs.find((paragraph) => paragraph.textContent.includes(image.after));
    if (target) target.insertAdjacentElement("afterend", renderStepImage(image));
  });
  body.dataset.imagesInserted = "true";
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(insertStepImages, 0);
});
