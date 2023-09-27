import { useEffect, useState } from "react";
import { data } from "./data";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(data);
  }, []);

  const getData = () => {
    let tempChar = "";

    const newContacts = contacts.map((c) => {
      const splited = c.user.split(" ");
      return { ...c, firstname: splited[0], lastname: splited[1] };
    });

    const formatData = newContacts
      .sort((a, b) => {
        return a.lastname < b.lastname ? -1 : 1;
      })
      .map((c) => {
        const initialLastName = c.lastname.charAt(0);

        if (tempChar !== initialLastName) {
          tempChar = initialLastName;
          return (
            <div>
              {"    "}
              <li>{tempChar}</li>
              <li>{c.user}</li>
            </div>
          );
        }
        return (
          <li key={c.id} id={c.id}>
            {c.user}
          </li>
        );
      });

    return formatData;
  };
  return (
    <div className="App">
      <h1>CompanyCam Technical Interview</h1>
      {getData()}
    </div>
  );
}
