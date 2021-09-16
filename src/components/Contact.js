import React from 'react';
import imagen from '../images/contact-image.png';
import footer_logo from '../images/footer-logo.png';
const Contact = () => {
    return (
        <div className="Contact__container" id="contact">
            <img src={imagen} alt="Imagen" className="Contact__image"></img>
            <div className="Contact__tittles">
                <p className="contact__title-1">Get in touch </p>
                <p className="contact__title-2"> We are hiring!</p>
            </div>

            <form className="contact__form">
                <label>
                    Name
                    <br /> <input type="text" name="name" className="contact__form__input-name" />
                </label>
                <br />
                <label>
                    Email
                    <br /> <input type="text" name="name" className="contact__form__input-email" />
                </label>
                <br />
                <label>
                    Phone
                    <br /> <input type="text" name="name" className="contact__form__input-phone" />
                </label>
                <br />
                <label>
                    Message
                    <br /> <input type="text" name="name" className="contact__form__input-message" />
                </label>
                <br /><input type="submit" value="Send" className="contact__form__input-submit" />
            </form>

            <div className="contact__footer">
                <img src={footer_logo} alt="Imagen" className="footer__logo"></img>
                <p className="contact__footer__text">2020 © All rights reserved.</p>

            </div>

        </div>

    );
}

export default Contact;