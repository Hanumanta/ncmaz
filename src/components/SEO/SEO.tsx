import Head from "next/head";

interface Props {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  url?: string | null;
  datePublished?: string | null;
  dateModified?: string | null;
  authorName?: string | null;
  publisherName?: string | null;
  publisherLogo?: string | null;
  name: string;
  logo: string;
  telephone?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

/**
 * Provide SEO related meta tags to a page.
 *
 * @param {Props} props The props object.
 * @param {string} props.title Used for the page title, og:title, twitter:title, etc.
 * @param {string} props.description Used for the meta description, og:description, twitter:description, etc.
 * @param {string} props.imageUrl Used for the og:image and twitter:image. NOTE: Must be an absolute url.
 * @param {string} props.url Used for the og:url and twitter:url.
 *
 * @returns {React.ReactElement} The SEO component
 */
export default function SEO({
  title,
  description,
  imageUrl,
  url,
  datePublished = "2025-09-08",
  dateModified = "2025-09-08",
  authorName = "Admin",
  publisherName = "World Voice",
  publisherLogo = "https://worldvoice.in/_next/image/?url=%2Flogo.png&w=128&q=75",
  name,
  logo,
  telephone,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  addressCountry,
}: Props) {
  if (!title && !description && !imageUrl && !url) {
    return null;
  }

  const descriptionNoHtmlTags = description?.replace(/<[^>]*>?/gm, "") || "";
    // ✅ BlogPosting schema
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: descriptionNoHtmlTags,
        image: imageUrl ? { "@type": "ImageObject", url: imageUrl } : undefined,
        author: { "@type": "Person", name: authorName },
        publisher: {
          "@type": "Organization",
          name: publisherName,
          logo: { "@type": "ImageObject", url: publisherLogo },
        },
        url: url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished,
        dateModified,
      };

      const OrganizationschemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    ...(telephone && { telephone }),
    ...(streetAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
      },
    }),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: telephone || "",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="yandex-verification" content="eee90e068eac599b" />
        <meta property="og:url" content="https://worldvoice.in/"></meta>

        {title && (
          <>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
          </>
        )}

        {!!descriptionNoHtmlTags && (
          <>
            <meta name="description" content={descriptionNoHtmlTags} />
            <meta property="og:description" content={descriptionNoHtmlTags} />
            <meta property="twitter:description" content={descriptionNoHtmlTags}
            />
          </>
        )}

        {imageUrl && (
          <>
            <meta property="og:image" content={imageUrl} />
            <meta property="twitter:image" content={imageUrl} />
          </>
        )}

        {url && (
          <>
            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />
          </>
        )}

        {/* ✅ Inject JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationschemaData) }}
        />

      </Head>
    </>
  );
}

