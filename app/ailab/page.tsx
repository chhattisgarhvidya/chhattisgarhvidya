'use client'


import Labcards from '../component/molecules/Labcards';

export default function Page() {


    const content = [
        {
            question: "1. Constraint Satisfaction Problem Solver",
            description: "A class-based approach to solve constraint satisfaction problems with input validation and consistency checks.",
            code: `class CSP {
        constructor(variables, domains, constraints) {
            this.variables = variables;
            this.domains = domains;
            this.constraints = constraints;
            this.validateInputs();
        }
        
        validateInputs() {
            if (!this.variables.every(v => v in this.domains)) {
                throw new Error("All variables must have defined domains");
            }
            Object.keys(this.constraints).forEach(([var1, var2]) => {
                if (!this.variables.includes(var1) || !this.variables.includes(var2)) {
                    throw new Error("Constraint variables must be in variables list");
                }
            });
        }
        
        backtrack(assignment = {}) {
            if (Object.keys(assignment).length === this.variables.length) {
                return assignment;
            }
            const varToAssign = this.selectUnassignedVariable(assignment);
            for (const value of this.orderDomainValues(varToAssign, assignment)) {
                if (this.isConsistent(varToAssign, value, assignment)) {
                    assignment[varToAssign] = value;
                    const result = this.backtrack(assignment);
                    if (result) return result;
                    delete assignment[varToAssign];
                }
            }
            return null;
        }
    
        selectUnassignedVariable(assignment) {
            return this.variables.find(v => !(v in assignment));
        }
    
        orderDomainValues(varToAssign, assignment) {
            return this.domains[varToAssign];
        }
    
        isConsistent(varToAssign, value, assignment) {
            return Object.entries(this.constraints).every(([vars, constraint]) => {
                const [var1, var2] = vars.split(",");
                if (var1 === varToAssign && var2 in assignment) {
                    return constraint(value, assignment[var2]);
                }
                if (var2 === varToAssign && var1 in assignment) {
                    return constraint(assignment[var1], value);
                }
                return true;
            });
        }
    }`
        },
        {
            question: "2. Minimax Algorithm with Alpha-Beta Pruning",
            description: "Efficient implementation of the minimax algorithm for game trees with alpha-beta pruning.",
            code: `function minimax(state, depth, alpha, beta, maximizing) {
        if (depth === 0 || state.isTerminal()) {
            return [state.evaluate(), null];
        }
        let bestMove = null;
        if (maximizing) {
            let maxEval = -Infinity;
            for (const move of state.getPossibleMoves()) {
                const [eval] = minimax(state.makeMove(move), depth - 1, alpha, beta, false);
                if (eval > maxEval) {
                    maxEval = eval;
                    bestMove = move;
                }
                alpha = Math.max(alpha, eval);
                if (beta <= alpha) break;
            }
            return [maxEval, bestMove];
        } else {
            let minEval = Infinity;
            for (const move of state.getPossibleMoves()) {
                const [eval] = minimax(state.makeMove(move), depth - 1, alpha, beta, true);
                if (eval < minEval) {
                    minEval = eval;
                    bestMove = move;
                }
                beta = Math.min(beta, eval);
                if (beta <= alpha) break;
            }
            return [minEval, bestMove];
        }
    }`
        },
        {
            question: "3. Secure Chatbot Implementation",
            description: "A simple chatbot implementation with input sanitization and response security.",
            code: `class SecureChatbot {
        constructor(responseRules, maxInputLength = 1000) {
            this.responseRules = responseRules;
            this.maxInputLength = maxInputLength;
            this.validateRules();
        }
    
        validateRules() {
            if (typeof this.responseRules !== 'object') {
                throw new Error("Response rules must be an object");
            }
            Object.entries(this.responseRules).forEach(([pattern, responses]) => {
                if (typeof pattern !== 'string' || !Array.isArray(responses)) {
                    throw new Error("Invalid response rule format");
                }
            });
        }
    
        sanitizeInput(input) {
            if (input.length > this.maxInputLength) {
                throw new Error("Input exceeds maximum allowed length");
            }
            return input.toLowerCase().trim();
        }
    
        getResponse(userInput) {
            const sanitizedInput = this.sanitizeInput(userInput);
            for (const [pattern, responses] of Object.entries(this.responseRules)) {
                if (sanitizedInput.includes(pattern)) {
                    return responses[Math.floor(Math.random() * responses.length)];
                }
            }
            return "I'm not sure how to respond to that.";
        }
    }`
        },
        {
            question: "4. Write a program to implement the Naive Bayes classifier.",
            description: "The Naive Bayes classifier is a probabilistic machine learning model based on Bayes' theorem. It assumes that features are independent given the class label and is used for classification tasks. This implementation includes data validation, training with Laplace smoothing, and prediction with logarithmic computations for numerical stability.",
            code: `class NaiveBayes {
        def _init_(self, feature_types: Dict[str, type]):
            self.feature_types = feature_types;
            self.class_probs = {};
            self.feature_probs = {};
    
        def _validate_data(self, X: List[Dict[str, any]], y: List[any]):
            if len(X) != len(y):
                raise ValueError("X and y must have same length");
    
            for instance in X:
                if not isinstance(instance, dict):
                    raise ValueError("Each instance must be a dictionary");
    
                for feature, value in instance.items():
                    if feature not in self.feature_types:
                        raise ValueError(f"Unknown feature: {feature}");
                    if not isinstance(value, self.feature_types[feature]):
                        raise ValueError(f"Invalid type for feature {feature}");
    
        def fit(self, X: List[Dict[str, any]], y: List[any]):
            self._validate_data(X, y);
            total = len(y);
            self.class_probs = {c: y.count(c)/total for c in set(y)};
            for feature in self.feature_types:
                self.feature_probs[feature] = {};
                for class_val in self.class_probs:
                    self.feature_probs[feature][class_val] = {};
                    class_instances = [X[i] for i in range(len(X)) if y[i] == class_val];
                    total_class = len(class_instances);
                    feature_values = set(inst[feature] for inst in X);
                    for value in feature_values:
                        count = sum(1 for inst in class_instances if inst[feature] == value);
                        self.feature_probs[feature][class_val][value] = (count + 1) / (total_class + len(feature_values));
    
        def predict(self, X: List[Dict[str, any]]):
            predictions = [];
            for instance in X:
                try:
                    pred = self._predict_single(instance);
                    predictions.append(pred);
                except Exception as e:
                    raise ValueError(f"Error predicting instance: {str(e)}");
            return predictions;
    
        def _predict_single(self, instance: Dict[str, any]):
            probs = {};
            for class_val in self.class_probs:
                prob = math.log(self.class_probs[class_val]);
                for feature, value in instance.items():
                    if value in self.feature_probs[feature][class_val]:
                        prob += math.log(self.feature_probs[feature][class_val][value]);
                    else:
                        prob += math.log(1 / (len(self.feature_probs[feature][class_val]) + 1));
                probs[class_val] = prob;
            return max(probs.items(), key=lambda x: x[1])[0];
    }`
        },
        {
            question: "5. Write a program to solve the Towers of Hanoi problem.",
            description: "The Towers of Hanoi is a classic algorithmic problem involving the movement of disks between three pegs. The goal is to move all disks from the source peg to the target peg following the rules: only one disk can be moved at a time, a disk cannot be placed on a smaller disk, and disks can only be moved between pegs. This implementation provides a recursive solution to track the sequence of moves.",
            code: `class TowersOfHanoi {
        def _init_(self, num_disks: int, max_disks: int = 10):
            if not isinstance(num_disks, int) or num_disks < 1:
                raise ValueError("Number of disks must be a positive integer");
            if num_disks > max_disks:
                raise ValueError(f"Number of disks cannot exceed {max_disks}");
    
            self.num_disks = num_disks;
            self.moves = [];
    
        def solve(self):
            self.moves = [];
            self._move_tower(self.num_disks, 1, 3, 2);
            return self.moves;
    
        def _move_tower(self, height: int, source: int, target: int, auxiliary: int):
            if height >= 1:
                self._move_tower(height - 1, source, auxiliary, target);
                self.moves.append((source, target));
                self._move_tower(height - 1, auxiliary, target, source);
    }`
        },
        {
            "question": "6. Breadth First Search",
            "description": "Breadth First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. Starting from the root node (or any arbitrary node in the case of a graph), it explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.",
            "code": `
          def bfs(graph, start):
              visited = set()
              queue = [start]
              
              while queue:
                  node = queue.pop(0)
                  if node not in visited:
                      print(node, end=' ')
                      visited.add(node)
                      queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)
          
          # Example graph (adjacency list)
          graph = {
              'A': ['B', 'C'],
              'B': ['A', 'D', 'E'],
              'C': ['A', 'F'],
              'D': ['B'],
              'E': ['B', 'F'],
              'F': ['C', 'E']
          }
          
          bfs(graph, 'A')  # Output: A B C D E F
            `
          },
          {
            "question": "7. Depth First Search",
            "description": "Depth First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root (or an arbitrary node in the case of a graph) and explores as far as possible along each branch before backtracking.",
            "code": `
          def dfs(graph, start, visited=None):
              if visited is None:
                  visited = set()
              visited.add(start)
              print(start, end=' ')
              
              for neighbor in graph[start]:
                  if neighbor not in visited:
                      dfs(graph, neighbor, visited)
          
          # Example graph (adjacency list)
          graph = {
              'A': ['B', 'C'],
              'B': ['A', 'D', 'E'],
              'C': ['A', 'F'],
              'D': ['B'],
              'E': ['B', 'F'],
              'F': ['C', 'E']
          }
          
          dfs(graph, 'A')  # Output: A B D E F C
            `
          },
          
          
        {
            "question": "8. Hill Climbing Algorithm",
            "description": "A heuristic optimization algorithm that iteratively refines a solution by exploring neighboring states to find a local or global optimum.",
            "code": `
          class HillClimbing:
              def __init__(self, max_iterations: int = 1000):
                  self.max_iterations = max_iterations
          
              def optimize(self, 
                          start_state: any, 
                          objective_function: callable, 
                          get_neighbors: callable,
                          maximize: bool = True) -> Tuple[any, float]:
                  """
                  Hill climbing optimization with security measures
                  """
                  current_state = start_state
                  current_value = objective_function(current_state)
                  iterations = 0
                  
                  while iterations < self.max_iterations:
                      neighbors = get_neighbors(current_state)
                      if not neighbors:  # Safety check
                          break
                          
                      # Find best neighbor
                      best_neighbor = None
                      best_value = current_value
                      
                      for neighbor in neighbors:
                          neighbor_value = objective_function(neighbor)
                          if (maximize and neighbor_value > best_value) or 
                             (not maximize and neighbor_value < best_value):
                              best_neighbor = neighbor
                              best_value = neighbor_value
                      
                      # If no better neighbor found, we're at a local optimum
                      if best_value == current_value:
                          break
                          
                      current_state = best_neighbor
                      current_value = best_value
                      iterations += 1
                      
                  return current_state, current_value
            `
          },
          {
            "question": "9. A* Algorithm Implementation",
            "description": "A pathfinding and graph traversal algorithm that uses a priority queue to find the optimal path from a start state to a goal state based on heuristic evaluation.",
            "code": `
          @dataclass
          class Node:
              state: any
              parent: Optional['Node']
              g_cost: float
              h_cost: float
              
              @property
              def f_cost(self) -> float:
                  return self.g_cost + self.h_cost
                  
              def __lt__(self, other: 'Node') -> bool:
                  return self.f_cost < other.f_cost
          
          class AStar:
              def __init__(self, max_iterations: int = 10000):
                  self.max_iterations = max_iterations
          
              def find_path(self,
                           start_state: any,
                           goal_test: callable,
                           get_neighbors: callable,
                           heuristic: callable) -> Optional[List[any]]:
                  """
                  A* pathfinding with security measures
                  """
                  start_node = Node(start_state, None, 0, heuristic(start_state))
                  open_set = []
                  closed_set = set()
                  heapq.heappush(open_set, start_node)
                  iterations = 0
                  
                  while open_set and iterations < self.max_iterations:
                      current = heapq.heappop(open_set)
                      
                      if goal_test(current.state):
                          return self._reconstruct_path(current)
                          
                      closed_set.add(str(current.state))  # Convert state to string for set storage
                      
                      for neighbor_state, step_cost in get_neighbors(current.state):
                          if str(neighbor_state) in closed_set:
                              continue
                              
                          g_cost = current.g_cost + step_cost
                          h_cost = heuristic(neighbor_state)
                          
                          neighbor = Node(neighbor_state, current, g_cost, h_cost)
                          
                          # Check if neighbor already in open set with better cost
                          if any(n.state == neighbor_state and n.g_cost <= g_cost for n in open_set):
                              continue
                              
                          heapq.heappush(open_set, neighbor)
                      
                      iterations += 1
                      
                  return None  # No path found
                  
              def _reconstruct_path(self, node: Node) -> List[any]:
                  """Reconstruct path from goal node to start"""
                  path = []
                  current = node
                  while current:
                      path.append(current.state)
                      current = current.parent
                  return list(reversed(path))
            `
          },
          {
            "question": "10. Tic-Tac-Toe Implementation",
            "description": "A Python implementation of the classic two-player game Tic-Tac-Toe with functionality for making moves, checking winners, and determining valid moves.",
            "code": `
          class TicTacToe:
              def __init__(self):
                  self.board = [[' ' for _ in range(3)] for _ in range(3)]
                  self.current_player = 'X'
                  
              def _validate_move(self, row: int, col: int) -> None:
                  """Validate move with bounds checking"""
                  if not (0 <= row < 3 and 0 <= col < 3):
                      raise ValueError("Move out of bounds")
                  if self.board[row][col] != ' ':
                      raise ValueError("Cell already occupied")
          
              def make_move(self, row: int, col: int) -> bool:
                  """Make a move and return whether the game is won"""
                  self._validate_move(row, col)
                  
                  self.board[row][col] = self.current_player
                  if self._check_winner(row, col):
                      return True
                      
                  self.current_player = 'O' if self.current_player == 'X' else 'X'
                  return False
          
              def _check_winner(self, last_row: int, last_col: int) -> bool:
                  """Check if the last move won the game"""
                  player = self.board[last_row][last_col]
                  
                  # Check row
                  if all(self.board[last_row][j] == player for j in range(3)):
                      return True
                      
                  # Check column
                  if all(self.board[i][last_col] == player for i in range(3)):
                      return True
                      
                  # Check diagonals
                  if last_row == last_col and all(self.board[i][i] == player for i in range(3)):
                      return True
                      
                  if last_row + last_col == 2 and all(self.board[i][2-i] == player for i in range(3)):
                      return True
                      
                  return False
          
              def is_full(self) -> bool:
                  """Check if board is full"""
                  return all(cell != ' ' for row in self.board for cell in row)
          
              def get_valid_moves(self) -> List[Tuple[int, int]]:
                  """Get all valid moves"""
                  return [(i, j) for i in range(3) for j in range(3) if self.board[i][j] == ' ']
          
              def print_board(self) -> None:
                  """Print current board state"""
                  for row in self.board:
                      print('|'.join(row))
                      print('-' * 5)
            `
          },
          {
            "question": "11. Water Jug Problem",
            "description": "A solution to the water jug problem using breadth-first search (BFS) to find the sequence of steps to measure an exact amount of water.",
            "code": `
          class WaterJug:
              def __init__(self, jug1_capacity: int, jug2_capacity: int, target: int, 
                           max_steps: int = 1000):
                  """Initialize with input validation"""
                  if not all(isinstance(x, int) and x > 0 for x in [jug1_capacity, jug2_capacity, target]):
                      raise ValueError("All capacities must be positive integers")
                  if target > max(jug1_capacity, jug2_capacity):
                      raise ValueError("Target cannot be greater than largest jug capacity")
                      
                  self.jug1_capacity = jug1_capacity
                  self.jug2_capacity = jug2_capacity
                  self.target = target
                  self.max_steps = max_steps
                  
              def solve(self) -> Optional[List[Tuple[int, int]]]:
                  """Solve water jug problem using BFS"""
                  initial_state = (0, 0)  # Both jugs empty
                  visited = set([initial_state])
                  queue = deque([(initial_state, [])])
                  steps = 0
                  
                  while queue and steps < self.max_steps:
                      (jug1, jug2), path = queue.popleft()
                      steps += 1
                      
                      # Check if target reached
                      if jug1 == self.target or jug2 == self.target:
                          return path + [(jug1, jug2)]
                      
                      # Try all possible operations
                      operations = [
                          self._fill_jug1,
                          self._fill_jug2,
                          self._empty_jug1,
                          self._empty_jug2,
                          self._pour_jug1_to_jug2,
                          self._pour_jug2_to_jug1
                      ]
                      
                      for operation in operations:
                          new_state = operation(jug1, jug2)
                          if new_state not in visited:
                              visited.add(new_state)
                              queue.append((new_state, path + [(jug1, jug2)]))
                  
                  return None  # No solution found within max steps
          
              def _fill_jug1(self, j1: int, j2: int) -> Tuple[int, int]:
                  return (self.jug1_capacity, j2)
          
              def _fill_jug2(self, j1: int, j2: int) -> Tuple[int, int]:
                  return (j1, self.jug2_capacity)
          
              def _empty_jug1(self, j1: int, j2: int) -> Tuple[int, int]:
                  return (0, j2)
          
              def _empty_jug2(self, j1: int, j2: int) -> Tuple[int, int]:
                  return (j1, 0)
          
              def _pour_jug1_to_jug2(self, j1: int, j2: int) -> Tuple[int, int]:
                  amount = min(j1, self.jug2_capacity - j2)
                  return (j1 - amount, j2 + amount)
          
              def _pour_jug2_to_jug1(self, j1: int, j2: int) -> Tuple[int, int]:
                  amount = min(j2, self.jug1_capacity - j1)
                  return (j1 + amount, j2 - amount)
            `
          }
          
          
        // Add other sections here in a similar format...
    ];
    


  return (<div className={`bg-white  dark:bg-gray-900 text-gray-900 dark:text-gray-300`}>
    <main className="mt-20 md:px-4  lg:px-8">
      <div className="space-y-8">
        {content.map((item, index) => (
          <Labcards
            key={index}
            question={item.question}
            description={item.description}
            code={item.code}
            index={index}
          />
        ))}
      </div>
    </main>
  </div>
  );
}
