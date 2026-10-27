
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CalendarDays,
  Check,
  Clock3,
  Compass,
  Leaf,
  MapPin,
  Mountain,
  Share2,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";
import "../DestinationDetails.css";

const destinationDetails = {
  "silent-forest": {
    name: "The Silent Forest",
    location: "Western Ghats, India",
    category: "Forest escape",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
        alt: "Sunlight filtering through a lush green forest",
      },
      {
        src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
        alt: "Tall trees creating a peaceful forest canopy",
      },
      {
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
        alt: "A beautiful woodland landscape surrounded by greenery",
      },
    ],
    description:
      "Follow winding trails beneath ancient trees, listen to birdsong and discover the quiet beauty of a living forest.",
    duration: "2–3 days",
    difficulty: "Easy",
    bestTime: "October – February",
    elevation: "Forest trails",
    about:
      "Step into a green world where filtered sunlight, rich plant life and the sounds of nature invite you to slow down. The Western Ghats are known for remarkable biodiversity, making them a rewarding place to learn about the connections between plants, wildlife, water and people.",
    highlights: [
      "Walk beneath a lush forest canopy",
      "Listen for birds and observe native plants",
      "Discover the role forests play in healthy watersheds",
      "Enjoy quiet moments away from busy city life",
    ],
    activities: [
      "Guided nature walks",
      "Birdwatching",
      "Nature photography",
    ],
    icon: Trees,
  },

  "above-the-clouds": {
    name: "Above the Clouds",
    location: "Himalayas, India",
    category: "Mountain journey",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
        alt: "Majestic mountain peaks rising above the landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=85",
        alt: "A dramatic mountain range beneath the open sky",
      },
      {
        src: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",
        alt: "A scenic high-altitude landscape surrounded by mountains",
      },
    ],
    description:
      "Discover dramatic mountain ridges, alpine landscapes and unforgettable views across the high peaks.",
    duration: "4–6 days",
    difficulty: "Moderate",
    bestTime: "April – June",
    elevation: "Mountain terrain",
    about:
      "The Himalayas offer an extraordinary meeting of mountains, valleys, forests and changing weather. Plan thoughtfully, acclimatize where needed and choose routes that match your experience. Local guides can help you understand the landscape and travel more safely.",
    highlights: [
      "Take in sweeping mountain panoramas",
      "Explore scenic walking routes with a local guide",
      "Observe how vegetation changes with elevation",
      "Experience the calm of an early mountain morning",
    ],
    activities: [
      "Guided trekking",
      "Landscape photography",
      "Scenic walks",
    ],
    icon: Mountain,
  },

  "hidden-falls": {
    name: "The Hidden Falls",
    location: "Meghalaya, India",
    category: "Waterfall discovery",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=85",
        alt: "Water cascading through a lush natural landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=85",
        alt: "A beautiful waterfall surrounded by green vegetation",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
        alt: "A dense green forest near a peaceful nature trail",
      },
    ],
    description:
      "Find cascading water, moss-covered rocks and secluded trails framed by the greens of Meghalaya.",
    duration: "1–2 days",
    difficulty: "Easy to moderate",
    bestTime: "October – April",
    elevation: "Forest and stream trails",
    about:
      "Waterfalls reveal the movement of water through a landscape. In Meghalaya, rain, rock and dense vegetation shape spectacular natural scenery. Trails and rocks can become slippery, so follow local advice and keep a safe distance from strong currents and waterfall edges.",
    highlights: [
      "Admire forest-framed cascades",
      "Learn how water shapes rock and soil",
      "Explore marked paths with a local guide",
      "Photograph the textures of a lush landscape",
    ],
    activities: [
      "Guided walks",
      "Nature photography",
      "Waterfall viewing",
    ],
    icon: Waves,
  },

  "land-meets-sea": {
    name: "Where Land Meets Sea",
    location: "Konkan Coast, India",
    category: "Coastal escape",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85",
        alt: "Blue ocean waves moving across the coastline",
      },
      {
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
        alt: "Ocean waves meeting the shore under natural light",
      },
      {
        src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=85",
        alt: "A peaceful coastal landscape with beautiful sea views",
      },
    ],
    description:
      "Explore peaceful shorelines, tidal pools and the extraordinary rhythm of the Arabian Sea.",
    duration: "2–3 days",
    difficulty: "Easy",
    bestTime: "November – March",
    elevation: "Coastal terrain",
    about:
      "The Konkan coast brings together sandy beaches, rocky shorelines and communities shaped by the sea. Explore with respect for coastal habitats, check tides before walking near rocks and avoid disturbing marine life or collecting shells from sensitive areas.",
    highlights: [
      "Enjoy quiet coastal walks",
      "Observe changing tides from a safe location",
      "Discover coastal plants and habitats",
      "Experience the changing colours of the sea",
    ],
    activities: [
      "Coastal walks",
      "Birdwatching",
      "Seascape photography",
    ],
    icon: Waves,
  },

  "into-the-wild": {
    name: "Into the Wild",
    location: "Central India",
    category: "Wildlife discovery",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=85",
        alt: "Wildlife in its natural habitat",
      },
      {
        src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=85",
        alt: "Wild animals living in a natural environment",
      },
      {
        src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
        alt: "A green forest habitat filled with trees and vegetation",
      },
    ],
    description:
      "Learn about native species, forest habitats and the importance of protecting biodiversity.",
    duration: "2–4 days",
    difficulty: "Guided",
    bestTime: "November – April",
    elevation: "Forest and reserve terrain",
    about:
      "Wildlife habitats support complex relationships between animals, plants and their environment. Explore only through authorized routes and responsible operators. Patience and quiet observation offer a better experience than approaching, feeding or disturbing animals.",
    highlights: [
      "Learn about local wildlife and habitats",
      "Understand why protected areas matter",
      "Observe wildlife only from a safe distance",
      "Discover the importance of conservation",
    ],
    activities: [
      "Authorized guided safaris",
      "Wildlife observation",
      "Nature learning",
    ],
    icon: Trees,
  },

  "emerald-valley": {
    name: "The Emerald Valley",
    location: "Coorg, Karnataka",
    category: "Green escape",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=85",
        alt: "A rich green forest landscape in a peaceful valley",
      },
      {
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
        alt: "A forest path surrounded by lush greenery",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
        alt: "Sunlight shining through the trees in a green forest",
      },
    ],
    description:
      "Breathe in the forest air and wander through a landscape shaped by rain, rich greenery and time.",
    duration: "2 days",
    difficulty: "Easy",
    bestTime: "October – March",
    elevation: "Valley and forest trails",
    about:
      "Coorg is known for green hills, forested landscapes and coffee-growing regions. Take time to appreciate the local environment, follow property and trail guidance, and choose local experiences that respect both nature and the people who live here.",
    highlights: [
      "Explore green landscapes and scenic trails",
      "Learn about the region's plants and rainfall",
      "Discover local culture and responsible tourism",
      "Enjoy unhurried moments in nature",
    ],
    activities: [
      "Nature walks",
      "Landscape photography",
      "Local guided experiences",
    ],
    icon: Leaf,
  },
};

