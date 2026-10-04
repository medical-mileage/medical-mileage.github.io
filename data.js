// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '10月';
  var pickUpdated = '2026-10-04';
  var picks = [
    { rank: '01', site: 'ハピタス', name: 'カタール航空', now: '2.8%', usual: '1.4%', up: 'いつもの約2.0倍', href: 'https://hapitas.jp/item/detail/itemid/92712' },
    { rank: '02', site: 'ハピタス', name: 'Skyscanner（ホテル）', now: '3.2%', usual: '2.5%', up: 'いつもより約26%アップ', href: 'https://hapitas.jp/item/detail/itemid/99344' },
    { rank: '03', site: 'ハピタス', name: 'IHGホテルズ & リゾーツ', now: '4.0%', usual: '3.4%', up: 'いつもより約19%アップ', href: 'https://hapitas.jp/item/detail/itemid/72867' },
    { rank: '04', site: 'モッピー', name: 'JALカード「CLUB EST」VISA【20代限定】', now: '9,000P', usual: '7,889P', up: 'いつもより約14%アップ', href: 'https://pc.moppy.jp/ad/detail.php?site_id=150572' }
  ];
  // PICKUP-DATA-END

  // INVITE-DATA-START（ポイ活還元率トラッカーの「友達紹介 今月の比較」シートから更新。読者がもらえる特典だけを書く）
  var inviteMonth = '2026年10月';
  var bonuses = {
    moppy: { bonus: '最大2,000円分', detail: '12月末までに広告利用5,000P以上で＋2,000P。3日連続ログインした人から抽選20名に10,000P', period: '10/31まで' },
    hapitas: { bonus: '最大2,300円分', detail: 'ログインで100pt、広告利用3,000ptで＋1,000pt、5,000ptで＋400ptなど', period: '10/31まで' },
    fancrew: { bonus: '4,500pt（450円分）', detail: '通常3,000ptからアップ中。会員登録とSMS認証のあと、モニターを完了するともらえます', period: '10/31まで' }
  };
  // INVITE-DATA-END

  // FEED-DATA-START（Instagram・noteの新着。毎日自動更新。新しい順）
  var feedUpdated = '2026-10-04';
  var feed = [
    { source: 'Instagram', date: '2026.10.04', isNew: true, title: 'モッピーとハピタス、同じ案件ならどっちが高いのか。', href: 'https://www.instagram.com/p/DeDtpJGASqf/' },
    { source: 'Instagram', date: '2026.10.02', isNew: true, title: '2026年10月1日から、JALの羽田－ロンドン線が、1日2往復（深夜便JL41/42・昼間便JL43/44）とも毎日…', href: 'https://www.instagram.com/p/Dd_89FmDxs2/' },
    { source: 'Instagram', date: '2026.10.02', isNew: true, title: 'ANAが、新しいビジネスクラス「THE Room FX」を発表しています。', href: 'https://www.instagram.com/p/Dd_mQ2ED-zz/' },
    { source: 'note', date: '2026.10.01', isNew: false, title: 'なぜJALマイルでカタール航空に乗れるのか？3大アライアンスを知ると特典航空券の選択肢が3倍になる話', href: 'https://note.com/kentytimes_com/n/n61311459365f' },
    { source: 'Instagram', date: '2026.09.27', isNew: false, title: 'ビジネスクラスの座席が「1-2-1」と書いてあると、どれも同じ座席に思えますが、実は座席の向きと置き方…', href: 'https://www.instagram.com/p/DdyOhXVj3fg/' },
    { source: 'Instagram', date: '2026.09.25', isNew: false, title: '「国内線の普通席って、どれも同じ」だと思ってませんか？', href: 'https://www.instagram.com/p/DdtJT5WE6dv/' },
    { source: 'Instagram', date: '2026.09.24', isNew: false, title: '「A350に乗れば、Qsuiteに乗れる」', href: 'https://www.instagram.com/p/DdrPAsPj-Fy/' },
    { source: 'note', date: '2026.09.05', isNew: false, title: '【1泊109,460円】ANAインターコンチネンタル石垣リゾート宿泊記｜"1回きり"だと思っていたアフタヌーンティーが実は2日間楽しめる話', href: 'https://note.com/kentytimes_com/n/ncc54a2b9688d' },
    { source: 'note', date: '2026.08.24', isNew: false, title: 'アジアマイルの特典航空券でJALに搭乗｜医学生の福岡弾丸搭乗記', href: 'https://note.com/kentytimes_com/n/n90f18dbd7dff' },
    { source: 'note', date: '2026.08.17', isNew: false, title: '「マイル＝お金持ちの趣味」だと思っていた私が、仕送り月8万円のまま全部始められた理由', href: 'https://note.com/kentytimes_com/n/nbe9d472a75c7' },
    { source: 'note', date: '2026.08.06', isNew: false, title: '【8月限定・知らないと損】モッピー×JALで実質96%還元「ドリームキャンペーン」を医学生が実際にやってみた', href: 'https://note.com/kentytimes_com/n/n4cf48059c575' }
  ];
  // FEED-DATA-END

  // REVIEWS-DATA-START（noteの実際の搭乗記だけ。空ならセクションごと非表示）
  var reviews = [
    { cls: 'エコノミー', title: 'アジアマイルの特典航空券でJALに搭乗｜医学生の福岡弾丸搭乗記', date: '2026.08.24', href: 'https://note.com/kentytimes_com/n/n90f18dbd7dff' }
  ];
  // REVIEWS-DATA-END

  return { pickMonth: pickMonth, pickUpdated: pickUpdated, picks: picks, inviteMonth: inviteMonth, bonuses: bonuses, feedUpdated: feedUpdated, feed: feed, reviews: reviews };
})();
