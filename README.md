# Fuzzy Search 

 Clip code challenge
## Search algorithm
Is locate at /src/services/EditDistance.js
I thougth that the Edit distance algorithm  was the algorithm which best solve fuzzy search problem.\
The function editDistance return the edit distance between two string in this case the search input an te content of every field
of a transaction object.\
In oder to calculate the edit distance  the editDistance function takes 6 steps.
 1. Set n to be the length of s (inputText).\
Set m to be the length of t (any content of a transaction's field).\
If n = 0, return m and exit.\
If m = 0, return n and exit.\
Construct a matrix containing 0..m rows and 0..n columns.\

2. Initialize the first row to 0..n. \
  Initialize the first column to 0..m.

3. Examine each character of s (i from 1 to n).

4. If s[i] equals t[j], the cost is 0.\
If s[i] doesn't equal t[j], the cost is 1.

5. Set cell d[i,j] of the matrix equal to the minimum of: \
  a. The cell immediately above plus 1: d[i-1,j] + 1. \
  b. The cell immediately to the left plus 1: d[i,j-1] + 1. \
  c. The cell diagonally above and to the left plus the cost: d[i-1,j-1] + cost. \
  
6. After the iteration steps (3, 4, 5, 6) are complete, the distance is found in cell d[n,m].
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev


# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
