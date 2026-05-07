# print-pdf-proofing-preflight-suite

印刷・PDF・校正プリフライトスイート は、ベクター入稿、多ページ差分、PDFプリフライト、アクセシビリティ検査を一連化し、リンク、フォント、塗り足し、ページ差分、タグ構造を確認する。

## 何を解決するか

印刷物やPDF公開物は確認点がアプリごとに分かれ、入稿直前に不備が見つかりやすい。

## 差別化

制作データ、PDF、校正コメントを同じチェックリストで扱う。

## 公開先

- BOOTH / GitHub Release

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Acrobat JavaScript + external evidence CLI の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/print-pdf-proofing-preflight-suite-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\AdobePlugin\created_idea_004_print-pdf-proofing-preflight-suite`
- idea ZIP: `D:\AI\AdobePlugin\created_idea_004_print-pdf-proofing-preflight-suite\idea_004_print-pdf-proofing-preflight-suite.zip`
- PICKUP rank: 28
- Domain: AdobePlugin
- Adobe host: Acrobat
