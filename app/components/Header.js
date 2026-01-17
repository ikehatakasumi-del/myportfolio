// import Image from "next/image";
const Header = () => {

    return (
    <header className="header" id="top">
        <div className="container">
            <div className="header-text">
                <h1>IKEHATA KASUMI</h1>
                <p>
                    基礎を大切にしながら、<br/>
                    分かりやすいUIの実装を意識して学習しています。
                </p>
                {/* 隠しチェックボックス　ハンバーガー チェックボックスハック*/}
                <input type="checkbox" id="nav-check" className="nav-check"/>
                {/* ハンバーガーの最初の三本線 */}
                <label htmlFor="nav-check" className="nav-open">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav className="nav-list nav-content">
                    <ul>
                        <li><a href="#top">Top</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
};
export default Header;
