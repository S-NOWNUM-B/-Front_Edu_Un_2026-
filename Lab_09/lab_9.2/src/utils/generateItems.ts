export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

export function generateItems(count: number): Item[] {
  const categories = ["Tech", "Science", "Business", "Sports", "Entertainment"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}. It contains some text.`,
    category: categories[Math.floor(Math.random() * categories.length)],
  }));
}