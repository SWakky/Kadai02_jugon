# 課題2 -じゃんけんアプリ～リッチver.課外活動-

## ①課題内容（どんな作品か）
・音声入力した言葉に応じて画像が切り替わるアプリです。（呪術廻戦の呪言をモチーフ）

## ②工夫した点・こだわった点
・まず、またじゃんけんはしていません。（またまた、ごめんなさい）

・音声入力はAPIがあったので、それを転用しました。（省エネ）
 
・一番苦労したのは、喋った言葉を次のアクションに引っ張り出すことでした。

　結果、ストップボタンを強制的にイベントとして着火させて「finalscript」を取得。
　そのテキストに応じて適した画像（用意済み）を充てることでまるで呪言を使ったような感覚が味わえます。
  
・毎回のリロードをツールバーでするのが面倒なので、リロードボタンを使ってすぐに違う言葉が試せるようにしました。

・できるだけ狗巻くんファンがガッカリしないように、おにぎりの具と画像は発言シーンやニュアンスと合わせるようにしました。

・また、せっかくG’ｓで作っているので「デプロイ」と「貴重なご意見」でも反応するのでお試しください。

・適当な呪言は呪力の無駄遣いや強すぎる言葉は身体への負担が大きいので「else」でその他処理をして喉の限界を迎えるようにしました。

## ③質問・疑問（あれば）
・APIは便利な一方で、仕様を理解していないとパーツとして組みづらいと感じました。何か事前にチェックすべきポイントはあるものでしょうか？
・JSをHTMLで<script>で書いたり、JSファイルに書いたりとこのへんは好みなのでしょうか？

## ④その他（感想、シェアしたいことなんでも）
・引っ張ってくる画像をキーワード検索や同期がやっていた機械学習に任せて、それっぽい画像を出すのも次やるとしたら面白いかと思いました。
・あとは、ARで言葉が飛び出るか？対象となるものにアクションをかけるか？色んな可能性があるなと、
　人間の動作を電気などで制限できるデバイスがあれば「止まれ」「動くな」くらいはできるような気もしてきました。
