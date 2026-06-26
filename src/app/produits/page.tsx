import { Plus, Search, MoreHorizontal, ArrowUpDown } from "lucide-react";
import clsx from "clsx";

const mockProducts = [
  { id: 1, name: "Licence Pro MyFynance", stock: 99, price: 49.99, status: "En stock" },
  { id: 2, name: "Consultation Premium", stock: 12, price: 150.00, status: "Stock faible" },
  { id: 3, name: "Audit Financier Complet", stock: 0, price: 500.00, status: "Rupture" },
  { id: 4, name: "Formation Comptabilité", stock: 45, price: 199.99, status: "En stock" },
];

export default function ProduitsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-2">Produits & Stock</h2>
          <p className="text-text-secondary">Gérez votre catalogue et suivez vos stocks en temps réel.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-accent text-white rounded-xl font-medium shadow-sm hover:shadow-md hover:bg-accent/90 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <Plus className="w-5 h-5 mr-2" />
          Nouveau Produit
        </button>
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4 bg-background/50">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 shadow-sm"
            />
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-text-secondary hover:bg-card-hover hover:text-text-primary transition-colors flex items-center shadow-sm bg-card w-full justify-center sm:w-auto">
              Filtres
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/80 border-b border-border">
                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider group cursor-pointer hover:text-text-primary transition-colors">
                  <div className="flex items-center">
                    Nom du Produit
                    <ArrowUpDown className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider">Statut</th>
                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider text-right">Stock</th>
                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider text-right">Prix Unitaire</th>
                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-card-hover transition-colors duration-150 group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-text-primary group-hover:text-accent transition-colors">{product.name}</div>
                    <div className="text-xs text-text-secondary">ID: PRD-{product.id.toString().padStart(4, '0')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={clsx(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                      product.status === "En stock" ? "bg-success/10 text-success" :
                      product.status === "Stock faible" ? "bg-warning/10 text-warning" :
                      "bg-error/10 text-error"
                    )}>
                      <span className={clsx(
                        "w-1.5 h-1.5 rounded-full mr-1.5",
                        product.status === "En stock" ? "bg-success" :
                        product.status === "Stock faible" ? "bg-warning" :
                        "bg-error"
                      )}></span>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-mono text-sm font-medium">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-mono text-sm">
                    €{product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="text-text-secondary hover:text-accent p-2 rounded-full hover:bg-accent/10 transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-text-secondary">
          <span>Affichage de 1 à {mockProducts.length} sur {mockProducts.length} résultats</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-border rounded-md hover:bg-card-hover disabled:opacity-50" disabled>Précédent</button>
            <button className="px-3 py-1 border border-border rounded-md hover:bg-card-hover disabled:opacity-50" disabled>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
