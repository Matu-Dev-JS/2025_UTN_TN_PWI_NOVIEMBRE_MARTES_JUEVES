import React, { useContext } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'

export default function ContactSidebar() {
    //useContext es un hook que nos permite consumir el contexto
    //Recibe por parametro el contexto que queremos consumir
    //Una vez consumido me traera el valor del value del contexto
    const { contacts, favorite_name } = useContext(ContactsContext)
  return (
    <div>
        <h2>Whatsapp Clone</h2>
        <h3>Me cae muy bien: {favorite_name}</h3>
        <div>
            {
                contacts.map(
                    (contact ) => {
                        return (
                            <Link 
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                
                            >
                                <img 
                                    src={contact.profile_picture} 
                                    alt={contact.name} 
                                    style={
                                        {
                                            width: '200px'
                                        }
                                    }
                                />
                                <h3>{contact.name}</h3>
                                <span>{contact.last_time_connection}</span>
                                <br />
                                <hr />
                            </Link>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}