export default function DestinationDetails() {
  const { slug } = useParams();
  const destination = destinationDetails[slug];

  const [isSaved, setIsSaved] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  if (!destination) {
    return (
      <main className="destination-not-found">
        <span className="destination-detail-kicker">
          <Leaf size={16} /> NATURESPHERE
        </span>

        <h1>That trail hasn’t been mapped yet.</h1>

        <p>
          We couldn’t find that destination. Head back and choose another place
          to explore.
        </p>

        <Link className="detail-button detail-button-dark" to="/#destinations">
          <ArrowLeft size={17} /> Explore destinations
        </Link>
      </main>
    );
  }

  const DestinationIcon = destination.icon;

  const handleShare = async () => {
    const shareData = {
      title: `${destination.name} | NatureSphere`,
      text: `Explore ${destination.name} with NatureSphere.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Thanks for sharing this destination.");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setShareMessage("Destination link copied to clipboard.");
      } else {
        setShareMessage(
          "Copy this page’s URL from your browser to share it."
        );
      }
    } catch {
      setShareMessage("");
    }
  };

  return (
    <main className="destination-detail-page">
      {/* Navigation */}
      <header className="detail-topbar">
        <Link className="detail-brand" to="/" aria-label="NatureSphere home">
          <span className="detail-brand-mark">
            <Leaf size={22} />
          </span>

          <span>
            <strong>NatureSphere</strong>
            <small>EXPLORE · UNDERSTAND · PROTECT</small>
          </span>
        </Link>

        <Link className="detail-back-link" to="/#destinations">
          <ArrowLeft size={16} /> All destinations
        </Link>
      </header>

      {/* Destination hero */}
      <section className="detail-hero">
        <img
          className="detail-hero-image"
          src={destination.image}
          alt={`${destination.name} landscape`}
          fetchPriority="high"
        />

        <div className="detail-hero-overlay" />

        <div className="detail-hero-content">
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#destinations">Destinations</Link>
            <span>/</span>
            <span aria-current="page">{destination.name}</span>
          </nav>

          <span className="detail-category">
            <Sparkles size={15} />
            {destination.category}
          </span>

          <h1>{destination.name}</h1>

          <p className="detail-hero-description">
            {destination.description}
          </p>

          <div className="detail-location">
            <MapPin size={17} />
            {destination.location}
          </div>

          <div className="detail-hero-actions">
            <a
              className="detail-action-button detail-action-primary"
              href="#about-destination"
            >
              Explore this place <ArrowRight size={16} />
            </a>

            <button
              className={`detail-action-button ${isSaved ? "is-saved" : ""}`}
              type="button"
              onClick={() => setIsSaved((saved) => !saved)}
              aria-pressed={isSaved}
            >
              <Bookmark
                size={16}
                fill={isSaved ? "currentColor" : "none"}
              />
              {isSaved ? "Saved to your list" : "Save destination"}
            </button>

            <button
              className="detail-action-button"
              type="button"
              onClick={handleShare}
            >
              <Share2 size={16} /> Share
            </button>
          </div>

          {shareMessage && (
            <p className="detail-share-message" role="status">
              {shareMessage}
            </p>
          )}
        </div>

        <span className="detail-image-caption">
          A NATURESPHERE FIELD GUIDE
        </span>

        <div className="detail-hero-index" aria-hidden="true">
          <span>01</span>
          <i />
          FIELD NOTES
        </div>
      </section>

      {/* Sticky section navigation */}
      <nav className="detail-quick-nav" aria-label="On this page">
        <span>EXPLORE THE GUIDE</span>
        <a href="#about-destination">Overview</a>
        <a href="#destination-gallery">Gallery</a>
        <a href="#destination-highlights">Highlights</a>
        <a href="#destination-activities">Activities</a>
        <a href="#responsible-travel">Travel responsibly</a>
      </nav>

      {/* Destination facts */}
      <section className="detail-facts" aria-label="Destination information">
        <div className="detail-fact">
          <span className="detail-fact-icon">
            <Clock3 size={20} />
          </span>
          <div>
            <small>IDEAL DURATION</small>
            <strong>{destination.duration}</strong>
          </div>
        </div>

        <div className="detail-fact">
          <span className="detail-fact-icon">
            <Compass size={20} />
          </span>
          <div>
            <small>EXPERIENCE</small>
            <strong>{destination.difficulty}</strong>
          </div>
        </div>

        <div className="detail-fact">
          <span className="detail-fact-icon">
            <CalendarDays size={20} />
          </span>
          <div>
            <small>BEST TIME TO VISIT</small>
            <strong>{destination.bestTime}</strong>
          </div>
        </div>

        <div className="detail-fact">
          <span className="detail-fact-icon">
            <DestinationIcon size={20} />
          </span>
          <div>
            <small>LANDSCAPE</small>
            <strong>{destination.elevation}</strong>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        className="detail-about detail-section-wrap"
        id="about-destination"
      >
        <div className="detail-section-heading">
          <span className="detail-eyebrow">GET TO KNOW THIS PLACE</span>
          <h2>
            A little closer to <em>the wild.</em>
          </h2>
          <p className="detail-heading-note">
            A slower kind of travel. A deeper connection to place.
          </p>
        </div>

        <div className="detail-about-copy">
          <p>{destination.about}</p>

          <p>
            NatureSphere encourages thoughtful exploration. Conditions vary by
            season and location, so check local guidance before setting out.
          </p>

          <div className="detail-about-signoff">
            <span />
            GO GENTLY. LEAVE NO TRACE.
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section
        className="detail-gallery detail-section-wrap"
        id="destination-gallery"
      >
        <div className="detail-gallery-heading-row">
          <div className="detail-section-heading">
            <span className="detail-eyebrow">A VISUAL JOURNEY</span>
            <h2>
              See the beauty. <em>Feel the wild.</em>
            </h2>
          </div>

          <p className="detail-gallery-description">
            A closer look at the landscapes, colours and quiet moments that
            make this destination special.
          </p>
        </div>

        <div className="detail-gallery-grid">
          {destination.gallery.map((photo, index) => (
            <figure
              className={`detail-gallery-card detail-gallery-card-${index + 1}`}
              key={photo.src}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />

              <figcaption>
                <span>0{index + 1}</span>
                {photo.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section
        className="detail-highlights"
        id="destination-highlights"
      >
        <div className="detail-section-wrap">
          <div className="detail-section-heading">
            <span className="detail-eyebrow">
              MAKE THE MOST OF YOUR VISIT
            </span>

            <h2>
              Look closer. <em>Discover more.</em>
            </h2>

            <p className="detail-section-intro">
              Small details often become the most memorable parts of a journey.
            </p>
          </div>

          <div className="detail-highlight-grid">
            {destination.highlights.map((highlight, index) => (
              <article
                className="detail-highlight-card"
                key={highlight}
              >
                <span className="detail-highlight-number">
                  0{index + 1}
                </span>

                <span className="detail-highlight-check">
                  <Check size={18} />
                </span>

                <h3>{highlight}</h3>

                <span className="detail-card-arrow" aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section
        className="detail-activities detail-section-wrap"
        id="destination-activities"
      >
        <div className="detail-section-heading">
          <span className="detail-eyebrow">WAYS TO EXPLORE</span>

          <h2>
            Find your kind of <em>adventure.</em>
          </h2>

          <p className="detail-section-intro">
            Choose experiences that match your pace and respect the landscape.
          </p>
        </div>

        <div className="detail-activity-list">
          {destination.activities.map((activity, index) => (
            <div className="detail-activity" key={activity}>
              <span className="detail-activity-index">
                0{index + 1}
              </span>

              <span className="detail-activity-check">
                <Check size={16} />
              </span>

              {activity}

              <ArrowRight
                className="detail-activity-arrow"
                size={17}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Responsible travel */}
      <section
        className="detail-responsible"
        id="responsible-travel"
      >
        <div className="detail-responsible-icon">
          <ShieldCheck size={27} />
        </div>

        <div>
          <span className="detail-eyebrow">TRAVEL WITH CARE</span>
          <h2>Leave the wild wonderful.</h2>

          <p>
            Stay on marked paths, take your rubbish with you, respect local
            rules and wildlife, and check weather and access conditions before
            travelling.
          </p>
        </div>

        <span className="detail-responsible-leaf" aria-hidden="true">
          <Leaf size={42} />
        </span>
      </section>

      {/* Footer */}
      <footer className="detail-footer">
        <div>
          <span className="detail-eyebrow">
            YOUR NEXT STORY STARTS OUTSIDE
          </span>

          <h2>
            Keep exploring <em>with purpose.</em>
          </h2>

          <p>
            Discover places that stay with you — and learn how to leave them
            better.
          </p>
        </div>

        <Link
          className="detail-button detail-button-light"
          to="/#destinations"
        >
          Discover more places <ArrowRight size={17} />
        </Link>
      </footer>
    </main>
  );
}
