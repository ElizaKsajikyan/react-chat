import React, {Component} from 'react';
import './App.scss';
import Sidebar from '../Sidebar';
import Messages from '../Messages';
export default class App extends Component {
    render() {
        return (
            <main className="d-flex">
            <Sidebar/>
            <Messages/>
            </main>
        );
    }
}