import React from "react";
import Attack from '../images/Attack.jpg'
import Defend from '../images/Defend.jpg'

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
      lastPlay:"",
      gameStatus:""
    }
    // we have to do binding as below when we use regular function syntax instead of arrow functions
    // this.handleAttack = this.handleAttack.bind(this)
    // this.handleDefence = this.handleDefence.bind(this)
    // this.handleRandomPlay = this.handleRandomPlay.bind(this)
  }
  handleAttack=()=>{
    this.setState((previousState)=>{
      let newCount = previousState.count + Math.round(Math.random()*10)
      if(newCount >= 10){
        var winner = "Attacker Wins"
      }
      if (newCount>-10 && newCount<10){
        winner=""
      }
      if(newCount<=-10){
        winner="Defender Wins"
      }
      return {
        count : newCount,
        lastPlay: "Attacked",
        gameStatus : winner
      }
    })
  }
  handleDefence=()=>{
    this.setState((previousState)=>{
      let newCount = previousState.count - Math.round(Math.random()*10)
      if(newCount <= -10){
        var loser = "Defender Wins"
      }
      if (newCount>-10 && newCount<10){
        loser=""
      }
      if(newCount>=10){
        loser="Attacker Wins"
      }
      return {
        count : newCount,
        lastPlay: "Defended",
        gameStatus : loser
      }
    })
  }
  handleRandomPlay=()=>{
    let playMode = Math.round(Math.random())
    if(playMode == 0){
      this.handleAttack()
    }
    else{
      this.handleDefence()
    }
  }
  handleReset=()=>{
    this.setState((previousState)=>{
      return{
        count:0,
        lastPlay:""
      }
    })
  }
    render() {
      return(
        <div className="row text-center">
          <h2 style={{color:"black"}}>Game Score : {this.state.count}</h2>
          <p>You will win at +10 and lose at -10 points</p>
          <p>Lets Play!</p>
          <h2>Game Status : {this.state.gameStatus}</h2>
          <h2>Last Play : {this.state.lastPlay}</h2>
          <div className="col-6 col-md-2 offset-md-3">
            <img style={{
              width:"100%",
              cursor:"pointer",
              border:"1px solid green",
            }} className="p-4 rounded" src={Attack} onClick={this.handleAttack} />
          </div>
          <div className="col-6 col-md-2 offset-md-3">
            <img style={{
              width:"100%",
              cursor:"pointer",
              border:"1px solid green",
            }} className="p-4 rounded" src={Defend} onClick={this.handleDefence} />
          </div>
          <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
        </div>
      )
      ;
    }
  }
export default Counter