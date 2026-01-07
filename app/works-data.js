// import Image from "next/image";
export const works = [
    {
    slug: "project1",
    title: "Todoリスト",
    description:" \n Reactを用いて制作したTodoリストアプリです。\n タスクの追加・削除・完了状態の切り替えに加え、編集機能や進捗（達成数）の可視化も実装しました。\n データはlocalStorageに保存し、ページをリロードしても状態が保持されるようにしています。\n useStateとuseEffectを使った状態管理の理解を深めることを目的に制作しました。",
    contenttitle:"工夫した点・学んだこと",
    content:"\n 1.localStorageを使い、永続化を実装した点 \n 2.編集モード用に状態を分け、UIとロジックを整理した点  \n 3.Enterキーで追加できるなど、使いやすさを意識した点",
    image:"/Image/Todo.png",
  },
  {
    slug: "project2",
    title: "お天気アプリ",
    description: "\n 外部の天気APIを利用して、指定した都市の現在の天気を取得・表示するWebアプリです。\n API通信の流れや非同期処理（async / await）の理解を目的に制作しました。\n データ取得中のローディング表示や、エラー発生時のメッセージ表示も実装しています。",
    contenttitle:"工夫した点・学んだこと",
    content:"\n 1.AbortControllerを使用し、連続リクエスト時に不要な通信をキャンセルするようにした点  \n 2.入力値のバリデーションを行い、無駄なAPI通信を防いだ点  \n 3.ローディング・エラー・成功状態を分けて管理した点",
    image:"/Image/お天気.png",
  },
  {
    slug: "project3",
    title: "バナー",
    description:"テストテストテストテスト",
    contenttitle:"テストテスト",
    content:"テストテストテスト",
    image:"/Image/フランス料理.png",
  },
  {
    slug: "project4",
    title: "本サイト",
    description:" Figmaでデザインを作った後、まずHTML/CSSを用いサイトを制作しました。\n 次にReact Next.jsに移植しました。\n Worksをクリックするとルーティング機能を使い、制作物の詳細ページに遷移できるようにしました。",
    contenttitle:"工夫した点・学んだこと",
    content:"1.制作物が増えた際、Worksの中身を簡単に追加できるようにしました。",
    image:"/Image/フランス料理.png",
  },
];
