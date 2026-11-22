// このファイルは毎日の自動更新で書き換わります（ハブサイト 毎日更新タスク）。
// 書き換わるのは各 START〜END の区間だけです。手で直す場合は、データ元（トラッカー・note・Instagram）の方を直してください。
window.SITE_DATA = (function () {

  // PICKUP-DATA-START（ポイ活還元率トラッカーの「比較」シートから毎日更新）
  var pickMonth = '11月';
  var pickUpdated = '2026-11-23';
  var picks = [
    { rank: '01', site: 'モッピー', name: 'Trip.com（航空券）', now: '3.0%', usual: '1.0%', up: 'いつもの約3.0倍', href: 'https://pc.moppy.jp/shopping/detail.php?site_id=4876' },
    { rank: '02', site: 'モッピー', name: 'JCBカードW', now: '14,000P', usual: '5,837P', up: 'いつもの約2.4倍', href: 'https://pc.moppy.jp/ad/detail.php?site_id=140425' },
    { rank: '03', site: 'ハピタス', name: 'JTB（海外）', now: '2.4%', usual: '1.2%', up: 'いつもの約2.0倍', href: 'https://hapitas.jp/item/detail/itemid/58872/' },
    { rank: '04', site: 'ハピタス', name: 'カタール航空', now: '2.8%', usual: '1.5%', up: 'いつもの約1.9倍', href: 'https://hapitas.jp/item/detail/itemid/92712' }
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
  var feedUpdated = '2026-11-23';
  var feed = [
    { source: 'note', date: '2026.11.20', isNew: true, title: '手元の87,097JALマイルでファーストは取れる？座席オタクが5社を比較', href: 'https://note.com/kentytimes_com/n/n5b4f9135e7aa' },
    { source: 'note', date: '2026.11.20', isNew: true, title: 'ドア付き新ビジネスクラス3社の登場時期｜2027年に乗るなら今どのマイルを貯める？', href: 'https://note.com/kentytimes_com/n/n36ff86c68d9b' },
    { source: 'note', date: '2026.11.20', isNew: true, title: '【12月31日まで】Ponta→JALが25%増量「100P＝62マイル」交換前に確かめる5つのこと', href: 'https://note.com/kentytimes_com/n/n4b01cc8606c0' },
    { source: 'note', date: '2026.11.20', isNew: true, title: 'エコノミーの“当たり席”は座席番号より先に「機材」で決まる【2026年冬版】', href: 'https://note.com/kentytimes_com/n/n6fe4fb440f20' },
    { source: 'note', date: '2026.11.20', isNew: true, title: '【2026年冬版】ビジネスクラス座席指定ガイド｜5社9座席の選ぶべき列・避けたい列', href: 'https://note.com/kentytimes_com/n/nc1aa2210cec5' },
    { source: 'note', date: '2026.11.20', isNew: true, title: '【知らないと損】ANA・JALマイルの「期限と制度変更」5つを日付順に整理', href: 'https://note.com/kentytimes_com/n/nff3ad1af23e6' },
    { source: 'Instagram', date: '2026.11.20', isNew: true, title: '乗り継ぎが11時間。', href: 'https://www.instagram.com/reel/Df9mwPQDmd_/' },
    { source: 'Instagram', date: '2026.11.19', isNew: false, title: '飛行機は全部禁煙なのに、トイレのドアに灰皿があるって知っていましたか？', href: 'https://www.instagram.com/reel/Df7B9dlEw8M/' },
    { source: 'Instagram', date: '2026.11.18', isNew: false, title: '同じローマ行きの特典航空券、乗る航空会社で15,000マイルも違うって知っていましたか？', href: 'https://www.instagram.com/reel/Df4dLdmkrHG/' },
    { source: 'Instagram', date: '2026.11.17', isNew: false, title: 'スマホの機内モード、離陸のときも使えるって知っていましたか？', href: 'https://www.instagram.com/reel/Df1-BWNmcx6/' },
    { source: 'Instagram', date: '2026.11.16', isNew: false, title: '飛行機の座席、DもEもFもない飛行機があるって知っていましたか？', href: 'https://www.instagram.com/reel/DfzTkWuiDrN/' },
    { source: 'Instagram', date: '2026.11.15', isNew: false, title: 'ライター、飛行機に何個まで持ち込めるか知っていましたか？', href: 'https://www.instagram.com/reel/Dfwuxsuj-Y-/' }
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
