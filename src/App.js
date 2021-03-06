import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';

function App() {
  return (
    //  BEM class naming convention
    <>
      {/* Header */}
      <Header/>

      {/* Tinder Cards */}
      <TinderCards/>

      {/* Swipe Buttons */}
      <SwipeButtons/>
    </>
  );
}

export default App;
