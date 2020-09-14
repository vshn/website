import React from 'react';
import { text } from '@storybook/addon-knobs';
import BlogPostsList from './blog-posts-list';

const items = [
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
];

export const Default = () => (
  <BlogPostsList
    title={text('title', 'Check <strong>latest news</strong>')}
    items={items}
  />
);

export default {
  title: 'Shared / BlogPostsList',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
