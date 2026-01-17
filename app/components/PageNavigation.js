import React from "react";
import { works } from "../works-data";
import Link from "next/link";

const PageNavigation = ({currentSlug}) => {
    const currentIndex = works.findIndex((work) => work.slug === currentSlug);

    const prevWork = works[currentIndex - 1];
    const nextWork = works[currentIndex + 1];

    return(
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"16px"}}>
        {prevWork ? (
        <Link href={`/works/${prevWork.slug}`} className="nav-btn">
            ← Prev
            {/* {prevWork.title} */}
        </Link>
        ):(
            <span className="nav-btn" style={{visibility:"hidden"}}></span>
        )}
        <Link href="/" className="nav-btn">
            Home
        </Link>
        {nextWork ? (
        <Link href={`/works/${nextWork.slug}`} className="nav-btn">
            {/* {nextWork.title}  */}
            Next →
        </Link>
        ):(
            <span className="nav-btn" style={{visibility:"hidden"}}></span>
        )}
    </div>
    )
};

export default PageNavigation;
