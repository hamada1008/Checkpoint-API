import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Card from './Component/Card'

const UserList = () => {

    const [users , setUsers] = useState([])

   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => setUsers(res.data))
    .catch(err => err)
   }, [])
   
    return (
        <div className="cards">
        {users.map(el => <Card
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

