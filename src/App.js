import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post"

function App() {
  return (
    <>
      <Header />
      <main>
        <Post title="Meu primeiro post" />
        <Post title="Meu segundo post" />
      </main>
      <Footer />
    </>
  );
}

export default App;
