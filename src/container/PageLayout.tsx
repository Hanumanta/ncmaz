import SEO from "@/components/SEO/SEO";
import React, { FC } from "react";
import SiteHeader from "./SiteHeader";
import Footer from "@/components/Footer/Footer";
import { FragmentType } from "@/__generated__";
import {
  NC_FOOTER_MENU_QUERY_FRAGMENT,
  NC_PRIMARY_MENU_QUERY_FRAGMENT,
} from "@/fragments/menu";
import { NcgeneralSettingsFieldsFragmentFragment } from "@/__generated__/graphql";


interface Props {
  children: React.ReactNode;
  pageTitle?: string | null | undefined;
  headerMenuItems?: FragmentType<typeof NC_PRIMARY_MENU_QUERY_FRAGMENT>[];
  footerMenuItems?: FragmentType<typeof NC_FOOTER_MENU_QUERY_FRAGMENT>[] | null;
  pageFeaturedImageUrl?: string | null | undefined;
  generalSettings?: NcgeneralSettingsFieldsFragmentFragment | null | undefined;
  pageDescription?: string | null | undefined;
}

const PageLayout: FC<Props> = ({
  children,
  footerMenuItems,
  headerMenuItems,
  pageFeaturedImageUrl,
  pageTitle,
  generalSettings,
  pageDescription,
}) => {
  return (
    <>
      <SEO
        title={(pageTitle || "") + " - " + (generalSettings?.title || "")}
        description={pageDescription || generalSettings?.description || ""}
        imageUrl={pageFeaturedImageUrl}
        name="World Voice"
        datePublished = "2025-09-08T10:30:00+05:30"
        dateModified = "2025-09-08T14:45:00+05:30"
        authorName = "Hanumant Nalwade"
        authorUrl = "https://worldvoice.in/author/admin/"
        publisherName = "World Voice"
        publisherLogo = "https://worldvoice.in/_next/image/?url=%2Flogo.png&w=128&q=75"      
        url="https://worldvoice.in/"
        logo="https://worldvoice.in/_next/image/?url=%2Flogo.png&w=128&q=75"
        telephone = "+91 9403819090"
        streetAddress = "Near Ganesh Temple"
        addressLocality = "Latur"
        addressRegion = "Maharashta"
        postalCode = "413512"
        addressCountry = "IN"
      />

      <SiteHeader
        siteTitle={generalSettings?.title}
        siteDescription={generalSettings?.description}
        menuItems={headerMenuItems || []}
      />

      {children}

      <Footer menuItems={footerMenuItems || []} />
    </>
  );
};

export default PageLayout;
