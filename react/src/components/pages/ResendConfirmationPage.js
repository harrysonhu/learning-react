import React from "react";
import PropTypes from "prop-types";
import { Message, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { resendConfirmation } from "../../actions/auth";
import ResendConfirmationForm from "../forms/ResendConfirmationForm";

class ResendConfirmationPage extends React.Component {
  state = {
    data: {
      email: ""
    },
    success: false
  };

  submit = data =>
    this.props
      .resendConfirmation(data)
      .then(() => this.setState({ success: true }));

  render() {
    const { success } = this.state;

    return (
      <div>
        {success ? (
          <Message success icon>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>The email has been sent</Message.Header>
            </Message.Content>
          </Message>
        ) : (
          <ResendConfirmationForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ResendConfirmationPage.propTypes = {
  resendConfirmation: PropTypes.func.isRequired
};

export default connect(
  null,
  { resendConfirmation }
)(ResendConfirmationPage);
