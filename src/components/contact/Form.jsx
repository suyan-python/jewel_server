import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      lastname: "",
      email: "",
      phone: "",
      comments: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handelLastnameChange = () => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handelEmailChange = () => {
    this.setState({
      email: event.target.value,
    });
  };

  handelPhoneChange = () => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(`${this.state.username}, your form is Submitted`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="">
        <div className="hero px-7">
          <div className="head">
            <div className="title text-4xl font-medium">Get in Touch</div>
            <div className="sub-title my-2">You can reach us anytime</div>
          </div>

          <div className="bottom flex flex-col items-center">
            <div className="py-5">
              <div className="flex flex-row gap-7 justify-between">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  className="w-2/4"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  value={this.state.lastname}
                  onChange={this.handelLastnameChange}
                  className="w-2/4"
                  placeholder="Last Name"
                />
              </div>
              <div className="mail flex flex-col items-center  my-3">
                <input
                  type="mail"
                  value={this.state.email}
                  onChange={this.handelEmailChange}
                  className="w-full"
                  placeholder="Your Email"
                />
              </div>
              <div className="phone flex flex-col items-center">
                <input
                  type="number"
                  value={this.state.phone}
                  onChange={this.handelPhoneChange}
                  className="w-full"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <textarea
                value={this.state.comments}
                onChange={this.handleCommentsChange}
                placeholder="How can we Help?"
                className="w-full mx-4 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full py-1 px-10 my-3 hover:text-slate-300"
              >
                Submit
              </button>
              <div className="agreement text-center w-4/5">
                <p className="text-slate-500">
                  By contacting us, you agree to out <b>Terms of service</b> and
                  <b> Privacy Policy</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
