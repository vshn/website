import React from 'react';
import MainLayout from 'layouts/main';

import FeaturedPost from '../components/pages/blog/featured-post';
import Contact from '../components/shared/contact';
import Categories from '../components/pages/blog/categories';

const featuredPost = {
  title: 'August 2020 Cloud Native Computing Meetup Recap',
  text: 'The August 2020 edition of the Cloud Native Computing Meetup took place on August 27th. It was the first time that the event took place online, and we thank all our attendees and speakers for a successful edition!',
  buttonText: 'Read more',
  buttonUrl: '/',
  date: new Date('2020-09-01'),
};

const items = [
  {
    name: 'All posts',
    slug: '/',
  },
  {
    name: 'General',
    slug: '/general',
  },
  {
    name: 'Technical',
    slug: '/technical',
  },
  {
    name: 'VSHNinternal',
    slug: '/vshninternal',
  },
  {
    name: 'VSHN.timer',
    slug: '/vshn.timer',
  },
  {
    name: 'Press releases',
    slug: '/press-releases',
  },
  {
    name: 'Project Syn',
    slug: '/project-syn',
  },
];

export default () => (
  <MainLayout>
    <FeaturedPost {...featuredPost} />
    <Categories items={items} activeItemSlug="/" />
    <Contact />
  </MainLayout>
);
