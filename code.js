// Figma sandbox 側で動作。 figma グローバルが使える。

figma.showUI(__html__, { width: 300, height: 160, themeColors: false });

/**
 * 現在の選択状態を UI 側へ送信する。
 */
function sendSelection() {
  const sel = figma.currentPage.selection;
  if (sel.length === 0) {
    figma.ui.postMessage({ type: 'selection', state: 'empty' });
  } else if (sel.length === 1) {
    figma.ui.postMessage({
      type: 'selection',
      state: 'single',
      id: sel[0].id,
      name: sel[0].name || sel[0].type,
    });
  } else {
    figma.ui.postMessage({
      type: 'selection',
      state: 'multi',
      ids: sel.map((n) => n.id),
      count: sel.length,
    });
  }
}

figma.on('selectionchange', sendSelection);
figma.on('currentpagechange', sendSelection);
sendSelection();

/**
 * ノードを辿って所属する PageNode を返す。
 */
function getNodePage(node) {
  let cur = node;
  while (cur && cur.type !== 'PAGE') {
    cur = cur.parent;
  }
  return cur || null;
}

/**
 * 入力文字列から有効な Node ID 配列を取り出す。
 * - Figma URL の `node-id=...` を抽出
 * - カンマ区切りで複数 ID
 * - ハイフンをコロンへ統一
 */
function parseIds(raw) {
  let s = String(raw).trim();
  const m = s.match(/node-id=([^&\s]+)/i);
  if (m) s = decodeURIComponent(m[1]);
  return s
    .split(',')
    .map((part) => part.replace(/[^\dI:;-]/gi, '').replace(/-/g, ':'))
    // 形式: 単純 (1:234) または インスタンス内 (I1:234;5:678;9:012)
    .filter((id) => /^I?\d+:\d+(;I?\d+:\d+)*$/.test(id));
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'resize') {
    figma.ui.resize(300, Math.max(80, Math.min(600, msg.height | 0)));
    return;
  }

  if (msg.type !== 'jump') return;

  const ids = parseIds(msg.id);
  if (ids.length === 0) {
    figma.notify('Invalid node ID');
    return;
  }

  // documentAccess: dynamic-page では同期版 getNodeById が使えないため async 版を Promise.all で並列実行
  const nodes = (await Promise.all(ids.map((id) => figma.getNodeByIdAsync(id)))).filter(Boolean);
  if (nodes.length === 0) {
    figma.notify('Node not found');
    return;
  }

  const firstPage = getNodePage(nodes[0]);
  if (firstPage && firstPage !== figma.currentPage) {
    await figma.setCurrentPageAsync(firstPage);
  }

  const onCurrentPage = nodes.filter((n) => getNodePage(n) === figma.currentPage);
  if (onCurrentPage.length === 0) {
    figma.notify('Node not found on this page');
    return;
  }

  figma.currentPage.selection = onCurrentPage;
  figma.viewport.scrollAndZoomIntoView(onCurrentPage);
};
