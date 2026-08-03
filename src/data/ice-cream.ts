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
// TWO CORRECTIONS worth keeping, because the wrong version is what search
// results hand you and it will get "fixed" back if this note disappears:
//  - Lickity Splitz is in ROME CITY (Noble County), not Wolcottville. The Visit
//    Shipshewana roundup files it under Wolcottville; the owners, both Fort
//    Wayne TV stations and its own listing all say 3204 E CR 900 N, Rome City.
//  - Cowabunga Creamery is in ALBION (Noble County), not Kendallville.
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
    address: "1405 W 700 S",
    distance: "near",
    note: "The one you can reach in the time it takes the kids to change out of wet swimsuits. Vernon and Edith Bontrager took over the former Brenda's Ice Cream and reopened it as Cowlick's in spring 2024; it now runs more than 30 hand-dipped flavours alongside soft serve, shakes, floats and sundaes. Rum black cherry is the flavour regulars order. There are subs, wraps and hot pretzels too, which is why it quietly doubles as dinner.",
  },
  {
    name: "Vanilla Bean Creamery",
    town: "Shipshewana",
    county: "LaGrange",
    address: "100 S Van Buren St",
    distance: "short",
    note: "At the four-way stop beside the Blue Gate, and the most serious ice cream in the county. A mother-and-daughter operation that started in Elkhart in 2019 and now makes around 30 flavours in small batches from scratch — strawberry brownie cheesecake among them. Order the flight of four mini scoops if you cannot choose.",
  },
  {
    name: "Mom's Ice Cream",
    town: "Shipshewana",
    county: "LaGrange",
    distance: "short",
    note: "A stand near the Michiana Event Center and the flea market grounds, scooping Velvet ice cream plus soft serve, shakes and arctics. Exactly what you want at the end of a Tuesday spent walking the market.",
  },
  {
    name: "Wana Cup Restaurant",
    town: "Shipshewana",
    county: "LaGrange",
    distance: "short",
    note: "A proper small-town diner where the move is a soft-serve cone and a glass of the homemade Amish root beer they keep on tap. Get both and make it a float.",
  },
  {
    name: "Blue Gate Garden Inn",
    town: "Shipshewana",
    county: "LaGrange",
    distance: "short",
    note: "There is a vintage soda fountain in the lobby turning out floats, shakes and malts. You do not have to be staying there, and on a wet afternoon in Shipshewana it is the best room in town.",
  },
  {
    name: "Shawna Rae's",
    town: "Shipshewana",
    county: "LaGrange",
    distance: "short",
    note: "A bakery that also scoops, which means you can put ice cream next to a cupcake or a slice of cheesecake from the case. Consider that an instruction.",
  },
  {
    name: "Howie's Ice Cream",
    town: "LaGrange",
    county: "LaGrange",
    distance: "short",
    note: "A straightforward county-seat cone stop — no reinvention, no queue theatre, just a classic twist handed out a window.",
  },
  {
    name: "Lucy's Vedie Twist",
    town: "LaGrange",
    county: "LaGrange",
    distance: "short",
    note: "The other LaGrange standby, and the sort of place that has been settling arguments about where to stop for a generation.",
  },
  {
    name: "Happiness is Ice Cream",
    town: "Howe",
    county: "LaGrange",
    distance: "short",
    note: "Soft serve and hand-dipped, in a village most people only ever pass through on the way to the Toll Road. Worth pulling off for.",
  },
  {
    name: "Tiffany's Restaurant",
    town: "Topeka",
    county: "LaGrange",
    distance: "short",
    note: "Not an ice cream shop — an Amish-country restaurant that does hearty plate dinners and then sends you out with ice cream or a milkshake. Come hungry; the ice cream is the last thing you will need.",
  },

  // ---- Steuben County ------------------------------------------------------
  {
    name: "Scoops Ice Cream",
    town: "Angola",
    county: "Steuben",
    address: "3331 N State Rd 127",
    distance: "trip",
    trail: true,
    note: "Hard scoop and frozen yoghurt on seven acres north of Angola, sitting right on the Pokagon bike trail — so it works as the turnaround point of a ride as well as a drive. Non-dairy and gluten-free options, which makes it the safe choice for a mixed group.",
  },
  {
    name: "Zesto",
    town: "Angola",
    county: "Steuben",
    address: "2931 N State Road 127",
    distance: "trip",
    trail: true,
    note: "Soft serve from a recipe the owners will not part with, served out of a retro roadside building. This is the nostalgia stop — the one that tastes like whatever summer you are trying to give the kids.",
  },
  {
    name: "The Social Ice Cream Co.",
    town: "Angola",
    county: "Steuben",
    address: "2405 N 200 W",
    distance: "trip",
    trail: true,
    note: "The most ambitious flavours in the county — pecan praline on a maple base, and a roster that rotates through the season. Ten minutes from Pokagon and set up for exactly the crowd coming off the water.",
  },
  {
    name: "The Backyard Creamery & Mini Golf",
    town: "Angola",
    county: "Steuben",
    distance: "trip",
    trail: true,
    note: "Hand-dipped ice cream with a mini golf course attached, which resolves the perennial problem of what to do with an evening and four restless children.",
  },
  {
    name: "Capt'n Pete's Dairy Dock",
    town: "Hamilton",
    county: "Steuben",
    address: "7425 S Wayne St",
    distance: "trip",
    trail: true,
    note: "A long flavour list and frozen yoghurt on Hamilton Lake, with outdoor games going while you eat. Opening day each spring is a local event in its own right.",
  },
  {
    name: "DJ's Tempting Treats & BBQ",
    town: "Fremont",
    county: "Steuben",
    distance: "trip",
    trail: true,
    note: "Barbecue and ice cream under one roof — an unusual pairing that turns out to solve the whole evening rather than just the end of it.",
  },
  {
    name: "Sweet Summers",
    town: "Orland",
    county: "Steuben",
    distance: "trip",
    trail: true,
    note: "Wisconsin's Chocolate Shoppe ice cream in a bakery that also turns out cookies, muffins, scones, cinnamon rolls and carrot cake. The northernmost stop on the trail and the one worth timing a morning around.",
  },
  {
    name: "The Café at Potawatomi Inn",
    town: "Pokagon State Park",
    county: "Steuben",
    distance: "trip",
    trail: true,
    note: "Hand-dipped ice cream inside the state park itself, alongside made-to-order sandwiches and house pizzas. The one you can walk to from the beach without moving the car.",
  },

  // ---- Noble County --------------------------------------------------------
  {
    name: "Lickity Splitz Ice Cream & Coffee",
    town: "Rome City",
    county: "Noble",
    address: "3204 E CR 900 N",
    distance: "near",
    note: "The newest of the close ones — the Speicher family opened it in June 2025, in memory of Malissa's father, whose idea it originally was. Premium ice cream and seasonal flavours with dairy from Kuehnert Dairy Farm, plus specialty coffee, dirty sodas and mini doughnuts, walk-up or drive-through. Minutes from Sylvan Lake.",
  },
  {
    name: "Cowabunga Creamery",
    town: "Albion",
    county: "Noble",
    address: "118 E Main St",
    distance: "short",
    note: "On Albion's main street under new ownership since 2023, rotating through Glacier and High Point Creamery flavours with gluten-free and dairy-free available. The natural stop after a day paddling Chain O'Lakes.",
  },
  {
    name: "JR's Dairy Sweet Drive-In",
    town: "Ligonier",
    county: "Noble",
    address: "909 Lincolnway S",
    distance: "short",
    note: "An old-school drive-in doing ice cream alongside burgers and hot dogs. Unpretentious, and the better option when half the car wants dinner and half wants dessert.",
  },

  // ---- Kosciusko County ----------------------------------------------------
  {
    name: "Skoops",
    town: "North Webster",
    county: "Kosciusko",
    address: "114 N Main St",
    distance: "short",
    note: "Jamal and Amanda Meerzo's shop in downtown North Webster — twelve flavours of Hudsonville and Ashby's at a time, with rotating specials, soft serve, root beer floats, malts and shakes, plus dairy-free and sugar-free. They also run The River coffee shop in town.",
  },
  {
    name: "Onda Ice Cream Shop",
    town: "North Webster",
    county: "Kosciusko",
    distance: "short",
    note: "The other North Webster option, a short walk from the first, which means you can reasonably do both and call it research.",
  },
  {
    name: "Social Ice Cream & Sandwich Shop",
    town: "Winona Lake",
    county: "Kosciusko",
    distance: "trip",
    note: "In the Village at Winona, with over 20 premium hand-dipped flavours, homemade waffle cones, and gourmet salads and sandwiches if you want lunch first. The restored arts village around it is half the reason to make the drive. (No relation to The Social in Angola, despite the name.)",
  },
  {
    name: "Ritter's Frozen Custard",
    town: "Warsaw",
    county: "Kosciusko",
    distance: "trip",
    note: "Custard rather than ice cream — denser, richer, served softer — with a flavour of the day that is worth checking before you commit to the vanilla.",
  },
];

export const TOTAL_SHOPS = SHOPS.length;

// Stops on the Steuben County Tourism Bureau's official ice cream trail.
export const TRAIL_STOPS = SHOPS.filter((s) => s.trail).length;

export const SHOP_COUNTS = {
  LaGrange: SHOPS.filter((s) => s.county === "LaGrange").length,
  Steuben: SHOPS.filter((s) => s.county === "Steuben").length,
  Noble: SHOPS.filter((s) => s.county === "Noble").length,
  Kosciusko: SHOPS.filter((s) => s.county === "Kosciusko").length,
} as const;
