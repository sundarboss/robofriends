import React from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';
import ErrorBoundry from '../component/ErrorBoundry';
import { setSearchField, requestForRobots } from '../actions';


class App extends React.Component {
    
    componentDidMount() {
        this.props.requestForRobots();
    }


    //This part can be used if we like to mention only the action name in the connect function.
    //Here the action will be dispatched automatically. No need to dispatch manually
    onSearchChange = (e) => {
        this.props.setSearchField(e.target.value);
    }

    

    render () {
        const { searchField, robots } = this.props;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        if (robots.length === 0) {
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

//This code block is used if we like to dispatch the action manually.
//const mapDispatchToProps = (dispatch) => {
//    return {
//        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
//    };
//}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots
    };
}

//export default connect(mapStateToProps, mapDispatchToProps)(App);

//This line of code is used to if we dispatch the action automatically. We just mention the action name.
export default connect(mapStateToProps, { setSearchField, requestForRobots })(App);