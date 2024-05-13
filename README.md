# Virtualized List and Grid Component

This project provides virtualized list and grid components for efficient rendering of large datasets.

It provides the following components:

- `FixedList`: A list component that renders items of a fixed height/width.
- `DynamicList`: A list component that renders items of varying heights/widths.
- `VirtualizedGrid`: A grid component that renders a large number of rows and columns efficiently.

<br>

## Contents

- [Virtualized List and Grid Component](#virtualized-list-and-grid-component)
  - [FixedList](#fixedlist)
    - [FixedListProps](#fixedlistprops)
    - [FixedList - Usage](#fixedlist---usage)
  - [DynamicList](#dynamiclist)
    - [DynamicListProps](#dynamiclistprops)
    - [DynamicList - Usage](#dynamiclist---usage)
  - [VirtualizedGrid](#virtualizedgrid)
    - [VirtualizedGridProps](#virtualizedgridprops)
    - [VirtualizedGrid - Usage](#virtualizedgrid---usage)

<br>

## FixedList

<br>

### FixedListProps

| Prop          | Type                      | Default    | Description                                                  | Required |
| ------------- | ------------------------- | ---------- | ------------------------------------------------------------ | -------- |
| children      | JSX.Element[]             | -          | The children to render in the list                           | ✓        |
| totalElements | number                    | -          | The total number of elements in the list                     | ✓        |
| width         | number                    | "100%"     | The width of the container                                   |          |
| height        | number                    | "100%"     | The height of the container                                  |          |
| overscanCount | number                    | 3          | The number of elements to render outside of the visible area |          |
| gap           | number                    | 0          | The gap between each item in the list                        |          |
| itemSize      | number                    | -          | The size of each item in the list                            |          |
| orientation   | "vertical" \| "horizontal | "vertical" | The orientation of the list                                  |          |
| reverse       | boolean                   | false      | Indicates if the list should start at the bottom             |          |

<br>

### FixedList - Usage

The `FixedList` component is used to render a list of items where each item has a fixed height/width. It can be an horizontal or vertical list.
The `itemSize` prop is required when using the `FixedList` component. The `itemSize` prop specifies the height or width (depending on the orientation) of each item in the list.

```tsx
import { FixedList } from "virtualize-it";
import { ChildComponentProps } from "./types";

function ChildComponent(props: ChildComponentProps) {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function MainComponent() {
  return (
    <div className='w-full h-full'>
      <FixedList
        totalElements={100}
        itemSize={100}
        overscanCount={3}
        gap={10}
        orientation='vertical'
      >
        {Array.from({ length: 100 }).map((item, index) => (
          <ChildComponent
            key={item.id} // IMPORTANT: use a consistent key for each item, don't use the index.
            title={`Title ${index}`}
            description={`Description ${index}`}
          />
        ))}
      </FixedList>
    </div>
  );
}
```

<br>

## DynamicListProps

<br>

### DynamicListProps

| Prop          | Type          | Default    | Description                                                  | Required |
| ------------- | ------------- | ---------- | ------------------------------------------------------------ | -------- |
| children      | JSX.Element[] | -          | The children to render in the list                           | ✓        |
| totalElements | number        | -          | The total number of elements in the list                     | ✓        |
| getItemSize   | function      | -          | A function that returns the size of each item                | ✓        |
| width         | number        | "100%"     | The width of the container                                   |          |
| height        | number        | "100%"     | The height of the container                                  |          |
| overscanCount | number        | 3          | The number of elements to render outside of the visible area |          |
| gap           | number        | 0          | The gap between each item in the list                        |          |
| orientation   | string        | "vertical" | The orientation of the list                                  |          |
| reverse       | boolean       | false      | Indicates if the list should start at the bottom             |          |

<br>

### DynamicList - Usage

The `DynamicList` component is used to render a list of items where each item has a varying height/width. It can be an horizontal or vertical list. It is thinked to be used in list where the items have
different heights/widths based on the type or content of the item.
The `getItemSize` prop is required when using the `DynamicList` component. It is a function that receives the index of the item as an argument and
returns the height or width (depending on the orientation) of each item in the list.

```tsx
import { DynamicList } from "virtualize-it";
import { useCallback } from "react";

const data = [
  {
    id: 1,
    type: "text",
    content: "This is a text item",
  },
  {
    id: 2,
    type: "image",
    content: "https://example.com/image.jpg",
  },
  {
    id: 3,
    type: "text",
    content: "This is another text item",
  },
];

const sizeMap = {
  text: 100,
  image: 200,
};

function ChildComponent(props) {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      {props.type === "image" && <img src={props.content} alt='image' />}

      {props.type === "text" && <h1>{props.content}</h1>}
    </div>
  );
}

function MainComponent() {
  const getItemSize = useCallback((index: number) => {
    // NOTE: consider memoizing this function if it will not change frequently.
    const item = data[index];

    return sizeMap[item.type];
  }, []);

  return (
    <div className='w-full h-full'>
      <DynamicList
        totalElements={data.length}
        getItemSize={getItemSize}
        overscanCount={1}
        gap={10}
      >
        {data.map((item, index) => (
          <ChildComponent
            key={item.id} // IMPORTANT: use a consistent key for each item, don't use the index.
            type={item.type}
            content={item.content}
          />
        ))}
      </DynamicList>
    </div>
  );
}
```

<br>

## VirtualizedGrid

<br>

### VirtualizedGridProps

| Prop                | Type   | Default | Description                                                 | Required |
| ------------------- | ------ | ------- | ----------------------------------------------------------- | -------- |
| rowHeight           | number | -       | The height of each row in the grid                          | ✓        |
| columnWidth         | number | -       | The width of each column in the grid                        | ✓        |
| totalRows           | number | -       | The total number of rows in the grid                        | ✓        |
| totalColumns        | number | -       | The total number of columns in the grid                     | ✓        |
| width               | number | "100%"  | The width of the container                                  |          |
| height              | number | "100%"  | The height of the container                                 |          |
| rowOverscanCount    | number | 3       | The number of rows to render outside of the visible area    |          |
| columnOverscanCount | number | 3       | The number of columns to render outside of the visible area |          |
| rowGap              | number | 0       | The gap between each row in the grid                        |          |
| columnGap           | number | 0       | The gap between each column in the grid                     |          |

<br>

### VirtualizedGrid - Usage

The `VirtualizedGrid` component is used to render a grid of items where each item has a fixed height/width.
The children of the `VirtualizedGrid` component should be a 2D array where each element in the outer array represents a row and each element in the inner array represents a column.

```tsx
import { VirtualizedGrid } from "virtualize-it";

const data = Array.from({ length: 1000 }).map((_, index) => ({
  id: index,
  title: `Title ${index}`,
  description: `Description ${index}`,
  items: Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    title: `Item ${index}`,
  })),
}));

function MainComponent() {
  return (
    <div className='w-full h-full'>
      <VirtualizedGrid
        totalRows={data.length}
        totalColumns={10}
        rowHeight={100}
        columnWidth={100}
        rowOverscanCount={3}
        columnOverscanCount={3}
        rowGap={10}
        columnGap={10}
      >
        {data.map((row, rowIndex) => (
          <div key={row.id} className='flex flex-col'>
            {row.items.map((item, itemIndex) => (
              <div key={item.id} className='flex flex-col'>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        ))}
      </VirtualizedGrid>
    </div>
  );
}
```

<br>

## Caveats

- All three components require a consistent key for each item, don't use the index from the map function. If your data doesn't have a unique identifier, you can generate one using a library like `uuid` or `nanoid`. Just map the data before passing it to the component.
- The calculated size of the `DynamicList` is not "fully" dynamic. The component needs the user to supply a function that returns the size of each item
  based on the index. This is because calculating the height/width of each item automatically requires rendering them off-screen, which can be inefficient for large datasets.
