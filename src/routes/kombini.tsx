import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { Pic } from "@/components/pic";

export const Route = createFileRoute("/kombini")({ component: KombiniPage });

const COPY = {
  cs: {
    kicker: "Hledáme prostor",
    title: "Japonské kombini v Praze.",
    lead: "Konbini není večerka. Je to malá městská infrastruktura — čistá, rychlá, otevřená, když zbytek ulice spí.",
    what: "Co je kombini",
    whatP:
      "Japonské konbini (コンビニ) je obchod na rohu, který umí víc než prodat bagetu. Onigiri, bento, horké plechovky, káva, sladkosti, drogerie, dobití, někdy i výběr z bankomatu. V Tokiu jich je na každém bloku. Ne proto, že je to levné — proto, že je to spolehlivé.",
    not: "Ne potraviny z roku 1998. Police v pořádku, světlo, teplé jídlo, které se dá sníst hned. Pět minut, ne čtvrt hodiny fronty.",
    why: "Proč v Praze",
    whyP:
      "Centrum umí čajovnu, bar i galerii. Chybí mu malý, kultivovaný obchod, kam zajdete ve dvě v noci pro rýžovou kouli a vodu — a odejdete s pocitem, že město o vás ví. Takové kombini chceme otevřít.",
    look: "Jaký prostor hledáme",
    lookItems: [
      "Centrum Prahy — pěší provoz, ideálně Nové Město, Staré Město, Vinohrady, Karlín.",
      "Výloha na ulici, vstup z chodníku. Ne suterén.",
      "Zhruba 40–120 m². Zázemí na ohřev a sklad.",
      "Provoz 24/7.",
    ],
    offer: "Máte prostor?",
    offerP: "Napište krátce, kde to je a kolik metrů. Ozveme se.",
    mail: "Napsat e-mail",
    call: "Zavolat",
    back: "Zpět do čajovny",
    compare: "Dvě noci, stejná hodina",
    tokyo: "Tokio · 2:00",
    tokyoC: "Otevřeno. Onigiri. Voda. Světlo.",
    praha: "Praha · 2:00",
    prahaC: "Zavřeno. Ulice spí. Tady to chybí.",
  },
  en: {
    kicker: "Looking for a space",
    title: "A Japanese kombini in Prague.",
    lead: "A kombini is not a corner shop. It is small urban infrastructure — clean, fast, open when the rest of the street is asleep.",
    what: "What a kombini is",
    whatP:
      "A Japanese konbini (コンビニ) is the shop on the corner that does more than sell a sandwich. Onigiri, bento, hot cans, coffee, sweets, toiletries, top-ups, sometimes a cash machine. Tokyo has one on every block. Not because it is cheap — because it is reliable.",
    not: "Not a 1998 grocery. Ordered shelves, light, hot food you can eat now. Five minutes, not a quarter-hour queue.",
    why: "Why Prague",
    whyP:
      "The centre already has tea houses, bars and galleries. It lacks a small, cultivated shop you can walk into at 2 a.m. for a rice ball and water — and leave feeling the city still works. That is the kombini we want to open.",
    look: "The space we need",
    lookItems: [
      "Central Prague — foot traffic. Ideally New Town, Old Town, Vinohrady, Karlín.",
      "A street window and a pavement door. Not a cellar.",
      "About 40–120 m². A back room for heat and stock.",
      "Open 24/7.",
    ],
    offer: "Have a space?",
    offerP: "Write where it is and how many metres. We will reply.",
    mail: "Email us",
    call: "Call",
    back: "Back to the tea house",
    compare: "Two nights, the same hour",
    tokyo: "Tokyo · 2:00",
    tokyoC: "Open. Onigiri. Water. Light.",
    praha: "Prague · 2:00",
    prahaC: "Closed. The street is asleep. This is the gap.",
  },
  ja: {
    kicker: "場所を探しています",
    title: "プラハの日本のコンビニ。",
    lead: "コンビニはただの夜店ではない。小さくて清潔で速い都市のインフラ——通りが眠る時間も開いている。",
    what: "コンビニとは",
    whatP:
      "日本のコンビニは、パンを売る以上の角の店。おにぎり、弁当、温かい缶、コーヒー、菓子、日用品、チャージ、ときどきATM。東京ではブロックごとにある。安いからではない。信頼できるから。",
    not: "1998年の食料品店ではない。整った棚、光、すぐ食べられる温かい食事。5分。15分の列ではない。",
    why: "なぜプラハか",
    whyP:
      "中心部には茶房もバーもギャラリーもある。午前2時におにぎりと水を買いに入れて、街が自分を知っていると感じられる小さな店がない。それを開きたい。",
    look: "探している場所",
    lookItems: [
      "プラハ中心——歩行者。できれば新市街、旧市街、ヴィノフラディ、カールリーン。",
      "通りに面した窓、歩道からの入口。地下ではない。",
      "およそ 40–120 m²。加熱と在庫の奥。",
      "24時間営業（24/7）。",
    ],
    offer: "場所はありますか？",
    offerP: "どこか、何平米か、短く書いてください。返信します。",
    mail: "メールする",
    call: "電話する",
    back: "茶房へ戻る",
    compare: "同じ時刻、二つの夜",
    tokyo: "東京 · 2:00",
    tokyoC: "開いている。おにぎり。水。光。",
    praha: "プラハ · 2:00",
    prahaC: "閉まっている。通りは眠る。ここが欠けている。",
  },
};

