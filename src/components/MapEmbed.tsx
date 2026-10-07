import { MAP_EMBED_URL } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <iframe
        src={MAP_EMBED_URL}
        title="SK Cab Service location in Ahmedabad"
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[400px] w-full border-0"
      />
    </div>
  );
}
