import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
 const [notes, setNote] = useState([]);

 const [noteContent, setNoteContent] = useState({
  title: '',
  content: '',
 });

 function handleChange(e) {
  e.preventDefault();
  const { value, name } = e.target;

  setNoteContent((previousValue) => {
   if (name == 'title') {
    return {
     title: value,
     content: previousValue.content,
    };
   } else if (name == 'content') {
    return {
     title: previousValue.title,
     content: value,
    };
   }
  });
 }

 function addNote(e) {
  e.preventDefault();
  setNote([...notes, noteContent]);
  setNoteContent({ title: '', content: '' });
 }

 function deleteNote(id) {
  setNote((previousValue) => {
   return previousValue.filter((note, index) => {
    return index !== id;
   });
  });
 }

 function getYear() {
  const year = new Date().getFullYear();
  return year;
 }
 return (
  <div>
   <Header />
   <CreateArea
    title={noteContent.title}
    content={noteContent.content}
    handleChange={handleChange}
    addNote={addNote}
   />
   {notes.map((note, index) => {
    return (
     <Note
      deleteNote={deleteNote}
      key={index}
      id={index}
      title={note.title}
      content={note.content}
     ></Note>
    );
   })}
   <Footer year={getYear()} />
  </div>
 );
}

export default App;
