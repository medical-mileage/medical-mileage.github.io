// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '11月';
  var pickUpdated = '2026-11-18';
  var picks = [
    { rank: '01', site: 'モッピー', name: 'JCBカードW', now: '14,000P', usual: '4,763P', up: 'いつもの約2.9倍', href: 'https://pc.moppy.jp/ad/detail.php?site_id=140425' },
    { rank: '02', site: 'ハピタス', name: 'JCBカードW', now: '14,000pt', usual: '7,270pt', up: 'いつもの約1.9倍', href: 'https://hapitas.jp/item/detail/itemid/73806/' },
    { rank: '03', site: 'ハピタス', name: 'Yahoo!トラベル（JAL便パック）', now: '2.0%', usual: '1.1%', up: 'いつもの約1.8倍', href: 'https://hapitas.jp/item/detail/itemid/88927/' },
    { rank: '04', site: 'ハピタス', name: 'au PAY ゴールドカード', now: '17,500pt', usual: '12,100pt', up: 'いつもより約45%アップ', href: 'https://hapitas.jp/item/detail/itemid/90024' }
  ];
  // PICKUP-DATA-END

  // INVITE-DATA-START（ポイ活還元率トラッカーの「友達紹介 今月の比較」シートから更新。読者がもらえる特典だけを書く）
  var inviteMonth = '2026年11月';
  var bonuses = {
    moppy: { bonus: '最大2,030円分', detail: '3日連続ログインで30P。さらに入会月の2か月後の月末までに広告利用5,000P以上で＋2,000P（抽選なし）', period: '11/30まで' },
    hapitas: { bonus: '最大2,300円分', detail: 'ログインで100pt、広告利用3,000pt有効で＋1,000pt、5,000ptで＋400pt。ほかに新規登録者キャンペーン最大500pt、ハピタススマート300pt', period: '11/30まで' }
  };
  // INVITE-DATA-END

  // FEED-DATA-START（Instagram・noteの新着。毎日自動更新。新しい順）
  var feedUpdated = '2026-11-18';
  var feed = [
    { source: 'Instagram', date: '2026.11.17', isNew: true, title: 'スマホの機内モード、離陸のときも使えるって知っていましたか？', href: 'https://www.instagram.com/reel/Df1-BWNmcx6/' },
    { source: 'Instagram', date: '2026.11.16', isNew: true, title: '飛行機の座席、DもEもFもない飛行機があるって知っていましたか？', href: 'https://www.instagram.com/reel/DfzTkWuiDrN/' },
    { source: 'Instagram', date: '2026.11.15', isNew: true, title: 'ライター、飛行機に何個まで持ち込めるか知っていましたか？', href: 'https://www.instagram.com/reel/Dfwuxsuj-Y-/' },
    { source: 'Instagram', date: '2026.11.13', isNew: false, title: '国内線の機内Wi-Fi、JALもANAも無料って知っていましたか？', href: 'https://www.instagram.com/reel/Dfr7m7jld_k/' },
    { source: 'Instagram', date: '2026.11.12', isNew: false, title: '飛行機の中に、扉が閉まる個室があるって知っていましたか？', href: 'https://www.instagram.com/reel/DfpAZMxiWAg/' },
    { source: 'Instagram', date: '2026.11.11', isNew: false, title: '飲み物の持ち込み、国内線と国際線でルールが違うって知っていましたか？', href: 'https://www.instagram.com/reel/DfmbmaVkicp/' },
    { source: 'Instagram', date: '2026.11.10', isNew: false, title: 'モバイルバッテリー、飛行機の中で使うのNGになったって知っていましたか？', href: 'https://www.instagram.com/reel/Dfj2zU5GiEf/' },
    { source: 'Instagram', date: '2026.11.09', isNew: false, title: '空港のラウンジ、ゴールドカードで無料で入れるって知っていましたか？', href: 'https://www.instagram.com/reel/DfhSFQQDZCT/' },
    { source: 'Instagram', date: '2026.11.08', isNew: false, title: '飛行機の非常口の席、だれでも座れるわけじゃないって知っていましたか？', href: 'https://www.instagram.com/reel/DfetNyIAXaM/' },
    { source: 'Instagram', date: '2026.11.06', isNew: false, title: 'ビジネスとエコノミーの間に、もう1つ席があるって知っていましたか？', href: 'https://www.instagram.com/reel/DfZjqCaj1Ie/' },
    { source: 'Instagram', date: '2026.11.05', isNew: false, title: 'アメリカン航空が、ファーストクラスを売らなくなるって知っていましたか？', href: 'https://www.instagram.com/reel/DfW-3bSCcMk/' },
    { source: 'Instagram', date: '2026.11.04', isNew: false, title: 'JALの空港ラウンジ、ビジネスクラスじゃなくても入れるって知っていましたか？', href: 'https://www.instagram.com/reel/DfUaCs2EqYE/' }
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
