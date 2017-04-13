#Aequilibrium Part 1

##Assumptions: 
  
	1) Each castle require a minimum amount of land to be built on 
	   according to the minimum castle size, minCastleSize[default set to 2].
	2) Each castle can only be built on a levelled ground: 
	   Example: [0, 2, 2, 2] can only be built from index 1 to 3.
	   			[1, 2, 3, 4] no castle can be build on these land.
	4) For Quality aesthetics, each castle mush either:
		
		1) Be built on a peak. 
		   Example: [1, 7, 7, 2] can build a castle at index of [1-2].
		2) Be built in between valleys;
		   Example: [7, 6, 0, 0] can build castle at index of [2-3].
		3) There can be multiple castle in a peak/valley.
		   Example: [9, 0, 0, 0, 0, 9] can fit 2 castle at index of [1-2] and [3-4].
		note: For a piece of land to be considered as a valley or peak, it must 
			  have a minimum height of, minPeakValHeight [default set to 2].
