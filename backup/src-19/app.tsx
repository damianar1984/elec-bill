import { render } from 'preact';
import { useState } from 'preact/hooks';
import './index.css';
import { ZaehlerstandErfassen } from './components/ZaehlerstandErfassen';

export function App() {
  const [activeTab, setActiveTab] = useState('zaehlerstand');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Mieterverwaltung
        </h1>

        <div className="mb-6 flex space-x-1 rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('zaehlerstand')}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'zaehlerstand'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            Zählerstand erfassen
          </button>
          <button
            onClick={() => setActiveTab('historie')}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'historie'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            Abrechnungshistorie
          </button>
        </div>

        {activeTab === 'zaehlerstand' && <ZaehlerstandErfassen />}
        {activeTab === 'historie' && (
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <p className="text-gray-600">Abrechnungshistorie wird geladen...</p>
          </div>
        )}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('app')!);