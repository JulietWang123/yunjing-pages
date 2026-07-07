const surveyBars = {
  demand: [
    ["跑步机区域", 95.45],
    ["常规健身器械", 90.91],
    ["童玩区", 72.73],
    ["瑜伽舞房", 68.18],
    ["普拉提器械", 59.09],
    ["乒乓球台", 50.00],
    ["自习室", 40.91]
  ],
  frequency: [
    ["健身每周2次以上", 95.45],
    ["童玩每周2次以上", 68.18],
    ["瑜伽/普拉提每周2次以上", 68.18],
    ["乒乓球每周2次以上", 59.09],
    ["阅读书画每周2次以上", 50.0],
    ["待客休息每周2次以上", 50.0],
    ["棋牌桌游每周2次以上", 36.36]
  ],
  genderYoga: [
    ["瑜伽/普拉提会使用", 77.27],
    ["瑜伽舞房需求", 68.18],
    ["每周2次以上", 68.18],
    ["普拉提器械需求", 59.09],
    ["瑜伽舞房非常需要", 54.55],
    ["每周4次以上", 54.55]
  ],
  age: [
    ["18-25岁", 4.55],
    ["26-35岁", 45.45],
    ["36-45岁", 27.27],
    ["46-55岁", 18.18],
    ["56-65岁", 4.55]
  ],
  interest: [
    ["运动健身", 86.36],
    ["阅读学习", 59.09],
    ["瑜伽舞蹈", 50.0],
    ["亲子活动", 50.0],
    ["棋牌桌游", 36.36],
    ["社交交流", 36.36],
    ["书法绘画", 27.27],
    ["科普探索", 22.73]
  ]
};

const buildingRows = [
  ["6幢", "文化娱乐：休闲游戏&书画茶艺", "雅趣文化可变厅", "休闲游戏、桌游、轻影音", "书画茶艺、手作讲堂、业主分享", "可移动桌椅、投影、储物、展示架、耐磨地面"],
  ["7幢", "会所：茶室&书房&画室", "云上书茶雅集馆", "茶室、品茗、静态会客", "书房、画室、艺术阅读", "高装标木饰面、书架、茶台、艺术灯、展示柜"],
  ["9幢", "会所：五感书房&业主派会客", "礼序会客共享厅", "归家等候、访客接待", "邻里会客、轻办公、临时洽谈", "酒店式软座、边几、充电、绿植、香氛"],
  ["10幢", "学习娱乐：预约自习室&棋牌套房", "知行活力馆", "预约自习、安静阅读", "约45平方米健身区，有氧+基础力量", "静音材料、健身地胶、跑步机、力量器械、储物"],
  ["12幢", "青年运动：开放健身&乒乓球馆", "青年活力运动馆", "开放健身、拉伸热身、轻力量", "乒乓球+镜面轻运动复合区", "已有镜墙、木纹弹性地板/运动木地板质感材料、可移动球台"],
  ["13幢", "儿童活动：儿童活动&亲子陪伴", "童梦成长乐园", "低龄儿童软包童玩", "亲子陪伴、儿童阅读、手作课堂", "环保软包、防撞、可擦洗墙面、分龄收纳"],
  ["14幢", "社交生活：家庭欢聚&女王空间", "她享美学社交馆", "家庭欢聚、女友聚会、轻茶歇", "女王空间、花艺美学、妆容整理、按摩放松", "装标不低于19幢，柔光、镜面、艺术软装、舒适沙发"],
  ["15幢", "优雅生活：瑜伽会馆&开放会客", "她享身心会馆", "封闭普拉提私教、独立休憩补给", "扩容瑜伽舞房、原普拉提室保留为冥想/拉伸/私教房", "全封闭优先，木地板+高品质软地胶、镜墙、普拉提床、新风除湿"],
  ["16幢", "自然生活：科普讲堂&社区展廊", "森氧自然疗愈厅", "自然科普、园艺花艺、社区讲堂", "社区展廊、冥想拉伸、亲子自然课堂", "绿植、可移动桌椅、柔光、除湿、展陈系统"],
  ["17幢", "学习娱乐：预约自习室&棋牌套房", "邻里弈乐会馆", "大棋牌麻将套房", "小棋牌室、茶歇等候、公共卫生间", "隔音、排风、耐污墙面、舒适座椅、储物"],
  ["18幢", "学习娱乐：预约自习室&棋牌套房", "轻学轻运动馆", "预约自习、安静阅读、轻办公", "镜面运动多功能区，瑜伽/拉伸/形体/小班课", "镜墙、软地胶、瑜伽垫、泡沫轴、小哑铃、可移动桌椅"],
  ["19幢", "高雅生活：绅士会馆&商务会客", "菁英商务会客厅", "绅士会所、商务社交", "商务会客、洽谈、轻宴请", "高装标但避免明显高于女性空间，皮质/木饰面/金属细节"]
];

