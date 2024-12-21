import { FC } from "nano-jsx";

const Services: FC = () => {
  const styles = {
    container:
      "padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;",
    header:
      "font-size: 32px; font-weight: bold; text-align: center; margin-bottom: 20px;",
    serviceList:
      "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;",
    serviceCard:
      "border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;",
    serviceHeader: "font-size: 24px; margin-bottom: 10px;",
    serviceText: "font-size: 16px; color: #555;",
  };
  const services = [
    {
      title: "AI Solutions",
      description:
        "We provide cutting-edge AI technologies to streamline your business processes and enhance decision-making.",
    },
    {
      title: "Sustainable Energy",
      description:
        "Our sustainable energy solutions help you transition to greener practices and reduce your carbon footprint.",
    },
    {
      title: "Smart Infrastructure",
      description:
        "Building smarter cities with innovative infrastructure solutions that improve urban living.",
    },
    {
      title: "Cloud Integration",
      description:
        "Seamlessly migrate your business operations to the cloud with our reliable and secure integration services.",
    },
    {
      title: "Consulting Services",
      description:
        "Expert advice and strategies tailored to help your business grow and succeed in a competitive market.",
    },
  ];
  return (
    <div style={styles.container}>
      {" "}
      <h1 style={styles.header}> Our Services </h1>{" "}
      <div style={styles.serviceList}>
        {" "}
        {services.map((service, index) => (
          <div key={index} style={styles.serviceCard}>
            {" "}
            <h2 style={styles.serviceHeader}> {service.title} </h2>{" "}
            <p style={styles.serviceText}> {service.description} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Services;
