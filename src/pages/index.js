import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home">
      <Link to="/about-us/">About Us</Link>
    </SEO>
    <h1>Welcome to Lakewood Tech Meetup</h1>
    <p>
    Our group is attempting to bring the same level of quality and content as technology meetups you would find in downtown Chicago. We hope to foster mentorship, networking, as well as skills and career growth.
    </p>
    {
      // ? We can change the quote however I think a good quote would be well placed here.
      // I also suggest Better Comments extension if using VSCode because I use it a lot.
      // Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
    }
    <p>&ldquo;Elevating other&#39;s only makes yourself stronger, to pull yourself up along.&#8221; - Unknown</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
);

export default IndexPage;
