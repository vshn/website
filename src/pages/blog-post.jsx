import React from 'react';

import AuthorInfo from 'components/pages/blog-post/author-info';
import Content from 'components/pages/blog-post/content';
import Hero from 'components/pages/blog-post/hero';
import News from 'components/pages/blog-post/news';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const hero = {
  title: 'VSHN announces Red Hat OpenShift 4 services',
  categories: [
    'General',
    'Press releases',
  ],
  date: new Date('2020-08-24'),
};

const authorInfo = {
  name: 'Markus Speth',
  links: [
    {
      label: 'markus.spethvshn@vshn.ch ',
      path: 'mailto:markus.spethvshn@vshn.ch ',
    },
    {
      label: '+41 44 545 53 00',
      path: 'tel:+41445455300',
    },
  ],
  description: 'Markus ist CMO bei der VSHN AG und kümmert sich um Marketingthemen und Partner.',
};

const news = {
  title: 'More <strong>news</strong>',
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

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <Content />
    <AuthorInfo {...authorInfo} />
    <News {...news} />
    <Contact />
  </MainLayout>
);
