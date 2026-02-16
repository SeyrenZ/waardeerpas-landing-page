export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Over ons",
      links: [
        { label: "Ons verhaal", href: "#" },
        { label: "Team", href: "#" },
        { label: "Vacatures", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "#" },
        { label: "Veelgestelde vragen", href: "#" },
        { label: "Zakelijk", href: "#" },
      ],
    },
    {
      title: "Juridisch",
      links: [
        { label: "Algemene Voorwaarden", href: "#" },
        { label: "Privacybeleid", href: "#" },
        { label: "Cookieverklaring", href: "#" },
      ],
    },
  ];

  const socialLinks = ["LinkedIn", "Twitter", "Instagram"];

  return (
    <footer className="bg-[#1E2460] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-20 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <img src="/logo-2.png" alt="Logo" className="w-40 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Dé oplossing voor blije medewerkers. Eén centraal punt voor
              waardering en voordelen.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Waardeerpas. Alle rechten voorbehouden.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
