import React from 'react';
import './Footer.css';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/Trvl/sign-up'>How it works</Link>
              <Link to='/Trvl'>Testimonials</Link>
              <Link to='/Trvl'>Careers</Link>
              <Link to='/Trvl'>Investors</Link>
              <Link to='/Trvl'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/Trvl'>Contact</Link>
              <Link to='/Trvl'>Support</Link>
              <Link to='/Trvl'>Destinations</Link>
              <Link to='/Trvl'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/Trvl'>Submit Video</Link>
              <Link to='/Trvl'>Ambassadors</Link>
              <Link to='/Trvl'>Agency</Link>
              <Link to='/Trvl'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/Trvl'>Instagram</Link>
              <Link to='/Trvl'>Facebook</Link>
              <Link to='/Trvl'>Youtube</Link>
              <Link to='/Trvl'>Twitter</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/Trvl' className='social-logo'>
                TRVL
                <i class='fab fa-typo3' />
              </Link>
            </div>
            <small class='website-rights'>TRVL © 2021</small>
            <div class='social-icons'>
              <Link
                  class='social-icon-link facebook'
                  to='/Trvl'
                  target='_blank'
                  aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                  class='social-icon-link instagram'
                  to='/Trvl'
                  target='_blank'
                  aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                  class='social-icon-link youtube'
                  to='/Trvl'
                  target='_blank'
                  aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                  class='social-icon-link twitter'
                  to='/Trvl'
                  target='_blank'
                  aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                  class='social-icon-link twitter'
                  to='/Trvl'
                  target='_blank'
                  aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Footer;