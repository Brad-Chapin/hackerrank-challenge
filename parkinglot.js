function carParking(n, available) {
let assign = [999, 999];
let track = [];
for (let r = 0; r < n; r++){
    for (let s = 0; s < n; s++){
        if (available[r][n-1] !== 0) {
            track[r] = "full row";
            } else if (available[r][s] === 0){
            track.push(s);
            console.log("track: "+ track);
            break;
        }
    }
    }
    for (let i = 0; i < n; i++){
        if (track[i] < assign[1]){
            assign[0] = i;
            assign[1] = (track[i]);
            console.log("assign: " + assign);
        }
  }
        assign[0] = (assign[0] +1);
        assign[1] = (assign[1] +1);
        console.log("final: " + assign);
    if (track[n-1] == "full row") {
      return ([0, 0]);
    } else {
      return assign;
    }
}
