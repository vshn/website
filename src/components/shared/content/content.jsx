import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import RelatedItems from 'components/shared/related-items';
import 'components/lazy-blocks/subpage-cards/subpage-cards.scss';

import Form from '../form';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const options = {
  thumbnails: {
    settings: { autoplaySpeed: 0, disableKeyboardControls: true },
    showThumbnails: false,
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
  },
};

const Content = ({ content, relatedItems, formId }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <SRLWrapper options={options}>
        <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      </SRLWrapper>
      {relatedItems?.items && <RelatedItems {...relatedItems} />}
      {formId && <Form formId={formId} />}
    </div>
  </section>
);
Content.propTypes = {
  content: PropTypes.string.isRequired,
  relatedItems: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
      }),
    })),
  }),
  formId: PropTypes.string,
};

Content.defaultProps = {
  relatedItems: null,
  formId: null,
};

export default Content;
