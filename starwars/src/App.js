import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import CharacterList from './components/CharacterList'
import Character from './components/Character'
import { Container, Row, Col } from 'reactstrap';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [searchText, setSearchText] = useState({status: 'All', gender: 'All'});

  const searchHandler = (value) => {
    setSearchText(value);
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const data = CharacterList();

  return (
    <div className="App">
      {!data ? <div className="text-center">Loading...</div> :    
        <Container className="mt-1 mb-5">
          <Row>
            <Col className="my-2">
              <Filter  filter={searchHandler} />
            </Col>
          </Row>
          <div className="m-5">
            <p className="display-4 text-center">THE RICK AND MORTY</p>
          </div>
          <Row>
            {(searchText.status === 'All' && searchText.gender === 'All')
              ? data.slice(0, data.length).map(char => <Character character={char} key={char.created} />)
              : (searchText.status !== 'All') && (searchText.gender !== 'All')
                ? data
                    .filter(element => (element.status === searchText.status) && (element.gender === searchText.gender))
                    .slice(0, data.length).map(char => <Character character={char} key={char.created} />)
                : (searchText.status !== 'All') 
                  ? data
                      .filter(element => (element.status === searchText.status))
                      .slice(0, data.length).map(char => <Character character={char} key={char.created} />)
                  : data
                      .filter(element => (element.gender === searchText.gender))
                      .slice(0, data.length).map(char => <Character character={char} key={char.created} />)   
            }
          </Row>
        </Container>
      }
    </div>
  );
}

export default App;
