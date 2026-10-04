(function () {
  'use strict';
  var D = window.SITE_DATA || {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  // ---- 固定データ（自動更新されない部分） ----
  var ICON = {
    camera: 'M4 7h3l2-3h6l2 3h3v13H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    at: 'M16 12a4 4 0 1 1-1.2-2.8M16 8v5a2.5 2.5 0 0 0 5 0v-1a9 9 0 1 0-3.5 7.1',
    pen: 'M4 20h4L19 9l-4-4L4 16zM14 6l4 4',
    people: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6',
    bag: 'M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2'
  };
  var SNS = [
    { name: 'Instagram', desc: '旅とマイルの写真・図解', icon: ICON.camera, href: 'https://www.instagram.com/medical_mileage/' },
    { name: 'Threads', desc: '航空券セール・航空ニュース速報', icon: ICON.at, href: 'https://www.threads.com/@medical_mileage' },
    { name: 'note', desc: 'ポイ活解説・搭乗記', icon: ICON.pen, href: 'https://note.com/kentytimes_com' },
    { name: 'Facebook', desc: '旅とマイルの写真・図解', icon: ICON.people, href: 'https://www.facebook.com/profile.php?id=61590766454202' },
    { name: '楽天ROOM', desc: '旅・飛行機グッズ', icon: ICON.bag, href: 'https://room.rakuten.co.jp/room_0b385471fb/items' }
  ];
  var INVITES = [
    { id: 'moppy', name: 'モッピー', kind: 'ポイントサイト', desc: 'ショッピングやサービス利用でポイントが貯まるポイントサイト。', code: 'eFsmA1c5', href: 'https://pc.moppy.jp/entry/invite.php?invite=eFsmA1c5&openExternalBrowser=1', cta: '紹介リンクで登録する', warn: 'InstagramやLINEのアプリ内ブラウザから登録すると、紹介が正しく記録されないことがあります。Safariなどのブラウザで開いてから登録してください。' },
    { id: 'hapitas', name: 'ハピタス', kind: 'ポイントサイト', desc: '買い物や申し込みでポイントが貯まるポイントサイト。', code: 'KZQMPZ', href: 'https://hapitas.jp/appinvite/?i=25793143', cta: '紹介リンクで登録する' },
    { id: 'fancrew', name: 'ファンくる', kind: 'モニター', desc: '飲食店などの覆面調査モニターでポイントがもらえるサービス。', code: '', href: 'https://www.fancrew.jp/about?inflow_id=fri_e12-10002657&lk=10002657&lk1=b&d=1', cta: '紹介リンクで登録する' },
    { id: 'lotus', name: 'ロータスマイル', kind: 'マイレージ', desc: 'ベトナム航空のマイレージプログラム。登録時に紹介コードを入力してください。', code: '9070065574', href: 'https://www.vietnamairlines.com/jp/ja/lotusmiles/enroll-new', cta: '登録ページへ' }
  ];

  // ---- メニュー（スマホ） ----
  var toggle = document.querySelector('.nav-toggle');
  var mnav = $('nav-mobile');
  if (toggle && mnav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      mnav.hidden = open;
    });
    mnav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); mnav.hidden = true; }
    });
  }

  // ---- SNS ----
  $('sns-grid').innerHTML = SNS.map(function (s) {
    return '<a class="sns-item" href="' + esc(s.href) + '" target="_blank" rel="noopener">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B524D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + s.icon + '"/></svg>' +
      '<b>' + esc(s.name) + '</b><span>' + esc(s.desc) + '</span></a>';
  }).join('');

  // ---- 新着 ----
  var feed = D.feed || [];
  var tab = 'all';
  $('feed-updated').textContent = D.feedUpdated || '';
  function renderTabs() {
    $('feed-tabs').innerHTML = [['all', 'すべて'], ['Instagram', 'Instagram'], ['note', 'note']].map(function (t) {
      return '<button type="button" role="tab" data-tab="' + t[0] + '" aria-selected="' + (tab === t[0]) + '">' + t[1] + '</button>';
    }).join('');
  }
  function renderFeed() {
    var items = feed.filter(function (p) { return tab === 'all' || p.source === tab; }).slice(0, 6);
    $('feed-grid').innerHTML = items.map(function (p) {
      return '<a class="feed-card' + (p.source === 'Instagram' ? ' ig' : '') + '" href="' + esc(p.href) + '" target="_blank" rel="noopener">' +
        '<div class="feed-meta"><span class="latin feed-source">' + esc(p.source) + '</span><span class="feed-date">' + esc(p.date) + '</span>' +
        (p.isNew ? '<span class="latin feed-new">New</span>' : '') + '</div>' +
        '<div class="feed-title">' + esc(p.title) + '</div>' +
        '<span class="feed-more">' + esc(p.source) + 'で読む →</span></a>';
    }).join('');
  }
  $('feed-tabs').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-tab]');
    if (!b) return;
    tab = b.getAttribute('data-tab');
    renderTabs(); renderFeed();
  });
  renderTabs(); renderFeed();

  // ---- 高還元案件 ----
  $('pick-month').textContent = D.pickMonth || '';
  $('pick-updated').textContent = D.pickUpdated || '';
  $('pick-grid').innerHTML = (D.picks || []).map(function (k) {
    return '<div class="pick"><div class="pick-top"><span class="latin pick-rank">' + esc(k.rank) + '</span><span class="pick-site">' + esc(k.site) + '</span></div>' +
      '<div class="serif pick-name">' + esc(k.name) + '</div>' +
      '<div class="pick-nums"><div><small>いまの還元</small><span class="pick-now">' + esc(k.now) + '</span></div><div><small>いつもの平均</small><span class="pick-usual">' + esc(k.usual) + '</span></div></div>' +
      '<div class="pick-up">' + esc(k.up) + '</div>' +
      '<a class="btn-gold" href="' + esc(k.href) + '" target="_blank" rel="noopener">' + esc(k.site) + 'で見る</a></div>';
  }).join('');

  // ---- 友達紹介 ----
  var bonuses = D.bonuses || {};
  $('invite-grid').innerHTML = INVITES.map(function (r) {
    var b = bonuses[r.id];
    var bonusHtml = b
      ? '<div class="bonus-main">' + esc(b.bonus) + '</div><div class="bonus-detail">' + esc(b.detail) + '</div><div class="bonus-period">' + esc(D.inviteMonth) + 'の特典　｜　' + esc(b.period) + '</div>'
      : '<div class="bonus-detail" style="font-size:14px">登録時に下の紹介コードを入力してください。</div>';
    var codeHtml = r.code
      ? '<div><div class="code-label">紹介コード</div><div class="code-row"><span class="code">' + esc(r.code) + '</span>' +
        '<button type="button" class="copy-btn" data-code="' + esc(r.code) + '" aria-label="' + esc(r.name) + 'の紹介コードをコピー">コピー</button></div></div>'
      : '';
    return '<div class="invite"><span class="invite-kind">' + esc(r.kind) + '</span>' +
      '<div><div class="serif invite-name">' + esc(r.name) + '</div><div class="invite-desc">' + esc(r.desc) + '</div></div>' +
      '<div class="bonus"><div class="latin bonus-label">BONUS</div>' + bonusHtml + '</div>' +
      codeHtml +
      (r.warn ? '<p class="warn">' + esc(r.warn) + '</p>' : '') +
      '<a class="invite-cta" href="' + esc(r.href) + '" target="_blank" rel="sponsored noopener">' + esc(r.cta) + '</a></div>';
  }).join('');
  $('invite-grid').addEventListener('click', function (e) {
    var b = e.target.closest('.copy-btn');
    if (!b) return;
    var code = b.getAttribute('data-code');
    var done = function () { b.textContent = 'コピー済み'; setTimeout(function () { b.textContent = 'コピー'; }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done, done);
    } else { done(); }
  });

  // ---- 搭乗記 ----
  var reviews = D.reviews || [];
  if (reviews.length) {
    $('reviews').hidden = false;
    $('review-list').innerHTML = reviews.map(function (v) {
      return '<a class="review" href="' + esc(v.href) + '" target="_blank" rel="noopener">' +
        '<span class="review-cls">' + esc(v.cls) + '</span><span class="serif review-title">' + esc(v.title) + '</span><span class="review-date">' + esc(v.date) + '</span>' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A5C24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
    }).join('');
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.nav-reviews'), function (a) { a.hidden = true; });
  }
})();
