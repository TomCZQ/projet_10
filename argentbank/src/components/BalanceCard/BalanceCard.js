import React from 'react'
import Button from "../../components/Button/Button"
import "./Style/BalanceCard.scss"

const BalanceCard = () => {

const account = []

  return (
    <section className="account">
        <div className="account-content-wrapper">
            <p className="account-title">{`Argent Bank ${account.type} (x8549)`}</p>
            <h3 className="account-amount">{`${account.balance}`}</h3>
            <p className="account-amount-description">Available balance</p>
        </div>
        <Button className="edit-button" name="View transactions"/>
    </section>
  )
}

export default BalanceCard