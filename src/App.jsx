import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Inventory />
      <footer id="contact" className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Warehouse Pro. All rights reserved.</p>
          <div className="text-sm text-slate-600">Built for modern teams.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
