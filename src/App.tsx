import "./App.css";
import StaticList from "./components/List/List";

function App() {
  return (
    <main>
      <StaticList rowHeight={100} totalElements={100}>
        {[...Array(100)].map((_, index) => (
          <div
            style={{
              border: "1px solid white",
              height: "100px",
              width: "100%",
            }}
            key={index}
          >
            {index}
          </div>
        ))}
      </StaticList>
    </main>
  );
}

export default App;
