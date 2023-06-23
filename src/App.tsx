// import {Component} from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rerender");

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => setMonsters(users))
    //   .catch(err => console.error(err));
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((elem) => {
      return elem.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App" >
      <h1>Monster Rolodex </h1>
      < SearchBox className='search-monster' onChangeHandler={onChangeSearch} placeholder='Enter Monster Name' />
      <CardList monsters={filteredMonsters} className='monsters-card-list' />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }

//   }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({monsters: users}))
//       .catch(err => console.error(err));
//     }

//   onChangeSearch = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState({searchField});
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onChangeSearch } = this;

//     const filteredMonsters = monsters.filter((elem) => {
//       return elem.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1>Monster Rolodex</h1>
//         <SearchBox className='search-monster' onChangeHandler = {onChangeSearch} placeholder = 'Enter Monster Name'/>
//         <CardList monsters={filteredMonsters} className='monsters-card-list'/>
//       </div>
//     );
//   }
// }

export default App;
