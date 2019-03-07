import React from 'react';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menuIcon: "fa-bars"
        };
    }
    handleClick() {
        this.props.onChangeSidebar();
        this.state.menuIcon === 'fa-bars' ?
            this.setState({
                menuIcon: 'fa-times'
            }) : this.setState({
                menuIcon: 'fa-bars'
            })
    }

    render() {
        return (
            <div id="header">
                <i
                    onClick={() => this.handleClick()}
                    title={this.state.menuIcon === 'fa-times' ? 'Close Menu' : 'Open Menu'}
                    className={`menu-button fa ${this.state.menuIcon}`}
                ></i>
                <h2 className="ml-3">Profile Performance</h2>
            </div>
        );
    }
}