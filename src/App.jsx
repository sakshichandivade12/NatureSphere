
import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Earth,
  Flower2,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
  Wind,
  X,
} from "lucide-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import DestinationDetails from "./pages/DestinationDetails";

const destinations = [
  {
    id: 1,
    slug: "silent-forest",
    name: "The Silent Forest",
    location: "Western Ghats, India",
    category: "Forests",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
    description:
      "Follow winding trails through ancient trees, quiet canopies and a world alive with birdsong.",
    duration: "2–3 days",
    difficulty: "Easy",
    bestTime: "Oct – Feb",
    number: "01",
  },
  {
    id: 2,
    slug: "above-the-clouds",
    name: "Above the Clouds",
    location: "Himalayas, India",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    description:
      "Discover dramatic mountain ridges, alpine meadows and unforgettable sunrise views.",
    duration: "4–6 days",
    difficulty: "Moderate",
    bestTime: "Apr – Jun",
    number: "02",
  },
  {
    id: 3,
    slug: "hidden-falls",
    name: "The Hidden Falls",
    location: "Meghalaya, India",
    category: "Waterfalls",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=85",
    description:
      "Find cascading water, moss-covered rocks and secluded trails beneath a green canopy.",
    duration: "1–2 days",
    difficulty: "Easy",
    bestTime: "Oct – Apr",
    number: "03",
  },
  {
    id: 4,
    slug: "land-meets-sea",
    name: "Where Land Meets Sea",
    location: "Konkan Coast, India",
    category: "Oceans",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85",
    description:
      "Explore peaceful shorelines, tidal pools and the extraordinary rhythm of the ocean.",
    duration: "2–3 days",
    difficulty: "Easy",
    bestTime: "Nov – Mar",
    number: "04",
  },
  {
    id: 5,
    slug: "into-the-wild",
    name: "Into the Wild",
    location: "Central India",
    category: "Wildlife",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
    description:
      "Learn about wild habitats, native species and the importance of protecting biodiversity.",
    duration: "2–4 days",
    difficulty: "Guided",
    bestTime: "Nov – Apr",
    number: "05",
  },
  {
    id: 6,
    slug: "emerald-valley",
    name: "The Emerald Valley",
    location: "Coorg, Karnataka",
    category: "Forests",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=85",
    description:
      "Breathe in the forest air and wander through a landscape shaped by rain and time.",
    duration: "2 days",
    difficulty: "Easy",
    bestTime: "Oct – Mar",
    number: "06",
  },
];

const categories = [
  "All",
  "Forests",
  "Mountains",
  "Waterfalls",
  "Oceans",
  "Wildlife",
];

const guides = [
  {
    number: "01",
    category: "FIELD GUIDE",
    title: "Read the forest like a story",
    description:
      "Learn to notice tree patterns, animal tracks, birdsong and the small signs of a thriving ecosystem.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    icon: Trees,
  },
  {
    number: "02",
    category: "NATURE NOTES",
    title: "A beginner’s guide to biodiversity",
    description:
      "Discover how plants, animals, fungi and microorganisms work together to support life.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
    icon: Flower2,
  },
  {
    number: "03",
    category: "TRAVEL RESPONSIBLY",
    title: "Leave only footprints",
    description:
      "Simple, practical ways to explore wild places thoughtfully and reduce your impact.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
    icon: ShieldCheck,
  },
];

