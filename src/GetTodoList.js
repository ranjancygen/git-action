import React,{useEffect,useState} from 'react'
import axios from 'axios'

const GetTodoList = () => {
    const [userList,setUserList] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=> {
            if(res && res.status === 200) {
                setUserList(res.data)
            }
        })
    },[])
  return (
      <>
      <h2>GetTodoList</h2>
    {
        userList.map(data => 
            <ul key={data.id}>
                <li><h5>{data.name}</h5></li>
            </ul>
        )
    }
      </>
    
  )
}

export default GetTodoList