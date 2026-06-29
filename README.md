# Node ID Jump and Copy

A tiny Figma plugin that does two things:

- **Copy** the selected node's ID with one click
- **Jump** to any node by pasting an ID or a Figma URL

Most "Node ID" plugins only handle the copy side. The unique value here is **jump** — paste a teammate's Figma URL and the plugin selects and zooms to that node, no manual canvas scrolling.

## Features

- One-click copy of the current node ID
- Multi-select copies all IDs as a comma-separated string
- Paste-friendly **Jump to** input — auto-corrects on paste (quotes, URL chrome, and stray characters disappear instantly)

### Supported input formats (tested)

| Form                       | Example                                                                         |
| -------------------------- | ------------------------------------------------------------------------------- |
| API form                   | `1:234`                                                                         |
| URL hyphen form            | `1-234`                                                                         |
| Instance node (API)        | `I149:71514;140:53105;140:49957`                                                |
| Full Figma URL             | `https://www.figma.com/design/.../?node-id=1-234&t=...`                         |
| Quoted / backticked        | `'1-234'`, `` `1-234` `` (handy for AI-generated output)                        |
| Comma-separated multiple   | `1:234, 5:678, I149:71514;140:53105`                                            |

## Install (development plugin)

The Figma **desktop app** is required — the browser version cannot import local plugins.

1. Open the Figma desktop app
2. Open any file
3. Menu: `Plugins` → `Development` → `Import plugin from manifest...`
4. Select this directory's `manifest.json`

The plugin then appears under `Plugins` → `Development` → `Node ID Jump and Copy`.

## Usage

**Copy the current node ID**
Select a node on the canvas, then click the ID shown under *Selected*. The value is copied to your clipboard.

**Jump to a node**
Paste an ID, a URL, or any string containing `node-id=...` into the *Jump to* field, then press `Go` (or `Enter`). The plugin switches to the right page, selects the node, and scrolls it into view.

## Files

- `manifest.json` — plugin manifest
- `code.js` — sandbox-side logic (selection watcher, jump handler)
- `ui.html` — UI panel (clipboard, paste sanitization, auto-resize)

## License

MIT.

---

## 日本語

Figma で選んだノードの ID をワンクリックでコピーできる + ID/URL からノードへジャンプできる小さなプラグイン。

「Node ID コピー」 系のプラグインは Community に沢山あるが、 「Node ID ジャンプ」 ができるものは見当たらなかったので作った。 Figma URL をそのまま貼れば該当ノードへ飛んで選択状態になる。

### インストール

Figma **デスクトップアプリ**必須（ブラウザ版は不可）。

1. デスクトップアプリで任意のファイルを開く
2. `Plugins` → `Development` → `Import plugin from manifest...`
3. このディレクトリの `manifest.json` を選択

以降は `Plugins` → `Development` → `Node ID Jump and Copy` で起動。

### 使い方

- ノードを選択 → *Selected* の ID をクリックでクリップボードへコピー
- *Jump to* に ID か URL を貼って `Go`（または Enter）で該当ノードへジャンプ

### 対応入力形式（動作確認済み）

| 形式                              | 例                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------- |
| API 形式                          | `1:234`                                                                         |
| URL ハイフン形式                  | `1-234`                                                                         |
| インスタンス内ノード (API 形式)   | `I149:71514;140:53105;140:49957`                                                |
| Figma URL 全体                    | `https://www.figma.com/design/.../?node-id=1-234&t=...`                         |
| クォート/バッククォート付き       | `'1-234'`, `` `1-234` ``（AI 出力のコピペ対策）                                 |
| カンマ区切り複数 ID               | `1:234, 5:678, I149:71514;140:53105`                                            |
