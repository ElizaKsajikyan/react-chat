import React, {Component} from 'react';
import './Messages.scss';
export default class Messages extends Component {
    render() {
        return (
            <section className="col d-flex flex-column justify-content-between messages p-0 overflow-hidden">
                <div className="text-right position-sticky messages__settings">
                    <button className="text-info border-0 bg-transparent  messages__form__btn">
                        <i className="icon-cog"></i>
                    </button>
                </div>
                <div className="messages__container overflow-auto">
                    <div className="message d-flex">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                    <div className="message d-flex flex-row-reverse">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                    <div className="message d-flex">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                    <div className="message d-flex flex-row-reverse">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message,textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                    <div className="message d-flex">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                    <div className="message d-flex">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                    <div className="message d-flex">
                        <figure className="rounded-circle overflow-hidden m-0">
                            <img src={require('./../assets/images/butterfly.jpg')} className="img-fluid" alt=""/>
                        </figure>
                        <div className="mx-3">
                            <div className="bg-white rounded p-2 message__text">
                                <p className="mb-0">textt message</p>
                            </div>
                            <p className="message__time">09:20</p>
                        </div>
                    </div>
                </div>
                <form action="" className="d-flex messages__form w-100 bg-white align-items-center border-top">
                    <textarea name="" id="" className="h-100 rounded border-0 col overflow-hidden"
                              placeholder="type message..."></textarea>
                    <button className="text-info border-0 bg-transparent  messages__form__btn">
                        <i className="icon-telegram"></i>
                    </button>
                </form>
            </section>
        )
    }
}
