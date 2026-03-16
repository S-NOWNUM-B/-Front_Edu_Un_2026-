import React, { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { generateItems } from "../utils/generateItems";

export function VirtualList() {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(10000), []);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, items]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = filteredItems[index];
    return (
      <div style={style} className="list-item">
        <div style={{ borderBottom: '1px solid #eee', padding: '5px' }}>
          <strong>{item.title}</strong> [{item.category}]
          <p style={{ margin: 0, fontSize: '0.8em' }}>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Virtualized List (10,000 items)</h2>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />
      <p>Showing {filteredItems.length} items</p>
      
      <List
        height={500}
        itemCount={filteredItems.length}
        itemSize={80}
        width={"100%"}
      >
        {Row}
      </List>
    </div>
  );
}