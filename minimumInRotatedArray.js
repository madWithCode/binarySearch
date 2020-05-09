/*
* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
* Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

	(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

	Find the minimum element.
*/

var findMin = function(arr) {
let start = 0, end = arr.length-1;
    if(end === 0){
        return arr[end];
    }
    
    if(arr[0] < arr[end]){
    	return arr[0];
    }
    while(start <= end){
  	
        let mid = start + Math.floor((end - start)/2);

        if(arr[mid] > arr[mid+1]){
          return arr[mid+1];
        } 
		
        if(arr[mid] < arr[mid-1]){
            return arr[mid];
        }
    
        if(arr[mid] > arr[start]){
           start = mid+1;
        }else{
           end = mid -1;
        }
	}
};
