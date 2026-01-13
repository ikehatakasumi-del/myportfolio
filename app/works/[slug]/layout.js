
// app/works/[slug]/layout.js
import DetailHeader from "@/app/components/DetailHeader";
import PageNavigation from "@/app/components/PageNavigation";
import Link from "next/link";

export default function DetailLayout({ children }) {
  return (
    <>
      <DetailHeader /> {/* 詳細ページ専用のヘッダー */}
      {children}       {/* ここに詳細ページ（page.js）の中身が入る */}
      {/* <div style={{marginTop:"20px" ,textAlign:"center",paddingBottom:"20px"}}>
        <Link href="/">トップページに戻る</Link>
      </div> */}
    </>
  );
}