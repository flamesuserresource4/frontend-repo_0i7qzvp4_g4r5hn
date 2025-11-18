import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Search, Plus, MapPin } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((i) => `${i.sku} ${i.name}`.toLowerCase().includes(q));
  }, [items, query]);

  async function fetchItems() {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${API_BASE}/api/items`);
      if (!res.ok) throw new Error('Failed to load items');
      const data = await res.json();
      setItems(data);
    } catch (e) {
      setError(e.message || 'Error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      sku: form.get('sku'),
      name: form.get('name'),
      description: form.get('description') || undefined,
      unit: form.get('unit') || 'pcs',
      min_stock: Number(form.get('min_stock') || 0)
    };
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to create item');
      await fetchItems();
      e.currentTarget.reset();
    } catch (e) {
      setError(e.message || 'Error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="inventory" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Inventory</h3>
            <p className="mt-2 text-slate-600">Create items and browse your catalog. Data persists in the database.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search SKU or name" className="pl-9 pr-3 py-2 border border-slate-200 rounded-lg bg-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-rose-100" />
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {loading && <div className="col-span-full text-slate-500 text-sm">Loading...</div>}
              {error && <div className="col-span-full text-rose-600 text-sm">{error}</div>}
              {filtered.map((item) => (
                <motion.div key={item._id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-rose-500 to-red-600 text-white shadow">
                        <Package size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-500">SKU: {item.sku} • Unit: {item.unit}</p>
                      </div>
                    </div>
                  </div>
                  {item.description && <p className="mt-3 text-sm text-slate-600">{item.description}</p>}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <form onSubmit={handleCreate} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900">Create Item</h4>
              <div className="mt-4 grid grid-cols-1 gap-3">
                <input required name="sku" placeholder="SKU" className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm" />
                <input required name="name" placeholder="Name" className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm" />
                <input name="description" placeholder="Description" className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm" />
                <div className="grid grid-cols-2 gap-3">
                  <input name="unit" placeholder="Unit (pcs)" className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm" />
                  <input name="min_stock" placeholder="Min stock" type="number" min="0" className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm" />
                </div>
              </div>
              <button disabled={loading} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-rose-600 text-white px-4 py-2 text-sm shadow hover:shadow-md transition disabled:opacity-60">
                <Plus size={16} />
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
