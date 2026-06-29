# Node ID Jump and Copy

Stop scrolling to find Figma nodes. Paste a teammate's URL — you're there in one keystroke.
And one-click copy node IDs to share with developers, AI tools, or chat.

## What it does for you

**Land on the node instantly.** A teammate drops a Figma URL in Slack and you usually have to switch pages, scroll, hunt. Paste the URL (or just the ID) into *Jump to*, press Enter — the canvas lands on the node: page-switched, selected, zoomed. Zero scrolling.

**Copy without typing.** Select a node, click the ID under *Selected* — it's on your clipboard. Multi-select grabs them all as a comma-separated list, ready to drop into a chat message or an AI prompt.

## Quick start

- **Copy** — Select a node on the canvas, click the ID shown under *Selected*.
- **Jump** — Paste anything containing a node ID (raw ID, URL, even with quotes) into *Jump to*, press `Go` or Enter.

## Supported input formats (tested)

| Form                       | Example                                                                         |
| -------------------------- | ------------------------------------------------------------------------------- |
| API form                   | `1:234`                                                                         |
| URL hyphen form            | `1-234`                                                                         |
| Instance node (API)        | `I149:71514;140:53105;140:49957`                                                |
| Full Figma URL             | `https://www.figma.com/design/.../?node-id=1-234&t=...`                         |
| Quoted / backticked        | `'1-234'`, `` `1-234` `` (handy for AI-generated output)                        |
| Comma-separated multiple   | `1:234, 5:678, I149:71514;140:53105`                                            |

The paste field auto-sanitizes — quotes, URL chrome, and stray characters disappear instantly.

## License

MIT.

---

## 日本語

同僚から Figma URL が届いたとき、ページを切り替えてスクロールして目で探す — その手間をなくすための plugin。URL を貼って Enter で該当ノードに飛ぶ。ノード ID のコピーも選択してクリックするだけ。

### この plugin で何が変わるか

**ノードに一瞬で着地する。** Slack で URL が飛んできたとき、いつもページ切替＋スクロール＋目視で探していた手間がなくなる。URL（または ID 単体）を *Jump to* に貼って Enter を押すと、canvas がそのノードのあるページに切り替わって選択・zoom まで済んだ状態になる。

**ID はクリックするもの。** ノードを選択すると *Selected* に ID が出る。クリックでクリップボードに入る。複数選択すればカンマ区切りでまとめてコピーできるので、チャットや AI プロンプトにそのまま貼ればいい。

### 使い方

- **コピー**: canvas でノードを選択して *Selected* の ID をクリック
- **ジャンプ**: node ID を含む文字列（生 ID・URL・クォート付きなんでも）を *Jump to* に貼って `Go` か Enter

### 対応入力形式（動作確認済み）

| 形式                              | 例                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------- |
| API 形式                          | `1:234`                                                                         |
| URL ハイフン形式                  | `1-234`                                                                         |
| インスタンス内ノード (API 形式)   | `I149:71514;140:53105;140:49957`                                                |
| Figma URL 全体                    | `https://www.figma.com/design/.../?node-id=1-234&t=...`                         |
| クォート/バッククォート付き       | `'1-234'`, `` `1-234` ``（AI 出力のコピペ対策）                                 |
| カンマ区切り複数 ID               | `1:234, 5:678, I149:71514;140:53105`                                            |

貼った文字列のクォートや URL の余分な部分・空白は自動で除去して処理する。
