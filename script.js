/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

const climbingLeaderboard = (ranked, player) => {
    let results = [];
    const uniqueRanks = [...new Set(ranked)];
    let lowestRanking = uniqueRanks.length; 
      
    for(let game = 0; game < player.length; game++) {
      while(player[game] >= uniqueRanks[lowestRanking - 1]) {
        lowestRanking--;
      }
      results.push(lowestRanking + 1);
    }
    
    console.log(results);
    return results;
}

////////////////////////////////////////////////////////////////////////////////////////

function climbingLeaderboard(ranked, player) {
    // remove dublicates from the leaderboard
    const uniqueRanks = [...new Set(ranked)];
    console.log(uniqueRanks, player);
    let results = [];
    for(let game = 0; game < player.length; game++) {
      if(player[game] < uniqueRanks[uniqueRanks.length - 1]) {
        results.push(uniqueRanks.length + 1)
      }
      for(let rankings = 0; rankings < uniqueRanks.length; rankings++) {
        if(player[game] >= uniqueRanks[rankings]) {
          results.push(rankings + 1);
          break;
        }
      }
      
    }
    console.log(results);
    return results;

}

// above does not pass all cases, Terminated due to timeout

function climbingLeaderboard(ranked, player) {
    const uniqueRanks = [...new Set(ranked)];
    console.log(uniqueRanks, player);
    let results = [];
    for(let game = 0; game < player.length; game++) {
      let rankings = [...uniqueRanks, player[game]].sort((a, b) => b - a);
      results.push(rankings.indexOf(player[game]) + 1);
    }
    console.log(results);
    return results;
}

// above also Terminated due to timeout
