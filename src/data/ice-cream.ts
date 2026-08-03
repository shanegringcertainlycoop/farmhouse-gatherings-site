// Shop data for the Northern Indiana Ice Cream guide.
//
// SOURCING RULE: same rule as lakes.ts — every shop below has a verified town,
// and every claim about what it serves comes from the shop itself, its county
// tourism bureau, or local news. Do not add a shop here without one, and do not
// add a street address unless you have actually seen it. `town` is required by
// the type on purpose: a shop we cannot place is a shop we do not list.
//
// Sources:
//  - Steuben County Tourism Bureau, Ice Cream Trail — visitsteubencounty.com/ice-cream-trail
//  - Visit Indiana, "Take an Ice Cream Road Trip IN Steuben County" (2026)
//  - Visit Shipshewana, "Cool off in the Heart of Amish Country"
//  - Visit Kosciusko County, Ice Cream Shops directory
//  - InkFreeNews (Skoops), WANE 15 and 21Alive (Lickity Splitz),
//    Towne Post Lakes Region (Cowlick's) — local news, for openings and owners
//
// THREE CORRECTIONS worth keeping, because the wrong version is what search
// results hand you and it will get "fixed" back if this note disappears:
//  - Lickity Splitz is in ROME CITY (Noble County), not Wolcottville. The Visit
//    Shipshewana roundup files it under Wolcottville; the owners, both Fort
//    Wayne TV stations and its own listing all say 3204 E CR 900 N, Rome City.
//  - Cowabunga Creamery is in ALBION (Noble County), not Kendallville.
//  - cowlicksicecream.com is NOT our Cowlick's. It is an unrelated shop in Fort
//    Bragg, California. Search hands you that domain for "Cowlick's ice cream";
//    the Wolcottville one has no website, only the Facebook page linked below.
//
// URL RULE: only link a URL that has been opened and confirmed to be the right
// business. Where a shop has no site of its own, link its Facebook page — for
// these seasonal windows that IS the canonical presence, and the page already
// tells readers Facebook is more current than anything else.
//
// REMOVED: "Happiness Is Ice Cream" (401 Defiance St, Howe) was listed here
// until sources conflicted — Yelp flags it CLOSED as of April 2026 while the
// auto-generated aggregators still show it open. No independent confirmation
// either way, so it is out rather than risk sending someone to a dark window.
// Re-add it if you can confirm it is trading.
//
// SEASONALITY: most of these are seasonal or keep short shoulder-season hours,
// and small shops change them without notice. The page says to ring ahead. Do
// not add specific opening hours to this file — they will rot and we will be
// the site that sent someone to a dark window.

export type Distance = "near" | "short" | "trip";

export type Shop = {
  name: string;
  town: string;
  county: "LaGrange" | "Steuben" | "Noble" | "Kosciusko";
  address?: string;
  // Confirmed by opening it — see the URL RULE above. `label` is what the link
  // says, so a Facebook page is never dressed up as an official website.
  url?: { href: string; label: string };
  distance: Distance;
  note: string;
  // On the Steuben County Tourism Bureau's official ice cream trail.
  trail?: boolean;
};

// Rough driving buckets from The Farmhouse on Big Long Lake, near Wolcottville.
// Deliberately buckets rather than minute counts — the geography supports
// "close" and "a fair drive", it does not support claiming 23 minutes.
export const DISTANCE_LABELS: Record<Distance, string> = {
  near: "Closest to the house",
  short: "A short drive",
  trip: "Worth the trip",
};

