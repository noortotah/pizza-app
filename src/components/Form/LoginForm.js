import React, { Component } from 'react';

class LoginForm extends Component {
  state = { 
    errors : {}
   }

  loginHandler = (event) => {
    event.preventDefault();
    console.log(event);
  }
  render() { 
    return ( 
      <div className="col-md-6 m-auto pt-5 pb-5">
        <form onSubmit={this.loginHandler}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            {this.state.errors.email && <small id="emailHelp" className="form-text text-muted">
              Email that you have used while registration.
            </small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary float-right">
            Login
          </button>
        </form>
      </div>
     );
  }
}
 
export default LoginForm;