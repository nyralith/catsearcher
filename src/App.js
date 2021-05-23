import './App.css';
import { Component } from 'react';
import { Cardlist } from './Components/Card-list/card-list.component.jsx';
import { SearchBox } from './Components/Searchbox/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Cat Rolodex</h1>
        <SearchBox
          placeholder='Search kitties'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
