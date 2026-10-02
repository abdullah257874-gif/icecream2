import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Facebook,
  Gift,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  User,
  X,
  Youtube,
} from 'lucide-react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
};

const slides = [
  {
    id: '01',
    eyebrow: 'Scoop Happiness',
    top: 'SCOOP',
    bottom: 'HAPPINESS',
    description: 'Handcrafted ice cream made with rich ingredients, playful flavors, and a whole lot of love.',
    flavor: 'Strawberry ice cream',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '02',
    eyebrow: 'Taste the Magic',
    top: 'TASTE',
    bottom: 'THE MAGIC',
    description: 'Silky vanilla bean swirls with a creamy finish and a naturally sweet, dreamy texture.',
    flavor: 'Vanilla bean ice cream',
    image:
      'https://images.unsplash.com/photo-1570197788417-0e823ef4b969?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '03',
    eyebrow: 'Made for Sweet Moments',
    top: 'MADE FOR',
    bottom: 'SWEET MOMENTS',
    description: 'Deep chocolate richness, roasted notes and a smooth finish that feels indulgent from the first bite.',
    flavor: 'Chocolate fudge ice cream',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '04',
    eyebrow: 'Fresh. Creamy. Delicious.',
    top: 'FRESH',
    bottom: 'CREAMY',
    description: 'Sunshine-bright mango layers blended to create an uplifting, tropical scoop with real fruit character.',
    flavor: 'Mango ice cream',
    image:
      'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=900&q=80',
  },
];

const flavorCards = [
  {
    name: 'Strawberry Bliss',
    description: 'Fresh strawberry cream with a bright fruit finish.',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1570197788417-0e823ef4b969?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Vanilla Bean',
    description: 'Classic vanilla bean, silky and naturally aromatic.',
    price: 7,
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Chocolate Fudge',
    description: 'Rich cocoa with decadent fudge ribbons.',
    price: 9,
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mango Tango',
    description: 'Tropical mango swirls with a juicy finish.',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Pistachio Dream',
    description: 'Nutty, creamy and softly sweet with toasted notes.',
    price: 9,
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cookies & Cream',
    description: 'Smooth vanilla base layered with cookie crunch.',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80',
  },
];

const reasons = [
  {
    title: 'Premium Ingredients',
    description: 'Fresh dairy, real fruit and carefully selected ingredients.',
    icon: Leaf,
  },
  {
    title: 'Handmade Daily',
    description: 'Small-batch preparation for better flavor and texture.',
    icon: Sparkles,
  },
  {
    title: 'Creative Flavors',
    description: 'Classic favorites and exciting seasonal combinations.',
    icon: Gift,
  },
  {
    title: 'Delivered Fresh',
    description: 'Carefully packed so every scoop arrives delicious.',
    icon: Truck,
  },
];

const services = [
  {
    title: 'Birthday Parties',
    description: 'Custom ice cream packages for unforgettable celebrations.',
    image:
      'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Weddings & Events',
    description: 'Elegant dessert experiences designed for special occasions.',
    image:
      'https://images.unsplash.com/photo-1514846312322-13e78d5f0cb8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Corporate Catering',
    description: 'Premium ice cream catering for teams, launches and events.',
    image:
      'https://images.unsplash.com/photo-1525059696034-4967a729002e?auto=format&fit=crop&w=900&q=80',
  },
];

