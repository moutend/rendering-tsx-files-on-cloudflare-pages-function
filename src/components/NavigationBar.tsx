import { FC } from "nano-jsx";

const NavBar: FC = () => {
  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "News", link: "/news" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
    },
    logo: { fontSize: "24px", fontWeight: "bold" },
    navList: { display: "flex", listStyle: "none", margin: 0, padding: 0 },
    navItem: { marginLeft: "20px" },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s ease",
    },
  };
  return (
    <nav style={styles.nav}>
      <a href="/" style={styles.logo}>
        {" "}
        Contoso Japan{" "}
      </a>
      <ul style={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} style={styles.navItem}>
            <a href={item.link} style={styles.navLink}>
              {item.name}
            </a>{" "}
          </li>
        ))}
      </ul>{" "}
    </nav>
  );
};

export default NavBar;
