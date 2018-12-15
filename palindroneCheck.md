#  Palindrome Check
## Iteratively
* time: O(n^2) | space O(n)

## Array
* time: O(n) | space O(n)

## Recursion
* time: O(n/2) | space O(n/2)

## Iteratively with a pointer
* time: O(n) | space O(1)

## Recursion
Acknolwedge that recursion might required additional memory usage because of the call stack. 

Also bring up tail recursion - tail recursive functions are considered better than non tail recursive functions as tail-recursion can be optimized by compiler. The idea used by compilers to optimize tail-recursive functions is simple, since the recursive call is the last statement, there is nothing left to do in the current function, so saving the current function’s stack frame is of no use.

# Creating a new string
Space: O(n)
Time: O(n^2)

Strings are immutable. On each concatenation a new copy of the string is created, so that the overall complexity is O(n^2). The iteration is O(n) and the inner concatenation is O(n) leading to O(n^2).

To say that runtime is O(1) means that there is a constant c such that the runtime is bounded above by c, independent of the input. It doesn't mean that it takes constant time (runtime or number of operations).

