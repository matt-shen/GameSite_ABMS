import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  rock: string = 'ROCK';
  paper: string = 'PAPER';
  scissors: string = 'SCISSORS';

  constructor() {}
  //return val between 0-2
  computerTurn() {
    return Math.floor(Math.random() * 3);
  }
  //-1 player loses , 0 tie, 1 player wins
  checkResult(playerChoice: number, computerChoice: number) {
    if (playerChoice == computerChoice) {
      return 0;
    }
    //0 rock, 1 paper , 2 scissor
    //rock scissor
    //rock paper
    //scissor paper
    else if (
      (playerChoice == 0 && computerChoice == 2) ||
      (playerChoice == 1 && computerChoice == 0) ||
      (playerChoice == 2 && computerChoice == 1)
    ) {
      return 1;
    }

    return -1;
  }
}
