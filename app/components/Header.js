import Link from "next/link";

// import Image from "next/image";
const Header = () => {
    return (
    <header className="header" id="top">
        <div className="header-text">
            <h1>IKEHATA KASUMI</h1>
            <p>
                基礎を大切にしながら、<br/>
                分かりやすいUIの実装を意識して学習しています。
            </p>
            <nav className="nav-list">
                <ul>
                    <li><a href="#top">Top</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
            
        </div>
        {/* <Image src="/Image/pc.jpg" alt="パソコンの画像" width={570} height={380}/> */}
    </header>
    );
};
export default Header;
