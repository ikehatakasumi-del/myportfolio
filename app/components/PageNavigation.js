import React from "react";
import { works } from "../works-data";

const PageNavigation = ({currentSlug}) => {
    const currentIndex = works.findIndex((work) => work.slug === currentSlug);
    
    const prevWork = works[currentIndex - 1];
    const nextWork = works[currentIndex + 1];
    
    return(
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"16px"}}>
        {prevWork ? (
        <a href={`/works/${prevWork.slug}`} className="nav-btn">
            ← {prevWork.title}
        </a>
        ):(
            <span className="nav-btn" style={{visibility:"hidden"}}></span>
        )}
        <a href="/" className="nav-btn">
            Home
        </a>
        {nextWork ? (
        <a href={`/works/${nextWork.slug}`} className="nav-btn">
            {nextWork.title} →
        </a>
        ):(
            <span className="nav-btn" style={{visibility:"hidden"}}></span>
        )}
    </div>
    )
};

export default PageNavigation;