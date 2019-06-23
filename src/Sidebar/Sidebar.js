import React, {Component} from 'react';
import './Sidebar.scss';

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="chat-sidebar border-right d-flex flex-column justify-content-between">
                <ul className="list-unstyled users-list">
                    <li className="user d-flex align-items-center">
                        <figure className="user__image mb-0 rounded-circle overflow-hidden">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt="" />
                        </figure>
                        <p className="user__name mb-0 text-truncate col position-relative">Name Surname
                            <span className="user__status bg-success rounded-circle d-block position-absolute"></span></p>
                    </li>
                    <li className="user d-flex align-items-center">
                        <figure className="user__image mb-0 rounded-circle overflow-hidden">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt="" />
                        </figure>
                        <p className="user__name mb-0 text-truncate col position-relative">Name Surname
                            <span className="user__status bg-success rounded-circle d-block position-absolute"></span></p>
                    </li>
                    <li className="user d-flex align-items-center active">
                        <figure className="user__image mb-0 rounded-circle overflow-hidden">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt="" />
                        </figure>
                        <p className="user__name mb-0 text-truncate col position-relative">Name Surname
                            <span className="user__status bg-success rounded-circle d-block position-absolute"></span></p>
                    </li>
                    <li className="user d-flex align-items-center">
                        <figure className="user__image mb-0 rounded-circle overflow-hidden">
                            <img src={require('./../assets/images/login-bg.jpg')} className="img-fluid" alt="" />
                        </figure>
                        <p className="user__name mb-0 text-truncate col position-relative">Name Surname
                            <span className="user__status bg-success rounded-circle d-block position-absolute"></span></p>
                    </li>

                </ul>
                <footer className="border-top chat-sidebar__footer text-right">
                    <button className="text-info border-0 bg-transparent  chat-sidebar__footer__btn">
                        <i className="icon-logout"></i>
                    </button>
                </footer>
            </aside>
        )
    }
}