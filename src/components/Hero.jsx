import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Modern Warehouse Management
          </motion.h2>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-4 text-lg text-slate-700">
            Real-time inventory, streamlined operations, and insightful analytics — all in a clean, professional interface.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-8 flex items-center gap-3">
            <a href="#inventory" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm shadow hover:shadow-md transition">Explore Inventory</a>
            <a href="#features" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm shadow border border-slate-200 hover:bg-slate-50 transition">See Features</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
