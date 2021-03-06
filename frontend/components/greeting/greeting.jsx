import React from "react";
import { Link } from "react-router-dom";

const sessionLinks = () => (
  <div className="header-flex-2">
    <nav className="signin-signup">
      <Link to="/signin" className="signin-signup-1">
        Sign In
      </Link>
      <Link to="/signup" className="signin-signup-2">
        Get Started
      </Link>
    </nav>
  </div>
);

const userGreeting = (currentUser, logout) => {
  // TODO refactor into something else
  // let handleLogout = event => {
  //   event.preventDefault();
  //   return logout()
  //   .then(() => this.props.history.push(`/stories/${this.props.story.id}`)
  // }

  return (
    <hgroup className="header-group header-flex-2">
      <div className="header-group-1">
        <button className="input-btn-1" onClick={logout}>
          Sign Out
        </button>
      </div>

      <div className="header-group-2">
        <Link
          to={`/users/${currentUser.id}`}
          className="header-username header-group-2-a"
        >
          {currentUser.username}
        </Link>
        <Link to={`/users/${currentUser.id}`}>
          <i
            className="header-group-2-b fa fa-user-circle-o fa-3x"
            aria-hidden="true"
          />
        </Link>
      </div>
    </hgroup>
  );
};

const Greeting = ({ currentUser, logout }) =>
  currentUser ? userGreeting(currentUser, logout) : sessionLinks();

export default Greeting;
