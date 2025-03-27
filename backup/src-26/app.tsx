import { render } from 'preact';
import { useState } from 'preact/hooks';
import './index.css';
import { ZaehlerstandErfassen } from './components/ZaehlerstandErfassen';
import { CreateTenantModal } from './components/CreateTenantModal';
import { Abrechnungshistorie } from './components/Abrechnungshistorie';
import { Verbrauchsanalyse } from './components/Verbrauchsanalyse';

export function App() {
  const [activeTab, setActiveTab] = useState('zaehlerstand');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                {/* Logo placeholder */}
                <div className="h-8 w-8 rounded bg-blue-600"></div>
                <span className="ml-2 font-sans text-2xl font-bold tracking-tight text-gray-900 antialiased">
                  Stromabrechnung
                </span>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="inline-flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Mieter anlegen
              </button>

              <div className="relative ml-3">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Benutzermenü öffnen</span>
                  <div className="h-8 w-8 rounded-full bg-gray-300">
                    <svg
                      className="h-8 w-8 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profil
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Einstellungen
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Abmelden
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 sm:p-6 md:p-8">
        <div className="container mx-auto max-w-7xl">
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
            <button
              onClick={() => setActiveTab('analyse')}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'analyse'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Verbrauchsanalyse
            </button>
          </div>

          {activeTab === 'zaehlerstand' && <ZaehlerstandErfassen />}
          {activeTab === 'historie' && <Abrechnungshistorie />}
          {activeTab === 'analyse' && <Verbrauchsanalyse />}
        </div>
      </main>

      <CreateTenantModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}

render(<App />, document.getElementById('app')!);