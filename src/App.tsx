import "./App.css";
import { useState } from "react";
import { VirtualizedGrid } from "./components/Grid/Grid";

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
  id: `Name ${index}`,
  name: `Name ${index}`,
  type: Object.keys(fieldTypeMap)[
    index % Object.keys(fieldTypeMap).length
  ] as keyof typeof fieldTypeMap,
  items: [...Array(100)].map((_, i) => ({
    id: `Item ${i} - row ${index}`,
    name: `Item ${i} - row ${index}`,
  })),
}));

function App() {
  const [rows] = useState(mockedRandomData);

  return (
    <main>
      <section>
        <VirtualizedGrid
          rowHeight={100}
          columnWidth={150}
          totalRows={rows.length}
          totalColumns={100}
          rowGap={5}
          columnGap={10}
        >
          {rows.map((_) => (
            <div key={_.id} style={{ width: "100%", height: "100px" }}>
              {_.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    width: "150px",
                    height: "100px",
                    backgroundColor: "blue",
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          ))}
        </VirtualizedGrid>
      </section>
    </main>
  );
}

export default App;
