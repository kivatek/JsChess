# JsChess

## 概要
チェスプログラムの土台。
2013/01/26時点では、チェスのルールは一切実装されていません。

チェスの盤面・ピース表示とタッチ判定のサンプルを実装しています。

## ビルド

作業手順の単純化のため grunt を使用しています。

バージョンは0.3系です。

同梱の grunt.js では以下のコマンドを用意しています。

* grunt debug
* grunt release
* grunt clean

Windows環境ではコマンドラインで grunt.cmd と指定してください。

gruntとだけタイプして実行しようとしてもエラーとなります。


## gruntの準備

なおgruntを使用するには node.js を先に導入する必要があります。

以下のサイトを参照してください。

* http://nodejs.org/
* http://gruntjs.com/

gruntを実行できる状態になりましたら、以下のコマンドを実行してローカルディレクトリにモジュールを追加します。

* npm install grunt-exec
* npm install grunt-contrib-copy@0.3.1
* npm install grunt-contrib-clean@0.3.0
* npm install grunt-zip


