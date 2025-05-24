import React from 'react'

const contactForm = () => {
  return (
    <div>
        <div className="contactright">
            <h5>CONTACT FORM</h5>
            <div className="">
                <label>Name</label>
                <input name="name" placeholder="Your Name" required>
            </div>
            <div className="">
                <label>Email</label>
                <input name="email" placeholder="Your Email" required>
            </div>
            <div className="">
                <label>Message</label>
                <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">SEND</button>
        </div>
    </div>
  )
}

export default contactForm