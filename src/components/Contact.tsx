import { FC } from "nano-jsx";

const Contact: FC = () => {
  const styles = {
    container:
      "padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;",
    header:
      "font-size: 32px; font-weight: bold; text-align: center; margin-bottom: 20px;",
    form: "max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px;",
    label: "font-size: 16px; color: #333; margin-bottom: 5px;",
    input:
      "padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 4px;",
    textarea:
      "padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 4px; height: 100px;",
    button:
      "background-color: #007bff; color: #fff; padding: 10px 20px; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; text-align: center;",
  };
  return (
    <div style={styles.container}>
      {" "}
      <h1 style={styles.header}> Contact Us </h1>{" "}
      <form style={styles.form}>
        {" "}
        <div>
          {" "}
          <label for="name" style={styles.label}>
            {" "}
            Your Name{" "}
          </label>{" "}
          <input
            type="text"
            id="name"
            name="name"
            style={styles.input}
            placeholder="Enter your name"
            required
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <label for="email" style={styles.label}>
            {" "}
            Your Email{" "}
          </label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            placeholder="Enter your email"
            required
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <label for="message" style={styles.label}>
            {" "}
            Your Message{" "}
          </label>{" "}
          <textarea
            id="message"
            name="message"
            style={styles.textarea}
            placeholder="Enter your message"
            required
          >
            {" "}
          </textarea>{" "}
        </div>{" "}
        <button type="submit" style={styles.button}>
          {" "}
          Send Message{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Contact;
