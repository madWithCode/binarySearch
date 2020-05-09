/*
   find element inside array using binary search and return its index if found else return -1
*/

const arr = [1,2,3,4,5,6,7,8,9,10];
let start = 0, end = arr.length-1;
const num = 2;

const binarySearch = (arr) => {
	let mid = Math.floor((start+end)/2);
  if(start === end){
  	if(arr[start] === num){
    	return start;
    }else{
    	return -1;
    }
  } 

  if(arr[mid] === num){
  	return mid;
  }else if (arr[mid] > num){
  	end = mid-1;
  }else{
  	start = mid+1;
  }
  return binarySearch(arr);
}

console.log(binarySearch(arr));
