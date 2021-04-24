import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { authorize_user } from '../../store/actions/authAction';

const LoginForm = (props) => {
  const { register, handleSubmit , errors} = useForm();


  const loginHandler = (data) => {
    console.log(data);
    props.$authorizeUser(data);

  }
    return ( 
      <div className="col-md-6 m-auto pt-5 pb-5">
        <form onSubmit={handleSubmit(loginHandler)}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              defaultValue=""
              ref={register({
                  required: "required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Entered value does not match email format"
                  }
                })} />
                
            {errors.email && <small id="emailHelp" className="form-text text-muted">
              {errors.email.message}
            </small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              defaultValue=""
              ref={register(
                {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5"
                  }
                }
              )} />
              {errors.password && <small id="emailHelp" className="form-text text-muted">
              {errors.password.message}
            </small>}
          </div>
          
          <button type="submit" className="btn btn-primary float-right">
            Login
          </button>
        </form>
      </div>
     );
}
const mapStateToProps  = (state) => {
  return {

  }
}

const mapDispatchToProps  = (dispatch) => {
  return  {
    $authorizeUser : (userData) => dispatch(authorize_user(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm) ;