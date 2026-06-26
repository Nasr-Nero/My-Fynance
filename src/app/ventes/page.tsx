import { Plus, Search, Calendar, Filter } from "lucide-react";

const mockSales = [
  { id: "V-1024", product: "Licence Pro MyFynance", date: "Aujourd'hui, 14:30", amount: 49.99, status: "Payé" },
  { id: "V-1023", product: "Consultation Premium", date: "Aujourd'hui, 11:15", amount: 150.00, status: "En attente" },
  { id: "V-1022", product: "Formation Comptabilité", date: "Hier, 16:45", amount: 199.99, status: "Payé" },
  { id: "V-1021", product: "Licence Pro MyFynance", date: "Hier, 09:20", amount: 49.99, status: "Payé" },
];

export default function VentesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-2">Ventes</h2>
          <p className="text-text-secondary">Enregistrez et suivez l'historique de vos ventes.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-accent text-white rounded-xl font-medium shadow-sm hover:shadow-md hover:bg-accent/90 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <Plus className="w-5 h-5 mr-2" />
          Nouvelle Vente
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire de Saisie Rapide */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-6 text-text-primary">Saisie Rapide</h3>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary block">Produit</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors appearance-none">
                  <option value="">Sélectionner un produit...</option>
                  <option value="1">Licence Pro MyFynance</option>
                  <option value="2">Consultation Premium</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary block">Quantité</label>
                  <input type="number" min="1" defaultValue="1" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary block">Total (€)</label>
                  <input type="text" readOnly value="49.99" className="w-full bg-card-hover border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none font-mono text-text-secondary" />
                </div>
              </div>

              <button type="button" className="w-full mt-2 py-3 bg-accent/10 text-accent font-semibold rounded-xl hover:bg-accent hover:text-white transition-colors duration-200">
                Enregistrer la vente
              </button>
            </form>
          </div>
        </div>

        {/* Liste des ventes récentes */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4 bg-background/50">
              <h3 className="text-lg font-semibold text-text-primary">Ventes Récentes</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 border border-border rounded-lg text-text-secondary hover:bg-card-hover transition-colors">
                  <Filter className="h-4 w-4" />
                </button>
                <button className="p-2 border border-border rounded-lg text-text-secondary hover:bg-card-hover transition-colors">
                  <Calendar className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-border">
              {mockSales.map((sale) => (
                <div key={sale.id} className="p-5 hover:bg-card-hover transition-colors duration-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                  <div className="flex flex-col">
                    <span className="font-medium text-text-primary group-hover:text-accent transition-colors">{sale.product}</span>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-xs text-text-secondary">{sale.id}</span>
                      <span className="text-xs text-border">•</span>
                      <span className="text-xs text-text-secondary">{sale.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      sale.status === 'Payé' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                    }`}>
                      {sale.status}
                    </span>
                    <span className="font-mono font-medium text-lg text-text-primary">€{sale.amount.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
