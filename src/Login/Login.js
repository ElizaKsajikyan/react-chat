import React, {Component} from 'react';
import './Login.scss'

export default class Login extends Component {
    render() {
        return (
            <main className="main  position-relative ">
            <section className="main__container h-100 container-fluid">
            </section>
            <section className="container login h-100 d-flex align-items-center position-absolute mx-auto">
                <form className="login__form m-auto shadow rounded mb-0" action="">
                    <h2 className="mt-0 mb-4 login__form__title text-uppercase text-center">Login</h2>
                    <div className="form-group position-relative pb-4">
                        <input type="email" className="form-control is-invalid" placeholder="Type your email..."/>
                        <p className="invalid-feedback mb-0 position-absolute">Error</p>
                    </div>
                    <div className="form-group position-relative pb-4">
                        <input type="password" className="form-control is-invalid" placeholder="Type your password..."/>
                        <p className="invalid-feedback mb-0 position-absolute">Error</p>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control btn btn-info" value="Login"/>
                    </div>
                </form>
            </section>
            </main>
        )
    }
}