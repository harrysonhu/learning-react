import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
//import books from "../../reducers/books";
import { allBooksSelector } from "../../reducers/books";
import AddBookCtA from "../ctas/AddBookCtA";
import { fetchBooks } from "../../actions/books";

class DashboardPage extends Component {
  state = {
    loading: true
  };
  componentDidMount = () =>
    this.onInit(this.props).then(() => this.setState({ loading: false }));

  onInit = props => props.fetchBooks();

  renderContent = () => {
    const { isConfirmed, books } = this.props;
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    } else {
      if (isConfirmed && books.length === 0) {
        return <AddBookCtA />;
      } else {
        return <p>You have books!</p>;
      }
    }
  };

  render() {
    const { isConfirmed } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {this.renderContent()}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchBooks }
)(DashboardPage);

/* {loading ? <h1>Loading...</h1> : 
        {isConfirmed && books.length === 0 ? (
          <AddBookCtA />
        ) : (
          <p>You have books!</p>
        )} */
