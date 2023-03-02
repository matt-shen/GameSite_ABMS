import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  playerChoice: number = -2;
  computerChoice: number = -2;
  rock: string = 'ROCK';
  paper: string = 'PAPER';
  scissors: string = 'SCISSORS';
  result: number = 0;

  playerScore = 0;
  computerScore = 0;

  whichRound: number = 0;

  reset() {
    this.whichRound = 0;
    this.playerScore = 0;
    this.computerScore = 0;
  }

  transformToStr(i: number) {
    if (i == 0) {
      return this.rock;
    }
    if (i == 1) {
      return this.paper;
    }
    if (i == 2) {
      return this.scissors;
    }
    return this.scissors;
  }

  constructor() {}
  //return val between 0-2
  computerTurn() {
    return Math.floor(Math.random() * 3);
  }

  //-1 player loses , 0 tie, 1 player wins
  public checkResult(playerChoice: number) {
    this.computerChoice = this.computerTurn();
    this.whichRound++;
    if (playerChoice == this.computerChoice) {
      this.result = 0;
      return 0;
    }
    //0 rock, 1 paper , 2 scissor
    //rock scissor
    //rock paper
    //scissor paper
    else if (
      (playerChoice == 0 && this.computerChoice == 2) ||
      (playerChoice == 1 && this.computerChoice == 0) ||
      (playerChoice == 2 && this.computerChoice == 1)
    ) {
      this.result = 1;
      this.playerScore++;
      return 1;
    }
    this.computerScore++;
    this.result = -1;
    return -1;
  }
}
