import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import classNames from 'classnames/bind';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = () => {
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "pages/blog-post/content/image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1070) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <article className={cx('wrapper')}>
      <div className="container">
        <div className={cx('content')}>
          <p>
            We’re very happy to announce Red Hat OpenShift 4 services on
            {' '}
            <a href="#">APPUiO</a>
            !
          </p>
          <figure className="wp-block-image">
            <GatsbyImage className={cx('image')} fluid={image} />
            <figcaption>Working with ModSecurity rules</figcaption>
          </figure>
          <p>
            The whole VSHN team has been working hard on making OpenShift 4 a reality for our
            customers. We are fully committed on the strategic importance of our Red Hat partnership
            and OpenShift as a main pillar of APPUiO and VSHN services.
          </p>
          <h3>
            OpenShift 4 on APPUiO beta program
          </h3>
          <p>
            To celebrate this milestone we’re happy to provide the community with time-limited
            OpenShift 4 test accounts, at no charge except for one thing: your feedback. If you are
            interested in testing OpenShift 4 on APPUiO, please sign up here for our beta
            program:
          </p>
          <h2>History of OpenShift & VSHN</h2>
          <p>
            Why did we choose OpenShift? A couple of arguments why OpenShift is our “way to go”:
          </p>
          <ul>
            <li>Unifying operations & delivery platform onprem/cloud/hybrid</li>
            <li>Enabling DevSecOps through RBAC and other security-by-default</li>
            <li>Enterprise supported Kubernetes</li>
            <li>
              Embracing open standards, enabling infrastructure/cloud abstraction and mobility,
              enabling cloud-native (and not necessarily cloud-only)
            </li>
          </ul>
          <p>
            So the foundation for VSHN and APPUiO was set up which led to a strong & healthy
            natural growth through focus on what we do best.
          </p>
          <p>
            In 2020, we are still open & transparent and are embracing Open Source & partnerships,
            are still owner-run and managed and are ISO27001 certified and ISAE3402 audited. VSHN is
            the first Swiss Kubernetes Certified Service Provider (KCSP) and VSHN is Red Hat
            Advanced Business Partner (CCSP).
          </p>
          <p>
            So after using OpenShift since 3.0 beta 1, today we are operating 50 clusters in 16
            countries. From Zurich to Sydney, the USA and China, numerous happy customers trust us
            in the banking, financial services, insurance brokering, medical insurance, medical,
            governmental, and many other online business fields.
          </p>
          <p>
            1. The question is very simple: who will maintain the Linux Kernel in the future?
            How do you get both passionate developers and sponsors to finance and make technically
            possible the evolution of this critical piece of our world? Linux Torvalds spoke about
            this issue at the Open Source Summit a few weeks ago.
          </p>
          <p>
            <a href="#">
              https://www.theregister.com/2020/06/30/hard_to_find_linux_maintainers_says_torvalds/
            </a>
          </p>
          <p>
            2. Speaking about the evolution of the Linux Kernel, last week we heard about the
            announcement of version 5.8. Among the new features, there’s one that will make
            MacBook users rejoice: “Ability to swap
            {' '}
            <code>fn</code>
            {' '}
            and
            {' '}
            <code>ctrl</code>
            {' '}
            keys on Apple keyboards.”
          </p>
          <p>
            <a href="#">
              https://www.theregister.com/2020/06/30/hard_to_find_linux_maintainers_says_torvalds/
            </a>
          </p>
          <p>
            3. One of the most controversial things in Linux, generating discussions hotter than
            those between Torvalds and Andrew Tanenbaum in the 90s, was the introduction of
            {' '}
            <code>systemd</code>
            . Dave McKay wrote an article on Howtogeek providing an
            interesting account of its advantages, drawbacks, and why it will survive the test of
            time after all.
          </p>
          <blockquote>
            <p>
              In fall 2018, the management team went to Malta for a week-long retreat,
              where we focused on the challenges that came with our growth as well as the company
              strategy for the upcoming years. Among other topics, part of these discussions were
              the individual goals of the members of the management. This was when I first started
              to really think about my own role in the company and what the things are that I enjoy
              doing and I find interesting and what aspects of the job I would rather do without. As
              you can imagine this is not something that is easily figured out in a few hours. At
              least for me it was a process lasting several months.
            </p>
            <cite>– André</cite>
          </blockquote>
          <p>
            The new board and management structure will have a strong focus on PeopleOps, OrgDev
            and the refining of the strategy set by the board. André is happy to handover his
            position in the management to Marco Fretz who has been supporting the management in an
            advisory capacity for some time. Marco started early 2016 as a system engineer at VSHN.
            From the beginning he became more and more interested in organizational topics far
            beyond his daily job and contributed with constructive ideas and concepts to the success
            of VSHN.
          </p>
          <blockquote>
            <p>
              Being an “old” VSHNeer, knowing all the good and bad stories and having an open mind
              I’m sure I can be a driver for the changes VSHN needs to overcome future challenges.
              Together, we can improve things for us as VSHNeers and our customers likewise – and
              maintain our great family-like culture we value that much.
            </p>
            <cite>– Marco</cite>
          </blockquote>
          <p>
            As an open source company we’re used to collaborating over company borders, so much
            that it is part of our openly documented company core values. For our OpenShift 4
            services this means we’re documenting our support, architecture, and tooling in the
            open, and are submitting contributions upstream.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Content;
