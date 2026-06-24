"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasMegaMenu: true },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const MEGA_MENU_ITEMS = [
  { name: "Matelas", href: "/products?category=matelas", description: "Premium orthopedic and memory foam mattresses." },
  { name: "Mousses", href: "/products?category=mousses", description: "High-density polyurethane foam blocks." },
  { name: "Salon Mousse", href: "/products?category=salon", description: "Traditional and modern Moroccan living room foam." },
  { name: "Oreillers", href: "/products?category=oreillers", description: "Ergonomic pillows for optimal neck support." },
  { name: "Fournitures", href: "/products?category=fournitures", description: "Upholstery and bedding accessories." },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">A</span>
            </div>
            <span className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? "text-brand-blue" : "text-brand-blue"}`}>
              Aquaflex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMegaMenu && setMegaMenuOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    pathname === link.href ? "text-brand-cyan" : "text-brand-blue hover:text-brand-cyan"
                  }`}
                >
                  {link.name}
                  {link.hasMegaMenu && <ChevronDown size={16} />}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                      >
                        <div className="w-[600px] glass rounded-2xl p-6 grid grid-cols-2 gap-4">
                          {MEGA_MENU_ITEMS.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group p-4 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <h4 className="font-heading font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-brand-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-cyan transition-colors"
            >
              <Phone size={18} />
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-brand-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-heading font-bold text-brand-blue"
                  >
                    {link.name}
                  </Link>
                  {link.hasMegaMenu && (
                    <div className="mt-4 flex flex-col gap-4 pl-4 border-l-2 border-slate-100">
                      {MEGA_MENU_ITEMS.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-medium text-slate-600 hover:text-brand-cyan"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
