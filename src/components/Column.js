import React from 'react';

export default class Column extends React.Component {

    render() {
        return (
            <div className={`p-2 ${this.props.className ? this.props.className : ''}`} style={{ width: this.props.width }}>
                {this.props.children}
            </div>
        );
    }

}