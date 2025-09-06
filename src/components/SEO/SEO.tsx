import Head from "next/head";

interface Props {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  url?: string | null;
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
export default function SEO({ title, description, imageUrl, url }: Props) {
  if (!title && !description && !imageUrl && !url) {
    return null;
  }

  const descriptionNoHtmlTags = description?.replace(/<[^>]*>?/gm, "") || "";

  function BlogPost() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": "Hanumant Nalwade"
    },
    "publisher": {
      "@type": "Organization",
      "name": "World Voice | Amplifying Global Stories, One Voice at a Time - World Voice",
      "logo": {
        "@type": "ImageObject",
        "url": "https://worldvoice.in/_next/image/?url=%2Flogo.png&w=128&q=75"
      }
    },
    "datePublished": "2025-09-06T10:00:00+05:30",
    "dateModified": "2025-09-06T12:00:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      
    }
  }



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

        {/* BlogPosting Schema */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} 
        />
        

      </Head>
    </>
  );
}
}
