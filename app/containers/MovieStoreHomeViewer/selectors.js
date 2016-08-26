import { createSelector } from 'reselect';

/**
 * Direct selector to the MovieStoreHomeViewer state domain
 */
const selectMovieStoreHomeViewerDomain = () => state => state.get('MovieStoreHomeViewer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MovieStoreHomeViewer
 */

const selectMovieStoreHomeViewer = () => createSelector(
  selectMovieStoreHomeViewerDomain(),
  (substate) => substate.toJS()
);

export default selectMovieStoreHomeViewer;
export {
  selectMovieStoreHomeViewerDomain,
  selectMovieStoreHomeViewer,
};
