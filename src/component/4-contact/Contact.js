import React from "react";
import "./contact.css";
import { Lottie } from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyeekkvw");
  return (
    <div className="contact">
      <div className="address">
        <div className="envelope">
          <div className="icon-envelope"></div>
          <h2> Contact us</h2>
        </div>
        <p>
          Contact Us for more information and get notified when I publish
          something now.
        </p>
      </div>

      <div className="box-form">
        <form onSubmit={handleSubmit} className="">
          <div className="box-email">
            <label htmlForfor="email">Email Address : </label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              className="inp"
              name="email"
              required
            ></input>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="box-message">
            <label htmlForfor="message">Your message : </label>

            <textarea
              id="message "
              className="textarea"
              name="message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <div
              className="flex"
              style={{ alignItems: "center", marginTop: "2rem", gap: "5px" }}
            >
              <Lottie
                style={{ height: 33, width: "33px" }}
                src={`${process.env.PUBLIC_URL}/animations/Success.json`}
                autoplay
                loop={false}
              />
              <p
                style={{
                  fontSize: "17px",
                }}
              >
                <span
                  style={{
                    color: "#f3f4f6",
                  }}
                >
                  {" "}
                  Your message has been sent successfully!
                </span>
              </p>
            </div>
          )}
        </form>
        <div className="animation-form">
          <Lottie
            style={{ height: 350, translate: "100px" }}
            src={`${process.env.PUBLIC_URL}/animations/TTA-Contact-Us.json`}
            autoplay
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
