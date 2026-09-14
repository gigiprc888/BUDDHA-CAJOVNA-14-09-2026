const WAVE =
  "M0 60 C150 20 250 100 400 60 S650 20 800 60 S1050 100 1200 60 S1450 20 1600 60 S1850 100 2000 60 S2250 20 2400 60";

export function SeaWaves() {
  return (
    <div className="sea-waves" aria-hidden>
      <div className="sea-waves-bob">
      <svg className="sea-layer sea-a" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
      <svg className="sea-layer sea-b" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
      <svg className="sea-layer sea-c" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
      <svg className="sea-layer sea-d" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d={WAVE} />
      </svg>
      </div>
    </div>
  );
}
