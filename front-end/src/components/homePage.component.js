import React, { useState,useEffect } from 'react';

import { Button, List, ListItem, Card, CardContent, CardActions, CardHeader, Input } from '@material-ui/core';
import task from '../models/task.model';
import { Dialog,DialogActions, FormGroup, InputLabel, DialogTitle, DialogContent, TextField, Select} from '@material-ui/core';
import { createForm, editForm, deleteForm, getTaskForm } from '../services/tasks.service';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './homePage.component.css'
export default function Admin(){

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
    const notify = (Message) => toast(Message);
    const [tasks, setTasks] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [createTask, setCreateTask] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);
    const [editTask, setEditTask] = useState(false);
    const [getTasks, setGetTasks] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [taskToBeDeleted, setTaskToBeDeleted] = useState("");
    const [formAdd, setFormAdd] = useState(false); //to toggle between the properties of creation, editing and seeing and the coupons 
    let newTask = new task(formatDate(new Date()), "","","",""); //a new coupon 
    const [Task, setTask] = useState(newTask); //coupon format for adding,editing
   
    function getAllTasks(){
        getTaskForm().then(async(docs,err)=>{
            if(err){
               await  console.log(err);
            }
            else if(docs.data.length>0){
                   await console.log(docs.data);
                    setFormAdd(true);
                    setTasks([...docs.data]);
                    await console.log(tasks)
            }
        }).catch((err)=>{

        })
   }

