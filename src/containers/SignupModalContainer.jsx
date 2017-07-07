import { connect } from 'react-redux';
import SignupModal from '../components/SignupModal';

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SignupModal);
