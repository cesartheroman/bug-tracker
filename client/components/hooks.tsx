import * as React from 'react';
import { useState, useEffect } from 'react';

export const Hooks = () => {
  const [val, toggle] = useState(false); // `val` is inferred to be a boolean, `toggle` only takes booleans

  return (
    <div>
      <h2>HOOKS</h2>
    </div>
  );
};
