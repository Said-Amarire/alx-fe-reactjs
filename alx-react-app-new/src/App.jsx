import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age="25" bio="I love visiting cities around the world!" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
