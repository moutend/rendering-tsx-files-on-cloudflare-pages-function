import { FC } from "nano-jsx";

const AboutUs: FC = () => {
  const styles = {
    container:
      "padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;",
    header:
      "font-size: 32px; font-weight: bold; text-align: center; margin-bottom: 20px;",
    section: "margin-bottom: 20px;",
    sectionHeader: "font-size: 24px; margin-bottom: 10px;",
    text: "font-size: 16px;",
    list: "list-style: none; padding: 0;",
    listItem: "font-size: 16px; margin-bottom: 5px;",
  };
  return (
    <div style={styles.container}>
      {" "}
      <h1 style={styles.header}> About Us </h1>{" "}
      <section style={styles.section}>
        {" "}
        <h2 style={styles.sectionHeader}> Our History </h2>{" "}
        <p style={styles.text}>
          {" "}
          Contoso Japan was founded in 2010 with a vision to innovate and
          inspire. Over the years, we have grown into a global leader in
          sustainable solutions, bridging technology and humanity to create a
          brighter future for everyone.{" "}
        </p>{" "}
      </section>{" "}
      <section style={styles.section}>
        {" "}
        <h2 style={styles.sectionHeader}> Our Headquarters </h2>{" "}
        <p style={styles.text}>
          {" "}
          Located in the heart of Tokyo, our headquarters is designed to foster
          creativity and collaboration. Come visit us at:{" "}
        </p>{" "}
        <ul style={styles.list}>
          {" "}
          <li style={styles.listItem}>
            {" "}
            Address: 1-2-3 Chiyoda, Tokyo, Japan{" "}
          </li>{" "}
          <li style={styles.listItem}> Phone: +81 3-1234-5678 </li>{" "}
          <li style={styles.listItem}> Email: info@consoto.jp </li>{" "}
        </ul>{" "}
      </section>{" "}
      <section style={styles.section}>
        {" "}
        <h2 style={styles.sectionHeader}> Our Values </h2>{" "}
        <p style={styles.text}>
          {" "}
          At Contoso Japan, we believe in integrity, innovation, and inclusion.
          These values guide us in every project we undertake, ensuring we make
          a positive impact on society and the environment.{" "}
        </p>{" "}
      </section>{" "}
    </div>
  );
};

export default AboutUs;
