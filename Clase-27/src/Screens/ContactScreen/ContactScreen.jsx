import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactScreen() {
  const {contacts} = useContext(ContactsContext)

  //Obtengo el id del contacto seleccionado a traves de los parametros de la url
  const {contact_id} = useParams()

  //Busco el contacto seleccionado en la lista de contactos
  const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

  return (
    <div>
      <ContactSidebar />
      {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
      {
        ! contact_selected 
        ? <div>
            <h1>El contacto seleccionado no existe</h1>
        </div>
        : <div>
          <h1>
            El contacto seleccionado es: {contact_selected.name  }
          </h1>
          <div>
            {
              contact_selected.messages.map(message => {
                return (
                  <div key={message.id}>
                    {
                      message.send_by_me
                      ? <h3>Enviado mi</h3>
                      : <h3>Enviado por: {contact_selected.name}</h3>
                    }
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                    <hr />
                  </div>
                )
            })}
          </div>
          <form>
            <textarea placeholder='Escribe un mensaje...' />
            <button type='submit'>Enviar</button>
          </form>
        </div>
      }
      
    </div>
  )
}
