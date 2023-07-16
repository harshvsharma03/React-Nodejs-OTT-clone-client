import React from "react";
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import  ListItem from "../listItem/ListItem";
import { useRef } from "react";
import { useState } from "react";
 export default function List({list}){
      const [slideNumber,setSlideNumber]=useState(0);
      const [isMoved,setIsMoved]=useState(false);
      const listRef= useRef();
      const handleClick=(direction) =>{
        setIsMoved(true);
        let dist=listRef.current.getBoundingClientRect().x - 50;
        if(direction==="left" &&slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+dist}px)`
        }
        if(direction==="right" &&slideNumber<5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230+dist}px)`
        }
      }
    return(
        <div className="list">
            <span className="listTitle">
                {list.title}
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="sliderArrow left" 
                style={{display: !isMoved && "none"}}
                onClick={()=>handleClick("left")} />
                <div className="container" ref={listRef}>
                    {list.content.map((item,i)=>(
                     <ListItem index={i} item={item}/>
                    ))}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")} />
            </div>
        </div>
    )
}