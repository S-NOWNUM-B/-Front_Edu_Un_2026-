import { useState, useCallback } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { Button } from "./Button";

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [user] = useState({ id: 1, name: "John Doe", email: "john@example.com" });
  const [items] = useState(["item1", "item2", "item3"]);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h1>Dashboard (Count: {count})</h1>
      <Button onClick={handleIncrement} label="Increment Count" />
      
      <UserCard user={user} />
      <AnalyticsChart items={items} />
      
      <p style={{color: 'gray'}}>Check console to see what re-renders when you click increment.</p>
    </div>
  );
}