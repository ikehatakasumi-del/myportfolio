import Image from "next/image";
import Link from "next/link";

import { works } from "../works-data";

import WorksCard from "../components/WorksCard";
// "use client";

const Home = () => {
    return (
    <>
    <main>
        <section className="works" id="works">
            <div className="container">
                <h2>Works</h2>
                <div className="works-list">
                {works.map((work) => (
                    <Link
                    key={work.slug}
                    href={`/works/${work.slug}`}
                    className="works-item"
                    style={{textDecoration:"none",color:"#15181c",fontWeight:"bold"}}
                    >
                    <WorksCard key={work.slug} work={work} />
                    {/* <p style={{border:"2px solid #5959c0",borderRadius:"6px",display:"block",width:"120px",margin:"0 auto",fontSize:"18px",fontWeight:"normal",padding:"2px"}}>View project</p> */}
                    </Link>
                ))}
                
                </div>
            </div>
        </section>

        <section className="skills" id="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-list">
                <div className="skills-card">
                    <h3>HTML/CSS</h3>
                    <p>
                        HTML/CSSの基本的なコーディングを習得しています。<br/>
                        セマンティックなマークアップを意識しながら、
                        レイアウトや装飾を実装できるよう学習しています。<br/>
                        現在はレスポンシブ対応についても勉強中です。
                    </p>
                </div>
                <div className="skills-card">
                    <h3>JavaScript</h3>
                    <p>
                        JavaScriptの基本文法や構文について学習しています。<br/>
                        DOM操作やイベント処理など、
                        Webページに動きをつける基本的な実装を学んでいます。<br/>
                        現在は理解を深めるために小さな機能を作りながら学んでいます。
                    </p>
                </div>
                <div className="skills-card">
                    <h3>React</h3>
                    <p>
                        Reactを用いた基本的なアプリ開発を学習しています。<br/>
                        コンポーネント化やprops、stateの扱いを理解し、
                        シンプルな機能を持つアプリを作成しています。<br/>
                        コードの役割を意識した実装を心がけています。
                    </p>
                </div>
            </div>
            </div>
        </section>

        <section className="about" id="about">
            <div className="container">
                <h2>About me</h2>
                <div className="about-inner">
                <div className="about-text">
                    <p><strong>前職では看護師として勤務していました。</strong></p>
                    <p>
                        医療現場では患者さんや多職種とのコミュニケーションを大切にし、<br/>
                        <strong>正確さ</strong>や<strong>責任感</strong>が求められる環境で業務に取り組んできました。<br/>
                        相手の状況を考えながら行動することや、
                        小さな変化に気づくことの重要性を学びました。<br/>
                    </p>
                    <p>
                        現在はエンジニアを目指して学習しています。<br/>
                        看護師として培った<strong>「相手の立場に立って考える姿勢」</strong>は、
                        ユーザーにとって使いやすいUIを考える上でも
                        活かせると考えています。<br/>
                    </p>
                    <p>
                        未経験ではありますが、
                        分からないことをそのままにせず、
                        調べて試しながら理解を深めることを大切にしています。
                    </p>
                </div>
                <Image src="/Image/mimi.jpg" alt="聴診器の画像" width={420} height={330}/>
            </div>
            </div>
        </section>
    </main>
    </>
  );
};
export default Home;