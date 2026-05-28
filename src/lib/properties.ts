import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import interior1 from "@/assets/interior-1.jpg";
import construction1 from "@/assets/construction-1.jpg";

export type Property = {
  id: string;
  name: string;
  tagline: string;
  location: string;
  price: string;
  size: string;
  type: "Villa" | "Plot" | "Bungalow";
  status: "Ready" | "Under Construction" | "New Launch";
  approval: string;
  image: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
  description: string;
  lat: number;
  lng: number;
};

export const PROPERTIES: Property[] = [
  {
    id: "azure-heights",
    name: "Azure Heights",
    tagline: "Sky-touched living above the city line",
    location: "Chettipalayam Road, Coimbatore",
    price: "₹ 4.8 Cr",
    size: "4800 sq.ft",
    type: "Villa",
    status: "Ready",
    approval: "RERA · DTCP",
    image: property1,
    gallery: [property1, interior1, property3],
    amenities: ["Infinity Pool", "Private Elevator", "Smart Home", "Wine Cellar", "Home Theatre", "Sky Deck"],
    highlights: ["5 BHK Sea-view Villa", "Private Garden", "EV Charging", "Italian Marble"],
    description:
      "A masterwork of modern villa architecture. Designed by TGP builders, Azure Heights is a sanctuary of comfort and prestige.",
    lat: 10.915, lng: 77.015,
  },
  {
    id: "vasanth-greens",
    name: "Vasanth Greens",
    tagline: "Curated plots within a gated green sanctuary",
    location: "Malumichampatti, Coimbatore",
    price: "₹ 38 L onwards",
    size: "1200 – 2400 sq.ft",
    type: "Plot",
    status: "New Launch",
    approval: "DTCP Approved",
    image: property2,
    gallery: [property2, property1, construction1],
    amenities: ["Clubhouse", "Tennis Court", "Tree-lined Avenues", "24/7 Security", "Solar Lighting", "Rainwater Harvest"],
    highlights: ["120 Premium Plots", "60% Open Space", "Wide 30ft Roads", "Underground Cabling"],
    description:
      "An invitation-only residential community of 120 premium plots, framed by manicured greens and resort-grade amenities — perfectly positioned along the Malumichampatti growth corridor.",
    lat: 10.908, lng: 77.009,
  },
  {
    id: "lumiere-villas",
    name: "Lumière Villas",
    tagline: "Cinematic bungalows by the still water",
    location: "Pollachi Road, Coimbatore",
    price: "₹ 6.2 Cr",
    size: "6200 sq.ft",
    type: "Bungalow",
    status: "Under Construction",
    approval: "RERA · DTCP",
    image: property3,
    gallery: [property3, interior1, property1],
    amenities: ["Infinity Pool", "Private Jetty", "Spa Pavilion", "Outdoor Kitchen", "Library", "Yoga Deck"],
    highlights: ["Backwater Frontage", "3-side Open", "Architect-designed", "Bespoke Interiors"],
    description:
      "Twelve cinematic bungalows situated in Coimbatore's premium corridor, where the horizon dissolves into sunset every evening — a private theatre of light, air, and silence.",
    lat: 10.902, lng: 77.011,
  },
  {
    id: "tgp-icon",
    name: "TGP Icon",
    tagline: "A vertical landmark for the new elite",
    location: "Avinashi Road, Coimbatore",
    price: "₹ 3.4 Cr",
    size: "3200 sq.ft",
    type: "Villa",
    status: "Ready",
    approval: "RERA Certified",
    image: interior1,
    gallery: [interior1, property1, property3],
    amenities: ["Sky Lounge", "Concierge", "Valet", "Co-working", "Fitness Club", "Pet Park"],
    highlights: ["4 BHK Skyhomes", "City Skyline View", "Smart Glass", "Designer Lobby"],
    description:
      "A vertical landmark addressing those who measure a home not in square feet, but in standing.",
    lat: 11.024, lng: 77.012,
  },
  {
    id: "ananta-grove",
    name: "Ananta Grove",
    tagline: "Eternal calm wrapped in fifty acres of green",
    location: "Saravanampatti, Coimbatore",
    price: "₹ 52 L onwards",
    size: "1500 – 3000 sq.ft",
    type: "Plot",
    status: "Under Construction",
    approval: "DTCP Approved",
    image: construction1,
    gallery: [construction1, property2, property1],
    amenities: ["Forest Trails", "Yoga Pavilion", "Organic Farm", "Avenue Plantation", "Lake Park", "Wellness Centre"],
    highlights: ["50 Acre Township", "300+ Trees", "Lake Frontage Plots", "Architect Tie-ups"],
    description:
      "Fifty acres of carefully preserved green, threaded with avenues and lakes — a township for those who choose calm.",
    lat: 11.079, lng: 77.003,
  },
  {
    id: "celeste-row",
    name: "Celeste Row",
    tagline: "A row of poetry in concrete and glass",
    location: "Race Course, Coimbatore",
    price: "₹ 5.6 Cr",
    size: "5400 sq.ft",
    type: "Bungalow",
    status: "New Launch",
    approval: "RERA · DTCP",
    image: property1,
    gallery: [property1, interior1, property3],
    amenities: ["Rooftop Pool", "Private Garden", "Home Automation", "Cinema Room", "Wine Cellar", "Maid Quarters"],
    highlights: ["Limited 8 Units", "Architect Designed", "Custom Interiors", "5 Yr Service"],
    description:
      "Eight homes, each a poem. Celeste Row redefines what a bungalow can be in the heart of Coimbatore.",
    lat: 10.999, lng: 76.974,
  },
];

export function getProperty(id: string) {
  return PROPERTIES.find((p) => p.id === id);
}