const tips = [
  {
    icon: Leaf,
    title: "Stay on marked trails",
    text: "Protect fragile plants and give wildlife the space it needs.",
  },
  {
    icon: Wind,
    title: "Take nothing but memories",
    text: "Leave natural objects where they belong and carry out your waste.",
  },
  {
    icon: Waves,
    title: "Respect every habitat",
    text: "Keep waterways clean and observe animals from a safe distance.",
  },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <div className={`section-eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const filteredDestinations = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesCategory =
        activeCategory === "All" ||
        destination.category === activeCategory;

      const matchesSearch =
        !search ||
        [
          destination.name,
          destination.location,
          destination.category,
          destination.description,
        ].some((value) => value.toLowerCase().includes(search));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  function openDestination(destination) {
    navigate(`/destinations/${destination.slug}`);
    setMobileMenuOpen(false);
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterMessage(
      "Thank you! Your email has been validated. Connect a mailing service to enable subscriptions."
    );
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        A little closer to nature, a little kinder to the planet.
        <a href="#our-mission">
          Discover our mission <ArrowUpRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="NatureSphere home"
          onClick={closeMobileMenu}
        >
          <span className="brand-mark">
            <Leaf size={23} strokeWidth={1.7} />
          </span>
          <span className="brand-copy">
            <span className="brand-name">NatureSphere</span>
            <span className="brand-tagline">
              EXPLORE · UNDERSTAND · PROTECT
            </span>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          <a href="#destinations" onClick={closeMobileMenu}>
            Destinations
          </a>
          <a href="#journal" onClick={closeMobileMenu}>
            Field Journal
          </a>
          <a href="#our-mission" onClick={closeMobileMenu}>
            Our Mission
          </a>
          <a href="#travel-well" onClick={closeMobileMenu}>
            Travel Well
          </a>
          <a
            href="#destinations"
            className="nav-cta"
            onClick={closeMobileMenu}
          >
            Find your escape <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-background" />
          <div className="hero-shade" />

          <div className="hero-content">
            <div className="hero-kicker">
              <span className="hero-kicker-line" />
              A WORLD WORTH WANDERING
            </div>

            <h1>
              Find your
              <br />
              <em>wild.</em>
            </h1>

            <p className="hero-description">
              A thoughtful guide to the extraordinary places, living
              ecosystems and little moments that reconnect us with the
              natural world.
            </p>

            <div className="hero-actions">
              <a className="button button-light" href="#destinations">
                Explore destinations <ArrowRight size={17} />
              </a>
              <a className="hero-text-link" href="#our-mission">
                Why nature matters <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="hero-bottom-note">
              <span className="hero-note-icon">
                <Compass size={17} />
              </span>
              <span>
                <strong>YOUR NEXT GREAT OUTDOOR STORY</strong>
                <small>Starts just beyond the familiar.</small>
              </span>
            </div>
          </div>

          <aside className="hero-feature-card">
            <div className="feature-card-heading">
              <span className="feature-card-icon">
                <Sparkles size={16} />
              </span>
              <span>THE FIELD EDIT</span>
              <ArrowUpRight size={16} />
            </div>

            <div className="feature-card-image">
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=650&q=85"
                alt="Sunlight filtering through a green forest"
              />
              <span className="image-location-tag">
                <Leaf size={12} /> WESTERN GHATS
              </span>
            </div>

            <p className="feature-card-eyebrow">A MOMENT IN THE WILD</p>
            <h2>Slow down. Look closer.</h2>
            <p className="feature-card-description">
              The most extraordinary things are often the quietest.
            </p>
            <a href="#journal" className="feature-card-link">
              Read the field notes <ArrowRight size={15} />
            </a>
          </aside>

          <a href="#destinations" className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </a>

          <div className="hero-index">01 / 04</div>
        </section>

        <section className="trust-strip" aria-label="Our approach">
          <div className="trust-item">
            <Trees size={23} strokeWidth={1.5} />
            <div>
              <strong>Explore thoughtfully</strong>
              <span>Travel with intention</span>
            </div>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <Earth size={23} strokeWidth={1.5} />
            <div>
              <strong>Learn continuously</strong>
              <span>Understand the living world</span>
            </div>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <ShieldCheck size={23} strokeWidth={1.5} />
            <div>
              <strong>Protect what matters</strong>
              <span>Make better choices outdoors</span>
            </div>
          </div>
          <div className="trust-side-note">ROOTED IN CURIOSITY</div>
        </section>

        <section className="intro-section section-padding" id="our-mission">
          <div className="intro-left">
            <SectionEyebrow>MORE THAN A DESTINATION</SectionEyebrow>
            <h2>
              The world is full
              <br />
              of <em>wonder.</em>
            </h2>
          </div>

          <div className="intro-right">
            <p>
              Nature is not somewhere we simply visit. It is the world we
              belong to. NatureSphere brings together inspiring destinations,
              practical field guides and thoughtful ways to care for the
              places that make life possible.
            </p>
            <a className="text-link" href="#journal">
              Get to know NatureSphere <ArrowRight size={16} />
            </a>
          </div>

          <div className="intro-stat">
            <span className="intro-stat-number">01</span>
            <span>Curiosity is where conservation begins.</span>
          </div>
        </section>

        <section
          className="destinations-section section-padding"
          id="destinations"
        >
          <div className="section-heading-row">
            <div>
              <SectionEyebrow>GO WHERE YOU FEEL ALIVE</SectionEyebrow>
              <h2 className="section-title">
                Find your next
                <br />
                <em>somewhere.</em>
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                From misty mountain trails to the quiet edge of the sea,
                discover landscapes that invite you to slow down.
              </p>
              <span className="destination-count">
                {String(filteredDestinations.length).padStart(2, "0")} PLACES
                TO EXPLORE
              </span>
            </div>
          </div>

          <div className="destination-tools">
            <div className="category-tabs" aria-label="Filter destinations">
              {categories.map((category) => (
                <button
                  className={`category-tab ${
                    activeCategory === category ? "active" : ""
                  }`}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="destination-search">
              <Search size={17} />
              <input
                type="search"
                placeholder="Search places..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search destinations"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </label>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="destination-grid">
              {filteredDestinations.map((destination) => (
                <article className="destination-card" key={destination.id}>
                  <button
                    className="destination-image-button"
                    onClick={() => openDestination(destination)}
                    aria-label={`View details for ${destination.name}`}
                  >
                    <img
                      className="destination-image"
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                    />
                    <span className="destination-number">
                      {destination.number}
                    </span>
                    <span className="destination-image-category">
                      {destination.category}
                    </span>
                    <span className="destination-open-icon">
                      <ArrowUpRight size={20} />
                    </span>
                  </button>

                  <div className="destination-card-body">
                    <p className="destination-location">
                      <Compass size={13} />
                      {destination.location}
                    </p>
                    <button
                      className="destination-title-button"
                      onClick={() => openDestination(destination)}
                    >
                      <h3>{destination.name}</h3>
                      <ArrowUpRight size={17} />
                    </button>
                    <p className="destination-description">
                      {destination.description}
                    </p>
                    <div className="destination-card-footer">
                      <span>{destination.duration}</span>
                      <span className="destination-footer-dot" />
                      <span>{destination.difficulty}</span>
                      <button
                        onClick={() => openDestination(destination)}
                        aria-label={`Read about ${destination.name}`}
                      >
                        Explore <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>No places found</h3>
              <p>Try a different search or choose another landscape.</p>
              <button
                className="button button-dark"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                Clear filters <ArrowRight size={16} />
              </button>
            </div>
          )}

          <div className="destinations-bottom">
            <span>THE OUTDOORS IS CALLING.</span>
            <a href="#travel-well">
              Explore responsibly <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="mission-banner">
          <div className="mission-image" />
          <div className="mission-overlay" />
          <div className="mission-content">
            <SectionEyebrow light>OUR REASON FOR BEING</SectionEyebrow>
            <h2>
              Fall in love
              <br />
              with the world.
              <br />
              <em>Help protect it.</em>
            </h2>
            <p>
              Every trail teaches us something. Every ecosystem has a story.
              And every thoughtful choice can help keep those stories alive.
            </p>
            <a className="button button-light" href="#travel-well">
              Our conservation promise <ArrowRight size={17} />
            </a>
          </div>
          <div className="mission-side-label">
            A BETTER WAY TO EXPLORE · EST. WITH PURPOSE
          </div>
        </section>

        <section className="journal-section section-padding" id="journal">
          <div className="section-heading-row">
            <div>
              <SectionEyebrow>KNOW THE WORLD A LITTLE BETTER</SectionEyebrow>
              <h2 className="section-title">
                Notes from
                <br />
                <em>the natural world.</em>
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                Useful knowledge for curious minds, first-time explorers and
                anyone who wants to live a little closer to nature.
              </p>
              <span className="destination-count">THE NATURE JOURNAL</span>
            </div>
          </div>

          <div className="journal-grid">
            {guides.map((guide) => {
              const GuideIcon = guide.icon;

              return (
                <article className="journal-card" key={guide.number}>
                  <a
                    className="journal-image-link"
                    href="#travel-well"
                    aria-label={`Read ${guide.title}`}
                  >
                    <img src={guide.image} alt="" loading="lazy" />
                    <span className="journal-image-icon">
                      <GuideIcon size={20} />
                    </span>
                    <span className="journal-number">{guide.number}</span>
                  </a>
                  <div className="journal-card-content">
                    <span className="journal-category">{guide.category}</span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <a href="#travel-well" className="journal-read-link">
                      Explore the guide <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="travel-section section-padding" id="travel-well">
          <div className="travel-intro">
            <SectionEyebrow>SMALL ACTIONS. REAL DIFFERENCE.</SectionEyebrow>
            <h2>
              Be a guest
              <br />
              <em>of the wild.</em>
            </h2>
            <p>
              The best explorers leave a place just as beautiful as they
              found it. Make these simple habits part of every adventure.
            </p>
            <a className="text-link" href="#newsletter">
              Keep learning with us <ArrowRight size={16} />
            </a>
          </div>

          <div className="travel-tips">
            {tips.map((tip, index) => {
              const TipIcon = tip.icon;

              return (
                <article className="travel-tip" key={tip.title}>
                  <div className="travel-tip-number">0{index + 1}</div>
                  <div className="travel-tip-icon">
                    <TipIcon size={22} strokeWidth={1.6} />
                  </div>
                  <div className="travel-tip-copy">
                    <h3>{tip.title}</h3>
                    <p>{tip.text}</p>
                  </div>
                  <Check className="travel-tip-check" size={19} />
                </article>
              );
            })}
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="newsletter-decoration">
            <Leaf size={100} strokeWidth={0.65} />
          </div>
          <div className="newsletter-content">
            <SectionEyebrow light>A LETTER FROM THE OUTDOORS</SectionEyebrow>
            <h2>
              A little more
              <br />
              <em>wonder in your inbox.</em>
            </h2>
            <p>
              Field notes, nature stories and thoughtful inspiration for
              your next outdoor escape. No noise, just nature.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(event) => {
                  setNewsletterEmail(event.target.value);
                  setNewsletterMessage("");
                }}
                required
              />
              <button type="submit">
                Join the journal <ArrowRight size={16} />
              </button>
            </form>

            {newsletterMessage && (
              <p className="newsletter-message" role="status">
                {newsletterMessage}
              </p>
            )}
            <span className="newsletter-privacy">
              A thoughtful note, now and then. Unsubscribe anytime.
            </span>
          </div>
          <div className="newsletter-side-note">
            MADE FOR THE CURIOUS · GROUNDED IN NATURE
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">
                <Leaf size={23} strokeWidth={1.7} />
              </span>
              <span className="brand-copy">
                <span className="brand-name">NatureSphere</span>
                <span className="brand-tagline">
                  EXPLORE · UNDERSTAND · PROTECT
                </span>
              </span>
            </a>
            <p>
              A space for curious minds, open trails and a deeper connection
              with the living world.
            </p>
            <a className="footer-back-top" href="#home">
              Back to the beginning <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="footer-links-column">
            <span className="footer-heading">DISCOVER</span>
            <a href="#destinations">Destinations</a>
            <a href="#journal">Field journal</a>
            <a href="#travel-well">Travel responsibly</a>
          </div>

          <div className="footer-links-column">
            <span className="footer-heading">OUR VALUES</span>
            <a href="#our-mission">Our mission</a>
            <a href="#travel-well">Conservation</a>
            <a href="#newsletter">Stay curious</a>
          </div>

          <div className="footer-note">
            <span className="footer-heading">A NOTE TO REMEMBER</span>
            <p>
              “We do not inherit the Earth from our ancestors; we borrow it
              from our children.”
            </p>
            <span className="footer-note-caption">EXPLORE WITH CARE.</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} NatureSphere. Made with respect for
            nature.
          </span>
          <span className="footer-bottom-center">
            <Leaf size={13} /> KEEP THE WILD WONDERFUL
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/destinations/:slug"
        element={<DestinationDetails />}
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
