import React from 'react'
import Button from "../../components/Button/Button"
import BalanceCard from '../../components/BalanceCard/BalanceCard'
import "./Style/Profile.scss"

const Profile = () => {

    const user = ""

  return (
    <div className="bg-dark main">
        <div className="header">
            <h1>Welcome back {user.fistname} {user.name} !</h1>
            <Button name="Edit name"/>
        </div>
        
        <h2 className="sr-only">Accounts</h2>
        <BalanceCard/>
        <BalanceCard/>
        <BalanceCard/>

    </div>
  )
}

export default Profile;