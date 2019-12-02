import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';
import jsonplaceholder from '../api/jsonplaceholder';
import ErrorBoundry from '../component/ErrorBoundry';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        const response = await jsonplaceholder.get('/users');
        this.setState({ robots: response.data });
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    render () {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            return (
                <h1>Loading</h1>
            );
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>                    
                </div>
            );  
        }          
    }        
}

export default App;