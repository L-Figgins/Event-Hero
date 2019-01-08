/** ***********
 *
 * Contact
 *
 ************ */

// React / React Router
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { push } from 'connected-react-router';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';

// Rebass
import { Flex, Box } from 'rebass';

// Dependencies
import Hide from 'hidden-styled';

// Components
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import H1 from 'components/H1';
import H2 from 'components/H2';
import P from 'components/P';
import Footer from 'components/Footer';
import HomeButton from 'components/HomeButton';
import A from '../../components/A';
import ContactWrapper from './ContactWrapper';
import ContactTitle from './ContactTitle';
import ContactDescription from './ContactDescription';
import ContactImg from './ContactImg';
import SocialBadge from './SocialBadge';

// Imported Media
import contact from '../../images/BG/contact-HH.jpg';
import fb from '../../images/Social/fb.png';
import twtr from '../../images/Social/twtr.png';
import web from '../../images/Social/web.png';

const Contact = props => {
  const { redirect } = props;

  return (
    <React.Fragment>
      <Hide md lg>
        <HomeButton redirect={redirect} />
      </Hide>

      <Helmet>
        <title>Contact Page</title>
        <meta
          name="description"
          content="Want To Get In Touch? Here's How To Reach Us"
        />
      </Helmet>

      <Hero img={contact}>
        <Flex bg="#141414" flexWrap="wrap">
          <Box width={{ xs: 1 }}>
            <Nav redirect={redirect} />
          </Box>
        </Flex>
      </Hero>

      <Flex flexDirection="column">
        <Flex bg="#141414" py={2}>
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 10 / 12 }}>
            <ContactTitle>
              <H1>Contact</H1>
            </ContactTitle>
            <ContactDescription>
              <P>
                Nam sit amet est nibh. Donec suscipit nunc quam, sed gravida
                metus facilisis id. Integer ac dictum libero. Duis ut ipsum
                tortor. Nam sit amet est nibh. Donec suscipit nunc quam, sed
                gravida metus facilisis id. Integer ac dictum libero. Duis ut
                ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc quam,
                sed gravida metus facilisis id. Integer ac dictum libero. Duis
                ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                quam, sed gravida metus facilisis id. Integer ac dictum libero.
                Duis ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                quam, sed gravida metus facilisis id. Integer ac dictum libero.
                Duis ut ipsum tortor. Nam sit amet est nibh. Donec suscipit nunc
                quam, sed gravida metus facilisis id. ut ipsum tortor.
              </P>
            </ContactDescription>
          </Box>
          <Box width={{ xs: 1 / 12 }} />
        </Flex>
      </Flex>

      <Flex bg="#141414">
        <Box width={{ xs: 1 / 12 }} />

        <Box width={{ xs: 10 / 12 }}>
          <ContactTitle>
            <H2>Find Us Online</H2>
          </ContactTitle>

          <ContactWrapper>
            <Box width={{ xs: 4 / 12 }}>
              <A href="http://www.facebook.com/HoneyHiveGallery">
                <SocialBadge>
                  <ContactImg src={fb} />
                  <H1>Facebook.com/HoneyHiveGallery</H1>
                </SocialBadge>
              </A>
            </Box>
            <Box width={{ xs: 4 / 12 }}>
              <A href="https://twitter.com/honeyhivesf?lang=en">
                <SocialBadge>
                  <ContactImg src={twtr} />
                  <H1>Twitter/@HoneyHive</H1>
                </SocialBadge>
              </A>
            </Box>
            <Box width={{ xs: 4 / 12 }}>
              <A href="https://www.honeyhive.com/">
                <SocialBadge>
                  <ContactImg src={web} />
                  <H1>Website/www.HoneyHiveGallery.com</H1>
                </SocialBadge>
              </A>
            </Box>
          </ContactWrapper>
        </Box>

        <Box width={{ xs: 1 / 12 }} />
      </Flex>

      <Footer />
    </React.Fragment>
  );
};

Contact.propTypes = {
  redirect: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    redirect: url => dispatch(push(url)),
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Contact);
