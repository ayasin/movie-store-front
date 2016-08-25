import { createSelector } from 'reselect';

/**
 * Direct selector to the facultyGradeViewer state domain
 */
const selectMovieStoreHomeViewerDomain = () => state => state.get('MovieStoreHomeViewer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FacultyGradeViewer
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
