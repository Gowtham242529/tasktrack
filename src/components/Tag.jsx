import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectedTags, selected}) => {
  const tagStyle={
    HTML : {backgroundColor : '#fda821'},
    CSS : {backgroundColor:'#15d4c8'},
    JavaScript : {backgroundColor:'#ffd12c'},
    React : {backgroundColor:'#4cdafc'},
    default : {backgroundColor:'#f9f9f9'}
  }
  return (
    <button id="tag_button" type="button" onClick={()=>selectedTags(tagName)} style={selected? tagStyle[tagName]:tagStyle.default}>
      {tagName}
    </button> //using ()=> selectedTags(tagName) to execute the function throught the code whenever a change takes place and passing the tagName to store the tagName in the tags.
  );
};

export default Tag;
