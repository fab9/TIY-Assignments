### TodoMVC -- User Stories

#### EPIC: I can create lists of todos so that...
* I can keep track of what I need to do next.
* I can create lists of my tasks so that I can check them off.
* I can manage my time better.

----

#### I can *mark a **Task** as completed* so that I can track what has been done *track what has been done*.

----

#### I can _mark an incomplete **Task** as completed_ so that I can  _track what has been done_.
* Click a button to mark the task as complete; what does that look like?
* Can I change my mind and mark it as incomplete again?
* Strikethrough on text would be a neat effect...

----

#### I can _add a **Task** to the **List of Tasks**_ so that I can  _be reminded of it_.

----

#### I can _view a **List of Tasks** that are incomplete_ so that I can  _pick what I need to do next_.

----

#### I can _remove completed **Tasks** from the **List of Tasks**_ so that I can  _feel good about the tasks I have completed_.

(usually when you get into feelings, instead of the how = ??)
(The _how_s, things I need to do:)

* Click a button on each item to remove it; confirm first?
* Can I get it back after I remove it? Trash can vs black hole of death?
* Can I remove more than one item at a time? All completed items?

----

#### I can _change a **Task** on the **List of Tasks**_ so that I can  _fix my typos and be more specific about them_.

----

### All About MVC -- Model-View-Controller

#### Models: Nouns

* List of Tasks: Collection
  * Properties:
  * Methods:
    * CRUD
    * Add a Task
    * Remove a Task
    * Change order of Tasks?
  * Task
    * Properties:
      * Text Description
      * Completion Status: done or not?
      * Parent Task?
      * Due date?
      * Color / Category?
    * Methods:
      * Create
      * Mark Complete
      * Edit Text
      * Remove / Delete Task
      * Archive?

#### Controllers: Traffic Cop

* Most controllers implement the BREAD pattern
* Hard to test bc you are testing **workflows**

##### Workflows:
  * Edit a specific **Task**:
    * Get a specific **Task** from the **List of Tasks**
    * Edit the **Task** (and save the changes)
    * Update the view of the **List of Tasks**
  * Add a new **Task**:
    * Accept input: text
    * Create a **Task**
    * Add new **Task** to **List of Tasks**
    * Display the view of the **List of Tasks**


#### Views: Display Items

* List of Individual Tasks
  * Filter by:
    * All Tasks
    * Only Completed Tasks
    * Only Uncompleted Tasks
  * Individual Task
    * Incomplete Task
    * Complete Task
    * Marked for Deletion (waste bin)
    * Overdue Task (past due date)
  * Add a **Task**
  * Edit a **Task**

----

##### CRUD: operates on *one* piece of data, one record

##### BREAD: basic UI operations, how I interact with data
* Browse
* Read
* Edit
* Add
* Delete






