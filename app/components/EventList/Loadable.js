import Loadable from 'loadable-components';
import LoadingIndicator from '../LoadingIndicator';

export default Loadable(() => import('./index'), {
  fallback: LoadingIndicator,
});
