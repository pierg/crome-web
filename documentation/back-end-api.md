### `"connect"`
#### Establish the connection between the frontend and the backend
* accepts :
  * None
* returns :
  * None
* returns-via: `"is-connected"`

### `"get-projects"`
#### Retrieve projects data in output folder related to the session
* accepts :
  * None
* returns :
  * example-get-projects.json
* returns-via: `"receive-projects"`

### `"save-project"`
#### Save the environment in output folder
* accepts :
  * example-save-project.json
* returns :
  * None
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
  * None
* returns-via: `"deletion-complete"`

### `"get-goals"`
#### Send all goal data contained in the JSON file to the backend functions
* accepts :
  * id of the project, example : `"project": "my_project_name_770369"`
* returns :
  * None
* returns-via: `"receive-goals"`

### `"add-goal"`
#### Add a new goal in goal.dat from output folder
* accepts :
  * example-add-goal.json
* returns :
  * None
* returns-via: `"saving-simple"` or `"goal-saved"`

### `"delete-goal"`
#### deletes goal.dat from output folder
* accepts :
  * index of deleted goal and project id, example : `"index': 0, 'project': 'my_project_name_770369"`
* returns :
  * None
* returns-via: `"deleting-simple"`

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
  * None
* returns-via: `"receive-patterns"`

### `"process-goals"`
#### Create the CGG JSON file of the project
* accepts :
  * ID of the current project, example : `'project': 'my_project_name_770369'`
* returns :
  * None
* returns-via: `"cgg-production"`

[comment]: <> (#TODO the 5 following functions are never called, check TODO in SocketBuildCGG.js)

### `"apply-conjunction"`
#### Apply the conjunction operation
* accepts :
  * List of goals example
* returns :
  * None
* returns-via: `"operation-complete"`

### `"apply-composition"`
#### Apply the composition operation
* accepts :
  * List of goals
* returns :
  * None
* returns-via: `"operation-complete"`

### `"apply-disjunction"`
#### Apply the disjunction operation
* accepts :
  * List of goals
* returns :
  * None
* returns-via: `"operation-complete"`

### `"apply-refinement"`
#### Apply the refinement operation
* accepts :
  * List of goals
* returns :
  * None
* returns-via: `"operation-complete"`

### `"apply-extension"`
#### Apply the extension operation
* accepts :
  * List of goals
* returns :
  * None
* returns-via: `"operation-complete"`

### `"session-existing"`
#### Check if a session is existing in output folder
* accepts : 
  * Name of the wanted session, example : `"session": "my_session_name"`
* returns :
  * None
* returns-via: `"receive-answer"`

### `"disconnect"`
#### Disconnect the user to its session
* accepts :
  * None
* returns :
  * None
* returns-via: None