import { FC } from "nano-jsx";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const styles = {
    footer: {
      textAlign: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      fontSize: "14px",
    },
    disclaimer: { marginTop: "10px", fontSize: "12px", color: "#bbb" },
    link: { color: "#4caf50", textDecoration: "none" },
  };
  return (
    <footer style={styles.footer}>
      {" "}
      &copy; {currentYear} Contoso Japan. All rights reserved.{" "}
      <div style={styles.disclaimer}>
        {" "}
        This website is a fictional demonstration for Cloudflare Pages. View the
        source code on{" "}
        <a
          href="https://github.com/moutend/rendering-tsx-files-on-cloudflare-pages-function"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>{" "}
        .{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
