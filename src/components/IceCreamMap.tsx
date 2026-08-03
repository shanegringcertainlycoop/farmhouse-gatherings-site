import { useEffect, useRef, useState } from "react";
import {
  SHOPS_BY_TOWN,
  FARMHOUSE_COORDS,
  TOTAL_SHOPS,
  mapsUrl,
} from "@/data/ice-cream";

// Town map for the ice cream guide.
//
// Leaflet is loaded lazily inside an effect rather than imported at module
// scope, for two reasons: it touches `window` on import and would throw during
// the static prerender, and it keeps ~40KB of map code out of the main bundle
// for the four pages that never show a map.
//
// Markers are towns, not shops — see the note on TOWN_COORDS in
// src/data/ice-cream.ts for why. Each popup lists that town's shops with an
// exact-address link out to Google Maps.
const IceCreamMap = () => {
  const el = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let map: { remove: () => void } | null = null;
    let cancelled = false;

    (async () => {
      try {
        const L = await import("leaflet");
        await import("leaflet/dist/leaflet.css");
        if (cancelled || !el.current) return;

        // scrollWheelZoom off so the page still scrolls normally over the map.
        const m = L.map(el.current, { scrollWheelZoom: false });
        map = m;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(m);

        const esc = (s: string) =>
          s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // The house, so the distances in the guide have a visible origin.
        L.marker(FARMHOUSE_COORDS, {
          icon: L.divIcon({
            className: "",
            html: '<div style="background:#2b2520;width:15px;height:15px;border-radius:50%;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>',
            iconSize: [15, 15],
            iconAnchor: [7, 7],
          }),
        })
          .addTo(m)
          .bindPopup("<strong>The Farmhouse</strong><br>Big Long Lake");

        for (const { town, coords, shops } of SHOPS_BY_TOWN) {
          const n = shops.length;
          L.marker(coords, {
            icon: L.divIcon({
              className: "",
              html: `<div style="background:#c5613c;color:#fff;min-width:24px;height:24px;border-radius:12px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);font:600 12px/20px system-ui,sans-serif;text-align:center">${n}</div>`,
              iconSize: [24, 24],
              iconAnchor: [12, 12],
            }),
          })
            .addTo(m)
            .bindPopup(
              `<strong>${esc(town)}</strong> &middot; ${n} ${n === 1 ? "shop" : "shops"}<br>` +
                shops
                  .map(
                    (s) =>
                      `<div style="margin-top:6px">${esc(s.name)}` +
                      (s.address
                        ? `<br><a href="${mapsUrl(`${s.name}, ${s.address}`)}" target="_blank" rel="noopener noreferrer">${esc(s.address)}</a>`
                        : "") +
                      `</div>`,
                  )
                  .join(""),
              { maxWidth: 280 },
            );
        }

        // Frame the pins themselves rather than a hardcoded centre/zoom, so the
        // map stays correct if a shop is ever added in a new town.
        m.fitBounds(
          L.latLngBounds([
            FARMHOUSE_COORDS,
            ...SHOPS_BY_TOWN.map((t) => t.coords),
          ]),
          { padding: [40, 40] },
        );
      } catch {
        // Tiles blocked, offline, or the chunk failed — fall back to the note
        // below rather than leaving an empty grey box.
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div>
      <div
        ref={el}
        role="application"
        aria-label={`Map of ${TOTAL_SHOPS} ice cream shops across northern Indiana, grouped by town`}
        className="w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden border border-border/40 bg-surface-cool z-0"
      />
      <p className="font-body text-xs text-foreground/40 mt-3">
        {failed
          ? "The map could not load — the full list of shops and addresses is below."
          : "Numbered pins are towns, not individual shops; the dark pin is The Farmhouse. Open a pin for that town's shops and a directions link for each address."}
      </p>
    </div>
  );
};

export default IceCreamMap;
