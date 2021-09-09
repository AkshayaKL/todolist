import axios from 'axios';

const baseURL ='http://localhost:3001'
const axiosInstance = axios.create({
	baseURL: baseURL,
		headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
	crossdomain: true ,
	

});



export function createForm(form){
return axiosInstance.post("/task/create",form,{headers:{
  "Content-Type": "application/json",
  accept: 'application/json',
}, 
crossdomain: true ,
})


}

export function editForm(id){
  return axiosInstance.patch("/task/edit",id,{headers:{
    "Content-Type": "application/json",
    accept: 'application/json',
  }, 
  crossdomain: true ,
  })
}
  
  export function deleteForm(id){
    alert(id)
    return axiosInstance.post(`/task/delete/`, {"id":id}, {
    headers:{
      "Content-Type": "application/json",
      accept: 'application/json',
    }, 
    
    crossdomain: true ,
    },)

  }


  export function getTaskForm(){
    return axiosInstance.get('/tasks/get',{
      headers:{
        "Content-Type": "application/json",
        accept: 'application/json',
      }, 
      
      crossdomain: true ,
      })
  }
