import expect from 'expect';
import movieStoreHomeViewerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('movieStoreHomeViewerReducer test', () => {
  it('returns the initial state', () => {
    expect(movieStoreHomeViewerReducer(undefined, {})).toNotEqual(fromJS({}));
  });
});
