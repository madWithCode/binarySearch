
https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

  (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

  You are given a target value to search. If found in the array return its index, otherwise return -1.
 */
 
var search = function(nums, target) {
    const pivotPoint = findPivot(nums);
    let start = 0 , end = nums.length-1;
    if(nums[pivotPoint] === target){
        return pivotPoint;
    }else{
        if(pivotPoint === end){
            end -= 1;
        }else if(target <= nums[end]){
            start = pivotPoint+1;
        }else if(target <= nums[pivotPoint-1]){
            end = pivotPoint-1;
        }
    }
    return binarySearch(nums, target, start, end);
};

const binarySearch = (nums, target, start, end) => {
    if(nums[start] === target){
        return start;
    }
    if(nums[end] === target){
        return end;
    }
    
    while(start <= end){
  	    let mid = start + Math.floor((end - start)/2);
        
        if(nums[mid] === target){
            return mid;
        }else if(target > nums[mid]){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return -1;
}

const findPivot = (arr) => {
    let start = 0, end = arr.length-1;
    if(end === 0){
    	return end;
    }
    
    if(arr[0] < arr[end]){
    	return 0;
    }
    while(start <= end){
  	
        let mid = start + Math.floor((end - start)/2);

        if(arr[mid] > arr[mid+1]){
          return mid+1;
        } 

        if(arr[mid] < arr[mid-1]){
            return mid;
        }

        if(arr[mid] > arr[start]){
           start = mid+1;
        }else{
           end = mid -1;
        }
	}
}
