import React from "react";
import "./contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c02067ab-32b6-4711-b019-0dfbac995333");
    
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

    return(
        <section className="contact container section" id="contact">
            <h2 className="section_title">Get in touch </h2>
                <div className="contact_container grid">
                    <div className="contact_info">
                        <h3 className="contact_title">
                            Let's talk about everything!
                        </h3>
                        <p className="contact_details">
                            Send me an email. 👋
                        </p>
                    </div>
                    <form action="#" onSubmit={onSubmit} className="contact_form">
                        <div className="contact_form-group">
                            <div className="contact_form-div">
                                <input type="text" name="name" id="name" className="contact_form-input" placeholder="Name" required/>
                            </div>
                            <div className="contact_form-div">
                                <input type="email"name="email" id="email" className="contact_form-input" placeholder="Email" required/>
                            </div>
                                </div>
                            <div className="contact_form-div">
                                <input type="text"name="subject" id="subject" className="contact_form-input" placeholder="Subject" required/>
                            </div>
                            <div className="contact_form-div contact_form-area" id="message" required>
                                <textarea 
                                name="message" 
                                id="" 
                                cols={30}
                                rows={10}
                                className="contact_form-input" 
                                placeholder="Write your message"></textarea>
                            </div>

                            <button type="submit" className="btn">Send Message</button>
                    </form>
                          <span>{result}</span>
                </div>
        </section>
    )
}

export default Contact  