import Header from './Components/Header';
import Footer from './Components/Footer';
import SectionWelcome from './Pages/SectionWelcome';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <SectionWelcome />
      </main>
      <Footer />
    </>
  );
};

export default App;
