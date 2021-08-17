import React from 'react'
import  compSrc from "../company.png"

const Card = (props) => {
    return (
        <div className='card'>
<span className="info">User Info</span>
<div className="names">
<span className="name"><strong>Name : </strong>{props.name}</span> <br />
<span className="username"> <strong> Username : </strong>{props.username}</span>
</div>
<div className="picture">
<img src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg" alt="person" />
</div>
<div className="address">
    <strong>Address: </strong> <br />
<span className="street">{`${props.suite} ${props.street},`}</span> <br />
<span className="city">{`${props.city} ${props.zipcode} `}</span>
</div>
<div className="otherInfo">
<p className="phone"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/>{props.phone}</p>
<p className="website"><img src="https://www.pngfind.com/pngs/b/229-2298411_lularoe-logo-png.png"/>{props.website}</p>
<p className="company"><img src={compSrc}/> {props.company}</p>
</div>


        </div>
    )
}

export default Card
