import "./App.css";
import StaticList from "./components/List/List";
import DinamicList from "./components/List/DynamicList";

const fieldTypeMap = {
  TEXT: 150,
  NUMBER: 150,
  DATE: 150,
  EMAIL: 150,
  IMAGE: 300,
  VIDEO: 300,
  FILE: 300,
  TEXT_LIST: 150,
  SINGLE_SELECT: 150,
  MULTI_SELECT: 150,
} as const;

const mockedRandomData = [...Array(100)].map((_, index) => ({
  id: index,
  name: `Name ${index}`,
  type: Object.keys(fieldTypeMap)[
    index % Object.keys(fieldTypeMap).length
  ] as keyof typeof fieldTypeMap,
}));

function App() {
  return (
    <main>
      <section>
        <StaticList
          itemSize={100}
          totalElements={100}
          gap={20}
          orientation='horizontal'
        >
          {[...Array(100)].map((_, index) => (
            <div
              style={{
                border: "1px solid white",
                height: "100%",
                width: "100px",
              }}
              key={index}
            >
              {index}
            </div>
          ))}
        </StaticList>
      </section>

      <section>
        <DinamicList
          totalElements={mockedRandomData.length}
          getItemSize={(index) => fieldTypeMap[mockedRandomData[index].type]}
          orientation='horizontal'
        >
          {mockedRandomData.map((data) => (
            <div
              style={{
                border: "1px solid white",
                height: "100px",
                width: fieldTypeMap[data.type],
              }}
              key={data.id}
            >
              {`${data.type} - ${data.name}`}
            </div>
          ))}
        </DinamicList>
      </section>
    </main>
  );
}

export default App;
