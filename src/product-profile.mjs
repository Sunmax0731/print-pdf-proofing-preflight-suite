export const productProfile = {
  "repository": "print-pdf-proofing-preflight-suite",
  "title": "印刷・PDF・校正プリフライトスイート",
  "domain": "AdobePlugin",
  "hostApp": "Acrobat",
  "rank": 28,
  "ideaNo": 4,
  "overview": "ベクター入稿、多ページ差分、PDFプリフライト、アクセシビリティ検査を一連化し、リンク、フォント、塗り足し、ページ差分、タグ構造を確認する。",
  "problem": "印刷物やPDF公開物は確認点がアプリごとに分かれ、入稿直前に不備が見つかりやすい。",
  "differentiation": "制作データ、PDF、校正コメントを同じチェックリストで扱う。",
  "publish": "BOOTH / GitHub Release",
  "surface": "Acrobat JavaScript + external evidence CLI",
  "entity": "pdf preflight case",
  "requiredFields": [
    "id",
    "title",
    "source",
    "pdfPath",
    "checkProfile",
    "owner",
    "acceptance"
  ],
  "warningField": "accessibilityNote",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
