// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '10月';
  var pickUpdated = '2026-10-21';
  var picks = [
    { rank: '01', site: 'モッピー', name: 'Apple公式サイト', now: '5.0%', usual: '2.0%', up: 'いつもの約2.5倍', href: 'https://pc.moppy.jp/shopping/detail.php?site_id=6716' },
    { rank: '02', site: 'ハピタス', name: 'Apple公式サイト', now: '5.0%', usual: '2.1%', up: 'いつもの約2.4倍', href: 'https://hapitas.jp/item/detail/itemid/73279' },
    { rank: '03', site: 'ハピタス', name: '三菱UFJ銀行 口座開設', now: '24,000pt', usual: '15,080pt', up: 'いつもの約1.6倍', href: 'https://hapitas.jp/item/detail/itemid/92479' },
    { rank: '04', site: 'ハピタス', name: '三菱UFJカード', now: '14,500pt', usual: '11,991pt', up: 'いつもより約21%アップ', href: 'https://hapitas.jp/item/detail/itemid/100868' }
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
  var feedUpdated = '2026-10-21';
  var feed = [
    { source: 'Instagram', date: '2026.10.20', isNew: true, title: '2026年8月、学生航空券でドイツへ。', href: 'https://www.instagram.com/p/DeuFmeTj7xb/' },
    { source: 'Instagram', date: '2026.10.18', isNew: true, title: 'モッピーとハピタス、毎朝9時に還元率を自動記録する企画。', href: 'https://www.instagram.com/p/Deo9vOwj-16/' },
    { source: 'note', date: '2026.10.17', isNew: false, title: '【宿泊記】JWマリオット・ホテル東京に誕生日ステイ｜アーバンデラックスキング・プール・朝食まで全部レビュー', href: 'https://note.com/kentytimes_com/n/na17c1db6fad4' },
    { source: 'Instagram', date: '2026.10.16', isNew: false, title: 'JALとANA、同じ日本の航空会社なのに、実は属しているグループが違うって知っていますか?', href: 'https://www.instagram.com/p/DejfEF1j9nl/' },
    { source: 'Instagram', date: '2026.10.15', isNew: false, title: 'モッピーで「ANAマイル実質60%」「JALマイル実質80%」というキャンペーンが同時に始まっています。', href: 'https://www.instagram.com/p/Deg6RLFDzDP/' },
    { source: 'Instagram', date: '2026.10.13', isNew: false, title: 'A380は、総2階建ての世界最大の旅客機 その2階の一番前に、各社がいちばん特別な座席を置いています。', href: 'https://www.instagram.com/p/Deb5Q5-D9ye/' },
    { source: 'Instagram', date: '2026.10.11', isNew: false, title: 'マイルを貯めたいけど、JALカードとANAカード、最初の1枚はどっちがいいの？', href: 'https://www.instagram.com/p/DeVZE6lmaod/' },
    { source: 'Instagram', date: '2026.10.10', isNew: false, title: 'ドアの付いたビジネスクラスが、次々に登場しています', href: 'https://www.instagram.com/p/DeUWXlGGU29/' },
    { source: 'Instagram', date: '2026.10.09', isNew: false, title: '航空会社のラウンジは、ビジネスクラスや上級会員だけのもの。', href: 'https://www.instagram.com/p/DeR4dMMj8MR/' },
    { source: 'note', date: '2026.10.06', isNew: false, title: '学生航空券でドイツへ｜キャセイパシフィック航空・香港乗り継ぎのリアルな搭乗記', href: 'https://note.com/kentytimes_com/n/n89790e8b08cd' },
    { source: 'Instagram', date: '2026.10.06', isNew: false, title: 'ビジネスクラスは高いけれど、エコノミーで長距離はつらい。', href: 'https://www.instagram.com/p/DeJ5FXwj06p/' },
    { source: 'Instagram', date: '2026.10.04', isNew: false, title: 'モッピーとハピタス、同じ案件ならどっちが高いのか。', href: 'https://www.instagram.com/p/DeDtpJGASqf/' }
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
