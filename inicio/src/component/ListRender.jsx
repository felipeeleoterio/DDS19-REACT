import { useState } from "react";

const ListRender = () => {
  const [lista] = useState(["Mateus", "Marcos", "Lucas", "João"]);

  return (
    <div>
      
      <ul>
        {lista.map((item)=> (
            <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
