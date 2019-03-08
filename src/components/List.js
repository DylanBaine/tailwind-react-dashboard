import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {

    render() {
        return (
            <ul class="list m-0 p-0 w-full">
                {
                    this.props.items.map((item, i) => {
                        return (
                            <ListItem key={i} isChild={this.props.isChild} text={item.title} icon={item.icon} new={item.new} children={item.children} viewing={item.viewing}/>
                        );
                    })
                }
            </ul>
        );
    }

}