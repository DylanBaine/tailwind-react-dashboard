import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <div
                onClick={() => this.props.onClick()} 
                className={`card border rounded border-grey-light bg-${this.props.bgColor} text-${this.props.color} ${this.props.className}`}
            >
                <div className={`card-title p-0 border-b h-12 bg-${this.props.bgColor} relative`}>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, .05)', top: '0', left: '0', right: '0', bottom: '0' }} className="absolute p-2 flex justify-center items-center">
                        {
                            this.props.titleIcon &&
                            <i className={`fa fa-${this.props.titleIcon} mr-2`}></i>
                        }
                        <h3>{this.props.title}</h3>
                    </div>
                </div>
                <div className="p-2">
                    {this.props.children}
                </div>
            </div>
        );
    }

}