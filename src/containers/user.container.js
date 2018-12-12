import { connect } from 'react-redux'
import * as userActions from '../actions/user.action'
import { bindActionCreators } from 'redux'
import { UserComponent } from '../components/user.component';

const mapStateToProps = state => ({
  userState: state.userState,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userActions, dispatch)
})

// Connect component to Redux store
export const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent)

