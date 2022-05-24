import Header from "./components/Header"
import Entries from "./components/Entries"
import journalData from "./data"


function App() {

  const journalEntries = journalData.map(entry => {
    return (
      <Entries 
      key = {entry.id}
      {...entry}
      />
    )
  })

  return (
    <>
    <Header />
    <section className="journal-entries">
      {journalEntries}
    </section>
    </> 
  );
}

export default App;
