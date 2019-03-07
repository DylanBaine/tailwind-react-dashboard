import React from 'react';

export default class Row extends React.Component {

    render() {
        return (
            <div className="flex p-1">
                {this.props.children}
            </div>
        );
    }

}