export const SHOPS: Shop[] = [
  // ---- LaGrange County -----------------------------------------------------
  {
    name: "Cowlick's Ice Cream Shoppe",
    town: "Wolcottville",
    county: "LaGrange",
    address: "1405 W 700 S, Wolcottville, IN 46795",
    url: { href: "https://www.facebook.com/p/Cowlicks-Ice-Cream-Shoppe-61559622846128/", label: "Facebook" },
    distance: "near",
    note: "The one you can reach in the time it takes the kids to change out of wet swimsuits. Vernon and Edith Bontrager took over the former Brenda's Ice Cream and reopened it as Cowlick's in spring 2024; it now runs more than 30 hand-dipped flavours alongside soft serve, shakes, floats and sundaes. Rum black cherry is the flavour regulars order. There are subs, wraps and hot pretzels too, which is why it quietly doubles as dinner.",
  },
  {
    name: "Vanilla Bean Creamery",
    town: "Shipshewana",
    county: "LaGrange",
    address: "100 S Van Buren St, Shipshewana, IN 46565",
    url: { href: "https://visitshipshewana.org/venue/vanilla-bean-creamery/", label: "Visit Shipshewana listing" },
    distance: "short",
    note: "At the four-way stop beside the Blue Gate, and the most serious ice cream in the county. A mother-and-daughter operation that started in Elkhart in 2019 and now makes around 30 flavours in small batches from scratch — strawberry brownie cheesecake among them. Order the flight of four mini scoops if you cannot choose.",
  },
  {
    name: "Mom's Ice Cream",
    town: "Shipshewana",
    county: "LaGrange",
    address: "655 S Van Buren St, Shipshewana, IN 46565",
    url: { href: "https://momsicecream.com/", label: "momsicecream.com" },
    distance: "short",
    note: "A stand near the Michiana Event Center and the flea market grounds, scooping Velvet ice cream plus soft serve, shakes and arctics. Exactly what you want at the end of a Tuesday spent walking the market.",
  },
  {
    name: "Wana Cup Restaurant",
    town: "Shipshewana",
    county: "LaGrange",
    address: "295 N Van Buren St, Shipshewana, IN 46565",
    url: { href: "https://www.facebook.com/wanacuprestaurant/", label: "Facebook" },
    distance: "short",
    note: "A proper small-town diner where the move is a soft-serve cone and a glass of the homemade Amish root beer they keep on tap. Get both and make it a float.",
  },
  {
    name: "Blue Gate Garden Inn",
    town: "Shipshewana",
    county: "LaGrange",
    address: "800 S Van Buren St, Shipshewana, IN 46565",
    url: { href: "https://www.bluegategardeninn.com/", label: "bluegategardeninn.com" },
    distance: "short",
    note: "There is a vintage soda fountain in the lobby turning out floats, shakes and malts. You do not have to be staying there, and on a wet afternoon in Shipshewana it is the best room in town.",
  },
  {
    name: "Shawna Rae's Treats & Eats",
    town: "Shipshewana",
    county: "LaGrange",
    address: "125 N Harrison St, Shipshewana, IN 46565",
    url: { href: "https://www.facebook.com/shawnaraesinshipshewana/", label: "Facebook" },
    distance: "short",
    note: "A bakery that also scoops, which means you can put ice cream next to a cupcake or a slice of cheesecake from the case. Consider that an instruction.",
  },
  {
    name: "Howie's Ice Cream",
    town: "LaGrange",
    county: "LaGrange",
    address: "6580 W US 20, LaGrange, IN 46761",
    url: { href: "https://www.facebook.com/p/Howies-Ice-Cream-Shop-100054318469933/", label: "Facebook" },
    distance: "short",
    note: "A straightforward county-seat cone stop — no reinvention, no queue theatre, just a classic twist handed out a window.",
  },
  {
    name: "Lucy's Vedie Twist",
    town: "LaGrange",
    county: "LaGrange",
    address: "955 S 000 EW, LaGrange, IN 46761",
    url: { href: "https://www.facebook.com/p/Lucys-Vedie-Twist-100063587650200/", label: "Facebook" },
    distance: "short",
    note: "The other LaGrange standby, and the sort of place that has been settling arguments about where to stop for a generation.",
  },
  {
    name: "Tiffany's Restaurant",
    town: "Topeka",
    county: "LaGrange",
    address: "414 E Lake St, Topeka, IN 46571",
    url: { href: "https://www.tiffanystopeka.com/", label: "tiffanystopeka.com" },
    distance: "short",
    note: "Not an ice cream shop — an Amish-country restaurant that does hearty plate dinners and then sends you out with ice cream or a milkshake. Come hungry; the ice cream is the last thing you will need.",
  },

  // ---- Steuben County ------------------------------------------------------
  {
    name: "Scoops Ice Cream",
    town: "Angola",
    county: "Steuben",
    address: "3331 N State Rd 127, Angola, IN 46703",
    url: { href: "https://www.facebook.com/Angola.scoops/", label: "Facebook" },
    distance: "trip",
    trail: true,
    note: "Hard scoop and frozen yoghurt on seven acres north of Angola, sitting right on the Pokagon bike trail — so it works as the turnaround point of a ride as well as a drive. Non-dairy and gluten-free options, which makes it the safe choice for a mixed group.",
  },
  {
    name: "Zesto",
    town: "Angola",
    county: "Steuben",
    address: "2931 N State Rd 127, Angola, IN 46703",
    distance: "trip",
    trail: true,
    note: "Soft serve from a recipe the owners will not part with, served out of a retro roadside building. This is the nostalgia stop — the one that tastes like whatever summer you are trying to give the kids.",
  },
  {
    name: "The Social Ice Cream Co.",
    town: "Angola",
    county: "Steuben",
    address: "2405 N 200 W, Angola, IN 46703",
    url: { href: "https://www.facebook.com/THESOCIAL46703/", label: "Facebook" },
    distance: "trip",
    trail: true,
    note: "The most ambitious flavours in the county — pecan praline on a maple base, and a roster that rotates through the season. Ten minutes from Pokagon and set up for exactly the crowd coming off the water.",
  },
  {
    name: "The Backyard Creamery & Mini Golf",
    town: "Angola",
    county: "Steuben",
    address: "640 W 400 N, Angola, IN 46703",
    url: { href: "https://www.facebook.com/TheBackyardAngola", label: "Facebook" },
    distance: "trip",
    trail: true,
    note: "Hand-dipped ice cream with a mini golf course attached, which resolves the perennial problem of what to do with an evening and four restless children.",
  },
  {
    name: "Capt'n Pete's Dairy Dock",
    town: "Hamilton",
    county: "Steuben",
    address: "7425 S Wayne St, Hamilton, IN 46742",
    url: { href: "https://www.instagram.com/captn_petes_dairy_dock/", label: "Instagram" },
    distance: "trip",
    trail: true,
    note: "A long flavour list and frozen yoghurt on Hamilton Lake, with outdoor games going while you eat. Opening day each spring is a local event in its own right.",
  },
  {
    name: "DJ's Tempting Treats & BBQ",
    town: "Fremont",
    county: "Steuben",
    address: "114 E Toledo St, Fremont, IN 46737",
    url: { href: "https://visitsteubencounty.com/area-restaurants/djs-tempting-treats-bbq/", label: "Steuben County Tourism" },
    distance: "trip",
    trail: true,
    note: "Barbecue and ice cream under one roof — an unusual pairing that turns out to solve the whole evening rather than just the end of it.",
  },
  {
    name: "Sweet Summers",
    town: "Orland",
    county: "Steuben",
    address: "9475 W State Rd 120, Orland, IN 46776",
    url: { href: "https://visitsteubencounty.com/area-restaurants/sweet-summers/", label: "Steuben County Tourism" },
    distance: "trip",
    trail: true,
    note: "Wisconsin's Chocolate Shoppe ice cream in a bakery that also turns out cookies, muffins, scones, cinnamon rolls and carrot cake. The northernmost stop on the trail and the one worth timing a morning around.",
  },
  {
    name: "The Café at Potawatomi Inn",
    town: "Pokagon State Park",
    county: "Steuben",
    address: "6 Lane 100A Lake James, Angola, IN 46703",
    url: { href: "https://visitsteubencounty.com/area-restaurants/potawatomi-inn-historic-dining-room/", label: "Steuben County Tourism" },
    distance: "trip",
    trail: true,
    note: "Hand-dipped ice cream inside the state park itself, alongside made-to-order sandwiches and house pizzas. The one you can walk to from the beach without moving the car.",
  },

  // ---- Noble County --------------------------------------------------------
  {
    name: "Lickity Splitz Ice Cream & Coffee",
    town: "Rome City",
    county: "Noble",
    address: "3204 E CR 900 N, Rome City, IN 46784",
    url: { href: "https://lickitysplitz.square.site/", label: "lickitysplitz.square.site" },
    distance: "near",
    note: "The newest of the close ones — the Speicher family opened it in June 2025, in memory of Malissa's father, whose idea it originally was. Premium ice cream and seasonal flavours with dairy from Kuehnert Dairy Farm, plus specialty coffee, dirty sodas and mini doughnuts, walk-up or drive-through. Minutes from Sylvan Lake.",
  },
  {
    name: "Cowabunga Creamery",
    town: "Albion",
    county: "Noble",
    address: "118 E Main St, Albion, IN 46701",
    url: { href: "https://cowabungacreamery.square.site/", label: "cowabungacreamery.square.site" },
    distance: "short",
    note: "On Albion's main street under new ownership since 2023, rotating through Glacier and High Point Creamery flavours with gluten-free and dairy-free available. The natural stop after a day paddling Chain O'Lakes.",
  },
  {
    name: "JR's Dairy Sweet Drive-In",
    town: "Ligonier",
    county: "Noble",
    address: "909 Lincolnway S, Ligonier, IN 46767",
    distance: "short",
    note: "An old-school drive-in doing ice cream alongside burgers and hot dogs. Unpretentious, and the better option when half the car wants dinner and half wants dessert.",
  },

  // ---- Kosciusko County ----------------------------------------------------
  {
    name: "Skoops",
    town: "North Webster",
    county: "Kosciusko",
    address: "114 N Main St, North Webster, IN 46555",
    url: { href: "https://skoopsnw.com/", label: "skoopsnw.com" },
    distance: "short",
    note: "Jamal and Amanda Meerzo's shop in downtown North Webster — twelve flavours of Hudsonville and Ashby's at a time, with rotating specials, soft serve, root beer floats, malts and shakes, plus dairy-free and sugar-free. They also run The River coffee shop in town.",
  },
  {
    name: "Onda Ice Cream Shop",
    town: "North Webster",
    county: "Kosciusko",
    url: { href: "https://www.facebook.com/p/Onda-Ice-Cream-Sweets-More-61574651078348/", label: "Facebook" },
    distance: "short",
    note: "The other North Webster option, a short walk from the first, which means you can reasonably do both and call it research.",
  },
  {
    name: "Social Ice Cream & Sandwich Shop",
    town: "Winona Lake",
    county: "Kosciusko",
    address: "904 Park Ave, Winona Lake, IN 46590",
    url: { href: "https://villageatwinona.com/eat/social/", label: "villageatwinona.com" },
    distance: "trip",
    note: "In the Village at Winona, with over 20 premium hand-dipped flavours, homemade waffle cones, and gourmet salads and sandwiches if you want lunch first. The restored arts village around it is half the reason to make the drive. (No relation to The Social in Angola, despite the name.)",
  },
  {
    name: "Ritter's Frozen Custard",
    town: "Warsaw",
    county: "Kosciusko",
    address: "3845 Lake City Hwy, Warsaw, IN 46580",
    url: { href: "https://www.ritters.com/locations.php", label: "ritters.com" },
    distance: "trip",
    note: "Custard rather than ice cream — denser, richer, served softer — with a flavour of the day that is worth checking before you commit to the vanilla.",
  },
];

