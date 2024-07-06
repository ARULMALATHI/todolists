import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodoList} from '../Reducers/todoReducer'
import { LuClipboardEdit } from "react-icons/lu";
import { BsFillPlusCircleFill } from "react-icons/bs";

 function Addtodo() {
    const dispatch=useDispatch();
    const [state,setState]=useState({
        content:'',
        enddate:'',
        contentError:null,
        enddateError:null
    })
   const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
            [`${e.target.name}Error`]:null
        })

    }

    const adddata=()=>{
        if(state.content===''){
            setState({...state,contentError:'You Must Enter Something'})
        }
        else if(state.enddate===''){
            setState({...state,enddateError:'Please Enter a Enddate'})
        }
        else{
            dispatch(addTodoList({content:state.content,endDate:state.enddate}))
        }
    }


  return (
    <div className='form'>
        
        <h1>Yours Plan <LuClipboardEdit /></h1>
        <input type='text'  value={state.content} placeholder='Enter your plan' name='content' onChange={handleChange}/>&nbsp;&nbsp;
        <input type='date' value={state.date} name='enddate' onChange={handleChange}/>
        <BsFillPlusCircleFill onClick={adddata} className='button' />
        {state.contentError&&<h4>{state.contentError}</h4>}
        {state.enddateError&&<h4>{state.enddateError}</h4>}
    </div>
  )
}
export default Addtodo

