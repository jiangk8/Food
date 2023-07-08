import React from "react";
import Popup from "reactjs-popup";

function AddPost() {
  return (
    <Popup trigger={<button> Trigger</button>} position='right center'>
      <div>Popup content here !!</div>
    </Popup>
  );
}

export default AddPost;
