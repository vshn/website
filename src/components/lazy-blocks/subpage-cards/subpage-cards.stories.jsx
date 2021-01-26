import React from 'react';

import icon from './images/icon.png';
import SubpageCards from './subpage-cards';

const items = [
  {
    icon,
    title: 'Managed OpenShift',
    buttonText: 'Mehr Infos',
  },
  {
    icon,
    title: 'Managed Kubernetes',
    buttonText: 'Mehr Infos',
  },
  {
    icon,
    title: 'Managed Rancher',
    buttonText: 'Mehr Infos',
  },
];

export const Default = () => <SubpageCards items={items} />;

export default {
  title: 'LazyBlocks / SubpageCards',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
