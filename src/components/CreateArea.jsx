import React, { useState } from 'react';

function CreateArea(props) {
 let row = 1;
 const [isExpanded, setIsExpanded] = useState(false);

 function expand() {
  setIsExpanded(true);
  row = 3;
 }
 return (
  <div>
   <form>
    {isExpanded == true ? (
     <input
      onChange={props.handleChange}
      name='title'
      placeholder='Title'
      value={props.title}
     />
    ) : null}
    <textarea
     onClick={expand}
     onChange={props.handleChange}
     name='content'
     placeholder='Take a note...'
     rows={row}
     value={props.content}
    />
    <button onClick={props.addNote}>Add</button>
   </form>
  </div>
 );
}

export default CreateArea;
