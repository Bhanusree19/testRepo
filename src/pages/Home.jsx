import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon";
import ProductArt from "../components/ProductArt";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const collectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#collection" && collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.material.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="page page--home">
      <header className="home__header">
        <div>
          <p className="home__greeting">Good morning, Amelia</p>
          <h1 className="home__title">Find your quiet.</h1>
        </div>
        <Link to="/account" className="home__avatar" aria-label="Open your account">
          <span>AH</span>
          <i aria-hidden="true" />
        </Link>
      </header>

      <div className="home__search">
        <Icon name="search" size={18} className="home__search-icon" />
        <input
          type="search"
          placeholder="Search chairs, lamps, objects…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search products"
        />
        <button type="button" className="home__filter" aria-label="Filter products">
          <Icon name="filter" size={17} />
        </button>
      </div>

      {query === "" ? (
        <>
          <section className="home__hero" aria-label="Featured collection">
            <div className="home__hero-copy">
              <p className="eyebrow">The autumn edit</p>
              <h2>Slow rooms, warm light.</h2>
              <p>Pieces chosen for the season of staying in.</p>
              <Link to="/product/lune-sofa" className="home__hero-link">
                Shop the edit
                <Icon name="arrow-up-right" size={15} />
              </Link>
            </div>
            <div className="home__hero-art" aria-hidden="true">
              <ProductArt product={products[4]} />
            </div>
          </section>

          <section className="home__promises" aria-label="Service promises">
            <div>
              <Icon name="truck" size={17} />
              <span>Free delivery over $500</span>
            </div>
            <div>
              <Icon name="leaf" size={17} />
              <span>Natural materials</span>
            </div>
          </section>
        </>
      ) : null}

      <section className="home__categories" aria-label="Product categories">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`chip ${activeCategory === category.id ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </section>

      <section className="home__collection" ref={collectionRef} id="collection" aria-label="Product collection">
        <div className="home__section-head">
          <h2>{query ? "Search results" : "Considered pieces"}</h2>
          <span className="home__count">{filtered.length} items</span>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="home__empty">
            <Icon name="search" size={22} />
            <p>No pieces match “{query}”.</p>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => {
                setQuery("");
                setActiveCategory("all");
              }}
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      <section className="home__journal">
        <div className="home__journal-art" aria-hidden="true">
          <ProductArt product={products[2]} />
        </div>
        <div>
          <p className="eyebrow">Journal · 4 min read</p>
          <h3>On making room for less.</h3>
          <p>A short guide to editing a home without losing its warmth.</p>
          <Link to="/product/terra-vase" className="home__journal-link">
            Read the story
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
