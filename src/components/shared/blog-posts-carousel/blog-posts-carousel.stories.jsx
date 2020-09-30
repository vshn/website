import React from 'react';
import { text } from '@storybook/addon-knobs';
import BlogPostsCarousel from './blog-posts-carousel';

const items = [
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
];

export const Default = () => (
  <BlogPostsCarousel
    title={text('title', 'Check <strong>latest news</strong>')}
    items={items}
  />
);

export default {
  title: 'Shared / BlogPostsCarousel',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
