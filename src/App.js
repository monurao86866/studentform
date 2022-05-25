import React, { useState } from 'react'
import "./App.css"
import {nanoid} from 'nanoid';
import data from "./monk-data.json"
 
const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    studentname:'',
    class:'',
    primarycontact:'',
    alternativecontact:'',
    sem1:'',
    sem2:'',
    sem3:'',
    sem4:'',
    sem5:'',
    sem6:'',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      studentname: addFormData.studentname,
      class: addFormData.class,
      primarycontact: addFormData.primarycontact,
      alternativecontact: addFormData.alternativecontact,
      sem1: addFormData.sem1,
      sem2:addFormData.sem2,
      sem3:addFormData.sem3,
      sem4:addFormData.sem4,
      sem5:addFormData.sem5,
      sem6:addFormData.sem6,

    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Primary Contact</th>
            <th>Alternative Contact</th>
            <th>Sem1</th>
            <th>Sem2</th>
            <th>Sem3</th>
            <th>Sem4</th>
            <th>Sem5</th>
            <th>Sem6</th>
            </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
              <tr>
            <td>{contact.studentname}</td>
            <td>{contact.class}</td>
            <td>{contact.primarycontact}</td>
            <td>{contact.alternativecontact}</td>
            <td>{contact.sem1}</td>
            <td>{contact.sem2}</td>
            <td>{contact.sem3}</td>
            <td>{contact.sem4}</td>
            <td>{contact.sem5}</td>
            <td>{contact.sem6}</td>
            </tr>
          ))}
          </tbody>
      </table>
      <h2>Add Student Information</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="studentname" required="required" placeholder='Enter Name' onChange={handleAddFormChange}/>
        <input type="text" name="class" required="required" placeholder='Class' onChange={handleAddFormChange}/>
        <input type="text" name="primarycontact" required="required" placeholder='Contact number' onChange={handleAddFormChange}/>
        <input type="text" name="alternativecontact" required="required" placeholder='Alternat number' onChange={handleAddFormChange}/> 
        <input type="text" name="sem2" required="required" placeholder='Semester 2 Percentage ' onChange={handleAddFormChange}/>
        <input type="text" name="sem3" required="required" placeholder='Semester 3 Percentage ' onChange={handleAddFormChange}/>
        <input type="text" name="sem4" required="required" placeholder='Semester 4 Percentage' onChange={handleAddFormChange}/>
        <input type="text" name="sem5" required="required" placeholder='Semester 5 Percentage ' onChange={handleAddFormChange}/>
        <input type="text" name="sem6" required="required" placeholder='Semester 6 Percentage ' onChange={handleAddFormChange}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default App