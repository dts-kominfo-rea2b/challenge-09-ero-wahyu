import "./App.css";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";
import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="App main">
        <Header/>
        <Contact contacts={contacts} />
      </div>
    </div>
  );
};

export default App;
