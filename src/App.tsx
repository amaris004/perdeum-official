import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-12">
              <a href="#shop" className="font-sans text-sm tracking-widest text-neutral-800 hover:text-neutral-500 transition-colors">SHOP</a>
              <a href="#about" className="font-sans text-sm tracking-widest text-neutral-800 hover:text-neutral-500 transition-colors">ABOUT</a>
            </div>
            
            {/* Logo */}
            <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
              <h1 className="font-display text-2xl tracking-[0.3em] text-neutral-900">PERDEUM</h1>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex space-x-12">
              <a href="#contact" className="font-sans text-sm tracking-widest text-neutral-800 hover:text-neutral-500 transition-colors">CONTACT</a>
              <button className="text-neutral-800 hover:text-neutral-500 transition-colors">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex justify-between w-full">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-800">
                {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
              <h1 className="font-display text-xl tracking-[0.3em] text-neutral-900">PERDEUM</h1>
              <button className="text-neutral-800">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-neutral-200">
            <div className="px-6 py-8 space-y-6">
              <a href="#shop" className="block font-sans text-sm tracking-widest text-neutral-800">SHOP</a>
              <a href="#about" className="block font-sans text-sm tracking-widest text-neutral-800">ABOUT</a>
              <a href="#contact" className="block font-sans text-sm tracking-widest text-neutral-800">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80" 
            alt="Luxury Sunglasses" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl animate-fade-in">
              <h2 className="text-white font-display text-4xl md:text-6xl lg:text-7xl tracking-wider mb-8">Timeless Elegance</h2>
              <p className="text-neutral-100 font-sans text-lg md:text-xl font-light tracking-wide mb-12 max-w-xl">Discover our collection of meticulously crafted eyewear, where heritage meets contemporary design.</p>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 font-sans text-sm tracking-widest flex items-center group hover:bg-white hover:text-neutral-900 transition-all duration-500">
                EXPLORE COLLECTION
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <h3 className="text-center font-display text-3xl tracking-wider text-neutral-900 mb-20">Latest Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                name: "Le Aviateur",
                price: "$580"
              },
              {
                image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                name: "Le Navigateur",
                price: "$620"
              },
              {
                image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                name: "L'Explorateur",
                price: "$540"
              }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="mt-8 text-center">
                  <h4 className="font-display text-lg tracking-wide text-neutral-900">{product.name}</h4>
                  <p className="font-sans text-sm tracking-wider text-neutral-500 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-beige-100">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="font-display text-3xl tracking-wider text-neutral-900 mb-8">The Art of Craftsmanship</h3>
              <p className="font-sans text-lg leading-relaxed text-neutral-600 mb-12">Each Perdeum piece is a testament to exceptional craftsmanship, combining time-honored techniques with contemporary innovation. Our commitment to excellence is evident in every detail.</p>
              <button className="border border-neutral-900 text-neutral-900 px-10 py-4 font-sans text-sm tracking-widest hover:bg-neutral-900 hover:text-white transition-all duration-500">
                DISCOVER MORE
              </button>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-display text-lg tracking-wider mb-6">PERDEUM</h4>
              <p className="font-sans text-sm text-neutral-400 tracking-wide">Luxury eyewear for the discerning individual.</p>
            </div>
            <div>
              <h5 className="font-sans text-sm tracking-widest mb-6">SHOP</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">New Arrivals</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Best Sellers</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-sans text-sm tracking-widest mb-6">ABOUT</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Our Story</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Craftsmanship</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-sans text-sm tracking-widest mb-6">CONTACT</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Customer Service</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Store Locator</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-16 pt-8">
            <p className="text-center text-neutral-400 text-sm tracking-wide">&copy; 2025 Perdeum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;