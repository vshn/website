import React from 'react';

import BlogPostsList from 'components/pages/blog/blog-posts-list';
import Categories from 'components/pages/blog/categories';
import FeaturedPost from 'components/pages/blog/featured-post';
import Pagination from 'components/pages/blog/pagination';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const featuredPost = {
  title: 'August 2020 Cloud Native Computing Meetup Recap',
  text: 'The August 2020 edition of the Cloud Native Computing Meetup took place on August 27th. It was the first time that the event took place online, and we thank all our attendees and speakers for a successful edition!',
  date: new Date('2020-09-01'),
  buttonText: 'Read more',
  buttonUrl: '/',
};

const categories = {
  items: [
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
      slug: '/vshn-timer',
    },
    {
      name: 'Press releases',
      slug: '/press-releases',
    },
    {
      name: 'Project Syn',
      slug: '/project-syn',
    },
  ],
  activeItemSlug: '/',
};

const blogPostsList = {
  items: [
    {
      title: 'VSHN announces Red Hat OpenShift 4 services',
      text: 'VSHN announces Red Hat OpenShift 4 services. We’re very happy to announce Red Hat OpenShift 4 services on APPUiO! The whole VSHN team has been working hard on making OpenShift 4 a reality for our customers. We are fully committed on the strategic...',
      date: new Date('2020-08-24'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'VSHN.timer #57: Highlights of KubeCon + CloudNativeCon Europe...',
      text: 'Welcome to another VSHN.timer! Every Monday, 5 links related to Kubernetes, OpenShift, CI / CD, and DevOps; all stuff coming out of our own chat system, making us think, laugh, or simply work better. This week we’re going to talk about the most important...',
      date: new Date('2020-08-24'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'VSHN.timer #56: Getting Ready for KubeCon + CloudNativeCon Europe...',
      text: 'Welcome to another VSHN.timer! Every Monday, 5 links related to Kubernetes, OpenShift, CI / CD, and DevOps; all stuff coming out of our own chat system, making us think, laugh, or simply work better. This week we’re going to talk about random interesting things...',
      date: new Date('2020-08-17'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'VSHN.timer #55: The Future Of Linux',
      text: 'Welcome to another VSHN.timer! Every Monday, 5 links related to Kubernetes, OpenShift, CI / CD, and DevOps; all stuff coming out of our own chat system, making us think, laugh, or simply work better. This week we’re going to talk about what’s in store for that little sid...',
      date: new Date('2020-08-10'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'Welcome Finn!',
      text: 'Hi everyone, my name is Finn. Last year I was in school in Hirschengraben. I learned a little bit of English, maths, and other interesting things. In my spare time I play three to four times a week football, where I meet a lot of friends; I play video games sometimes, too. M...',
      date: new Date('2020-08-10'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
  ],
};

const pagination = {
  previousText: 'Older posts',
  previousUrl: '/',
  nextText: 'Newer posts',
  nextUrl: '/',
};

export default () => (
  <MainLayout>
    <FeaturedPost {...featuredPost} />
    <Categories {...categories} />
    <BlogPostsList {...blogPostsList} />
    <Pagination {...pagination} />
    <Contact language="en" />
  </MainLayout>
);
