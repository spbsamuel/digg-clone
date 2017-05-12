import {connect} from 'react-redux';
import NavigationalButtons from '../components/NavigationalButtons'
import {pagesAvailable} from '../selectors/topics'

const mapStateToProps = ({topics:{submitted}}, {pageNo}) => {
  return {
    pageNo,
    maxPages: pagesAvailable(submitted),
  }
};

export default connect(mapStateToProps)(NavigationalButtons);
