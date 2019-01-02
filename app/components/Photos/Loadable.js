/**
 *
 * Asynchronously loads the component for Photos
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
