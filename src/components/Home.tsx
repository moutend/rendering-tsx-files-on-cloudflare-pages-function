import { FC } from "nano-jsx";

const Home: FC = () => {
  const styles = {
    container:
      "text-align: center; padding: 20px; font-family: Arial, sans-serif;",
    header:
      "font-size: 36px; font-weight: bold; color: #333; margin-bottom: 20px;",
    subHeader: "font-size: 18px; color: #666; margin-bottom: 40px;",
    missionSection:
      "background-color: #f9f9f9; padding: 20px; margin-bottom: 20px; border-radius: 8px;",
    missionHeader: "font-size: 24px; color: #333; margin-bottom: 10px;",
    missionText: "font-size: 16px; color: #555;",
    poemSection:
      "padding: 20px; margin-bottom: 20px; border-left: 4px solid #333; background-color: #fff;",
    poemHeader: "font-size: 24px; color: #333; margin-bottom: 10px;",
    poemText: "font-size: 16px; color: #555; font-style: italic;",
  };
  return (
    <div style={styles.container}>
      {" "}
      <h1 style={styles.header}> Welcome to Contoso Japan </h1>{" "}
      <p style={styles.subHeader}> Innovating for a better tomorrow </p>{" "}
      <section style={styles.missionSection}>
        {" "}
        <h2 style={styles.missionHeader}> Our Mission </h2>{" "}
        <p style={styles.missionText}>
          {" "}
          At Contoso Japan, our mission is to empower communities through
          innovation, sustainability, and cutting-edge technology. We strive to
          create solutions that inspire and transform the world.{" "}
        </p>{" "}
      </section>{" "}
      <section style={styles.poemSection}>
        {" "}
        <h2 style={styles.poemHeader}> Our Vision in Words </h2>{" "}
        <p style={styles.poemText}>
          {" "}
          "From the rising sun to endless skies, <br /> We reach for dreams, and
          higher ties. <br /> With every step, a brighter day, <br /> Together
          forward, come what may."{" "}
        </p>{" "}
      </section>{" "}
    </div>
  );
};

export default Home;
