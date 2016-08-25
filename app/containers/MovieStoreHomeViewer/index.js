import { connect } from 'react-redux';
import selectMovieStoreHomeViewer from './selectors';
import MovieStoreHomeView from '../../components/MovieStoreHomeView';

const mapStateToProps = selectMovieStoreHomeViewer();

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieStoreHomeView);
