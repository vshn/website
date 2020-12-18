import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import RelatedItems from 'components/shared/related-items';
import 'components/lazy-blocks/subpage-cards/subpage-cards.scss';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ content, relatedItems }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      {relatedItems.items && <RelatedItems {...relatedItems} />}
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  relatedItems: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
      }),
    })),
  }),
};

Content.defaultProps = {
  relatedItems: null,
};

export default Content;