// Town coordinates for the map, [latitude, longitude], geocoded once against
// OpenStreetMap Nominatim and committed — nothing is fetched at build or run
// time.
//
// The map pins TOWNS, not individual shops, and that is a deliberate accuracy
// call rather than laziness. Only 10 of the 24 addresses resolve to a real
// address node; the rest are rural grid addresses ("1405 W 700 S") that
// Nominatim either fails on or, worse, matches to the same house number on a
// different road in a different zip — the first pass put Howie's on N 250 W in
// the wrong postcode. Town centroids are the precision we can actually stand
// behind, so each shop's exact address links out to Google Maps instead, which
// resolves the address string properly.
export const TOWN_COORDS: Record<string, [number, number]> = {
  Wolcottville: [41.52588, -85.36665],
  Shipshewana: [41.67283, -85.58026],
  LaGrange: [41.64172, -85.41665],
  Topeka: [41.53944, -85.53945],
  Angola: [41.63487, -84.99928],
  Hamilton: [41.5336, -84.91237],
  Fremont: [41.73088, -84.93274],
  Orland: [41.73061, -85.17164],
  "Pokagon State Park": [41.71032, -85.02081],
  "Rome City": [41.49616, -85.37665],
  Albion: [41.39578, -85.42426],
  Ligonier: [41.46384, -85.58753],
  "North Webster": [41.32563, -85.69787],
  "Winona Lake": [41.22727, -85.82193],
  Warsaw: [41.2381, -85.85305],
};

// The Farmhouse itself, so the map can show what everything is measured from.
export const FARMHOUSE_COORDS: [number, number] = [41.5339, -85.3564];

// Shops grouped by town, ordered by how close the town is to the house, so the
// map legend and the popups read in the same order as the guide.
export const SHOPS_BY_TOWN = Object.entries(TOWN_COORDS)
  .map(([town, coords]) => ({
    town,
    coords,
    shops: SHOPS.filter((s) => s.town === town),
  }))
  .filter((t) => t.shops.length > 0);

// A Google Maps search link for an exact address. Built from the address string
// rather than a place ID, so it cannot point at the wrong business.
export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const TOTAL_SHOPS = SHOPS.length;

// Stops on the Steuben County Tourism Bureau's official ice cream trail.
export const TRAIL_STOPS = SHOPS.filter((s) => s.trail).length;

export const SHOP_COUNTS = {
  LaGrange: SHOPS.filter((s) => s.county === "LaGrange").length,
  Steuben: SHOPS.filter((s) => s.county === "Steuben").length,
  Noble: SHOPS.filter((s) => s.county === "Noble").length,
  Kosciusko: SHOPS.filter((s) => s.county === "Kosciusko").length,
} as const;
