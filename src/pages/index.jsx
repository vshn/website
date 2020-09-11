import React from 'react';
import MainLayout from 'layouts/main';

import Hero from 'components/pages/home/hero';
import Advantages from 'components/pages/home/advantages';
import Products from 'components/pages/home/products';
import Awards from 'components/pages/home/awards';

const hero = {
  title: 'We run your <strong>application</strong>',
  description: 'VSHN automates the operation of applications in the cloud or on-premise, so that software developers can focus on their business.',
  buttonText: 'Show Me How',
  buttonUrl: '/',
};

const advantages = {
  title: 'Advantages',
  description: '<strong>We are experts</strong> in Container, Kubernetes, Openshift',
  items: [
    {
      title: 'Get Back Time',
      description: 'Our automation accelerates development, deployment and operations processes',
      url: '/',
    },
    {
      title: 'Increase Security',
      description: 'Our processes are ISO 27001 certified and we operate according to the Swiss banking standards',
      url: '/',
    },
    {
      title: 'Reduce Cost',
      description: 'DevOps is the industrial revolution in the software industry',
      url: '/',
    },
  ],
};

const products = {
  title: 'Products',
  description: '<strong>Technologies</strong> we work with',
  items: [
    {
      name: 'Appuio',
      detailsTitle: 'Swiss container platform',
      detailsContent: '<ul><li>Swiss container platform based on OpenShift as a managed service</li><li>On-demand devopment and operations platform</li><li>Including SSL/TLS certificates</li><li>100% open source</li></ul>',
    },
    {
      name: 'Openshift',
      detailsTitle: 'Swiss container platform 2',
      detailsContent: '<ul><li>Swiss container platform based on OpenShift as a managed service</li><li>On-demand devopment and operations platform</li></ul>',
    },
    {
      name: 'Rancher',
      detailsTitle: 'Swiss container platform 3',
      detailsContent: '<ul><li>Swiss container platform based on OpenShift as a managed service</li><li>On-demand devopment and operations platform</li><li>Including SSL/TLS certificates</li><li>100% open source</li></ul>',
    },
    {
      name: 'VSHN Managed Services',
      detailsTitle: 'Swiss container platform 4',
      detailsContent: '<ul><li>Swiss container platform based on OpenShift as a managed service</li><li>On-demand devopment and operations platform</li><li>Including SSL/TLS certificates</li><li>100% open source</li></ul>',
    },
  ],
};

const awards = {
  title: 'Awards',
  description: '<strong>Our experience</strong> is highly appreciated by others',
  items: [
    {
      title: 'Vshn wins gold at the Digital Economy Award',
      description: 'VSHN wins Gold at Swiss Digital Economy Award 2019 in the category Highest Digital Quality.',
      url: '/',
    },
    {
      title: 'Vshn is the first swiss KCSP',
      description: 'VSHN is the first Kubernetes Certified Service Provider (KCSP) in Switzerland',
      url: '/',
    },
    {
      title: 'Vshn is rising star Switzerland',
      description: 'VSHN is Rising Star Switzerland of ISG Provider Lens in Cloud Transformation / Operation Services & XaaS',
      url: '/',
    },
  ],
};

const HomePage = () => (
  <MainLayout>
    <Hero {...hero} />
    <Advantages {...advantages} />
    <Products {...products} />
    <Awards {...awards} />
  </MainLayout>
);

export default HomePage;
