import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/wayusa")({ component: WayusaPage });

const COPY = {
  cs: {
    kicker: "Ilex guayusa",
    title: "Wayusa.",
    lead: "Přírodní energie z Amazonie. V Buddhovi 15 minut, 119 Kč.",
    what: "Co pijete",
    whatP:
      "Wayusa (guayusa) není čaj. Je to cesmína Ilex guayusa — stálezelený keř z amazonského pralesa Ekvádoru, Peru a Kolumbie. Suší se listy. Zaléva se horkou vodou. Chuť je sladší a měkčí než yerba maté, skoro bez té známé hořkosti.",
    people: "Kdo ji pije dlouho",
    peopleP:
      "Kichwa a Shuar v Ekvádoru ji pijí ráno, než jdou do pralesa. Říkají jí nápoj, který vypláchne sny a nechá hlavu čistou. Není to káva na spěch. Je to pomalé probuzení.",
    vs: "Wayusa a yerba maté",
    vsItems: [
      "Obě jsou cesmíny. Maté je Ilex paraguariensis, wayusa Ilex guayusa.",
      "Maté je zemitější, hořčejší, pije se z tykve s bombillou.",
      "Wayusa je sladší, méně trpká, zalévá se jako čaj.",
      "Obě mají kofein. Maté navíc theobromin — tu kakaovou stopu.",
    ],
    here: "V Buddhovi",
    hereP: "List, 15 minut, 119 Kč. Než ho poprvé zalejete, nechte si říct, jak voní za mokra. Není to čajovna na stimulant — je to jiná zelená, z jiného lesa.",
    note: "Text je o chuti a původu, ne o léčbě. Kofein není pro každého.",
    menu: "Dát si wayusu",
    back: "Zpět do čajovny",
  },
  en: {
    kicker: "Ilex guayusa",
    title: "Wayusa.",
    lead: "Natural energy from the Amazon. At Buddha, 15 minutes, 119 Kč.",
    what: "What you are drinking",
    whatP:
      "Wayusa (guayusa) is not tea. It is Ilex guayusa — an evergreen from the Amazon in Ecuador, Peru and Colombia. The leaves are dried and steeped. The cup is sweeter and softer than yerba maté, almost without that famous bitterness.",
    people: "Who has drunk it longest",
    peopleP:
      "The Kichwa and Shuar in Ecuador drink it in the morning, before the forest. They call it the drink that rinses the dreams and leaves the head clear. It is not coffee in a hurry. It is a slow waking.",
    vs: "Wayusa and yerba maté",
    vsItems: [
      "Both are hollies. Maté is Ilex paraguariensis, wayusa Ilex guayusa.",
      "Maté is earthier, more bitter, drunk from a gourd with a bombilla.",
      "Wayusa is sweeter, less astringent, steeped like tea.",
      "Both carry caffeine. Maté also has theobromine — a cocoa trace.",
    ],
    here: "At Buddha",
    hereP: "Leaf, 15 minutes, 119 Kč. Before the first pour, ask how it smells wet. This is not a stimulant bar — it is another green, from another forest.",
    note: "This is about taste and origin, not medicine. Caffeine is not for everyone.",
    menu: "Have a wayusa",
    back: "Back to the tea house",
  },
  ja: {
    kicker: "Ilex guayusa",
    title: "Wayusa.",
    lead: "アマゾンの自然なエネルギー。ブッダでは15分、119 Kč。",
    what: "何を飲んでいるか",
    whatP:
      "Wayusa（グアユサ）は茶ではない。Ilex guayusa——エクアドル、ペルー、コロンビアのアマゾンの常緑。葉を乾かし、湯で浸す。マテより甘くやわらかく、あの苦みはほとんどない。",
    people: "長く飲んできた人たち",
    peopleP:
      "エクアドルのキチュワとシュアルは、森へ入る前の朝に飲む。夢をすすぎ、頭を澄ませる飲み物だと言う。急ぐコーヒーではない。ゆっくりした目覚め。",
    vs: "Wayusa とイェルバ・マテ",
    vsItems: [
      "どちらもモチノキ。マテは Ilex paraguariensis、wayusa は Ilex guayusa。",
      "マテは土っぽく苦い。ひょうたんとボンビーリャで飲む。",
      "Wayusa は甘く、渋みが少なく、茶のように淹れる。",
      "どちらもカフェイン。マテにはテオブロミン——カカオの気配。",
    ],
    here: "ブッダでは",
    hereP: "葉、15分、119 Kč。最初に注ぐ前、濡れた香りを聞いて。興奮のための茶房ではない。別の緑、別の森。",
    note: "味と出自の話。治療ではない。カフェインは万人向けではない。",
    menu: "Wayusa を飲む",
    back: "茶房へ戻る",
  },
};

function WayusaPage() {
  const { locale } = useI18n();
  const c = COPY[locale];

  return (
    <div className="relative min-h-screen font-sans text-fg">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img src="/shop/waysa.jpg?v=line" alt="" className="h-full w-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-bg/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>
      <SiteHeader />
      <main className="relative mx-auto max-w-3xl px-5 pb-28 pt-32 md:px-10 md:pt-36">
        <Reveal>
          <p className="kicker">{c.kicker}</p>
          <h1 className="headline mt-2 text-4xl md:text-6xl">{c.title}</h1>
        </Reveal>
        <p className="mt-5 max-w-xl font-serif text-xl italic text-gold md:text-2xl">{c.lead}</p>

        <h2 className="headline mt-14 text-3xl">{c.what}</h2>
        <span className="hairline" />
        <p className="mt-4 text-sm leading-relaxed text-ivory/90">{c.whatP}</p>

        <h2 className="headline mt-14 text-3xl">{c.people}</h2>
        <span className="hairline" />
        <p className="mt-4 text-sm leading-relaxed text-ivory/90">{c.peopleP}</p>

        <h2 className="headline mt-14 text-3xl">{c.vs}</h2>
        <span className="hairline" />
        <ul className="mt-5 space-y-3">
          {c.vsItems.map((item) => (
            <li key={item} className="rounded-card border border-gold/20 bg-surface px-4 py-3 text-sm text-ivory/90">
              {item}
            </li>
          ))}
        </ul>

        <section className="mt-14 rounded-card border border-gold bg-surface p-6">
          <p className="text-[10px] tracking-[0.18em] text-gold uppercase">{c.here}</p>
          <p className="mt-3 text-sm text-muted">{c.hereP}</p>
          <p className="mt-3 text-xs text-muted/70">{c.note}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/menu" className="rounded-full bg-gold px-5 py-2 text-[11px] tracking-[0.14em] text-bg uppercase">
              {c.menu}
            </Link>
            <Link to="/rezervace" className="rounded-full border border-gold/40 px-5 py-2 text-[11px] tracking-[0.14em] text-gold uppercase">
              {locale === "ja" ? "予約" : locale === "en" ? "Reserve" : "Rezervace"}
            </Link>
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
