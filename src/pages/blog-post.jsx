import React from 'react';
import MainLayout from 'layouts/main';

import Hero from '../components/pages/blog-post/hero';
import Content from '../components/pages/blog-post/content';
import Author from '../components/pages/blog-post/author';
import News from '../components/pages/blog-post/news';

const hero = {
  title: 'VSHN announces Red Hat OpenShift 4 services',
  categories: [
    'General',
    'Press releases',
  ],
  date: new Date('2020-08-24'),
};

const author = {
  name: 'Markus Speth',
  email: 'markus.spethvshn@vshn.ch',
  number: '+41 44 545 53 00',
  description: 'Markus ist CMO bei der VSHN AG und kümmert sich um Marketingthemen und Partner.',
};

const news = {
  title: 'More <strong>news</strong>',
  items: [
    {
      tags: ['Technical', 'Project Syn'],
      title: 'Second Beta Release of Project Syn Tools',
      text: 'Without further ado, we’re announcing the release 0.2 of the Project Syn tools. Since the first public release mid-March this year (read more about it in First...',
      url: '/',
    },
    {
      tags: ['General', 'VSHNinternal'],
      title: 'VSHN’s Corporate Governance 2020',
      text: 'How time flies! Almost six years ago we founded VSHN. In the beginning, eight of us sat in an open-plan office. Decisions could be made quickly and easily in...',
      url: '/',
    },
    {
      tags: ['General', 'Press releases'],
      title: 'Partnership VSHN & Rancher',
      text: 'VSHN enters into a partnership with Rancher. VSHN has been working with Rancher since 2018 and is now an official Rancher Partner. With Managed Rancher...',
      url: '/',
    },
    {
      tags: ['Technical', 'Project Syn'],
      title: 'Second Beta Release of Project Syn Tools',
      text: 'Without further ado, we’re announcing the release 0.2 of the Project Syn tools. Since the first public release mid-March this year (read more about it in First...',
      url: '/',
    },
    {
      tags: ['General', 'VSHNinternal'],
      title: 'VSHN’s Corporate Governance 2020',
      text: 'How time flies! Almost six years ago we founded VSHN. In the beginning, eight of us sat in an open-plan office. Decisions could be made quickly and easily in...',
      url: '/',
    },
    {
      tags: ['General', 'Press releases'],
      title: 'Partnership VSHN & Rancher',
      text: 'VSHN enters into a partnership with Rancher. VSHN has been working with Rancher since 2018 and is now an official Rancher Partner. With Managed Rancher...',
      url: '/',
    },
    {
      tags: ['Technical', 'Project Syn'],
      title: 'Second Beta Release of Project Syn Tools',
      text: 'Without further ado, we’re announcing the release 0.2 of the Project Syn tools. Since the first public release mid-March this year (read more about it in First...',
      url: '/',
    },
    {
      tags: ['General', 'VSHNinternal'],
      title: 'VSHN’s Corporate Governance 2020',
      text: 'How time flies! Almost six years ago we founded VSHN. In the beginning, eight of us sat in an open-plan office. Decisions could be made quickly and easily in...',
      url: '/',
    },
    {
      tags: ['General', 'Press releases'],
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
    <Author {...author} />
    <News {...news} />
  </MainLayout>
);
