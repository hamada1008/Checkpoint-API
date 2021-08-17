import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Card from './Component/Card'

const UserList = () => {

    const [listOfUSer , setListOfUSer] = useState([])

   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => setListOfUSer(res.data))
    .catch(err => err)
   }, [])
   
    return (
        <div className="cards">
        {listOfUSer.map(el => <Card
                        key = {el.id}
                        name = {el.name}
                        username = {el.username}
                        street = {el.address.street}
                        suite = {el.address.suite}
                        city = {el.address.city}
                        zipcode = {el.address.zipcode}
                        phone = {el.phone}
                        website = {el.website}
                        company = {el.company.name}

        
        />)}
        

        </div>
    )
}

export default UserList

