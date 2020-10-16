/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/main';
import Contact from 'components/shared/contact';

import Hero from 'components/pages/home/hero';
import Advantages from 'components/pages/home/advantages';
import Products from 'components/pages/home/products';
import Awards from 'components/pages/home/awards';
import Technologies from 'components/pages/home/technologies';
import Partners from 'components/pages/home/partners';
import Jobs from 'components/pages/home/jobs';
import News from 'components/pages/home/news';
import Report from 'components/pages/home/report';

const technologies = {
  title: 'Technologies',
  description: 'We use <strong>trending technologies</strong>',
  text: 'We can offer these tools as readily available managed services. We have the necessary soft-skills for consulting, collaborative implementation and continuous improvement',
  buttonText: 'See More',
  buttonUrl: '/',
};

const partners = {
  title: 'Partners',
  items: [
    {
      name: 'Michael Schmid',
      position: 'Group CTO, Amazee Labs',
      text: 'We experience a trustful and <strong>successful collaboration</strong> with VSHN...',
      buttonUrl: '/',
    },
    {
      name: 'Silvan Mühlemann',
      position: 'CTO, Sobrado',
      text: 'I appreciate VSHN as my <strong>solution-oriented and dependable</strong> partner without finger pointing...',
      buttonUrl: '/',
    },
    {
      name: 'Mathias Brenner',
      position: 'CTO, Sherpany',
      text: 'Sherpany <strong>trusts</strong> VSHN as a competent partner...',
      buttonUrl: '/',
    },
  ],
};

const jobs = {
  title: 'We\'re looking for <strong>talents</strong>',
  description: 'We\'re a growing company and are currently looking for new team members',
  buttonText: 'Jobs With Us',
  buttonUrl: '/',
};

const news = {
  title: 'Check <strong>latest news</strong>',
  items: [
    {
      categories: ['Technical', 'Project Syn'],
      title: 'Second Beta Release of Project Syn Tools',
      text: 'Without further ado, we’re announcing the release 0.2 of the Project Syn tools. Since the first public release mid-March this year (read more about it in First...',
      url: '/',
    },
    {
      categories: ['General', 'VSHNinternal'],
      title: 'VSHN’s Corporate Governance 2020',
      text: 'How time flies! Almost six years ago we founded VSHN. In the beginning, eight of us sat in an open-plan office. Decisions could be made quickly and easily in...',
      url: '/',
    },
    {
      categories: ['General', 'Press releases'],
      title: 'Partnership VSHN & Rancher',
      text: 'VSHN enters into a partnership with Rancher. VSHN has been working with Rancher since 2018 and is now an official Rancher Partner. With Managed Rancher...',
      url: '/',
    },
    {
      categories: ['Technical', 'Project Syn'],
      title: 'Second Beta Release of Project Syn Tools',
      text: 'Without further ado, we’re announcing the release 0.2 of the Project Syn tools. Since the first public release mid-March this year (read more about it in First...',
      url: '/',
    },
    {
      categories: ['General', 'VSHNinternal'],
      title: 'VSHN’s Corporate Governance 2020',
      text: 'How time flies! Almost six years ago we founded VSHN. In the beginning, eight of us sat in an open-plan office. Decisions could be made quickly and easily in...',
      url: '/',
    },
    {
      categories: ['General', 'Press releases'],
      title: 'Partnership VSHN & Rancher',
      text: 'VSHN enters into a partnership with Rancher. VSHN has been working with Rancher since 2018 and is now an official Rancher Partner. With Managed Rancher...',
      url: '/',
    },
    {
      categories: ['Technical', 'Project Syn'],
      title: 'Second Beta Release of Project Syn Tools',
      text: 'Without further ado, we’re announcing the release 0.2 of the Project Syn tools. Since the first public release mid-March this year (read more about it in First...',
      url: '/',
    },
    {
      categories: ['General', 'VSHNinternal'],
      title: 'VSHN’s Corporate Governance 2020',
      text: 'How time flies! Almost six years ago we founded VSHN. In the beginning, eight of us sat in an open-plan office. Decisions could be made quickly and easily in...',
      url: '/',
    },
    {
      categories: ['General', 'Press releases'],
      title: 'Partnership VSHN & Rancher',
      text: 'VSHN enters into a partnership with Rancher. VSHN has been working with Rancher since 2018 and is now an official Rancher Partner. With Managed Rancher...',
      url: '/',
    },
  ],
};

const report = {
  title: 'Report',
  description: '<strong>Report DevOps</strong> in Switzerland 2020',
  text: 'Download the report of our DevOps in Switzerland study 2020.',
  buttonText: 'Read More',
  buttonUrl: '/',
};

export default ({ data: { wpPage: { seo, acf: data } }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <Hero {...data.hero} />
    <Advantages {...data.advantages} />
    <Products {...data.products} />
    <Awards {...data.awards} />
    <Technologies {...technologies} />
    <Partners {...partners} />
    <Jobs {...jobs} />
    <News {...news} />
    <Report {...report} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        hero {
          title
          description
          buttonText
          buttonLink {
            url
          }
        }
        advantages {
          title
          subtitle
          items {
            title
            imageName
            footerText
            description
            link {
              url
            }
          }
        }
        products {
          title
          subtitle
          items {
            name
            detailsTitle
            detailsContent
          }
        }
        awards {
          title
          subtitle
          items {
            title
            description
            link {
              url
            }
          }
        }
      }
      ...wpPageSeo
    }
  }
`;
