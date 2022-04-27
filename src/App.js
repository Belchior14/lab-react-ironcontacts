import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const first5Contacts = contacts.slice(0, 7);
  console.log(first5Contacts);

  const [allContacts, setAllContacts] = useState(first5Contacts);

  const handleSortByName = () => {
    const listedByName = [...allContacts];

    listedByName.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    setAllContacts(listedByName);
  }

  const handleSortByPopularity = () => {
    const sortedByPop = [...allContacts];

    sortedByPop.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });

    setAllContacts(sortedByPop);
  }

  const handleDelete = (id) => {

    let deletedPerson = allContacts.filter((contact) => {
      return contact.id !== id
    })

    setAllContacts(deletedPerson)

  }


  return (
    <div>
      <h1>Ironcontacts</h1>
      <button onClick={handleSortByName} >Sort by name</button>
      <button onClick={handleSortByPopularity} >Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {allContacts.map((contact, i) => {
            return (
              <tr key={`${contact.id}${i}`}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contact"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? (
                    <img
                      src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f3c6@2x.png"
                      alt="trophy"
                    />
                  ) : null}
                </td>
                <td>
                  {contact.wonEmmy ? (
                    <img
                      src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f3c6@2x.png"
                      alt="trophy"
                    />
                  ) : null}
                </td>
                <td>
                  <button onClick={ ()=>handleDelete(contact.id)} >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default App;
