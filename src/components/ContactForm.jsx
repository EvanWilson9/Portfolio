import React from 'react'

export default function ContactForm() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ddf8847a-55ee-488a-b742-04c2aa7ee201");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="next" className='projectsp-section'>
        <div className="projectsp-wrapper">
          <div className='projectsp-top'>
            <h2 className='title'>Contact Form</h2>
            <p className='desc'>You can <a className='no-underline' href="mailto:evanpwilson1@gmail.com"><span className='contact-email'>click here</span></a> to send me an email message via your standard email client, or fill in the fields below.</p>
          </div>
          <div className='projects-container'>
            <form className='form-container' onSubmit={onSubmit}>
                <div className='form-inputs'>
                    <input className='input' type="text" name="name" placeholder='Name' required/>
                    <input className='input' type="email" name="email" placeholder='Email' required/>
                    <textarea className='textarea' name="message" placeholder='Your Message' required></textarea>
                </div>
                <button className='button' type="submit">Submit</button>
            </form>
      <span>{result}</span>
          </div>
          </div>
        </section>
  )
}
