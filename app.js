/* Description:
John has bought a new house and found a diary of previous house owner,
describing a single trip. Also there were tickets insdie with source and destination ProcessingInstruction,
but without dates. Help John finding orjinal route of the trip.
 Task:
Write a funciton that accepts array of tickets , where ticket has format [source:String, destination:string]
and returns comma separated countries in order of visiting.
example:
ticket:[['JPN','PHL'],['BRA','UAE'],['USA','BRA'],['UAE','JPN']] 
result: 'USA, BRA, UAE, JPN, PHL' */
const tickets = [
  ["JPN", "PHL"],
  ["USA", "BRA"],
  ["UAE", "JPN"],
  ["BRA", "UAE"],
];
const test = (arr) => {
  const route = arr.pop();
  let i = 0;
  while (i < arr.length) {
    if (route[0] == arr[i][1]) {
      route.unshift(arr[i][0]);
      i = 0;
    } else if (route[route.length - 1] == arr[i][0]) {
      route.push(arr[i][1]);
      i = 0;
    } else i++;
  }
  return route.toString();
};
console.log(test(tickets));
