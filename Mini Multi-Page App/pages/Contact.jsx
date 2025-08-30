import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {

  const { contactId, contactName } = useParams();
  console.log(contactId);

  return (
    <div>
      <div>Contact</div>
      <h1>hellow to {contactId} and {contactName}</h1>
    </div>
  )
}

export default Contact