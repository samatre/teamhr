import React, { Component } from "react";
import EmpList from '../components/EmpList';
import SearchBox from '../components/SearchBox';
import { people } from '../data';
import Scroll from "../components/Scroll";


class App extends Component {
    constructor() {
        super();
        this.state = {
            empList: people,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredPeople = this.state.empList.filter(p => {
            return p.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <EmpList empList={filteredPeople} />
                </Scroll>
            </div>

        );
    }

}

export default App;