import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Navbar);
