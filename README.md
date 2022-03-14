# Minute site kit 🕐

手っ取り早くLP等の小規模な静的Webサイトを作成するためのたたき台です。

最小限の構成なので、カスタムで使われる前提です。


## コマンド

- `yarn run clean`
  - `public/css` と `public/js` を削除します。
- `yarn run build`
  - SCSSファイルとJSファイルを変換して、 `public/css` または `public/js` へ出力します。
- `yarn run dev`
  - ホットリロードモードでローカルサーバーが起動します。
  - 同時に、 `http://localhost:8080/` でブラウザが開きます。
