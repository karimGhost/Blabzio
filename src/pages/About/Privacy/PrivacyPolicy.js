import React from 'react';
import * as nav from '../../../styles/navbar.module.css'
import { useTranslation , Trans} from 'react-i18next';
import { Link } from 'gatsby';

const PrivacyPolicy = () => {
  return (
    

    <div className="content-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card" data-aos="fade-up">
            <div className="card-body">
              <div className="aboutus-wrapper">
              
              <div className="privacy-policy-container">
        <Link to="/"> <h1 className={nav.logo}>  Zena  </h1>
</Link>
<h1 className="mt-5">Privacy Policy</h1>
               

 
      <p className=' font-weight-600 fs-15'>
        At Zena, we value the privacy of our users and are committed to
        protecting their personal information. We understand the importance of
        privacy and strive to be transparent about our data collection and use
        practices.
      </p>
      <h2 className="privacy-policy-subtitle">Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address,
        and IP address when you interact with our website or services. We may
        also collect information about your browsing behavior and preferences.
      </p>
      <h2 className="privacy-policy-subtitle">Use of Collected Information</h2>
      <p>
        We may use your personal information to provide you with personalized
        experiences and to improve our website and services. We may also use
        your information for analytics and research to better understand our
        users and improve our offerings.
      </p>
      <h2 className="privacy-policy-subtitle">Sharing of Collected Information</h2>
      <p>
        We may share your personal information with third-party service
        providers to assist with the operation of our website and services. We
        may also share your information as required by law or in response to
        legal process.
      </p>
      <h2 className="privacy-policy-subtitle">Security of Collected Information</h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access and use. We also require our service providers to
        protect your information in accordance with our standards.
      </p>
      <h2 className="privacy-policy-subtitle">Changes to this Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time to reflect changes
        to our data collection and use practices. We will notify you of any
        changes by updating the "Effective Date" at the top of this policy and
        by providing notice on our website.
      </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;

export const Head = () => <title>PrivacyPolicy</title>
