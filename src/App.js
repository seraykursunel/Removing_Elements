import { useState } from "react";
import { Input } from "./Input";
import { RemoveForm } from "./RemoveForm";

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const removeColorAtIndex = (indexToRemove) => {
    // Yapılacaklar: 'indexToRemove' konumundaki elementi kaldırın
    // 'setColors'ı çağırarak state'i güncellemeyi unutmayın

    setColors(colors.filter((color, index) => index !== indexToRemove));

    // 2.Yöntem
    // setColors(colors.toSpliced(indexToRemove,1))
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const renderedColors = colors.map((color) => {
    return <li key={crypto.randomUUID()}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length} />
    </div>
  );
}

export default App;
