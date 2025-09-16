
import './App.css'
import ContactDataRender from "./components/ContactDataRenderer"
import type  {Contact}  from "./types/contact"


const sampleContacts: Contact[] = [
  {id:1 , name:"santosh",email:"santosh@gmail.com",phone:"3265265646"},
  {id:2 , name:"pawan",email:"pawan1@gmail.com",phone:"1234546789"},
  {id:3 , name:"ram",email:"ram2@gmail.com",phone:"9875642"},
  {id:4 , name:"shayam",email:"shayam3@gmail.com",phone:"9875569"},
  {id:5 , name:"sita",email:"sita@gmail.com",phone:"985264654"}
]

function App() {

 

  return (    
    <>
        <ContactDataRender contacts={sampleContacts}/>
    </>   
  )
}

export default App
