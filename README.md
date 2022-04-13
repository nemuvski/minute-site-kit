# Minute site kit 🕐

手っ取り早くLP等の小規模な静的Webサイトを作成するためのたたき台です。

最小限の構成なので、カスタムで使われる前提です。


## コマンド

- `yarn run clean`
  - `dist/` と `node_modules/.vite/`（キャッシュ）を削除します。
- `yarn run build`
  - HTMLファイル、SCSSファイルとTypeScriptファイル等を変換＆バンドルして、`dist/`に出力します。
- `yarn run dev`
  - ホットリロードモードでローカルサーバーが起動します。
  - 同時に、 `http://localhost:8080/` でブラウザが開きます。
- `yarn run preview`
  - ビルド成果物をローカルサーバーで確認できます。 （プレビューの用途）
  - *※ 先にビルドをすること*
