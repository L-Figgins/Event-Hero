/**
 *
 * Asynchronously loads the component for MainPage
 *
 */

import Loadable from 'loadable-components';
import LoadingIndicator from '../../components/LoadingIndicator';

export default Loadable(() => import('./index'), {
  fallback: LoadingIndicator,
});
