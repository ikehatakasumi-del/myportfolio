import React from "react";
import { works } from "../works-data";
import Link from "next/link";

const PageNavigation = ({currentSlug}) => {
    const currentIndex = works.findIndex((work) => work.slug === currentSlug);

    const prevWork = works[currentIndex - 1];
    const nextWork = works[currentIndex + 1];

    return(
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",margin:"30px 0"}}>
        <div style={{flex:"1",textAlign:"left"}}>
            {prevWork && (
            <Link href={`/works/${prevWork.slug}`} className="nav-btn">
                ← Prev
            </Link>
            )}
        </div>
        {/* flex:1親の余ったスペースを自分たちで分け合う３等分する */}
        <div style={{flex:"1",textAlign:"center"}}>
            <Link href="/" className="nav-btn">
                Home
            </Link>
        </div>
        {/* つぎがない場合は空のdivを置いて場所を確保する */}
        <div style={{flex:"1",textAlign:"right"}}>
            {nextWork && (
            <Link href={`/works/${nextWork.slug}`} className="nav-btn">
                Next →
            </Link>
            )}
        </div>
    </div>
    )
};

export default PageNavigation;
