import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactUsPage = () => (
    <Layout>
        <SEO title="Contact Us" />
        <form name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Phone Number: <input type="tel" name="phone" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </Layout>
);

export default ContactUsPage;