useEffect(()=>{
getAllTasks();
},[]);

   

    function handleFormClose(){
        setCreateTask(false);
        setDeleteTask(false);
        setEditTask(false);
        setGetTasks(false);
    }

    function deleteTaskCreated(taskID){
   
           
            deleteForm(taskID).then((data)=>{

                notify(`Deleted ${taskToBeDeleted}}`);
                setTasks([...tasks.filter((task)=>task._id !==taskID)]);
               
            }).catch((err)=>{
                notify(`The coupon couldn't be deleted`)
            })
        

        handleFormClose();
    }

    function submitForm(){
       
        
                createForm(Task).then((output)=>{setTasks((tasks)=>{setTasks([...tasks, Task])});notify("Task created successfully!")})
                handleFormClose();
            }
         
    

    function submitEditForm(){
        
                editForm(Task).then(
                   
                    (output)=>{ setTasks([...tasks.filter((task)=>{return task._id!==Task._id}),Task])
                    notify("Task edited successfully!")}).catch((err)=>{
                        notify("The task couldn't be edited");
                    })
                handleFormClose();
            
           
    }

    return(<div className="wrapper">
       
        <ToastContainer />
         <Dialog open={createTask} onClose={handleFormClose} aria-labelledby="form-dialog-title">
             <DialogTitle>Create a Task</DialogTitle>
             <DialogContent>
                 <FormGroup>
             <TextField
                autoFocus
                margin="dense"
                id="name"
                type="string"
                fullWidth
                value = {Task.name}

                onChange={(e)=>{ let newTask = {...Task}; newTask.name=e.target.value;
                    setTask(newTask)}}
                label = "Task"
              />
              </FormGroup>
              <TextField
                autoFocus
                margin="dense"
                id="author"
                type="string"
                fullWidth
                
                value = {Task.author}
                onChange={(e)=>{let newTask = {...Task}; newTask.author=e.target.value;
                    setTask(newTask)}}
                label = "Author"
              />
            
             
              <InputLabel >Status</InputLabel>
               <Select label="Status" margin="dense" type="string" id="status" defaultValue={Task.status} onChange={(e)=>{let newTask = {...Task}; newTask.status=e.target.value;
                    setTask(newTask)}}>
                  <option  value="Done">Done </option>
                  <option value="In Progress">In Progress</option>
                  <option value="Yet to start">Yet to start</option>
               </Select>
                <br/>
                <br/>
                
             </DialogContent>
             <DialogActions>
             <Button onClick={()=>{submitForm();}}>Create Task</Button>
             </DialogActions>
             </Dialog>
             <Dialog open={editTask} onClose={handleFormClose} aria-labelledby="form-dialog-title">
             <DialogTitle>Edit a task</DialogTitle>
             <DialogContent>
                 <FormGroup>
             <TextField
                autoFocus
                margin="dense"
                id="name"
                type="string"
                fullWidth
                value = {Task.name}

                onChange={(e)=>{ let newTask = {...Task}; newTask.name=e.target.value;
                    setTask(newTask)}}
                label = "Task"
              />
              </FormGroup>
              <TextField
                autoFocus
                margin="dense"
                id="author"
                type="string"
                fullWidth
                
                value = {Task.author}
                onChange={(e)=>{let newTask = {...Task}; newTask.author=e.target.value;
                    setTask(newTask)}}
                label = "Author"
              />
            
             
              <InputLabel >Status</InputLabel>
               <Select label="Status" margin="dense" type="string" id="status" defaultValue={Task.status} onChange={(e)=>{let newTask = {...Task}; newTask.status=e.target.value;
                    setTask(newTask)}}>
                  <option  value="Done">Done </option>
                  <option value="In Progress">In Progress</option>
                  <option value="Yet to start">Yet to start</option>
               </Select>
                <br/>
                <br/>
                
             </DialogContent>
             <DialogActions>
             <Button onClick={()=>{submitEditForm()}}>Edit task!</Button>
             </DialogActions>
             </Dialog>
             
            
                <Input placeholder="Search for tasks"id="searchBar" type="text" onChange={(event)=>{setSearchQuery(event.target.value.toUpperCase())}}/>
                    
         <List id="properties" >
             
             <ListItem id= "create" className="prop">
                 <Button onClick={()=>{setCreateTask(true)}}>Create a task
                 </Button>
             </ListItem>
             <ListItem id="todo" className ="prop">
                 <Button style={{backgroundColor:selectedStatus==="Yet to start"?"aqua":"grey"}} onClick={()=>{setSelectedStatus("Yet to start")}}> Yet to start
</Button>
                 
             </ListItem>
             <ListItem id="inprogress" className ="prop">
                 <Button  style={{backgroundColor:selectedStatus==="In Progress"?"aqua":"grey"}} onClick={()=>{setSelectedStatus("In Progress")}}>
                   In Progress
                 </Button>
             </ListItem>
             <ListItem id="done" className="prop">
                 <Button  style={{backgroundColor:selectedStatus==="Done"?"aqua":"grey"}} onClick={()=>{setSelectedStatus("Done")}}>
                       Done
                 </Button>
             </ListItem>
             <ListItem id="all" className="prop">
             <Button  style={{backgroundColor:selectedStatus===""?"aqua":"grey"}} onClick={()=>{setSelectedStatus("")}}>
                       All
                 </Button>
             </ListItem>
         </List>
                 <List id="tasks" >
                     {
                         tasks.filter((task)=>task.name.toUpperCase().includes(searchQuery)||task.status.toUpperCase().includes(searchQuery)||task.author.toUpperCase().includes(searchQuery)).filter((task)=>task.status.includes(selectedStatus)).map((task,i)=>{
                             console.log(task);
                            return (
                                 
                                     <Card id="task">
                                     
                                    <CardContent>
                                        {task.name}<br/>
                                        {task.status}<br/>
                                        {task.author}<br/>
                                        {task.date.slice(0,10)}
                                     </CardContent>
                                     <CardActions>
                                         <Button onClick={()=>{setTaskToBeDeleted(task._id);deleteTaskCreated(task._id)}}>
                                             <DeleteIcon/>
                                             </Button>
                                             <Button onClick={()=>{setEditTask(true);setTask({_id:task._id, id:task.id, date:task.date, author:task.author, status:task.status, name:task.name})}}>
                                             <EditIcon/>
                                             </Button>
                                     </CardActions>
                                     
                                     </Card>
                                   
                                    
                             )
                         })
                     }
                    
                </List>
      
         
    </div>);
}