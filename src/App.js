import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Images from './components/Images';
import ImageContainer from './components/ImageContainer';
// import Modal from 'react-modal';
import pix from "./pics";

class App extends Component {

  state = {
    pix,
    guessedPics: [],
    gameState: "Don't select the same image!",
    score: 0,
    highScore: 0,
    // modalIsOpen: false,
    // showModal: false,
    // handleOpenModal: this.handleOpenModal.bind(this),
    // handleCloseModal: this.handleCloseModal.bind(this)
  };
  
  // constructor () {
  //   super();
  //   this.state = {
  //     showModal: false
  //   };
    
  //   this.handleOpenModal = this.handleOpenModal.bind(this);
  //   this.handleCloseModal = this.handleCloseModal.bind(this);
  // }

  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
 
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  isUnique = (id) => {
    return !this.state.guessedPics.includes(id);
  }

  handleClick(id) {
    let score;
    let guessedPics;
    let highScore;
    if (!this.isUnique(id)) {
      score = 0;
      guessedPics = [];
      this.setState({score, guessedPics});
      window.alert("GAME OVER!!!!!!!");
        
    } else {
      const shuffledPics = this.getShuffledArray(this.state.pix); //add these to setState later...
      score = this.state.score + 1;
      guessedPics = this.state.guessedPics;
      highScore = this.state.highScore;
      
      //update highScore if needed
      if (score > highScore) {
        highScore = score;
      }
      //add to our guessedPics array of id's
      guessedPics.push(id);

      //finally, setState:
      this.setState({pix: shuffledPics, score, guessedPics, highScore})
    }
    // if(this.state.score === 12) {
    //   score = 0;
    //   guessedPics = [];
    //   highScore = 0;
    //   this.setState({score, guessedPics, highScore});
    //   window.alert("You win! Play again!");
    // }
  }

  getShuffledArray(array) {
      let picsArray = array;
      for (let i = picsArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picsArray[i], picsArray[j]] = [picsArray[j], picsArray[i]];
      }

      return picsArray;
  }

  render(){
    console.log(this.state.guessedPics)
    return (

      <div>
      
        <NavBar
        
        gameState = {this.state.gameState}
        score = {this.state.score}
        highScore = {this.state.highScore}

        />

        <Header />
        
        <ImageContainer>

          {this.state.pix.map(pic => (
            <Images 
              handleClick = {() => this.handleClick(pic.id)}
              id = {pic.id}
              image = {pic.image}
              key = {pic.id}
            />

          ))}

        </ImageContainer>

        {/* <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}

      </div>

    );
  }
}
// map through state
// you want to return an <Images/> component for each "mapping"
// inside of returned component you want to have a "key" and you want to have you "id" "src"

export default App;
