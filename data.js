// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '10月';
  var pickUpdated = '2026-10-30';
  var picks = [
    { rank: '01', site: 'モッピー', name: 'Trip.com（航空券）', now: '5.0%', usual: '1.1%', up: 'いつもの約4.5倍', href: 'https://pc.moppy.jp/shopping/detail.php?site_id=4876' },
    { rank: '02', site: 'モッピー', name: 'Trip.com（ホテル）', now: '15.0%', usual: '5.3%', up: 'いつもの約2.8倍', href: 'https://pc.moppy.jp/shopping/detail.php?site_id=4205' },
    { rank: '03', site: 'モッピー', name: 'リクルートカード', now: '5,000P', usual: '2,316P', up: 'いつもの約2.2倍', href: 'https://pc.moppy.jp/ad/detail.php?site_id=123793' },
    { rank: '04', site: 'ハピタス', name: 'リクルートカード', now: '4,500pt', usual: '2,339pt', up: 'いつもの約1.9倍', href: 'https://hapitas.jp/item/detail/itemid/49829/' }
  ];
  // PICKUP-DATA-END

  // INVITE-DATA-START（ポイ活還元率トラッカーの「友達紹介 今月の比較」シートから更新。読者がもらえる特典だけを書く）
  var inviteMonth = '2026年10月';
  var bonuses = {
    moppy: { bonus: '最大2,000円分', detail: '12月末までに広告利用5,000P以上で＋2,000P（確定のログイン特典はなし）。3日連続ログインした人から抽選20名に10,000P', period: '10/31まで' },
    hapitas: { bonus: '最大2,300円分', detail: 'ログインで100pt、広告利用3,000ptで＋1,000pt、5,000ptで＋400pt。ほかに新規登録者キャンペーン最大500pt、ハピタススマート300pt', period: '10/31まで' },
    fancrew: { bonus: '4,500pt（450円分）', detail: '通常3,000ptからアップ中。会員登録→SMS認証→モニター応募・当選→提出物の提出でもらえます', period: '10/31まで' }
  };
  // INVITE-DATA-END

  // FEED-DATA-START（Instagram・noteの新着。毎日自動更新。新しい順）
  var feedUpdated = '2026-10-30';
  var feed = [
    { source: 'Instagram', date: '2026.10.29', isNew: true, title: 'エミレーツのビジネスは、どの機材でも1-2-1だと思っていませんか？', href: 'https://www.instagram.com/p/DfE9YNYD_FJ/' },
    { source: 'Instagram', date: '2026.10.28', isNew: true, title: '「A350ならQsuite」だと思っていませんか？', href: 'https://www.instagram.com/reel/DfCc-t8AQcz/' },
    { source: 'Instagram', date: '2026.10.27', isNew: true, title: 'Trip.comでホテルを予約するとき、どこを経由していますか？', href: 'https://www.instagram.com/reel/DfAAzO8ib6m/' },
    { source: 'Instagram', date: '2026.10.27', isNew: true, title: '記念日のホテル、何で選んでいますか？', href: 'https://www.instagram.com/reel/De_zrHgjSlr/' },
    { source: 'Instagram', date: '2026.10.26', isNew: false, title: '香港での乗り継ぎが11時間以上。', href: 'https://www.instagram.com/p/De9PBsZo_Qy/' },
    { source: 'Instagram', date: '2026.10.25', isNew: false, title: 'ファーストクラスが、減っています', href: 'https://www.instagram.com/p/De6qMqfj2UA/' },
    { source: 'Instagram', date: '2026.10.25', isNew: false, title: 'モッピーとハピタス、今日はどっちが得だと思いますか？', href: 'https://www.instagram.com/reel/De6nuNVjvoW/' },
    { source: 'Instagram', date: '2026.10.23', isNew: false, title: '飛行機の座席番号、「H」の次が「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/p/De1-7OnD_Ht/' },
    { source: 'Instagram', date: '2026.10.20', isNew: false, title: '2026年8月、学生航空券でドイツへ。', href: 'https://www.instagram.com/p/DeuFmeTj7xb/' },
    { source: 'Instagram', date: '2026.10.18', isNew: false, title: 'モッピーとハピタス、毎朝9時に還元率を自動記録する企画。', href: 'https://www.instagram.com/p/Deo9vOwj-16/' },
    { source: 'note', date: '2026.10.17', isNew: false, title: '【宿泊記】JWマリオット・ホテル東京に誕生日ステイ｜アーバンデラックスキング・プール・朝食まで全部レビュー', href: 'https://note.com/kentytimes_com/n/na17c1db6fad4' },
    { source: 'Instagram', date: '2026.10.16', isNew: false, title: 'JALとANA、同じ日本の航空会社なのに、実は属しているグループが違うって知っていますか?', href: 'https://www.instagram.com/p/DejfEF1j9nl/' }
  ];
  // FEED-DATA-END

  // REVIEWS-DATA-START（noteの実際の搭乗記だけ。空ならセクションごと非表示）
  var reviews = [
    { cls: 'エコノミー', title: '学生航空券でドイツへ｜キャセイパシフィック航空・香港乗り継ぎのリアルな搭乗記', date: '2026.10.06', href: 'https://note.com/kentytimes_com/n/n89790e8b08cd' },
    { cls: 'エコノミー', title: 'アジアマイルの特典航空券でJALに搭乗｜医学生の福岡弾丸搭乗記', date: '2026.08.24', href: 'https://note.com/kentytimes_com/n/n90f18dbd7dff' }
  ];
  // REVIEWS-DATA-END

  return { pickMonth: pickMonth, pickUpdated: pickUpdated, picks: picks, inviteMonth: inviteMonth, bonuses: bonuses, feedUpdated: feedUpdated, feed: feed, reviews: reviews };
})();
