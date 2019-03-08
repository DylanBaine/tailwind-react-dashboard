import React from 'react';
import List from '../components/List';

export default class SideBar extends React.Component {
    render() {
        return (
            <div>
                <div id="sidebar" className={this.props.showing ? 'sidebar-open' : 'sidebar-closed'}>
                    <div className="sidebar-header">
                        <div className="avatar"></div>
                    </div>
                    <div className="sidebar-body">
                        <List
                            isChild={false}
                            items={[
                                {
                                    title: 'Publisher',
                                    icon: 'bullhorn',
                                    new: true,
                                    children: [
                                        {
                                            title: 'Drafts',
                                            icon: 'images'
                                        },
                                        {
                                            title: 'Scheduled Posts',
                                            icon: 'edit'
                                        },
                                        {
                                            title: 'Published Posts',
                                            icon: 'search'
                                        },
                                        {
                                            title: 'Your Schedule',
                                            icon: 'calendar-alt'
                                        }
                                    ]
                                },
                                {
                                    title: 'Insights',
                                    icon: 'chart-bar',
                                    new: false,
                                    children: [
                                        {
                                            title: 'Profile Inspector',
                                            icon: 'camera',
                                            viewing: true
                                        },
                                        {
                                            title: 'Post Inspector',
                                            icon: 'eye'
                                        },
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}