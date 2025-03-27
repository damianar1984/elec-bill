import { StateUpdater, useState } from 'preact/hooks';

interface CreateTenantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTenantModal({ isOpen, onClose }: CreateTenantModalProps) {
  const [formData, setFormData] = useState({
    anrede: '',
    vorname: '',
    nachname: '',
    email: '',
    strasse: '',
    hausnummer: '',
    plz: '',
    stadt: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    // TODO: Implement form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Schließen</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Neuen Mieter anlegen
              </h3>
              <div className="mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="anrede" className="block text-sm font-medium text-gray-700">
                        Anrede
                      </label>
                      <select
                        id="anrede"
                        value={formData.anrede}
                        onChange={(e) => setFormData({...formData, anrede: (e.target as HTMLSelectElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vorname" className="block text-sm font-medium text-gray-700">
                        Vorname
                      </label>
                      <input
                        type="text"
                        id="vorname"
                        value={formData.vorname}
                        onChange={(e) => setFormData({...formData, vorname: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="nachname" className="block text-sm font-medium text-gray-700">
                        Nachname
                      </label>
                      <input
                        type="text"
                        id="nachname"
                        value={formData.nachname}
                        onChange={(e) => setFormData({...formData, nachname: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="strasse" className="block text-sm font-medium text-gray-700">
                        Straße
                      </label>
                      <input
                        type="text"
                        id="strasse"
                        value={formData.strasse}
                        onChange={(e) => setFormData({...formData, strasse: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="hausnummer" className="block text-sm font-medium text-gray-700">
                        Hausnummer
                      </label>
                      <input
                        type="text"
                        id="hausnummer"
                        value={formData.hausnummer}
                        onChange={(e) => setFormData({...formData, hausnummer: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="plz" className="block text-sm font-medium text-gray-700">
                        PLZ
                      </label>
                      <input
                        type="text"
                        id="plz"
                        value={formData.plz}
                        onChange={(e) => setFormData({...formData, plz: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="stadt" className="block text-sm font-medium text-gray-700">
                        Stadt
                      </label>
                      <input
                        type="text"
                        id="stadt"
                        value={formData.stadt}
                        onChange={(e) => setFormData({...formData, stadt: (e.target as HTMLInputElement).value})}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    >
                      Anlegen
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    >
                      Abbrechen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}