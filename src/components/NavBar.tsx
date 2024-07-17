import React from 'react';

interface NavBarProps {
  currentSymbol: string;
  onChange: (symbol: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentSymbol, onChange }) => {
  const symbols = ['bitcoin', 'ethereum', 'dogecoin'];

  return (
    <nav>
      <select value={currentSymbol} onChange={(e) => onChange(e.target.value)}>
        {symbols.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol.toUpperCase()}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default NavBar;
