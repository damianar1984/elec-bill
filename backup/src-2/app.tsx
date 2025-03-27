import { render } from 'preact'
import './index.css'
import { supabase } from './lib/supabase'
import { useEffect, useState } from 'preact/hooks'

interface Tenant {
  id: number
  name: string
}

export function App() {
  const [tenants, setTenants] = useState<Tenant[]>([])

  useEffect(() => {
    fetchTenants()
  }, [])

  async function fetchTenants() {
    try {
      const { data, error } = await supabase
        .from('tenants')
        .select('*')
      
      if (error) throw error
      
      if (data) setTenants(data)
    } catch (error) {
      console.error('Error fetching tenants:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Mieterverwaltung</h1>
        
        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4">
            <label 
              htmlFor="tenant" 
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Mieter
            </label>
            <select
              id="tenant"
              name="tenant"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Bitte wählen Sie einen Mieter</option>
              {tenants.map(tenant => (
                <option key={tenant.id} value={tenant.id}>
                  {tenant.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}