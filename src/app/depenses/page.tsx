import { Plus, Receipt, Filter } from "lucide-react";

const mockExpenses = [
  { id: "EXP-890", description: "Hébergement Serveur AWS", category: "Infrastructure", date: "01 Nov 2023", amount: 120.50 },
  { id: "EXP-889", description: "Abonnement Logiciel Design", category: "Outils", date: "28 Oct 2023", amount: 54.00 },
  { id: "EXP-888", description: "Campagne Marketing Google", category: "Marketing", date: "25 Oct 2023", amount: 350.00 },
  { id: "EXP-887", description: "Fournitures de bureau", category: "Opérations", date: "15 Oct 2023", amount: 45.20 },
];

export default function DepensesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-2">Dépenses</h2>
          <p className="text-text-secondary">Suivez et catégorisez vos frais opérationnels.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-error text-white rounded-xl font-medium shadow-sm hover:shadow-md hover:bg-error/90 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <Plus className="w-5 h-5 mr-2" />
          Ajouter une dépense
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire de Saisie */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-6 text-text-primary">Nouvelle Dépense</h3>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary block">Description</label>
                <input type="text" placeholder="Ex: Achat matériel..." className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary block">Catégorie</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors appearance-none">
                  <option value="">Sélectionner...</option>
                  <option value="infra">Infrastructure</option>
                  <option value="marketing">Marketing</option>
                  <option value="tools">Outils & Logiciels</option>
                  <option value="ops">Opérations</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary block">Montant (€)</label>
                <input type="number" step="0.01" min="0" placeholder="0.00" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors font-mono" />
              </div>

              <button type="button" className="w-full mt-2 py-3 bg-error/10 text-error font-semibold rounded-xl hover:bg-error hover:text-white transition-colors duration-200">
                Enregistrer
              </button>
            </form>
          </div>
        </div>

        {/* Historique des Dépenses */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4 bg-background/50">
              <h3 className="text-lg font-semibold text-text-primary">Historique</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 border border-border rounded-lg text-text-secondary hover:bg-card-hover transition-colors">
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-border">
              {mockExpenses.map((expense) => (
                <div key={expense.id} className="p-5 hover:bg-card-hover transition-colors duration-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Receipt className="h-5 w-5 text-text-secondary group-hover:text-error transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-text-primary">{expense.description}</span>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className="text-xs text-text-secondary">{expense.category}</span>
                        <span className="text-xs text-border">•</span>
                        <span className="text-xs text-text-secondary">{expense.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center w-full sm:w-auto justify-end">
                    <span className="font-mono font-semibold text-lg text-error">- €{expense.amount.toFixed(2)}</span>
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
