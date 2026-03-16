import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList() {
  const items = useMemo(() => generateItems(1000), []);

  return (
    <div style={{ padding: '20px', borderTop: '2px solid red', marginTop: '50px' }}>
      <h2>Regular List (Slow - 1,000 items only)</h2>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        {items.map(item => (
          <div key={item.id} style={{ padding: '5px', borderBottom: '1px solid #eee' }}>
            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}