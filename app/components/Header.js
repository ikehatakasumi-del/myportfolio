"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // ブレークポイント跨ぎの瞬間だけ transition を殺す（PC→SPの “勝手に閉じるアニメ” を消す）
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const killTransitionOnce = () => {
      const el = document.documentElement; // <html>
      el.classList.add("no-transition");
      // 2フレーム後に戻す（1フレームだと効かない環境がある）
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.remove("no-transition");
        });
      });
    };

    const onChange = (e) => {
      killTransitionOnce();
      // PCになったら必ず閉じる
      if (e.matches) setOpen(false);
    };

    // 初期
    if (mq.matches) setOpen(false);

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
      document.documentElement.classList.remove("no-transition");
    };
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header-text">
          <h1>IKEHATA KASUMI</h1>
          <p>
            基礎を大切にしながら、
            <br />
            分かりやすいUIの実装を意識して学習しています。
          </p>

          <button
            type="button"
            className={`nav-open ${open ? "is-open" : ""}`}
            aria-label="メニュー開閉"
            aria-expanded={open}
            aria-controls="global-nav"
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="global-nav"
            className={`nav-list nav-content ${open ? "is-open" : ""}`}
          >
            <ul>
              <li>
                <a href="#top" onClick={close}>
                  Top
                </a>
              </li>
              <li>
                <a href="#works" onClick={close}>
                  Works
                </a>
              </li>
              <li>
                <a href="#skills" onClick={close}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" onClick={close}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
