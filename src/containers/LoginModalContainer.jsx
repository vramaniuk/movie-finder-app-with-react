import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(LoginModal);
