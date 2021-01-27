import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import useHubspotForm from 'hooks/use-hubspot-form';

import styles from './content.module.scss';

import 'components/lazy-blocks/hubspot-form/hubspot-form.scss';

const cx = classNames.bind(styles);

const Content = ({ content }) => {
  useHubspotForm('.wp-block-lazyblock-hubspot-form');
  return (
    <article className={cx('wrapper')}>
      <div className="container">
        <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
