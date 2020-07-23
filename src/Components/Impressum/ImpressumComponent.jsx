import React from 'react';

import './styles.scss';

const Footer = () => (
  <div className="impressum">
    <h3>Impressum / Legal Disclosure</h3>
    <p>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</p>
    <section className="contact-impressum">
      <h5>Contact Information</h5>
      <p>Keighley McFarland</p>
      <p>Vienna, Austria</p>
      <p>
        E-Mail:
        {' '}
        <a href="mailto:contact@keighleymcfarland.me">contact@keighleymcfarland.me</a>
      </p>
      <p>
        Internet address:
        {' '}
        <a href="https://www.keighleymcfarland.me" target="_blank">www.keighleymcfarland.me</a>
      </p>
    </section>
    <section className="disclaimer">
      <h4>Disclaimer</h4>
      <h5>Accountability for content</h5>
      <p>
        The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
        accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
        our own content on these web pages. In this matter, please note that we are not obliged to monitor
        the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
        Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this.
      </p>

      <h5>Accountability for links</h5>
      <p>
        Responsibility for the content of
        external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were
        evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
        link immediately.
      </p>

      <h5>Copyright</h5>
      <p>
        Our web pages and their contents are subject to German copyright law. Unless
        expressly permitted by law, every form of utilizing, reproducing or processing
        works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights.
        Individual reproductions of a work are only allowed for private use.
        The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
      </p>
    </section>
  </div>
);

export default Footer;
