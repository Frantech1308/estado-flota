import React from 'react';

export default function Header({ lastUpdated }) {
  return (
    <header className="w-full bg-gray-900 p-4 shadow-md fixed top-0">
      <h1 className="text-2xl font-bold text-blue-400">MONITOR DE FLOTA</h1>
      <p className="text-sm text-gray-400">Última actualización: {lastUpdated}</p>
    </header>
  );
}
