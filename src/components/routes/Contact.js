import classes from "./Contact.module.css";

const Contact = (props) => {
  const handleSubmit = () => {};
  return (
    <div className={classes["contact"]}>
      <div className={classes["container--form"]}>
        <form className={classes["contact--form"]} onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            className={classes.input}
            id="name"
            type="text"
            required
          ></input>
          <label htmlFor="email">Your email</label>
          <input
            className={classes.input}
            id="email"
            type="email"
            required
          ></input>
          <label htmlFor="message">Type your message</label>
          <textarea
            className={`${classes.input} ${classes.textarea}`}
            id="message"
            type="text"
            required
          ></textarea>
          <button className={classes["button--submit"]} type="submit">
            Send!
          </button>
        </form>
      </div>
      <div className={classes["thank-you"]}>Thank you!</div>
    </div>
  );
};

export default Contact;
