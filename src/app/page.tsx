import StatCard from "@/components/ui/StatCard";
import { Wallet, ArrowDownRight, ArrowUpRight, AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-2">Tableau de bord</h2>
        <p className="text-text-secondary">Voici un résumé de l'activité de votre entreprise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Revenu Total"
          value={124500}
          prefix="€"
          trend={12.5}
          icon={Wallet}
          delay={0.1}
        />
        <StatCard
          title="Dépenses"
          value={34200}
          prefix="€"
          trend={-4.2}
          icon={ArrowDownRight}
          delay={0.2}
        />
        <StatCard
          title="Bénéfice Net"
          value={90300}
          prefix="€"
          trend={8.4}
          icon={ArrowUpRight}
          delay={0.3}
        />
        <StatCard
          title="Produits en Rupture"
          value={3}
          trend={0}
          icon={AlertCircle}
          delay={0.4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Placeholder pour Graphique */}
        <div className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Évolution des Revenus</h3>
          <div className="h-64 flex items-center justify-center bg-card-hover rounded-xl border border-dashed border-border">
            <span className="text-text-secondary">Graphique à venir (Chart.js / Recharts)</span>
          </div>
        </div>

        {/* Dernières Transactions */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Dernières Ventes</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-card-hover transition-colors group">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm group-hover:text-accent transition-colors">Produit Premium #{i}</p>
                    <p className="text-xs text-text-secondary">Il y a {i} heures</p>
                  </div>
                </div>
                <span className="font-mono font-medium text-success">+ €149.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
