import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ title, description, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query SiteMeta {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title ? `${title} — ${site.siteMetadata.title}` : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const url = `${site.siteMetadata.siteUrl}${pathname || ''}`;

  return (
    <Helmet>
      <html lang="fr" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}
