import React from 'react';

export default class Container extends React.Component {
    render() {
        return (
            <div className="w-full p-3">
                {this.props.children}
            </div>
        );
    }
}