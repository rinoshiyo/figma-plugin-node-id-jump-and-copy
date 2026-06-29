# Figma Community Publish — web UI 入力素材

publish ダイアログ (Figma desktop で plugin 右クリック → `Publish new plugin...`) に入力する内容。

## Publisher

Yoshinori Ishii (本名で登録)

## Plugin name

```
Node ID Jump and Copy
```

## Tagline

```
Jump to any Figma node from an ID or URL — and copy IDs too.
```

## Description

```
Teammate sends you a Figma URL but you still have to manually scroll to find the node? This plugin jumps you there instantly.

**Two features in one tiny plugin:**

- **Jump** to any node by pasting an ID or a full Figma URL. The plugin switches to the right page, selects the node, and scrolls it into view.
- **Copy** the selected node's ID with one click. Multi-select copies all IDs comma-separated.

While "Copy node ID" plugins are common, an actual *jump* — paste a teammate's URL and land on the node — was missing from the ecosystem. This plugin fills that gap.

**Supported input formats:**

- API form: `1:234`
- URL hyphen form: `1-234`
- Instance node (API): `I149:71514;140:53105;140:49957`
- Instance node (URL hyphen): `I149-71514;140-53105;140-49957`
- Full Figma URL: `https://www.figma.com/design/.../?node-id=1-234&t=...`
- Quoted or backticked: `'1-234'`, `` `1-234` `` (handy for AI-generated output)
- Comma-separated multiple IDs: `1:234, 5:678, I149:71514;140:53105`

The paste field auto-sanitizes — quotes, URL chrome, and stray characters disappear instantly.

**Source & support:**

GitHub: https://github.com/rinoshiyo/figma-plugin-node-id-jump-and-copy

Issues are welcome on a best-effort basis (no SLA). MIT licensed — feel free to fork.
```

## Cover image

`assets/cover.png` をアップロード (1920×1080)

## Icon

`assets/icon.png` をアップロード (128×128)

## Tags

(未確定)

## Support contact

```
https://github.com/rinoshiyo/figma-plugin-node-id-jump-and-copy/issues
```

## Categories

(未確定)
