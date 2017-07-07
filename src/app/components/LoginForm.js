import React from 'react';

const LoginForm = (props) => {

  let usernameInput, passwordInput = null;
  console.log(`loginError: ${props.loginError}`);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      // Assemble data into object
      var input = {
        email: usernameInput.value,
        password: passwordInput.value
      };
      // Call method from parent component to handle submission
      props.submitLogin(input);
      // Reset form
      e.target.reset();
    }}
    className="form-horizontal"
    >
      <div className="input-group">
        <label className="col-sm-3 control-label">Username: </label>
        <div className="col-sm-9">
          <input
            type="text"
            name="username"
            ref={node => usernameInput = node}
            className="form-control" />
        </div>
      </div>

      <br/>

      <div className="input-group">
        <label className="col-sm-3 control-label">Password: </label>
        <div className="col-sm-9">
          <input
            type="text"
            name="password"
            ref={node => passwordInput = node}
            className="form-control" />
        </div>
      </div>

      <div className="input-group">
        <div className="col-sm-offset-2 col-sm-10">
          <input type="submit" className="btn btn-default"/>
        </div>
      </div>

      {props.loginError}
    </form>
  );
};

export default LoginForm;
