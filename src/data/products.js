export const products = [
  {
    id: "arc-lounge-chair",
    name: "Arc Lounge Chair",
    price: 680,
    category: "Seating",
    art: "chair",
    tint: "#e6dace",
    palette: ["#b0553a", "#3d3a33"],
    tag: "Bestseller",
    rating: 4.9,
    reviews: 128,
    material: "Oak & bouclé",
    blurb:
      "A low, generous seat wrapped in cloud-soft bouclé. The sculpted oak frame is finished by hand, so no two are quite the same.",
    colors: ["Oat", "Clay", "Stone"],
    sizes: ["Low", "Standard"],
    dimensions: "W 82 · D 86 · H 71 cm",
  },
  {
    id: "halo-floor-lamp",
    name: "Halo Floor Lamp",
    price: 245,
    category: "Lighting",
    art: "lamp",
    tint: "#efe6d6",
    palette: ["#8d6a3f", "#3d3a33"],
    tag: "New",
    rating: 4.7,
    reviews: 64,
    material: "Brushed brass",
    blurb:
      "An slim arch of brushed brass carries a linen shade that pools warm light exactly where you need it. Dimmable, quietly dramatic.",
    colors: ["Brass", "Black"],
    sizes: ["One size"],
    dimensions: "W 46 · D 120 · H 168 cm",
  },
  {
    id: "terra-vase",
    name: "Terra Vase",
    price: 96,
    category: "Objects",
    art: "vase",
    tint: "#e9ded1",
    palette: ["#a9603f", "#5f6b4f"],
    tag: "Handmade",
    rating: 4.8,
    reviews: 41,
    material: "Stoneware",
    blurb:
      "Thrown and glazed by a small studio in Portugal, each vase carries the faint irregularity of a hand at work. Watertight and food safe.",
    colors: ["Rust", "Moss", "Chalk"],
    sizes: ["Small", "Large"],
    dimensions: "Ø 16 · H 28 cm",
  },
  {
    id: "pillar-side-table",
    name: "Pillar Side Table",
    price: 310,
    category: "Tables",
    art: "table",
    tint: "#e4e7dc",
    palette: ["#5f6b4f", "#3d3a33"],
    tag: "",
    rating: 4.6,
    reviews: 32,
    material: "Travertine",
    blurb:
      "A solid travertine column topped with a softly honed disc. Heavy, grounded and beautiful from every angle — even when it's empty.",
    colors: ["Natural", "Sand"],
    sizes: ["One size"],
    dimensions: "Ø 42 · H 48 cm",
  },
  {
    id: "lune-sofa",
    name: "Lune Three-Seater",
    price: 1840,
    category: "Seating",
    art: "sofa",
    tint: "#e7e0d5",
    palette: ["#b9a98d", "#3d3a33"],
    tag: "Made toorder",
    rating: 4.9,
    reviews: 87,
    material: "Linen & beech",
    blurb:
      "Deep, feather-topped cushions on a low beech base. Built for long afternoons and longer conversations. Slipcovers are washable.",
    colors: ["Flax", "Fog", "Olive"],
    sizes: ["Two-seater", "Three-seater"],
    dimensions: "W 224 · D 96 · H 74 cm",
  },
  {
    id: "atrium-shelf",
    name: "Atrium Wall Shelf",
    price: 420,
    category: "Storage",
    art: "shelf",
    tint: "#ece3d4",
    palette: ["#8c6b4c", "#5f6b4f"],
    tag: "",
    rating: 4.5,
    reviews: 26,
    material: "Ash & brass",
    blurb:
      "A quiet arch of ash wood with two brass rails for the objects you love to look at. Wall-mounted with concealed hardware.",
    colors: ["Ash", "Walnut"],
    sizes: ["90 cm", "120 cm"],
    dimensions: "W 90 · D 22 · H 42 cm",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "Seating", label: "Seating" },
  { id: "Lighting", label: "Lighting" },
  { id: "Tables", label: "Tables" },
  { id: "Objects", label: "Objects" },
  { id: "Storage", label: "Storage" },
];

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

export function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