const testimonials = [
  {
    name: 'Maya R.',
    text: 'Absolutely delicious. The strawberry flavor tastes incredibly fresh, and the texture is perfect.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Daniel T.',
    text: 'Velvet Scoop has the best vanilla bean we have ever tasted. It feels premium and indulgent without being heavy.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Arianna W.',
    text: 'The catering service was beautiful and the ice cream was a huge hit at our family event.',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1570197788417-0e823ef4b969?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1514846312322-13e78d5f0cb8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1525059696034-4967a729002e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80',
];

const blogs = [
  {
    number: '01',
    category: 'Craft',
    title: 'How We Make Our Ice Cream',
    excerpt: 'A look into our small-batch process, careful sourcing, and the love behind every scoop.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    category: 'Seasonal',
    title: '5 Flavors Perfect for Summer',
    excerpt: 'Bright tropical favorites and playful classics to keep your afternoons cool and sweet.',
    image:
      'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    category: 'Ingredient',
    title: 'The Secret Behind Creamy Ice Cream',
    excerpt: 'Creaminess comes from balance, texture, and premium ingredients done the slow way.',
    image:
      'https://images.unsplash.com/photo-1570197788417-0e823ef4b969?auto=format&fit=crop&w=800&q=80',
  },
];

const navItems = ['Home', 'About', 'Flavors', 'Menu', 'Services', 'Blog', 'Contact'];

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? 'reveal visible' : 'reveal'}>
      {children}
    </div>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [featuredQty, setFeaturedQty] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const allSearchItems = useMemo(
    () => [
      ...navItems.map((item) => ({ name: item, type: 'Section' })),
      ...flavorCards.map((flavor) => ({ name: flavor.name, type: 'Flavor' })),
    ],
    [],
  );

  const filteredSearch = useMemo(() => {
    if (!searchQuery.trim()) return allSearchItems.slice(0, 7);
    return allSearchItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allSearchItems, searchQuery]);

  const currentSlide = slides[activeSlide];

  const addToCart = (name: string, price: number, image: string, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === name);

      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty + quantity } : item,
        );
      }

      return [...prev, { id: name.toLowerCase().replace(/\s+/g, '-'), name, price, qty: quantity, image }];
    });
    setCartOpen(true);
  };

  const updateCart = (name: string, change: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, qty: Math.max(0, item.qty + change) } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!newsletterEmail.trim() || !emailPattern.test(newsletterEmail)) {
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterMessage('Thanks for joining — the sweetest updates are on the way.');
    setNewsletterEmail('');
  };

  const validateContact = () => {
    const errors: Record<string, string> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.name.trim()) errors.name = 'Please enter your name.';
    if (!emailPattern.test(contactForm.email.trim())) errors.email = 'Please enter a valid email.';
    if (!contactForm.phone.trim()) errors.phone = 'Please enter your phone number.';
    if (!contactForm.message.trim() || contactForm.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters.';
    }

    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateContact()) return;

    setContactForm({ name: '', email: '', phone: '', message: '' });
    setContactErrors({});
    alert('Thanks for reaching out. Our team will get back to you soon.');
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand-mark" aria-label="Velvet Scoop home">
            <span className="brand-word">VELVET</span>
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-word">SCOOP</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}
                className={item === 'Home' ? 'active' : ''}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button type="button" className="ghost-link">
              Login
            </button>
            <button type="button" className="icon-button" aria-label="User account">
              <User size={18} />
            </button>
            <button
              type="button"
              className="icon-button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="icon-button cart-button"
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={18} />
              {cartItems.reduce((count, item) => count + item.qty, 0) > 0 && (
                <span className="cart-count">
                  {cartItems.reduce((count, item) => count + item.qty, 0)}
                </span>
              )}
            </button>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Open mobile menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
          <div className="search-panel">
            <div className="search-header">
              <h3>Search</h3>
              <button type="button" className="icon-button" onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <label className="sr-only" htmlFor="site-search">
              Search the site
            </label>
            <div className="search-input-wrap">
              <Search size={18} />
              <input
                id="site-search"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search flavors, sections, and menus"
              />
            </div>
            <div className="search-results">
              {filteredSearch.length ? (
                filteredSearch.map((item) => (
                  <a
                    key={`${item.name}-${item.type}`}
                    href={item.type === 'Section' ? `#${item.name.toLowerCase()}` : '#flavors'}
                    className="search-result"
                    onClick={() => setSearchOpen(false)}
                  >
                    <span>{item.name}</span>
                    <small>{item.type}</small>
                  </a>
                ))
              ) : (
                <p>No results found for your search.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`} aria-label="Shopping cart">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button type="button" className="icon-button" onClick={() => setCartOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <button type="button" className="primary-button" onClick={() => setCartOpen(false)}>
              Explore flavors
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-copy">
                    <h4>{item.name}</h4>
                    <p>${item.price}.00</p>
                    <div className="mini-qty">
                      <button type="button" onClick={() => updateCart(item.name, -1)} aria-label={`Decrease ${item.name}`}>
                        <Minus size={14} />
                      </button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => updateCart(item.name, 1)} aria-label={`Increase ${item.name}`}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button type="button" className="remove-link" onClick={() => updateCart(item.name, -item.qty)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal</span>
                <strong>${subtotal}.00</strong>
              </div>
              <button type="button" className="primary-button full-width">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">{currentSlide.eyebrow}</p>
              <h1>
                <span>{currentSlide.top}</span>
                <span>{currentSlide.bottom}</span>
              </h1>
              <p className="hero-text">{currentSlide.description}</p>

              <div className="cta-row">
                <button type="button" className="primary-button" onClick={() => addToCart('Strawberry Cream Delight', 12, slides[0].image, 1)}>
                  Order Now
                </button>
                <a href="#flavors" className="text-link">
                  Explore Flavors <ArrowRight size={16} />
                </a>
              </div>

              <div className="hero-indicators" aria-label="Hero slider indicators">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={index === activeSlide ? 'indicator active' : 'indicator'}
                    aria-label={`Show slide ${slide.id}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    {slide.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="pink-orb" aria-hidden="true" />
              <div className="hero-image-wrap">
                <img src={currentSlide.image} alt={currentSlide.flavor} />
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="about-section" id="about">
            <div className="container about-inner">
              <div className="about-visual">
                <div className="about-circle pale-yellow" aria-hidden="true" />
                <div className="about-circle pale-pink" aria-hidden="true" />
                <div className="about-bowl-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80"
                    alt="Multiple colorful scoops in a ceramic bowl"
                  />
                </div>
              </div>

              <div className="about-copy">
                <span className="section-label">OUR STORY</span>
                <h2>Made With Love, Scooped With Joy</h2>
                <div className="pink-rule" aria-hidden="true" />
                <p>
                  Every scoop starts with carefully selected ingredients, rich dairy, vibrant fruits,
                  and a passion for making simple moments sweeter.
                </p>
                <p>
                  We craft each batch in small quantities, blending premium dairy with seasonal produce to
                  create ice cream that feels indulgent, fresh and memorable.
                </p>
                <button type="button" className="secondary-button">
                  Discover Our Story
                </button>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="flavor-section" id="flavors">
            <div className="container">
              <div className="section-headline">
                <div>
                  <span className="section-label">OUR FAVORITES</span>
                  <h2>Our Favorite Flavors</h2>
                </div>
                <p>
                  From timeless classics to exciting new creations, there’s a scoop for every mood.
                </p>
              </div>

              <div className="flavor-grid">
                {flavorCards.map((flavor) => (
                  <article className="flavor-card" key={flavor.name}>
                    <div className="flavor-image-wrap">
                      <img src={flavor.image} alt={flavor.name} />
                    </div>
                    <div className="flavor-body">
                      <h3>{flavor.name}</h3>
                      <p>{flavor.description}</p>
                      <div className="flavor-meta">
                        <span className="price">${flavor.price}.00</span>
                        <button
                          type="button"
                          className="circle-button"
                          aria-label={`Add ${flavor.name} to cart`}
                          onClick={() => addToCart(flavor.name, flavor.price, flavor.image, 1)}
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="featured-section" id="menu">
            <div className="container featured-inner">
              <div className="featured-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1000&q=80"
                  alt="Strawberry cream dessert in a cup"
                />
              </div>
              <div className="featured-copy">
                <span className="section-label">SIGNATURE SCOOP</span>
                <h2>Strawberry Cream Delight</h2>
                <p>
                  “Silky strawberry ice cream blended with real fruit pieces and finished with a creamy swirl.”
                </p>

                <div className="price-row">
                  <span className="featured-price">$12.00</span>
                  <div className="star-row" aria-label="Rated 5 out of 5 stars">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                <ul className="detail-list">
                  <li><span>Flavor:</span> Strawberry Cream</li>
                  <li><span>Texture:</span> Silky & rich</li>
                  <li><span>Serves:</span> 1 generous scoop</li>
                </ul>

                <div className="product-actions">
                  <div className="quantity-box" aria-label="Select quantity">
                    <button type="button" onClick={() => setFeaturedQty((qty) => Math.max(1, qty - 1))}>
                      <Minus size={16} />
                    </button>
                    <span>{featuredQty}</span>
                    <button type="button" onClick={() => setFeaturedQty((qty) => qty + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => addToCart('Strawberry Cream Delight', 12, 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1000&q=80', featuredQty)}
                  >
                    Add to Cart
                  </button>
                  <button type="button" className="secondary-button small">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="why-section" id="why-us">
            <div className="container">
              <div className="section-center">
                <span className="section-label">WHY VELVET SCOOP</span>
                <h2>Why Velvet Scoop?</h2>
              </div>

              <div className="feature-grid">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <article className="feature-item" key={reason.title}>
                      <div className="feature-number">0{index + 1}</div>
                      <div className="feature-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{reason.title}</h3>
                      <p>{reason.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="services-section" id="services">
            <div className="container">
              <div className="section-headline center">
                <span className="section-label">SPECIAL OCCASIONS</span>
                <h2>Sweet Moments, Made Special</h2>
              </div>

              <div className="services-grid">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <img src={service.image} alt={service.title} />
                    <div className="service-body">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href="#contact" className="text-link">
                        Learn More <ChevronRight size={15} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="offer-section">
            <div className="container">
              <div className="offer-panel">
                <div className="offer-copy">
                  <h2>Your Next Favorite Scoop Is Waiting</h2>
                  <p>
                    Order your favorite flavor today and turn an ordinary moment into something sweet.
                  </p>
                  <div className="offer-actions">
                    <button type="button" className="primary-button light">
                      Order Ice Cream
                    </button>
                    <a href="#menu" className="text-link light-link">
                      View Menu
                    </a>
                  </div>
                </div>
                <div className="offer-visual" aria-hidden="true">
                  <div className="offer-orb one" />
                  <div className="offer-orb two" />
                  <img
                    src="https://images.unsplash.com/photo-1570197788417-0e823ef4b969?auto=format&fit=crop&w=900&q=80"
                    alt="Premium ice cream cone"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="reviews-section">
            <div className="container">
              <div className="section-center">
                <span className="section-label">TESTIMONIALS</span>
                <h2>Sweet Words From Our Customers</h2>
              </div>

              <div className="testimonials-grid">
                {testimonials.map((review) => (
                  <article className="review-card" key={review.name}>
                    <div className="review-head">
                      <img src={review.avatar} alt={review.name} />
                      <div>
                        <h3>{review.name}</h3>
                        <div className="star-row" aria-label="Five star review">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <p>“{review.text}”</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="gallery-section" id="gallery">
            <div className="container">
              <div className="section-center">
                <span className="section-label">FOLLOW ALONG</span>
                <h2>A Little Scoop of Happiness</h2>
              </div>

              <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                  <figure className={`gallery-item size-${index + 1}`} key={image}>
                    <img src={image} alt="Ice cream and dessert moments" />
                    <div className="gallery-overlay">
                      <span className="insta-badge">
                        <Instagram size={20} />
                      </span>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="blog-section" id="blog">
            <div className="container">
              <div className="section-headline">
                <div>
                  <span className="section-label">OUR JOURNAL</span>
                  <h2>From Our Journal</h2>
                </div>
              </div>

              <div className="blog-grid">
                {blogs.map((post) => (
                  <article className="blog-card" key={post.title}>
                    <div className="blog-image-wrap">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-body">
                      <span className="post-number">{post.number}</span>
                      <span className="post-category">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <a href="#" className="text-link">
                        Read More <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="newsletter-section">
            <div className="container">
              <div className="newsletter-box">
                <span className="section-label">STAY IN THE LOOP</span>
                <h2>Get the Sweet News</h2>
                <p>Sign up for new flavors, special offers, seasonal treats and delicious updates.</p>
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                  />
                  <button type="submit" className="primary-button">
                    Subscribe
                  </button>
                </form>
                {newsletterMessage && <p className="form-note">{newsletterMessage}</p>}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="contact-section" id="contact">
            <div className="container contact-inner">
              <div className="contact-copy">
                <span className="section-label">CONTACT US</span>
                <h2>Let’s Make Something Sweet</h2>
                <p>
                  Planning a celebration or craving a signature scoop for the week? We’d love to help.
                </p>

                <div className="contact-list">
                  <div>
                    <Phone size={18} />
                    <a href="tel:+15550191">(555) 0191</a>
                  </div>
                  <div>
                    <Mail size={18} />
                    <a href="mailto:hello@velvetscoop.com">hello@velvetscoop.com</a>
                  </div>
                  <div>
                    <MapPin size={18} />
                    <span>108 Bloom Avenue, Portland, OR</span>
                  </div>
                  <div>
                    <Clock size={18} />
                    <span>Mon–Sun: 9:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={contactForm.name}
                      onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })}
                      aria-invalid={Boolean(contactErrors.name)}
                    />
                    {contactErrors.name && <span className="field-error">{contactErrors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
                      aria-invalid={Boolean(contactErrors.email)}
                    />
                    {contactErrors.email && <span className="field-error">{contactErrors.email}</span>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(event) => setContactForm({ ...contactForm, phone: event.target.value })}
                    aria-invalid={Boolean(contactErrors.phone)}
                  />
                  {contactErrors.phone && <span className="field-error">{contactErrors.phone}</span>}
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
                    aria-invalid={Boolean(contactErrors.message)}
                  />
                  {contactErrors.message && <span className="field-error">{contactErrors.message}</span>}
                </div>

                <button type="submit" className="primary-button full-width">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand-mark footer-brand-mark" aria-label="Velvet Scoop home">
              <span className="brand-word">VELVET</span>
              <span className="brand-dot" aria-hidden="true" />
              <span className="brand-word">SCOOP</span>
            </a>
            <p>
              Handcrafted ice cream made with fresh dairy, thoughtful flavor, and a little everyday joy.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Quick Links</h3>
              <ul>
                {['Home', 'About', 'Flavors', 'Menu', 'Services', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Customer Care</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>

            <div>
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:+15550191">(555) 0191</a></li>
                <li><a href="mailto:hello@velvetscoop.com">hello@velvetscoop.com</a></li>
                <li><span>108 Bloom Avenue, Portland, OR</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h3>Social</h3>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="TikTok"><Sparkles size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 Velvet Scoop. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight size={18} />
        </button>
      )}
    </>
  );
}

export default App;
