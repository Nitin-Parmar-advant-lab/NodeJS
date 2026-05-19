## Primitive Types
- data strucutre those are not build upon other data strcuture and have their stand alone identity, or data strcutre that can't be divide any furuther in another data types, 

## Reference Types
- data strucutre those are build uplon primitive data structure, like objects and arrays
- it holds properties that in turn have primitive values


## JS Memory
- JS know two types of memory: Stack and the Heap

- stack. Only items for which the size is known in advance can go onto the stack. This is the case for numbers, strings, booleans.
- The heap is a memory for items of which you can't pre-determine the exact size and structure. Since objects and arrays can be mutated and change at runtime, they have to go into the heap therefore.

- For each heap item, the exact address is stored in a pointer which points at the item in the heap. **This pointer in turn is stored on the stack**

