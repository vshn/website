/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import backgroundImage from 'components/pages/team/hero/images/background-image.svg';
import TeamMembers from 'components/pages/team/team-members';
import Hero from 'components/shared/hero';
import Jobs from 'components/shared/jobs';
import t from 'i18n';
import MainLayout from 'layouts/main';

const Team = ({
  data: {
    wpPage: data,
    allWpTeamMember,
    allWpTeam,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const breadcrumbs = [t[locale].breadcrumbs.about];
  const getAllTeamRoles = allWpTeamMember.items.map((item) => item.acf.jobTitle);
  const roles = [...new Set(getAllTeamRoles)].sort((a, b) => (a > b ? 1 : -1));
  const teams = allWpTeam.teams.map((item) => item.name);
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
      <TeamMembers {...allWpTeamMember} filters={{ teams, roles }} locale={locale} />
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
    allWpTeam(
      filter: {language:{slug:{eq: $locale}}}, 
      sort: {order: ASC, fields: ancestors___nodes___name}) {
      teams: nodes {
        name
      }
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
        teams {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default Team;
