import { Menu, Boxes, Warehouse, Settings, Database, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 220, damping: 18 }} className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-red-600 text-white grid place-items-center shadow-lg">
            <Boxes size={18} />
          </motion.div>
          <div>
            <h1 className="text-slate-900 font-semibold leading-none">Warehouse Pro</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Company Operations</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#inventory" className="hover:text-slate-900 transition">Inventory</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3.5 py-2 text-sm shadow hover:shadow-md transition">
            <Database size={16} />
            Connect
          </button>
          <button className="md:hidden p-2 rounded-lg border border-slate-200">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
