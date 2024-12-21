import { FC } from "nano-jsx";

const Careers: FC = () => {
  const styles = {
    container:
      "padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;",
    header:
      "font-size: 32px; font-weight: bold; text-align: center; margin-bottom: 20px;",
    jobList:
      "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;",
    jobCard:
      "border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;",
    jobTitle: "font-size: 24px; margin-bottom: 10px; color: #333;",
    jobLocation: "font-size: 16px; margin-bottom: 10px; color: #555;",
    jobDescription: "font-size: 16px; color: #555; margin-bottom: 10px;",
    applyButton:
      "background-color: #007bff; color: #fff; padding: 10px 20px; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; text-align: center;",
  };
  const jobs = [
    {
      title: "Software Engineer",
      location: "Tokyo, Japan",
      description:
        "Join our dynamic development team to create cutting-edge AI solutions that empower businesses worldwide.",
    },
    {
      title: "Project Manager",
      location: "Osaka, Japan",
      description:
        "Lead exciting projects in sustainable energy and make a real impact on communities globally.",
    },
    {
      title: "Data Scientist",
      location: "Remote",
      description:
        "Analyze complex datasets to uncover insights and drive innovation in our smart infrastructure initiatives.",
    },
  ];
  return (
    <div style={styles.container}>
      {" "}
      <h1 style={styles.header}> Join Our Team </h1>{" "}
      <div style={styles.jobList}>
        {" "}
        {jobs.map((job, index) => (
          <div key={index} style={styles.jobCard}>
            {" "}
            <h2 style={styles.jobTitle}> {job.title} </h2>{" "}
            <p style={styles.jobLocation}> {job.location} </p>{" "}
            <p style={styles.jobDescription}> {job.description} </p>{" "}
            <button style={styles.applyButton}> Apply Now </button>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Careers;
