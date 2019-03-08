import React from 'react';
import List from './List';

export default class ListItem extends React.Component {

    constructor() {
        super();
        this.state = {
            childrenOpen: false,
        };
    }

    openChildrenList() {
        if (this.hasChildren()) {
            this.setState({childrenOpen: !this.state.childrenOpen})
        }
    }

    hasChildren() {
        return this.props.children && this.props.children.length;
    }

    showChildren() {
        return this.hasChildren() && this.state.childrenOpen;
    }

    render() {
        return (
            <li onClick={() => this.openChildrenList()}>
                <div
                    className={`flex ${this.props.viewing ? 'bg-blue-dark text-white' : 'bg-grey-light'} hover:bg-grey cursor-pointer items-center relative`}
                    style={{ padding: '10px 0', borderBottom: 'solid 1px grey', borderTop: 'solid 1px grey', height: '50px' }}
                >
                    <div style={{ width: '70px' }} className="text-center">
                        <i style={this.props.isChild && !this.props.viewing ? {opacity: '.4'} : {opacity: '1'}} className={`fa fa-${this.props.icon}`}></i>
                    </div>
                    <div className="w-2/3 flex items-center">
                        {this.props.text}
                        {
                            this.props.new &&
                            <div className="ml-1 chip success">New</div>
                        }
                    </div>
                        {
                            this.hasChildren() &&
                            <div className="absolute" style={{right: '15px'}}>
                                <i className={`fa fa-sort-${this.state.childrenOpen ? 'up' : 'down'}`}></i>
                            </div>
                        }
                </div>
                {
                    this.showChildren() &&
                    <List
                        isChild={true}
                        items={this.props.children}
                    />
                }
            </li>
        );
    }

}