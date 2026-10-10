// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '10月';
  var pickUpdated = '2026-10-11';
  var picks = [
    { rank: '01', site: 'ハピタス', name: 'カタール航空', now: '2.8%', usual: '2.0%', up: 'いつもより約39%アップ', href: 'https://hapitas.jp/item/detail/itemid/92712' },
    { rank: '02', site: 'ハピタス', name: '三菱UFJ銀行 口座開設', now: '20,500pt', usual: '15,100pt', up: 'いつもより約36%アップ', href: 'https://hapitas.jp/item/detail/itemid/92479' },
    { rank: '03', site: 'モッピー', name: '三井住友カード（NL）', now: '15,000P', usual: '12,200P', up: 'いつもより約23%アップ', href: 'https://pc.moppy.jp/ad/detail.php?site_id=149052' },
    { rank: '04', site: 'ハピタス', name: 'Skyscanner（ホテル）', now: '3.2%', usual: '2.8%', up: 'いつもより約13%アップ', href: 'https://hapitas.jp/item/detail/itemid/99344' }
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
  var feedUpdated = '2026-10-07';
  var feed = [
    { source: 'Instagram', date: '2026.10.06', isNew: true, title: 'ビジネスクラスは高いけれど、エコノミーで長距離はつらい。', href: 'https://www.instagram.com/p/DeJ5FXwj06p/' },
    { source: 'Instagram', date: '2026.10.04', isNew: true, title: 'モッピーとハピタス、同じ案件ならどっちが高いのか。', href: 'https://www.instagram.com/p/DeDtpJGASqf/' },
    { source: 'Instagram', date: '2026.10.02', isNew: false, title: '2026年10月1日から、JALの羽田－ロンドン線が、1日2往復（深夜便JL41/42・昼間便JL43/44）とも毎日A…', href: 'https://www.instagram.com/p/Dd_89FmDxs2/' },
    { source: 'Instagram', date: '2026.10.02', isNew: false, title: 'ANAが、新しいビジネスクラス「THE Room FX」を発表しています。', href: 'https://www.instagram.com/p/Dd_mQ2ED-zz/' },
    { source: 'note', date: '2026.10.01', isNew: false, title: 'なぜJALマイルでカタール航空に乗れるのか？3大アライアンスを知ると特典航空券の選択肢が3倍になる話', href: 'https://note.com/kentytimes_com/n/n61311459365f' },
    { source: 'Instagram', date: '2026.09.27', isNew: false, title: 'ビジネスクラスの座席が「1-2-1」と書いてあると、どれも同じ座席に思えますが、実は座席の向きと置き方で、大きく2つの系…', href: 'https://www.instagram.com/p/DdyOhXVj3fg/' },
    { source: 'Instagram', date: '2026.09.25', isNew: false, title: '「国内線の普通席って、どれも同じ」だと思ってませんか？', href: 'https://www.instagram.com/p/DdtJT5WE6dv/' },
    { source: 'Instagram', date: '2026.09.24', isNew: false, title: '「A350に乗れば、Qsuiteに乗れる」', href: 'https://www.instagram.com/p/DdrPAsPj-Fy/' },
    { source: 'Instagram', date: '2026.09.21', isNew: false, title: 'Skytrax「ワールド・エアライン・アワード2026」が、9月18日に発表されました', href: 'https://www.instagram.com/p/DdjK3n7j1KM/' },
    { source: 'Instagram', date: '2026.09.20', isNew: false, title: 'エティハド航空が、5日間限定の「グローバルセール」を開催しています', href: 'https://www.instagram.com/p/DdhNJZqD6ML/' },
    { source: 'note', date: '2026.09.05', isNew: false, title: '【1泊109,460円】ANAインターコンチネンタル石垣リゾート宿泊記｜"1回きり"だと思っていたアフタヌーンティーが実は2日間楽しめる話', href: 'https://note.com/kentytimes_com/n/ncc54a2b9688d' },
    { source: 'note', date: '2026.08.24', isNew: false, title: 'アジアマイルの特典航空券でJALに搭乗｜医学生の福岡弾丸搭乗記', href: 'https://note.com/kentytimes_com/n/n90f18dbd7dff' }
  ];
  // FEED-DATA-END

  // REVIEWS-DATA-START（noteの実際の搭乗記だけ。空ならセクションごと非表示）
  var reviews = [
    { cls: 'エコノミー', title: 'アジアマイルの特典航空券でJALに搭乗｜医学生の福岡弾丸搭乗記', date: '2026.08.24', href: 'https://note.com/kentytimes_com/n/n90f18dbd7dff' }
  ];
  // REVIEWS-DATA-END

  return { pickMonth: pickMonth, pickUpdated: pickUpdated, picks: picks, inviteMonth: inviteMonth, bonuses: bonuses, feedUpdated: feedUpdated, feed: feed, reviews: reviews };
})();
