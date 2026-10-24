// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '10月';
  var pickUpdated = '2026-10-25';
  var picks = [
    { rank: '01', site: 'ハピタス', name: 'Klook', now: '7.0%', usual: '3.2%', up: 'いつもの約2.2倍', href: 'https://hapitas.jp/item/detail/itemid/81523/' },
    { rank: '02', site: 'ハピタス', name: 'Apple公式サイト', now: '5.0%', usual: '2.4%', up: 'いつもの約2.1倍', href: 'https://hapitas.jp/item/detail/itemid/73279' },
    { rank: '03', site: 'ハピタス', name: 'JTB（海外）', now: '2.4%', usual: '1.2%', up: 'いつもの約2.0倍', href: 'https://hapitas.jp/item/detail/itemid/58872/' },
    { rank: '04', site: 'ハピタス', name: 'JTB（国内）', now: '2.9%', usual: '1.5%', up: 'いつもの約1.9倍', href: 'https://hapitas.jp/item/detail/itemid/45341/' }
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
  var feedUpdated = '2026-10-25';
  var feed = [
    { source: 'Instagram', date: '2026.10.23', isNew: true, title: 'ファーストクラスが、減っています', href: 'https://www.instagram.com/p/De1_n33D-uL/' },
    { source: 'Instagram', date: '2026.10.23', isNew: true, title: '飛行機の座席番号、「H」の次が「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/p/De1-7OnD_Ht/' },
    { source: 'Instagram', date: '2026.10.22', isNew: true, title: '香港での乗り継ぎが11時間以上。', href: 'https://www.instagram.com/p/Dey70b-D9Iu/' },
    { source: 'Instagram', date: '2026.10.20', isNew: false, title: '2026年8月、学生航空券でドイツへ。', href: 'https://www.instagram.com/p/DeuFmeTj7xb/' },
    { source: 'Instagram', date: '2026.10.18', isNew: false, title: 'モッピーとハピタス、毎朝9時に還元率を自動記録する企画。', href: 'https://www.instagram.com/p/Deo9vOwj-16/' },
    { source: 'note', date: '2026.10.17', isNew: false, title: '【宿泊記】JWマリオット・ホテル東京に誕生日ステイ｜アーバンデラックスキング・プール・朝食まで全部レビュー', href: 'https://note.com/kentytimes_com/n/na17c1db6fad4' },
    { source: 'Instagram', date: '2026.10.16', isNew: false, title: 'JALとANA、同じ日本の航空会社なのに、実は属しているグループが違うって知っていますか?', href: 'https://www.instagram.com/p/DejfEF1j9nl/' },
    { source: 'Instagram', date: '2026.10.15', isNew: false, title: 'モッピーで「ANAマイル実質60%」「JALマイル実質80%」というキャンペーンが同時に始まっています。', href: 'https://www.instagram.com/p/Deg6RLFDzDP/' },
    { source: 'Instagram', date: '2026.10.13', isNew: false, title: 'A380は、総2階建ての世界最大の旅客機 その2階の一番前に、各社がいちばん特別な座席を置いています。', href: 'https://www.instagram.com/p/Deb5Q5-D9ye/' },
    { source: 'Instagram', date: '2026.10.11', isNew: false, title: 'マイルを貯めたいけど、JALカードとANAカード、最初の1枚はどっちがいいの？', href: 'https://www.instagram.com/p/DeVZE6lmaod/' },
    { source: 'Instagram', date: '2026.10.10', isNew: false, title: 'ドアの付いたビジネスクラスが、次々に登場しています', href: 'https://www.instagram.com/p/DeUWXlGGU29/' },
    { source: 'Instagram', date: '2026.10.09', isNew: false, title: '航空会社のラウンジは、ビジネスクラスや上級会員だけのもの。', href: 'https://www.instagram.com/p/DeR4dMMj8MR/' }
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
