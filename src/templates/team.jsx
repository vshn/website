/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import backgroundImage from 'components/pages/team/hero/images/background-image.svg';
import TeamMembers from 'components/pages/team/team-members';
import Hero from 'components/shared/hero';
import Jobs from 'components/shared/jobs';
import t from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
    allWpTeamMember,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const breadcrumbs = [t[locale].breadcrumbs.about];
  return (
    <MainLayout
      locale={locale}
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={t[locale].team.title}
        pageTitle={data.title}
        description={data.acf.heroDescription}
        backgroundImage={backgroundImage}
      />
      <TeamMembers {...allWpTeamMember} />
      <Jobs {...data.acf.jobs} />
    </MainLayout>
  );
};

export const query = graphql`
    query($id: String!, $locale: String!) {
    wpPage(id: { eq: $id }) {
      title
      acf {
        heroDescription
        jobs {
          title
          description
          buttonLink {
            url
            title
          }
        }
      }
      ...wpPageSeo
    }
    allWpTeamMember(
      filter: {language: {slug: {eq: $locale}}},
      sort: {fields: title, order: ASC}
      ) {
      items: nodes {
        name: title
        acf {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          jobTitle
          jobPosition
          socialLinks {
            email
            key
            sshKey
            twitterLink
            linkedinLink
            xingLink
            githubLink
            personalLink
          }
        }
      }
    }
  }
`;
