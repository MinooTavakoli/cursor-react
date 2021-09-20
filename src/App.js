import React from "react";
import Cursor from "./lib/components/Cursor";
import images from "./lib/components/images.png";

function App() {
  return (
    <div>
      <Cursor imageIcon={images} size={30}>
        <div>
          content test cursor image
        </div>
      </Cursor>
    </div>
  );
}

export default App;
