// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '11月';
  var pickUpdated = '2026-11-03';
  var picks = [
    { rank: '01', site: 'モッピー', name: 'JCBカードW', now: '7,000P', usual: '3,087P', up: 'いつもの約2.3倍', href: 'https://pc.moppy.jp/ad/detail.php?site_id=140425' },
    { rank: '02', site: 'ハピタス', name: 'JCBカードW', now: '10,000pt', usual: '5,591pt', up: 'いつもの約1.8倍', href: 'https://hapitas.jp/item/detail/itemid/73806/' },
    { rank: '03', site: 'ハピタス', name: '三井住友カード ゴールド（NL）', now: '14,500pt', usual: '8,568pt', up: 'いつもの約1.7倍', href: 'https://hapitas.jp/item/detail/itemid/91938' },
    { rank: '04', site: 'ハピタス', name: 'JALカード CLUB EST', now: '12,000pt', usual: '7,574pt', up: 'いつもの約1.6倍', href: 'https://hapitas.jp/item/detail/itemid/81412' }
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
  var feedUpdated = '2026-11-03';
  var feed = [
    { source: 'Instagram', date: '2026.11.02', isNew: true, title: 'マイルって、飛行機に乗らなくても貯まるって知っていましたか？', href: 'https://www.instagram.com/reel/DfPQci5gEw6/' },
    { source: 'Instagram', date: '2026.10.31', isNew: true, title: 'ポイントサイトのポイント、JALマイルに変えきれずに余っていませんか？', href: 'https://www.instagram.com/p/DfLJq-UE5YK/' },
    { source: 'Instagram', date: '2026.10.30', isNew: false, title: '飛行機の座席番号、「H」の次がいきなり「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/reel/DfHzf00kbxy/' },
    { source: 'Instagram', date: '2026.10.30', isNew: false, title: '飛行機の座席番号、「H」の次がいきなり「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/reel/DfHiFJKjQ9R/' },
    { source: 'Instagram', date: '2026.10.29', isNew: false, title: 'エミレーツのビジネスは、どの機材でも1-2-1だと思っていませんか？', href: 'https://www.instagram.com/p/DfE9YNYD_FJ/' },
    { source: 'Instagram', date: '2026.10.28', isNew: false, title: '「A350ならQsuite」だと思っていませんか？', href: 'https://www.instagram.com/reel/DfCc-t8AQcz/' },
    { source: 'Instagram', date: '2026.10.27', isNew: false, title: 'Trip.comでホテルを予約するとき、どこを経由していますか？', href: 'https://www.instagram.com/reel/DfAAzO8ib6m/' },
    { source: 'Instagram', date: '2026.10.27', isNew: false, title: '記念日のホテル、何で選んでいますか？', href: 'https://www.instagram.com/reel/De_zrHgjSlr/' },
    { source: 'Instagram', date: '2026.10.26', isNew: false, title: '香港での乗り継ぎが11時間以上。', href: 'https://www.instagram.com/p/De9PBsZo_Qy/' },
    { source: 'Instagram', date: '2026.10.25', isNew: false, title: 'ファーストクラスが、減っています', href: 'https://www.instagram.com/p/De6qMqfj2UA/' },
    { source: 'Instagram', date: '2026.10.25', isNew: false, title: 'モッピーとハピタス、今日はどっちが得だと思いますか？', href: 'https://www.instagram.com/reel/De6nuNVjvoW/' },
    { source: 'Instagram', date: '2026.10.23', isNew: false, title: '飛行機の座席番号、「H」の次が「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/p/De1-7OnD_Ht/' }
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
