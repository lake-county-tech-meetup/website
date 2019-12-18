import React from 'react';

import { DefaultLayout } from 'components/Layouts';
import SEO from 'components/SEO';

const ContactUsPage = () => (
  <DefaultLayout>
    <SEO title="Contact Us" />
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label htmlFor="your-name">
          Your Name: <input type="text" name="name" id="your-name" />
        </label>
      </p>
      <p>
        <label htmlFor="your-email">
          Your Email: <input type="email" name="email" id="your-email" />
        </label>
      </p>
      <p>
        <label htmlFor="your-phone-number">
          Your Phone Number:
          <input type="tel" name="phone" id="your-phone-number" />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          Message: <textarea name="message" id="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </DefaultLayout>
);

export default ContactUsPage;