function KombiniPage() {
  const { locale } = useI18n();
  const c = COPY[locale];

  return (
    <div className="relative min-h-screen font-sans text-fg">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img src="/place/hall.jpg" alt="" className="h-full w-full object-cover object-[50%_40%]" />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg/90" />
      </div>
      <SiteHeader />
      <main className="relative mx-auto max-w-4xl px-5 pb-28 pt-32 md:px-10 md:pt-36">
        <Reveal>
          <p className="kicker">{c.kicker}</p>
          <h1 className="headline mt-2 text-4xl md:text-6xl">{c.title}</h1>
        </Reveal>
        <p className="mt-5 max-w-xl font-serif text-xl italic text-gold md:text-2xl">{c.lead}</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <figure className="overflow-hidden rounded-card border border-gold/25">
            <Pic src="/kombini/tokyo.jpg" alt={c.tokyo} className="aspect-[16/9] w-full object-cover" />
            <figcaption className="bg-surface px-4 py-3">
              <p className="text-[10px] tracking-[0.18em] text-gold uppercase">{c.tokyo}</p>
              <p className="mt-1 font-serif text-lg text-ivory">{c.tokyoC}</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-card border border-gold/25">
            <Pic src="/kombini/praha.jpg" alt={c.praha} className="aspect-[16/9] w-full object-cover" />
            <figcaption className="bg-surface px-4 py-3">
              <p className="text-[10px] tracking-[0.18em] text-gold uppercase">{c.praha}</p>
              <p className="mt-1 font-serif text-lg text-ivory">{c.prahaC}</p>
            </figcaption>
          </figure>
        </div>
        <p className="mt-3 text-center text-[10px] tracking-[0.16em] text-muted uppercase">{c.compare}</p>

        <h2 className="headline mt-14 text-3xl">{c.what}</h2>
        <span className="hairline" />
        <p className="mt-4 text-sm leading-relaxed text-ivory/90">{c.whatP}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{c.not}</p>

        <h2 className="headline mt-14 text-3xl">{c.why}</h2>
        <span className="hairline" />
        <p className="mt-4 text-sm leading-relaxed text-ivory/90">{c.whyP}</p>

        <h2 className="headline mt-14 text-3xl">{c.look}</h2>
        <span className="hairline" />
        <ul className="mt-5 space-y-3">
          {c.lookItems.map((item) => (
            <li key={item} className="rounded-card border border-gold/20 bg-surface px-4 py-3 text-sm text-ivory/90">
              {item}
            </li>
          ))}
        </ul>

        <section className="mt-14 rounded-card border border-gold bg-surface p-6">
          <p className="text-[10px] tracking-[0.18em] text-gold uppercase">{c.offer}</p>
          <p className="mt-3 text-sm text-muted">{c.offerP}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:buddha.provozni@gmail.com?subject=Kombini%20prostor"
              className="rounded-full bg-gold px-5 py-2 text-[11px] tracking-[0.14em] text-bg uppercase"
            >
              {c.mail}
            </a>
            <a href="tel:+420222515616" className="rounded-full border border-gold/40 px-5 py-2 text-[11px] tracking-[0.14em] text-gold uppercase">
              {c.call}
            </a>
          </div>
        </section>

        <Link to="/" className="mt-10 inline-block text-sm text-gold">
          {c.back} →
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
