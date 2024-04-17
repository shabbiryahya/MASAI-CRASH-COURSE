import React, { useState, useMemo } from 'react';

const HeavyComputationComponent = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');
  const items = Array.from({ length: 10000 }, (_, index) => `Item ${index}`);

  return (
    <div>
      <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} />
      <HeavyComputationComponent items={items} filter={filter} />
    </div>
  );
};

export default App;
