import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { REACT_APP_OWNER, REACT_APP_SITE_URL } from '../env';

const SITE_NAME = REACT_APP_OWNER || 'Dennis M. Nyabuti';
const DEFAULT_SITE_URL = REACT_APP_SITE_URL || 'https://dennisnyabuti.com';
const DEFAULT_TITLE = `${SITE_NAME} | Senior Software Engineer`;
const DEFAULT_DESCRIPTION = 'Senior Software Engineer specializing in full-stack development, cloud architecture, AI integrations, and modern web technologies.';
const DEFAULT_ROBOTS = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

function normalizeUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${DEFAULT_SITE_URL}${normalizedPath}`;
}

function resolveImageUrl(image) {
  if (!image) {
    return null;
  }

  return /^https?:\/\//i.test(image) ? image : `${DEFAULT_SITE_URL}${image}`;
}

function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image,
  type = 'website',
  keywords,
  noindex = false,
  schema,
}) {
  const canonicalUrl = normalizeUrl(path);
  const imageUrl = resolveImageUrl(image);
  const robots = noindex ? 'noindex,nofollow' : DEFAULT_ROBOTS;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}

      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  noindex: PropTypes.bool,
  schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Seo;