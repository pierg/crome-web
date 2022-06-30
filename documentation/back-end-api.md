## 

### `"connect"`
#### Establish the connection between the frontend and the backend
* accepts :
  * None
* returns :
  * None
* returns-via: `"is-connected"`

### `"session-existing"`
#### Check if a session is existing in output folder
* accepts : 
  * Name of the wanted session, example : `"session": "my_session_name"`
* returns :
  * Boolean to know is a session is available
* returns-via: `"receive-answer"`

### `"disconnect"`
#### Disconnect the user to its session
* accepts :
  * None
* returns :
  * None
* returns-via: None

## Signal of the crome page

### `"get-projects"`
#### Retrieve projects data in output folder related to the session
* accepts :
  * None
* returns :
  * example-receive-projects.json
* returns-via: `"receive-projects"`

### `"save-project"`
#### Save the environment in output folder
* accepts :
  * example-save-project.json
* returns :
  * The project id of the saved project
* returns-via: `"project-saved"`

### `"save-image"`
#### Save a screenshot of the world environment in output folder
* accepts :
  * example-save-image.json
* returns :
  * None
* returns-via: None

### `"delete-project"`
#### Delete project files in output folder
* accepts :
  * index of the project, example : `"index": 1`
* returns :
  * Boolean
* returns-via: `"deletion-complete"`

### `"get-goals"`
#### Send all goal data contained in the JSON file to the backend functions
* accepts :
  * id of the project, example : `"project": "my_project_name_770369"`
* returns :
  * example-receive-goals.json
* returns-via: `"receive-goals"`

### `"add-goal"`
#### Add a new goal in goal.dat from output folder
* accepts :
  * example-add-goal.json
* returns :
  * project id if `"saving-simple"` or boolean if `"goal-saved"`
* returns-via: `"saving-simple"` or `"goal-saved"`

### `"delete-goal"`
#### deletes goal.dat from output folder
* accepts :
  * index of deleted goal and project id, example : `"index': 0, 'project': 'my_project_name_770369"`
* returns :
  * The project id if a simple project copy has been done 
* returns-via: `"deleting-simple"` or None

### `"check-goals"`
#### Check if there are goals in goal.dat from output folder
* accepts :
  * ID of the current project, example : `'project': 'my_project_name_770369'`
* returns : 
  * None
* returns-via: None

### `"get-patterns"`
#### Send to the frontend the name and the usage of all the pattern used
* accepts :
  * None
* returns :
  * example-receive-patterns.json
* returns-via: `"receive-patterns"`

### `"process-goals"`
#### Create the CGG of the project
* accepts :
  * ID of the current project, example : `'project': 'my_project_name_770369'`
* returns :
  * example-cgg-production.json
* returns-via: `"cgg-production"`

### `"get-inputs-crome"`
#### Get the possible inputs for the current project
* accepts :
  * ID of the current project, example : `'project': 'my_project_name_770369'`
* returns :
  * The names of the possible inputs 
* returns-via: `"received-inputs"`

### `"simulated-crome"`
#### Make the current project react to an inputs chose by the user
* accepts :
  * ID of the current project and the name of the input chose
* returns :
  * The line to be display on the page : `['day & !(night)', 'SCENARIO_1', 'person', 'greet, r1, register']`
* returns-via: `"crome-simulated"`

### `"reset-crome"`
#### Reset the simulation of the current project
* accepts :
  * ID of the current project, example : `'project': 'my_project_name_770369'`
* returns :
  * A boolean.
* returns-via: `"reset-done"`

### `"random-simulation-crome"`
#### Choose inputs randomly for x iterations
* accepts :
  * ID of the current project and the number of iterations.
* returns :
  * The x line to be display on the page.
* returns-via: `"receive-random-simulation-crome"`

## Signal for the different operation on goals

### `"apply-conjunction"`
#### Apply the conjunction operation
* accepts :
  * A list of goals and the project id.
* returns :
  * Boolean to know if the operation is done
* returns-via: `"operation-complete"`

### `"apply-composition"`
#### Apply the composition operation
* accepts :
  * A list of goals and the project id.
* returns :
  * Boolean to know if the operation is done
* returns-via: `"operation-complete"`

### `"apply-refinement"`
#### Apply the refinement operation
* accepts :
  * Two goals and the project_id
* returns :
  * Boolean to know if the operation is done
* returns-via: `"operation-complete"`

### `"apply-quotient"`
#### Apply the quotient operation
* accepts :
  * Two goals and the project_id
* returns :
  * Boolean to know if the operation is done
* returns-via: `"operation-complete"`

### `"apply-merging"`
#### Apply the merging operation
* accepts :
  * A list of goals and the project_id
* returns :
  * Boolean to know if the operation is done
* returns-via: `"operation-complete"`

### `"apply-separation"`
#### Apply the separation operation
* accepts :
  * Two goals and the project id
* returns :
  * Boolean to know if the operation is done
* returns-via: `"operation-complete"`

## Signal for the contracts page

### `"get-contracts-goals"`
#### Get the contracts goals of an operation on the contracts page.
* accepts :
  * The name of the operation
* returns :
  * example-goals-received.json
* returns-via: `"receive-contracts-goals"`
