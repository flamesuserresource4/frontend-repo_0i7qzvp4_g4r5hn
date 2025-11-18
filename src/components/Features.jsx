import { motion } from 'framer-motion';
import { Boxes, Barcode, Truck, ClipboardCheck, Activity, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Boxes, title: 'Inventory Overview', desc: 'Track stock levels, locations, and movement in real-time.' },
  { icon: Barcode, title: 'Smart SKUs', desc: 'Organize products with clean SKUs and searchable metadata.' },
  { icon: Truck, title: 'Inbound/Outbound', desc: 'Record receipts and shipments with audit-ready logs.' },
  { icon: ClipboardCheck, title: 'Quality Control', desc: 'Standardize inspections and maintain product integrity.' },
  { icon: Activity, title: 'Analytics', desc: 'Spot low stock and fast movers with clean dashboards.' },
  { icon: ShieldCheck, title: 'Permissions', desc: 'Role-based access for teams and external partners.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-rose-600">Capabilities</h3>
          <p className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Built for modern operations</p>
          <p className="mt-3 text-slate-600">Everything you need to manage inventory with precision — wrapped in a delightful, professional experience.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-rose-500 to-red-600 text-white shadow">
                <f.icon size={18} />
              </div>
              <h4 className="mt-4 font-semibold text-slate-900">{f.title}</h4>
              <p className="mt-1.5 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
