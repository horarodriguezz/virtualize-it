import "./App.css";
import StaticList from "./components/List/List";
import DinamicList from "./components/List/DynamicList";

const fieldTypeMap = {
  TEXT: 50,
  NUMBER: 50,
  DATE: 50,
  EMAIL: 50,
  IMAGE: 200,
  VIDEO: 200,
  FILE: 200,
  TEXT_LIST: 50,
  SINGLE_SELECT: 50,
  MULTI_SELECT: 50,
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
        <StaticList rowHeight={100} totalElements={100} gap={20}>
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
      </section>

      <section>
        <DinamicList
          totalElements={mockedRandomData.length}
          getItemSize={(index) => fieldTypeMap[mockedRandomData[index].type]}
        >
          {mockedRandomData.map((data) => (
            <div
              style={{
                border: "1px solid white",
                height: fieldTypeMap[data.type],
                width: "100%",
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
