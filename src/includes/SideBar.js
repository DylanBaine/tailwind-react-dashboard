import React from 'react';

export default class SideBar extends React.Component {
    render() {
        return (
            <div>
                <div id="sidebar" className={this.props.showing ? 'sidebar-open' : 'sidebar-closed'}>
                    <div className="sidebar-header">
                        <div className="avatar"></div>
                    </div>
                    <div className="sidebar-body">
                        Side Bar Side Bar Side Bar
                    </div>
                </div>
            </div>
        );
    }
}