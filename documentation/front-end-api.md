### `"is-connected"`
#### checks the connection between the backend and the frontend
* accepts:
  * `true` if connected else `false`

### `"receive-projects"`
#### receive a list of projects from the web interface
* accepts:
  * list of example-get-projects.json

### `"project-saved"`
#### receive the projects from the web interface
* accepts:
  * list of example-get-projects.json

### `"deletion-complete"`
#### Confirm the deletion of a project
* accepts:
  * `true` if the project as been deleted else `false`

### `"receive-goals"`
#### receive a list of goals from the web interface
* accepts:
  * list of example-add-goal.json

### `"saving-simple"`
#### save "Goal" component with id "..." from the web interface
* accepts:
  * ID of the current project, example : `'my_project_name_770369'`

### `"goal-saved"`
#### Switch boolean "setTriggerGoals" value
* accepts: 
  * `None`

### `"deleting-simple"`
#### removes "Goal" component with id "..." from the web interface
* accepts:
  * ID of the current project, example : `'my_project_name_770369'`

### `"receive-patterns"`
#### Give all patterns and their description to variable "message"
* accepts:
  * example-receive-patterns.json



### `"cgg-production"`
#### Set TriggerCGG to false when called
* accepts:
  * None

### `"operation-complete"`
#### Set TriggerOperation to false when called
* accepts:
  * None

### `"receive-answer"`
#### Inform the user if the session exist
* accepts:
  * `True` if the session exist
  * `False` otherwise
