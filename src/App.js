import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
  const cards = data.map(data => {
    return <Card 
              key={data.id}
              data={data}
          />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Card 
        img="image1.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zafares"
        price={136}
      /> */}
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
