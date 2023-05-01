/**
 * This question is asked by Google.
 * 
 * Create a class CallCounter that tracks the number of calls a client has made within the last 3 seconds.
 * Your class should contain one method, ping(int t) that receives the current timestamp (in milliseconds)
 * of a new call being made and returns the number of calls made within the last 3 seconds.
 * 
 * Note: you may assume that the time associated with each subsequent call to ping is strictly increasing.
 * 
 * Ex: Given the following calls to ping…
 * 
 * ping(1), return 1 (1 call within the last 3 seconds)
 * ping(300), return 2 (2 calls within the last 3 seconds)
 * ping(3000), return 3 (3 calls within the last 3 seconds)
 * ping(3002), return 3 (3 calls within the last 3 seconds)
 * ping(7000), return 1 (1 call within the last 3 seconds)
 */

const RecentCounter = function() {
  this.stream = [];
};

RecentCounter.prototype.ping = function(t) {
  this.stream.push(t); // Everytime we recieve a ping, add the time to the stream of integers

  /**
  * To exclude the times that are not included within the range of t - 3000,
  * we remove the first element from the stream while it is less than the calculated range 
  */
  while(this.stream[0] < t - 3000){ 
      this.stream.shift();
  } 
  // When the loop ends the length of calls will be the length of the array
  return this.stream.length;
};