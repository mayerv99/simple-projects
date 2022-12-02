import { useState } from "react";

import "./app.css";

type SelectedCoordinates = {
  clientX: number;
  clientY: number;
};

function App() {
  // List of selected coordinates
  const [selectedCoordinates, setSelectedCoordinates] = useState<
    SelectedCoordinates[]
  >([]);
  // List of removed items
  const [removedItems, setRemovedItems] = useState<SelectedCoordinates[]>([]);

  //Function to get the coordinates and create a new item
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;

    setSelectedCoordinates((prevValues) => [
      ...prevValues,
      { clientX, clientY },
    ]);
  };

  //Function to remove the last item selected
  const handleUndo = () => {
    const newSelected = [...selectedCoordinates];

    const removedItem = newSelected.pop();

    if (!removedItem) return;

    setSelectedCoordinates(newSelected);

    setRemovedItems([...removedItems, removedItem]);
  };

  //Funciton to redo the last removed item
  const handleRedo = () => {
    const newRemoved = [...removedItems];

    const newRedoPoint = newRemoved.pop();

    if (!newRedoPoint) return;

    setSelectedCoordinates([...selectedCoordinates, newRedoPoint]);
    setRemovedItems(newRemoved);
  };

  return (
    <>
      <div className="buttons-div">
        <button
          disabled={selectedCoordinates?.length === 0}
          onClick={handleUndo}
        >
          Desfazer
        </button>
        <button disabled={removedItems?.length === 0} onClick={handleRedo}>
          Refazer
        </button>
      </div>
      <div className="main-div" onClick={(e) => handleClick(e)}>
        {selectedCoordinates.map((location, index) => (
          <div
            key={index}
            className="circle"
            style={{
              left: location.clientX,
              top: location.clientY,
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
