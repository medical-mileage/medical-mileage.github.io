// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '10月';
  var pickUpdated = '2026-10-17';
  var picks = [
    { rank: '01', site: 'モッピー', name: 'Apple公式サイト', now: '5.0%', usual: '1.4%', up: 'いつもの約3.6倍', href: 'https://pc.moppy.jp/shopping/detail.php?site_id=6716' },
    { rank: '02', site: 'ハピタス', name: 'IHGホテルズ＆リゾーツ', now: '4.0%', usual: '2.9%', up: 'いつもより約38%アップ', href: 'https://hapitas.jp/item/detail/itemid/72867' },
    { rank: '03', site: 'ハピタス', name: 'カタール航空', now: '2.8%', usual: '2.2%', up: 'いつもより約27%アップ', href: 'https://hapitas.jp/item/detail/itemid/92712' },
    { rank: '04', site: 'ハピタス', name: '三菱UFJカード', now: '14,500pt', usual: '11,433pt', up: 'いつもより約27%アップ', href: 'https://hapitas.jp/item/detail/itemid/100868' }
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
  var feedUpdated = '2026-10-17';
  var feed = [
    { source: 'Instagram', date: '2026.10.16', isNew: true, title: 'JALとANA、同じ日本の航空会社なのに、実は属しているグループが違うって知っていますか?', href: 'https://www.instagram.com/p/DejfEF1j9nl/' },
    { source: 'Instagram', date: '2026.10.15', isNew: true, title: 'モッピーで「ANAマイル実質60%」「JALマイル実質80%」というキャンペーンが同時に始まっています。', href: 'https://www.instagram.com/p/Deg6RLFDzDP/' },
    { source: 'Instagram', date: '2026.10.13', isNew: false, title: 'A380は、総2階建ての世界最大の旅客機 その2階の一番前に、各社がいちばん特別な座席を置いています。', href: 'https://www.instagram.com/p/Deb5Q5-D9ye/' },
    { source: 'Instagram', date: '2026.10.11', isNew: false, title: 'マイルを貯めたいけど、JALカードとANAカード、最初の1枚はどっちがいいの？', href: 'https://www.instagram.com/p/DeVZE6lmaod/' },
    { source: 'Instagram', date: '2026.10.10', isNew: false, title: 'ドアの付いたビジネスクラスが、次々に登場しています', href: 'https://www.instagram.com/p/DeUWXlGGU29/' },
    { source: 'Instagram', date: '2026.10.09', isNew: false, title: '航空会社のラウンジは、ビジネスクラスや上級会員だけのもの。', href: 'https://www.instagram.com/p/DeR4dMMj8MR/' },
    { source: 'note', date: '2026.10.06', isNew: false, title: '学生航空券でドイツへ｜キャセイパシフィック航空・香港乗り継ぎのリアルな搭乗記', href: 'https://note.com/kentytimes_com/n/n89790e8b08cd' },
    { source: 'Instagram', date: '2026.10.06', isNew: false, title: 'ビジネスクラスは高いけれど、エコノミーで長距離はつらい。', href: 'https://www.instagram.com/p/DeJ5FXwj06p/' },
    { source: 'Instagram', date: '2026.10.04', isNew: false, title: 'モッピーとハピタス、同じ案件ならどっちが高いのか。', href: 'https://www.instagram.com/p/DeDtpJGASqf/' },
    { source: 'Instagram', date: '2026.10.02', isNew: false, title: '2026年10月1日から、JALの羽田－ロンドン線が、1日2往復（深夜便JL41/42・昼間便JL43/44）とも毎日A…', href: 'https://www.instagram.com/p/Dd_89FmDxs2/' },
    { source: 'Instagram', date: '2026.10.02', isNew: false, title: 'ANAが、新しいビジネスクラス「THE Room FX」を発表しています。', href: 'https://www.instagram.com/p/Dd_mQ2ED-zz/' },
    { source: 'note', date: '2026.10.01', isNew: false, title: 'なぜJALマイルでカタール航空に乗れるのか？3大アライアンスを知ると特典航空券の選択肢が3倍になる話', href: 'https://note.com/kentytimes_com/n/n61311459365f' }
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
