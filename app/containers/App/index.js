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

import GlobalStyle from '../../global-styles';
import Hamburger from '../../components/Hamburger';

export default function App() {
  // yet another example of React.Fragment uses //
  return (
    <>
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
    </>
  );
}
