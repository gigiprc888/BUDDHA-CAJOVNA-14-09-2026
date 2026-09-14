import { ROOMS, TABLES, isBookable, type RoomId } from "@/lib/rooms";
import { takenTables } from "@/lib/reservations";

const PINS: { id: RoomId; left: string; top: string }[] = [
  { id: "V", left: "10%", top: "44%" },
  { id: "D", left: "63%", top: "38%" },
  { id: "M", left: "44%", top: "68%" },
  { id: "C", left: "62%", top: "62%" },
  { id: "S", left: "82%", top: "68%" },
  { id: "Z", left: "84%", top: "44%" },
];

type Props = {
  date: string;
  wave: string;
  party: number;
  room: RoomId | null;
  tableId: string | null;
  onRoom: (id: RoomId | null) => void;
  onTable: (id: string | null) => void;
};

export function TablePicker({ date, wave, party, room, tableId, onRoom, onTable }: Props) {
  const taken = takenTables(date, wave);

  function pickRoom(id: RoomId | null) {
    onRoom(id);
    onTable(null);
  }

  const chips = (
    <div className="relative z-10 mt-3 flex flex-wrap gap-2">
      {ROOMS.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => pickRoom(r.id)}
          className={
            "relative z-10 min-h-11 rounded-full px-3 py-2 text-xs uppercase tracking-[0.12em] " +
            (room === r.id ? "bg-gold text-bg" : "border border-line text-ivory hover:border-gold hover:bg-gold/10")
          }
        >
          {room ? r.name : `${r.id} · ${r.name}`}
        </button>
      ))}
    </div>
  );

  if (!room) {
    return (
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Celá čajovna</p>
        <p className="mt-1 text-sm text-muted">Nejdřív místnost. Pak stůl.</p>
        <div className="plan-well relative z-10 mt-4 min-h-[14rem] overflow-hidden rounded-card p-2 md:min-h-[18rem] md:p-3">
          <img
            src="/plans/overview-v3.jpg"
            alt="Plánek čajovny Buddha"
            width={1600}
            height={1236}
            className="block h-auto w-full"
          />
          {PINS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => pickRoom(p.id)}
              style={{ left: p.left, top: p.top }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold px-2.5 py-1 font-serif text-sm text-bg shadow-lg hover:bg-ivory"
            >
              {p.id}
            </button>
          ))}
        </div>
        {chips}
      </div>
    );
  }

  const roomMeta = ROOMS.find((r) => r.id === room)!;
  const tables = TABLES.filter((t) => t.room === room);
  const bookable = isBookable(room);

  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Kam si sednete</p>
      <button type="button" onClick={() => pickRoom(null)} className="relative z-10 mt-2 text-xs text-gold hover:underline">
        ← celá čajovna
      </button>
      {chips}
      <p className="mt-3 text-xs text-muted">{roomMeta.note}</p>
      {!bookable ? (
        <div className="mt-4 rounded-card border border-gold/35 bg-surface p-5">
          <p className="text-[10px] tracking-[0.18em] text-gold uppercase">Záložní místnost</p>
          <p className="mt-2 font-serif text-2xl text-ivory">{roomMeta.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{roomMeta.note}</p>
          <a href="tel:+420222515616" className="mt-4 inline-block text-sm text-gold">
            Domluvit telefonem →
          </a>
        </div>
      ) : (
        <>
          <div className="plan-well relative z-10 mt-3 min-h-[14rem] overflow-hidden rounded-card p-2 md:min-h-[18rem] md:p-3">
            <img
              key={roomMeta.plan}
              src={roomMeta.plan}
              alt={`Plánek ${roomMeta.name}`}
              className="block h-auto w-full"
            />
          </div>
          <div className="relative z-10 mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {tables.map((t) => {
              const busy = taken.has(t.id);
              const small = party > t.max;
              const off = busy || small;
              return (
                <button
                  key={t.id}
                  type="button"
                  disabled={off}
                  onClick={() => !off && onTable(t.id)}
                  className={
                    "rounded-card border px-2 py-3 text-left " +
                    (off
                      ? "border-line text-muted opacity-40"
                      : tableId === t.id
                        ? "border-gold bg-surface"
                        : "border-line bg-surface/50 hover:border-gold")
                  }
                >
                  <div className="font-serif text-xl">{t.id}</div>
                  <div className="text-[11px] text-muted">
                    {busy ? "obsazeno" : small ? `max ${t.max}` : `až ${t.max} lidí`}
                  </div>
                  {t.hint && !off && <div className="mt-1 text-[10px] text-gold">{t.hint}</div>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
