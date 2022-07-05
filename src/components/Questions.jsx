import React from 'react';
import { useState } from 'react';
import questions from  "../helper/data"
import Card from './Card';

const Questions = () => {

   const [data,setData]=useState(questions);
  //  console.log(data);

  return (
    <div>
    {
        data.map((item,index,data)=>{
            // console.log(item);
            return(
                <Card data={data[index]}/>
            )
        })
    }
    </div>
  )
}

export default Questions


