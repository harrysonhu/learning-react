import React from "react";
import { connect } from "react-redux";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { allBooksSelector } from "../../reducers/books";

const TopNavigation = ({ user, logout, hasBooks }) => {
  return (
    <div>
      {user.confirmed && (
        <Menu secondary pointing>
          <Menu.Item as={Link} to="/dashboard">
            Dashboard
          </Menu.Item>
          {hasBooks && (
            <Menu.Item as={Link} to="/books/new">
              Add New Book
            </Menu.Item>
          )}
          <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      )}
    </div>
  );
};

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(TopNavigation);
