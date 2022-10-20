import { useState, useEffect } from "react";


function Cocktails({ cocktails }) {
  return (
    <div>
        <p>
            {cocktails[0].name}
        </p>
    </div>
  );
}

export default Cocktails;
