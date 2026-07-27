// Lake data for the Northern Indiana Lakes guide.
//
// SOURCING RULE: every acreage, depth and fishery claim below is taken from a
// named public source. Do not add a figure here without one. Sources:
//
//  - IDNR "15 best Indiana panfishing lakes"
//    in.gov/dnr/fish-and-wildlife/files/fw-15_best_panfish_lakes.pdf
//  - Lilly Center for Lakes & Streams, Grace College — lakes.grace.edu
//    (Kosciusko County lakes; acreage, max/avg depth, watershed, species)
//  - IDNR Division of Nature Preserves, Olin Lake Nature Preserve
//    in.gov/dnr/nature-preserves/files/Olin_Lake-color.pdf
//  - Natural Resources Commission Information Bulletin #61, "Listing of Public
//    Freshwater Lakes" — in.gov/nrc/files/IB-61.pdf (which lakes are public)
//  - IDNR State Wildlife Action Plan, Natural Lakes Habitat Summary
//    in.gov/dnr/fish-and-wildlife/files/SWAPHabitatSummary_NaturalLakes.pdf

export type Lake = {
  name: string;
  county: "LaGrange" | "Steuben" | "Noble" | "Kosciusko";
  acres?: number;
  maxDepthFt?: number;
  note: string;
  dnrPanfish?: boolean;
};

// Counts of public freshwater lakes per county, tallied from the Natural
// Resources Commission's official listing (IB-61). These are lakes the public
// has a legal right to use — not every pond that shows up on a map.
export const PUBLIC_LAKE_COUNTS = {
  Steuben: 76,
  Kosciusko: 64,
  LaGrange: 52,
  Noble: 47,
} as const;

export const TOTAL_PUBLIC_LAKES = Object.values(PUBLIC_LAKE_COUNTS).reduce(
  (a, b) => a + b,
  0,
); // 239

