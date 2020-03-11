import ProductGrid from '../components/ProductGrid/ProductGrid';
import { SEO } from '../components/seo';
import { Link } from 'gatsby';
import React from 'react';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
