/*
	Assumptions: 

	1) Each castle require a minimum amount of land to be built on 
	   according to the minimum castle size, minCastleSize[default set to 2].

	2) Each castle can only be built on a levelled ground: 
	   Example: [0, 2, 2, 2] can only be built from index 1 to 3.
	   	    [1, 2, 3, 4] no castle can be build on these land.

	3) For Quality aesthetics, each castle mush either:
		
		1) Be built on a peak. 
		   Example: [1, 7, 7, 2] can build a castle at index of [1-2].

		2) Be built in between valleys;
		   Example: [7, 6, 0, 0] can build castle at index of [2-3].

		3) There can be multiple castle in a peak/valley.
		   Example: [9, 0, 0, 0, 0, 9] can fit 2 castle at index of [1-2] and [3-4].

		note: For a piece of land to be considered as a valley or peak, it must 
			  have a minimum height of, minPeakValHeight [default set to 2].

*/

// Global Variables 
// (values set according to assumptions above);
var minCastleSize = 2;
var minPeakValHeight = 2;

// CastleCalc: [int] => int
function CastleCalc (landArr) {
	// Check if input is an Array
	if (Array.isArray(landArr)) {

		var landSize = landArr.length;
		var finalCastleCount = 0;
		var flatLand = landArr.reduce((acc, val) => { 
			return val < minPeakValHeight ? acc && true : false 
			}, true);
		// Check if land is big enough for at least 1 castle 
		// and is not flat (contains peaks and/or valleys)
		if (landSize >= minCastleSize && !flatLand) {
			
			var prevPointer = -1;
			var count = 0;
			var tmpArr = [];
			// Iterate through land array
			for (var i = 0; i < landSize; i++) {
				// increment count if 2 or more consecutive lands are of 
				// same height and else reset count to 0 and updates prevPointer.
				count = landArr[i] === prevPointer ? count + 1 : (
					prevPointer = landArr[i],
					0 
        		)		
        		// check if a castle can fit in. If so, finalCastleCount is updated and
        		// prevPointer and count is reset.
				if (count >= minCastleSize-1) {

					finalCastleCount++;
					prevPointer = -1;
					count = 0;
				}
			}
		}
		return finalCastleCount;
	// Throw an error stating wrong input type
	} else {

		throw new Error(`Input should be an array not: {typeof(landArr)}`);

	}
}

// Test Cases Examples
var expect = require('expect');

expect(CastleCalc([0, 1, 1, 1, 0])).toBe(0); // land considered flat
expect(CastleCalc([9, 5, 6, 5, 9])).toBe(0); // Cannot accomodate any castle
expect(CastleCalc([5, 5, 6, 9, 1])).toBe(1); // 1 castle at index 0-1
expect(CastleCalc([5, 5, 5, 5, 9])).toBe(2); // 2 castles at index 0-1 and 2-3
expect(CastleCalc([5, 5, 9, 5, 5])).toBe(2); // 2 castles at index 0-1 and 3-4

