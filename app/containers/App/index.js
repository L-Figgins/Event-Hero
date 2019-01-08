/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hide from 'hidden-styled';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import EventShowcase from 'containers/EventShowcase/Loadable';
import About from 'containers/AboutPage/Loadable';
import Album from 'containers/AlbumPage/Loadable';
import Gallery from 'containers/GalleryPage/Loadable';
import Contact from 'containers/ContactPage/Loadable';

import Helmet from 'react-helmet';
import AOS from 'aos';
import GlobalStyle from '../../global-styles';
import Hamburger from '../../components/Hamburger';

export default function App() {
  AOS.init();
  return (
    <React.Fragment>
      <Helmet>
        <title>The Honey Hive | Music & Events</title>
        <meta name="application-name" content="Honey Hive Music & Events" />
        <meta
          name="description"
          content="The Honey Hive Music & Events Application"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          href="/../../images/Icons/apple-touch-icon-180x180.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="HoneyHive" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {/* FB Open Graph */}
        <meta charset="utf-8" />
        <meta property="fb:app_id" content="123456789" />
        <meta property="og:url" content="https://example.com/page.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Content Title" />
        <meta
          property="og:image"
          content="../../images/Social/TwitterCardImage.jpg"
        />
        <meta property="og:description" content="Description Here" />
        <meta property="og:site_name" content="Site Name" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@HoneyHiveSF" />
        <meta name="twitter:creator" content="@HoneyHiveSF" />
        <meta
          name="twitter:url"
          content="https://twitter.com/honeyhivesf?lang=en"
        />
        <meta
          name="twitter:title"
          content="The Honey Hive Music & Event Venue"
        />
        <meta
          name="twitter:description"
          content="Honey Hive Music & Events Venue. The Honey Hive Gallery is a hive for the community. A local art gallery that doubles as venue for up and coming music artists almost every weekend. Contact honeyhivegallery@gmail.com for booking"
        />
        <meta
          name="twitter:image"
          content="../../images/Social/TwitterCardImage.jpg"
        />
      </Helmet>

      <Hide md lg>
        <Hamburger />
      </Hide>

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/EventShowcase" component={EventShowcase} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route path="/Gallery/Album" component={Album} />
        <Route exact path="/Contact" component={Contact} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