export const LAKES: Lake[] = [
  // ---- LaGrange County -----------------------------------------------------
  {
    name: "Big Long Lake",
    county: "LaGrange",
    acres: 365,
    dnrPanfish: true,
    note: "An all-sports lake and one of the DNR's 15 best panfishing lakes in the state. The DNR notes it has \"some of the best bluegill fishing in Northeastern Indiana,\" with bluegill averaging 8 inches and some over 10. Big enough to ski and tube, small enough to paddle the shoreline in a morning.",
  },
  {
    name: "Oliver Lake",
    county: "LaGrange",
    acres: 391,
    note: "Part of the Oliver–Olin–Martin chain, connected by shallow channels you can paddle between. Deep, clear and popular with anglers who want water that doesn't get chopped up on a summer Saturday.",
  },
  {
    name: "Olin Lake",
    county: "LaGrange",
    acres: 103,
    note: "The most unusual lake in the region: at just over 100 acres, the DNR calls it \"the largest lake in Indiana with an undeveloped shoreline.\" The entire shore is protected inside the 269-acre Olin Lake Nature Preserve. Reachable only on foot — the trailhead is two miles north of Wolcottville off SR 9.",
  },
  {
    name: "Witmer Lake",
    county: "LaGrange",
    acres: 204,
    note: "Part of the Indian Lakes chain with Dallas, Messick and Westler. Quiet water, cottage-lined shores, and a reliable bluegill and bass fishery.",
  },
  {
    name: "Shipshewana Lake",
    county: "LaGrange",
    acres: 200,
    dnrPanfish: true,
    note: "Also on the DNR's 15-best panfishing list. Shallow and productive — the DNR describes bluegill fishing as \"very good\" year after year, with quality crappie and largemouth bass alongside. Minutes from the Shipshewana flea market and auction.",
  },
  {
    name: "Adams Lake",
    county: "LaGrange",
    note: "A public lake on the north edge of Wolcottville with a DNR access site — the closest launch to town for a quick evening paddle.",
  },

  // ---- Steuben County ------------------------------------------------------
  {
    name: "Lake James",
    county: "Steuben",
    acres: 1034,
    note: "The centrepiece of Steuben County's lake country and the water Pokagon State Park sits on. Three connected basins, deep clear water, and the busiest boating scene in the region.",
  },
  {
    name: "Clear Lake",
    county: "Steuben",
    acres: 800,
    dnrPanfish: true,
    note: "In the far northeast corner, almost on the Michigan line. The DNR calls it \"a quality bluegill fishery, not quantity\" — harvested bluegill average 8.5 inches, with fish up to 10.5 inches recorded.",
  },
  {
    name: "Crooked Lake",
    county: "Steuben",
    note: "A deep, clear, spring-fed lake with a devoted following. One of several in the county with water clarity that surprises first-time visitors.",
  },
  {
    name: "Jimmerson Lake",
    county: "Steuben",
    note: "Connected to the Lake James chain, quieter than James itself, and a good place to fish or paddle when the main lake is busy.",
  },
  {
    name: "Hamilton Lake",
    county: "Steuben",
    note: "In the southeast corner of the county, an all-sports lake with a small public beach and a summer community that has been coming for generations.",
  },

  // ---- Noble County --------------------------------------------------------
  {
    name: "Sylvan Lake",
    county: "Noble",
    acres: 669,
    dnrPanfish: true,
    note: "A man-made reservoir at Rome City and another of the DNR's 15 best panfishing lakes — best known for bluegill, \"with some reaching 9 inches.\" About a third of the adult bluegill population runs 7 inches or larger.",
  },
  {
    name: "Skinner Lake",
    county: "Noble",
    acres: 125,
    dnrPanfish: true,
    note: "A natural lake near Albion, on the DNR's 15-best list for crappie rather than bluegill. Most run 8 to 9 inches, with some reaching 16. Best fishing is in May over the developing lily pads.",
  },
  {
    name: "Chain O'Lakes State Park",
    county: "Noble",
    note: "Not one lake but thirteen, nine of them connected, inside a 2,718-acre state park near Albion. Electric motors only, which is exactly the point — it is the best flatwater paddling in northeast Indiana, and you can cross most of the chain in a day.",
  },
  {
    name: "Bixler Lake",
    county: "Noble",
    note: "A town lake at Kendallville with a public beach, walking trail and campground — the easy option with kids in tow.",
  },

  // ---- Kosciusko County ----------------------------------------------------
  {
    name: "Lake Wawasee",
    county: "Kosciusko",
    acres: 3006,
    maxDepthFt: 81,
    note: "Indiana's largest natural lake, at 3,006 acres with a 24,448-acre watershed. Big water by Indiana standards — sailboats, ski boats, a proper channel system and a summer scene at Syracuse to match.",
  },
  {
    name: "Lake Tippecanoe",
    county: "Kosciusko",
    acres: 786,
    maxDepthFt: 122,
    note: "The deepest natural lake in Indiana, bottoming out at 122 feet with an average depth of 37. Cold, clear, and the reason the region holds fish species that struggle in shallower water.",
  },
  {
    name: "Syracuse Lake",
    county: "Kosciusko",
    acres: 411,
    note: "Connected to Wawasee by a channel, and a calmer alternative to its famous neighbour. You can boat between the two.",
  },
  {
    name: "Webster Lake",
    county: "Kosciusko",
    acres: 653,
    note: "An all-sports lake at North Webster with a public beach and a long-running summer town scene.",
  },
  {
    name: "Winona Lake",
    county: "Kosciusko",
    acres: 571,
    note: "As much a destination as a lake — the village beside it has a restored arts district, trails and a canal. Frequently named among Indiana's prettiest lakes.",
  },
  {
    name: "Barbee Chain",
    county: "Kosciusko",
    note: "Seven connected lakes — Big and Little Barbee, Irish, Kuhn, Sawmill, Sechrist and Banning — that you can travel end to end by boat. A whole day's exploring without a trailer.",
  },
];
