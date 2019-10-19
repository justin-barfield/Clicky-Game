import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Images from './components/Images';
import ImageContainer from './components/ImageContainer';
// import { oneOf } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/prop-types';
import pix from "./pics";

class App extends Component {

  state = {
    pix,
    guessedPics: [],
    gameState: "Don't select the same image!",
    score: 0,
    highScore: 0
    
  };

  isUnique = (id) => {
    return !this.state.guessedPics.includes(id);
  }

  handleClick(id) {
    if (!this.isUnique(id)) {
        window.alert("GAME OVER!!!!!!!");
        // this.setState({})
    } else {
      const shuffledPics = this.getShuffledArray(this.state.pix); //add these to setState later...
      const score = this.state.score + 1;
      let guessedPics = this.state.guessedPics;
      let highScore = this.state.highScore;
      
      //update highScore if needed
      if (score > highScore) {
        highScore = score;
      }
      //add to our guessedPics array of id's
      guessedPics.push(id);

      //finally, setState:
      this.setState({pix: shuffledPics, score, guessedPics, highScore})
    }
  }

  getShuffledArray(array) {
      let picsArray = array;
      for (let i = picsArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picsArray[i], picsArray[j]] = [picsArray[j], picsArray[i]];
      }

      return picsArray;
  }
    // if(this.state.guessedPics.length > 0) {
    //   this.state.guessedPics.forEach(imageIds => {
    //     if(id === imageIds ) {
    //       debugger;
    //       this.setState({gameState: 'You lose', score: 0, guessedPics:[]});
    //     } else {
    //       debugger;
    //       if(this.state.highScore <= this.state.score && this.state.gameState !== "You lose") {
    //         console.log("first bs");
    //         console.log(this.state.score);
    //         console.log(this.state.gameState);
    //         this.setState({highScore: this.state.highScore +1});
    //       }
    //       this.setState({guessedPics:[...this.state.guessedPics, id], score: this.state.score +1})
    //     }
    //   })  
    // } else {
    //   this.setState({guessedPics:[...this.state.guessedPics, id], score: this.state.score +1})
    //   console.log("guessedPics", this.state.guessedPics)
    //   if(this.state.highScore <= this.state.score) {
    //     console.log("second bs")
    //     this.setState({highScore: this.state.highScore +1})
    //   }
    // }

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

      </div>

    );
  }
}
// map through state
// you want to return an <Images/> component for each "mapping"
// inside of returned component you want to have a "key" and you want to have you "id" "src"

export default App;
