import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const TIPS = {
  cs: [
    { k: "Kombini", t: "Hledáme v centru Prahy vhodné prostory pro japonské kombini.", to: "/kombini" },
    { k: "Happy Hours", t: "Po–Čt 13–15: dvě dýmky za cenu jedné.", to: "/menu" },
    { k: "Matcha menu", t: "Float od 120 Kč. Sezóna brzy končí.", to: "/menu" },
    { k: "Wayusa", t: "Přírodní energie z Amazonie. 15 min. 119 Kč.", to: "/wayusa" },
    { k: "Dýmka", t: "Adalya od 229 Kč. Pouze k nápoji, od 18 let.", to: "/menu" },
    { k: "Čajové mojito", t: "Zelený čaj, rum, máta. 159 Kč.", to: "/menu" },
    { k: "Medovina", t: "Podáváme i v rohu. Od Medovinárny.", to: "/menu" },
    { k: "Gatcha", t: "1 500 Kč na účtence = menší zatočení.", to: "/gatcha" },
  ],
  en: [
    { k: "Kombini", t: "Looking for a space in central Prague for a Japanese kombini.", to: "/kombini" },
    { k: "Happy Hours", t: "Mon–Thu 13–15: two hookahs for the price of one.", to: "/menu" },
    { k: "Matcha menu", t: "Float from 120 Kč. Season ending soon.", to: "/menu" },
    { k: "Wayusa", t: "Natural energy from the Amazon. 15 min. 119 Kč.", to: "/wayusa" },
    { k: "Hookah", t: "Adalya from 229 Kč. With a drink, 18+.", to: "/menu" },
    { k: "Tea mojito", t: "Green tea, rum, mint. 159 Kč.", to: "/menu" },
    { k: "Mead", t: "In a horn, as the Celts drank it. From Medovinárna.", to: "/menu" },
    { k: "Gatcha", t: "1,500 Kč on the bill = a small spin.", to: "/gatcha" },
  ],
  ja: [
    { k: "コンビニ", t: "プラハ中心部で日本のコンビニに合う場所を探しています。", to: "/kombini" },
    { k: "Happy Hours", t: "月〜木 13–15: シーシャ2本が1本分。", to: "/menu" },
    { k: "抹茶", t: "フロート 120 Kč から。まもなく終了。", to: "/menu" },
    { k: "Wayusa", t: "アマゾンの自然なエネルギー。15分。119 Kč。", to: "/wayusa" },
    { k: "シーシャ", t: "Adalya 229 Kč から。ドリンク付き、18歳以上。", to: "/menu" },
    { k: "茶モヒート", t: "緑茶、ラム、ミント。159 Kč。", to: "/menu" },
    { k: "ミード", t: "角でも出します。メドヴィナールナ。", to: "/menu" },
    { k: "ガチャ", t: "レシート 1,500 Kč ＝小さいガチャ。", to: "/gatcha" },
  ],
} as const;

export function TipsStrip() {
  const { locale } = useI18n();
  const tips = TIPS[locale];
  const [i, setI] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % tips.length), 11000);
    return () => window.clearInterval(id);
  }, [tips.length]);

  if (!on) return null;
  const tip = tips[i % tips.length];
  const more = locale === "en" ? "More →" : locale === "ja" ? "もっと →" : "Víc →";
  const menu = locale === "en" ? "Menu →" : locale === "ja" ? "メニュー →" : "Lístek →";

  return (
    <div className="tips-strip pointer-events-none fixed inset-x-0 bottom-[4.4rem] z-40 md:bottom-0">
      <div className="pointer-events-auto relative overflow-hidden border-t border-[#f3e6cc]/35 bg-gold px-3 py-2.5 shadow-[0_-6px_16px_rgb(12_11_10_/_0.18)]">
        <span className="tips-shine pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex max-w-5xl items-center gap-3">
          <span className="hidden shrink-0 rounded-full bg-bg px-2.5 py-1 text-[10px] tracking-[0.22em] text-gold uppercase sm:inline">
            {locale === "en" ? "Tonight" : locale === "ja" ? "今日" : "Dnes"}
          </span>
          <Link
            key={i}
            to={tip.to}
            className="tips-swap min-w-0 flex-1 truncate text-[#1c1610] hover:underline"
          >
            <span className="font-serif text-lg tracking-tight md:text-xl">{tip.k}</span>
            <span className="ml-2 text-sm font-medium md:text-[0.95rem]">{tip.t}</span>
          </Link>
          <div className="hidden gap-1 sm:flex">
            {tips.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => setI(n)}
                className={`h-1.5 rounded-full transition-all ${n === i % tips.length ? "w-4 bg-bg" : "w-1.5 bg-bg/35"}`}
                aria-label={`Tip ${n + 1}`}
              />
            ))}
          </div>
          <Link
            to={tip.to}
            className="shrink-0 rounded-full bg-bg px-3.5 py-1.5 text-[10px] tracking-[0.18em] text-gold uppercase hover:bg-[#1c1610]"
          >
            {tip.to === "/kombini" || tip.to === "/gatcha" || tip.to === "/wayusa" ? more : menu}
          </Link>
          <button
            type="button"
            onClick={() => setOn(false)}
            className="grid size-8 shrink-0 place-items-center text-[#1c1610]/55 hover:text-[#1c1610]"
            aria-label={locale === "en" ? "Close tips" : locale === "ja" ? "閉じる" : "Zavřít tipy"}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
