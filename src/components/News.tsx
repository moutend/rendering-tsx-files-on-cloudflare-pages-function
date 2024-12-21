import { FC } from "nano-jsx";

const News: FC = () => {
  const styles = {
    container:
      "padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;",
    header:
      "font-size: 32px; font-weight: bold; text-align: center; margin-bottom: 20px;",
    newsList: "display: flex; flex-direction: column; gap: 20px;",
    newsItem:
      "border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;",
    newsHeader: "font-size: 24px; margin-bottom: 10px; color: #333;",
    newsDate: "font-size: 14px; color: #999; margin-bottom: 10px;",
    newsText: "font-size: 16px; color: #555;",
  };
  const news = [
    {
      title: "Contoso Japan Wins Innovation Award",
      date: "2024-12-01",
      content:
        "Contoso Japan has been recognized for its groundbreaking AI solutions at the annual Tech Innovators Conference.",
    },
    {
      title: "New Sustainable Energy Initiative Announced",
      date: "2024-11-20",
      content:
        "We are excited to launch our new project aimed at providing clean energy to urban communities across Japan.",
    },
    {
      title: "Contoso Expands to Southeast Asia",
      date: "2024-11-10",
      content:
        "As part of our global strategy, we are opening new offices in Singapore and Malaysia to better serve our clients.",
    },
  ];
  return (
    <div style={styles.container}>
      {" "}
      <h1 style={styles.header}> Latest News </h1>{" "}
      <div style={styles.newsList}>
        {" "}
        {news.map((item, index) => (
          <div key={index} style={styles.newsItem}>
            {" "}
            <h2 style={styles.newsHeader}> {item.title} </h2>{" "}
            <p style={styles.newsDate}> {item.date} </p>{" "}
            <p style={styles.newsText}> {item.content} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default News;
