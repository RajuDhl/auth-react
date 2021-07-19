import React from 'react';

const Login = () => {
    return (
            <form>
                {/*<img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />*/}
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="name@example.com" />

                <input type="password" className="form-control"  placeholder="Password" />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
    );
};

export default Login;