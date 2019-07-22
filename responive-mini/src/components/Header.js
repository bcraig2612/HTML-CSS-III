import React, { Component } from 'react';

class Header extends Component {
    constructor (props){
        super (props);
        this.state = {
            toggleSideBar: false
        };
        this.toggleSideBarFunc = this.toggleSideBarFunc.bind(this);
    }

toggleSideBarFunc() {
    this.setState(prevState => {
        return {
            toggleSideBar: !prevState.toggleSideBar
        }
    });
}

    render() {
        return <header>
            <div>
                <div className='logo'>
                    <a href='#/services'> Start Bootcamp </a>
                </div>
                <button onClick={ this.toggleSideBarFunc }> Click </button>
                <nav className={this.state.toggleSideBar ? "show" : ""}>
                    <ul>
                        <li> <a href='#/services'> Services </a> </li>
                        <li> <a href='#/team'> Team </a> </li>
                        <li> <a href='#/portfolio'> Portfolio </a> </li>
                        <li> <a href='#/about'> About </a> </li>
                        <li> <a href='#/about'> About </a> </li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}
export default Header;