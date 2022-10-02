import React, {useState} from "react";
import Layout from "./index";

const FORM_ENDPOINT = "";


const PageNotFoundComponent = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
        <input  className="text-xl text-center my-4" type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
   
        <input className="text-xl text-center my-4" type="email" placeholder="Email" name="email" required />
      </div>
      <div>

     
      <br>
      </br>
        <textarea className="text-xl text-center my-4" placeholder="Your message" name="message" required />
      </div>
      <div>
        <button className="text-xl text-center my-4" type="submit"> Send a message </button>
      </div>
     
    </form>
  );
};


const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
