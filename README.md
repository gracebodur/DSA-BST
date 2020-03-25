## DSA Binary Search Trees
***

### OBJECTIVES
- Define what a tree is
- Compare and contrast trees and lists
- Explain the differences between trees, binary trees, and binary search trees
- Implement operations on binary search trees

### WHAT IS A TREE?
- A data structure that consists of nodes in a parent / child relationship

#### TREE TERMINOLOGY
- **Root** - The top node in a tree.
- **Child** -A node directly connected to another node when moving away from the Root.
- **Parent** - The converse notion of a child.
- **Siblings** -A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection between one node and another.

#### KINDS OF TREES
- **Trees**
  Trees are non-linear data structures that contain a root and child nodes
  ###### Applications:
  1. HTML DOM
  2. Network Routing
  3. Abstract Syntax Tree
  4. Artificial Intelligence
  5. Folders in Operating Systems
  6. Computer File Systems

- **Binary Trees**
  Binary Trees can have values of any type, but at most two children for each parent
  ###### Applications:
  1. Decision Trees (true / false)
  2. Database Indicies
  3. Sorting Algorithms
   
- **Binary Search Trees**
  Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater

#### HOW BSTS WORK
- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent
  
##### INSERTING A NODE
***Steps - Iteratively or Recursively***
- Create a new node
- Starting at the root
    - Check if there is a root, if not - the root now becomes that new node!
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater 
    - Check to see if there is a node to the right
        - If there is, move to that node and repeat these steps
        - If there is not, add that node as the right property
    - If it is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the left property
  
##### TRAVERSING A TREE
***Two ways:***
- **Breadth-first Search(BFS)**
  ***Steps***
    - Create a queue (this can be an array) and a variable to store the values of nodes visited
    - Place the root node in the queue
    - Loop as long as there is anything in the queue
        - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        - If there is a left property on the node dequeued - add it to the queue
        - If there is a right property on the node dequeued - add it to the queue
    - Return the variable that stores the values

- **Depth-first Search(DFS)**
  ***Steps - Recursively(InOrder)***
    - Create a variable to store the values of nodes visited
    - Store the root of the BST in a variable called current
    - Write a helper function which accepts a node
        -If the node has a left property, call the helper function with the left property on the node
        - Push the value of the node to the variable that stores the values
        - If the node has a right property, call the helper function with the right property on the node
    - Invoke the helper function with the current variable
    - Return the array of values

    ***Steps - Recursively(PreOrder)***
    - Create a variable to store the values of nodes visited
    - Store the root of the BST in a variable called current
    - Write a helper function which accepts a node
        - Push the value of the node to the variable that stores the values
        - If the node has a left property, call the helper function with the left property on the node
        - If the node has a right property, call the helper function with the right property on the node
    - Invoke the helper function with the current variable
    - Return the array of values

    ***Steps - Recursively(PostOrder)***
    - Create a variable to store the values of nodes visited
    - Store the root of the BST in a variable called current
    - Write a helper function which accepts a node
        - If the node has a left property, call the helper function with the left property on the node
        - If the node has a right property, call the helper function with the right property on the node
        - Push the value of the node to the variable that stores the values
        - Invoke the helper function with the current variable
    - Return the array of values

##### REMOVING A NODE IN BST
- **Removing a Node - 0 children**
  ***Steps-Iteratively***
    - Find the parent of the node that needs to be removed and the node that needs to be removed
    - If the value we are removing is greater than the parent node
      - Set the right property of the parent to be null
    - If the value we are removing is less than the parent node​
      - Set the left property of the parent to be null
    - Otherwise, the node we are removing has to be the root, so set the root to be null
  
- **Removing a Node - 1 child**
  ***Steps-Iteratively***
    - Find the parent of the node that needs to be removed and the node that needs to be removed
    - See if the child of the node to be removed is on the right side or the left side
    - If the value we are removing is greater than the parent node​​
      - Set the right property of the parent to be the child
    - If the value we are removing is less than the parent node​
      - Set the left property of the parent to be the child
    - Otherwise, set the root property of the tree to be the child

- **Removing a Node - 2 children**
  ***Steps-Iteratively***
    - Find the parent of the node that needs to be removed and the node that needs to be removed
    - Find the predecessor node and store that in a variable
    - Set the left property of the predecessor node to be the left property of the node that is being removed
    - If the value we are removing is greater than the parent node​​
      - Set the right property of the parent to be the right property of the node to be removed
    - If the value we are removing is less than the parent node​
        - Set the left property of the parent to be the right property of the node to be removed
    - Otherwise, set the root of the tree to be the right property of the node to be removed

[Dijkstra + Bellman-Ford Algorithms](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e)

[BST Visualization](https://www.cs.usfca.edu/~galles/visualization//BST.html)

[BST VisualAlgo](https://visualgo.net/bn/bst)