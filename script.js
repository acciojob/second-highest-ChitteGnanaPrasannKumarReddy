//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] !== highest) {
      secondHighest = arr[i];
    }
  }

  return secondHighest === -Infinity ? -Infinity : secondHighest;

	console.log(secondHighest([5, 1, 2, 3, 4])); 
	console.log(secondHighest([-1, -2, -3, -4, -5])); 
	console.log(secondHighest([])); 
	console.log(secondHighest([1])); 
	console.log(secondHighest([1, 1, 1, 1, 1])); 
	

	