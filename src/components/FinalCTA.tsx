import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Gift, Shield } from "lucide-react";

const featuredProducts = [
  {
    name: "Nutra Vida",
    description: "Fertilidade Feminina", 
    link: "https://app.monetizze.com.br/r/AXC25503421"
  },
  {
    name: "New Detox",
    description: "Emagrecimento Natural",
    link: "https://app.monetizze.com.br/r/ALW20871672" 
  },
  {
    name: "SB2 Black", 
    description: "Transformação Corporal",
    link: "https://app.monetizze.com.br/r/ASS25503415"
  }
];

export const FinalCTA = () => {
  const handleProductClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Não Deixe Seus Sonhos Para Amanhã
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Milhares de pessoas já transformaram suas vidas com nossos produtos. 
              <br className="hidden md:block" />
              <strong>Sua vez chegou!</strong>
            </p>
          </div>

          {/* Urgency Elements */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-wellness-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Oferta Limitada</h3>
              <p className="text-white/80 text-sm">Aproveite condições especiais por tempo limitado</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Gift className="h-8 w-8 text-wellness-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Frete Grátis</h3>
              <p className="text-white/80 text-sm">Entrega gratuita para todo o Brasil</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-wellness-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Garantia Total</h3>
              <p className="text-white/80 text-sm">Satisfação garantida ou seu dinheiro de volta</p>
            </div>
          </div>

          {/* Featured Products CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Escolha Seu Produto e Comece Agora:</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {featuredProducts.map((product, index) => (
                <Button
                  key={index}
                  onClick={() => handleProductClick(product.link)}
                  variant="cta"
                  size="lg"
                  className="h-auto py-4 px-6 text-left flex-col items-center gap-2"
                >
                  <div className="font-bold text-lg">{product.name}</div>
                  <div className="text-sm opacity-90">{product.description}</div>
                  <ArrowRight className="h-4 w-4 mt-1" />
                </Button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">
              💡 <strong>Dica:</strong> Muitos de nossos clientes combinam produtos para potencializar os resultados!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};