const buildingDetails = [
  ["6幢", "雅趣文化可变厅", "文化娱乐：休闲游戏&书画茶艺", "休闲游戏、桌游、轻影音", "书画茶艺、手作讲堂、业主分享", "可移动桌椅、投影、储物、展示架、耐磨地面。用可变家具替代固定陈列，让低频文化空间变成可运营的邻里客厅。"],
  ["7幢", "云上书茶雅集馆", "会所：茶室&书房&画室", "茶室、品茗、静态会客", "书房、画室、艺术阅读", "木饰面、书架、茶台、艺术灯和展示柜，保持会所类空间的高装标和文化气质。"],
  ["9幢", "礼序会客共享厅", "会所：五感书房&业主派会客", "归家等候、访客接待", "邻里会客、轻办公、临时洽谈", "酒店式软座、边几、充电、绿植、香氛，强化归家仪式感和访客接待效率。"],
  ["10幢", "知行活力馆", "学习娱乐：预约自习室&棋牌套房", "预约自习、安静阅读", "约45平方米健身区，有氧+基础力量", "静区和动区分隔；健身区配置防滑地胶、跑步机、力量器械、哑铃、拉伸垫和消毒用品。"],
  ["12幢", "青年活力运动馆", "青年运动：开放健身&乒乓球馆", "开放健身、拉伸热身、轻力量", "乒乓球+镜面轻运动复合区", "利用已有镜墙；地面采用木纹弹性地板/运动木地板质感材料并保持平整无大缝隙；球台可移动。"],
  ["13幢", "童梦成长乐园", "儿童活动：儿童活动&亲子陪伴", "低龄儿童软包童玩", "亲子陪伴、儿童阅读、手作课堂", "环保软包、防撞圆角、可擦洗墙面、分龄收纳和家长看护座椅。"],
  ["14幢", "她享美学社交馆", "社交生活：家庭欢聚&女王空间", "家庭欢聚、女友聚会、轻茶歇", "女王空间、花艺美学、妆容整理、按摩放松", "女性社交空间装标不低于19幢；柔光、镜面、艺术软装、花艺台、按摩椅和舒适沙发。"],
  ["15幢", "她享身心会馆", "优雅生活：瑜伽会馆&开放会客", "封闭普拉提私教、独立休憩补给", "扩容瑜伽舞房、原普拉提室保留为冥想/拉伸/私教房", "全封闭优先；木地板+高品质软地胶、镜墙、普拉提床、新风除湿、储物、更衣与预约机制。"],
  ["16幢", "森氧自然疗愈厅", "自然生活：科普讲堂&社区展廊", "自然科普、园艺花艺、社区讲堂", "社区展廊、冥想拉伸、亲子自然课堂", "绿植、可移动桌椅、柔光、除湿、展陈系统和软垫收纳，避免固定展板低频闲置。"],
  ["17幢", "邻里弈乐会馆", "学习娱乐：预约自习室&棋牌套房", "大棋牌麻将套房", "小棋牌室、茶歇等候、公共卫生间", "隔音、排风、耐污墙面、舒适座椅、自动麻将桌和卫生间便利性。"],
  ["18幢", "轻学轻运动馆", "学习娱乐：预约自习室&棋牌套房", "预约自习、安静阅读、轻办公", "镜面运动多功能区，瑜伽/拉伸/形体/小班课", "镜墙、软地胶、瑜伽垫、泡沫轴、小哑铃、可移动桌椅，补足15幢瑜伽容量。"],
  ["19幢", "菁英商务会客厅", "高雅生活：绅士会馆&商务会客", "绅士会所、商务社交", "商务会客、洽谈、轻宴请", "高装标商务会客，但避免明显高于14/15女性友好空间。皮质、木饰面、金属细节和会议屏。"]
];

function formatPct(value) {
  return `${Number(value).toFixed(value % 1 === 0 ? 0 : 1)}%`;
}

function renderBars(id, data) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = data.map(([label, value]) => `
    <div class="bar-row">
      <div class="bar-label">${label}</div>
      <div class="bar-track"><div class="bar-fill" data-width="${value}"></div></div>
      <div class="bar-value">${formatPct(value)}</div>
    </div>
  `).join("");
}

function renderMatrix(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div class="table-scroll">
      <table class="matrix">
        <thead>
          <tr>
            <th>楼幢</th><th>原主题/原方案</th><th>升级主题</th><th>左侧场景</th><th>右侧场景</th><th>装标与软装重点</th>
          </tr>
        </thead>
        <tbody>
          ${buildingRows.map(row => `
            <tr>${row.map((cell, index) => `<td>${index === 2 ? `<span class="tag">${cell}</span>` : cell}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderBuildings(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = buildingDetails.map(([num, name, origin, left, right, standard]) => `
    <article class="building reveal">
      <div class="building-number">${num}</div>
      <div>
        <h3>${name}</h3>
        <p class="building-meta">原方案：${origin}</p>
        <div class="scene-grid">
          <div class="scene"><strong>左侧功能</strong>${left}</div>
          <div class="scene"><strong>右侧功能</strong>${right}</div>
        </div>
        <p>${standard}</p>
      </div>
    </article>
  `).join("");
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.dataset.nav === page) link.classList.add("active");
  });
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

function animateBars() {
  window.setTimeout(() => {
    document.querySelectorAll(".bar-fill").forEach(fill => {
      fill.style.width = `${fill.dataset.width}%`;
    });
  }, 140);
}

function boot() {
  setActiveNav();
  renderBars("demand-bars", surveyBars.demand);
  renderBars("frequency-bars", surveyBars.frequency);
  renderBars("gender-yoga-bars", surveyBars.genderYoga);
  renderBars("age-bars", surveyBars.age);
  renderBars("interest-bars", surveyBars.interest);
  renderMatrix("building-matrix");
  renderBuildings("building-details");
  revealOnScroll();
  animateBars();
}

document.addEventListener("DOMContentLoaded", boot);
