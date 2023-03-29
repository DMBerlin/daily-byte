/**
 * This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
 * Ex: Given the following strings...
 * "LR", return true
 * "URURD", return false
 * "RUULLDRD", return true
*/


const commands = [
    "LR",
    "URURD",
    "RUULLDRD"
];

function cleaner (params)  {
    const map = [[0,0]];
    // O(n)
    for (let param of params) {
        let [x, y] = map[map.length-1];
        if (param === 'U') {
            y--;
            map.push([x, y]);
        } else if (param === 'D') {
            y++;
            map.push([x, y]);
        } else if (param === 'R') {
            x++;
            map.push([x, y]);
        } else if (param === 'L') {
            x--;
            map.push([x, y]);
        }
    }
    
    return map[0].toString() === map[map.length-1].toString()
}


commands.forEach((command) => console.log(command, cleaner(command)));