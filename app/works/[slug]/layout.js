// app/works/[slug]/layout.js
import DetailHeader from "@/app/components/DetailHeader";

export default function DetailLayout({ children }) {
  return (
    <>
      <DetailHeader /> {/* 詳細ページ専用のヘッダー */}
      {children}       {/* ここに詳細ページ（page.js）の中身が入ります */}
    </>
  );
}