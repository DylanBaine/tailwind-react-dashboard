import React from 'react';
import Header from './includes/Header';
import SideBar from './includes/SideBar';
import Body from './components/Body';
import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';
import Card from './components/Card';

export default class App extends React.Component {
    headerCards = [
        {
            title: '327 Followers',
            active: true,
        },
        {
            title: '191 Posts',
        },
        {
            title: 'Comments',
            titleIcon: 'lock',
        },
        {
            title: 'Likes',
            titleIcon: 'lock',
        }
    ];
    constructor() {
        super();
        this.state = {
            sideBar: false,
            headerCards: this.headerCards
        };
    }
    getActiveCard() {
        return this.state.headerCards.find(card => card.active == true);
    }
    selectCard(card) {
        const { headerCards } = this.state;
        const index = headerCards.indexOf(card);
        this.setState({
            headerCards: headerCards.map((original, key) => {
                return {
                    ...original,
                    active: key == index ? true : false,
                };
            }),
        });
    }
    render() {
        return (
            <div id="app-container">
                <SideBar showing={this.state.sideBar} />
                <Body>
                    <Header onChangeSidebar={() => this.setState({ sideBar: !this.state.sideBar })} />
                    <Container>
                        <div className="mb-4">
                            <Row>
                                {
                                    this.state.headerCards.map(card => {
                                        return (
                                            <Column key={card.title} className="text-center" width="25%">
                                                <Card
                                                    className={`cursor-pointer ${card.active ? 'shadow-lg' : 'hover:shadow-md'}`}
                                                    onClick={() => this.selectCard(card)}
                                                    titleIcon={card.titleIcon} title={card.title}
                                                >
                                                    Last 24 Hours <i className="fa fa-tag"></i>
                                                </Card>
                                            </Column>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                        <div>
                            {this.getActiveCard().title}
                        </div>
                    </Container>
                </Body>
            </div >
        );
    }
}