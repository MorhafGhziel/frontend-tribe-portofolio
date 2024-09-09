const footerLinks = [
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div>&copy; 2024. All rights reserved.</div>
          <nav>
            {footerLinks.map((link) => (
              <a href="#" key={link.title}>
                <span>{link.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
