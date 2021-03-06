import { connect } from "react-redux";

import { signup, login } from "../../actions/session_actions";
import { clearErrors } from "../../actions/errors_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let processForm;

  if (formType === "signin") {
    processForm = login;
  } else {
    processForm = signup;
  }

  return {
    clearErrors: errors => dispatch(clearErrors(errors)),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
