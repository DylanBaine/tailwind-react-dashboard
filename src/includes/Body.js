import React from 'react';

export default class Body extends React.Component {

    render() {
        return (
            <div className="application-body">
                {this.props.children}
            </div>
        );
    }

}