# Aequilibrium Part 1

## Assumptions: 
  
* Each castle require a minimum amount of land to be built on according to the minimum castle size, **minCastleSize** [default set to 2].

* Each castle can only be built on a levelled ground, example:

	1. [0, 2, 2, 2] can only be built from index 1 to 3.
	2. [1, 2, 3, 4] no castle can be build on these land.

* For Quality aesthetics, each castle must either:
		
	1. Be built on a peak. Example: [1, 7, 7, 2] can build a castle at index of [1-2].
	2. Be built in between valleys. Example: [7, 6, 0, 0] can build castle at index of [2-3].

* There can be multiple castle in a peak/valley, example:

	1. [9, 0, 0, 0, 0, 9] can fit 2 castle at index of [1-2] and [3-4].
	2. [0, 8, 8, 8, 8, 5] can fit 2 castle at index of [1-2] and [3-4].

Note: For a piece of land to be considered as a valley or peak, it must have a minimum height of, **minPeakValHeight** [default set to 2].
