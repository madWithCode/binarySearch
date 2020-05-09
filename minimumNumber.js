
const arr = [1,2,3,4,5,6,7,8,9,10];
let start = 0, end = arr.length-1;

const binarySearch = (arr) => {
	let mid = Math.floor((start+end)/2);
  if(start === end){
  	return start;
  }

  if(arr[mid] < arr[mid-1]){
  	return mid;
  }else {
  	if(arr[mid] > arr[end]){
    	start = mid+1;
    }else{
    	end = mid -1;
    }
  }
  return binarySearch(arr);
}

console.log(binarySearch(arr));
