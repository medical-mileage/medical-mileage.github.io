// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '11月';
  var pickUpdated = '2026-11-11';
  var picks = [
    { rank: '01', site: 'ハピタス', name: 'Trip.com（航空券）', now: '8.0%', usual: '1.1%', up: 'いつもの約7.3倍', href: 'https://hapitas.jp/item/detail/itemid/92360' },
    { rank: '02', site: 'ハピタス', name: 'Trip.com（ホテル）', now: '15.0%', usual: '4.0%', up: 'いつもの約3.8倍', href: 'https://hapitas.jp/item/detail/itemid/92361' },
    { rank: '03', site: 'ハピタス', name: '楽天証券', now: '25,000pt', usual: '16,367pt', up: 'いつもの約1.5倍', href: 'https://hapitas.jp/item/detail/itemid/35520/' },
    { rank: '04', site: 'ハピタス', name: 'JALカード CLUB EST（20代限定）', now: '12,000pt', usual: '8,344pt', up: 'いつもより約44%アップ', href: 'https://hapitas.jp/item/detail/itemid/81412' }
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
  var feedUpdated = '2026-11-11';
  var feed = [
    { source: 'Instagram', date: '2026.11.10', isNew: true, title: 'モバイルバッテリー、飛行機の中で使うのNGになったって知っていましたか？', href: 'https://www.instagram.com/reel/Dfj2zU5GiEf/' },
    { source: 'Instagram', date: '2026.11.09', isNew: true, title: '空港のラウンジ、ゴールドカードで無料で入れるって知っていましたか？', href: 'https://www.instagram.com/reel/DfhSFQQDZCT/' },
    { source: 'Instagram', date: '2026.11.08', isNew: true, title: '飛行機の非常口の席、だれでも座れるわけじゃないって知っていましたか？', href: 'https://www.instagram.com/reel/DfetNyIAXaM/' },
    { source: 'Instagram', date: '2026.11.06', isNew: false, title: 'ビジネスとエコノミーの間に、もう1つ席があるって知っていましたか？', href: 'https://www.instagram.com/reel/DfZjqCaj1Ie/' },
    { source: 'Instagram', date: '2026.11.05', isNew: false, title: 'アメリカン航空が、ファーストクラスを売らなくなるって知っていましたか？', href: 'https://www.instagram.com/reel/DfW-3bSCcMk/' },
    { source: 'Instagram', date: '2026.11.04', isNew: false, title: 'JALの空港ラウンジ、ビジネスクラスじゃなくても入れるって知っていましたか？', href: 'https://www.instagram.com/reel/DfUaCs2EqYE/' },
    { source: 'Instagram', date: '2026.11.03', isNew: false, title: 'Pontaポイント、今JALマイルに替えると25%増えるって知っていましたか？', href: 'https://www.instagram.com/reel/DfR1QB0gqTG/' },
    { source: 'Instagram', date: '2026.11.02', isNew: false, title: 'マイルって、飛行機に乗らなくても貯まるって知っていましたか？', href: 'https://www.instagram.com/reel/DfPQci5gEw6/' },
    { source: 'Instagram', date: '2026.10.31', isNew: false, title: 'ポイントサイトのポイント、JALマイルに変えきれずに余っていませんか？', href: 'https://www.instagram.com/p/DfLJq-UE5YK/' },
    { source: 'Instagram', date: '2026.10.30', isNew: false, title: '飛行機の座席番号、「H」の次がいきなり「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/reel/DfHzf00kbxy/' },
    { source: 'Instagram', date: '2026.10.30', isNew: false, title: '飛行機の座席番号、「H」の次がいきなり「J」になっているのに気づいたことはありますか？', href: 'https://www.instagram.com/reel/DfHiFJKjQ9R/' },
    { source: 'Instagram', date: '2026.10.29', isNew: false, title: 'エミレーツのビジネスは、どの機材でも1-2-1だと思っていませんか？', href: 'https://www.instagram.com/p/DfE9YNYD_FJ/' }
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
