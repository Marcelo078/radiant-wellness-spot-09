import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Shield, Star } from "lucide-react";
import heroImage from "@/assets/nutra-vida-hero.jpg";

export const HeroSection = () => {
  const handleCTA = () => {
    window.open('https://app.monetizze.com.br/r/AXC25503421', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-wellness-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">TESTADO & APROVADO</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Nutra Vida</span>
                <span className="block text-wellness-accent">2 Cápsulas ao Dia</span>
                <span className="block text-2xl lg:text-3xl font-medium mt-2">Para Engravidar!</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                A solução natural que está transformando a vida de milhares de mulheres 
                que sonham em ser mães. Desenvolvido especialmente para superar os 
                desafios da fertilidade feminina.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Laqueaduras",
                "Ovários Policísticos", 
                "Endometriose",
                "Miomas Uterinos",
                "Trompas Obstruídas",
                "Menstruação Irregular",
                "Desequilíbrios Hormonais",
                "Infertilidade sem Causa"
              ].map((condition, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-wellness-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCTA} variant="cta" size="lg" className="text-lg px-8 py-6">
                <Heart className="h-5 w-5" />
                Quero Engravidar Agora!
              </Button>
              
              <div className="flex items-center gap-2 text-wellness-accent">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">Mais de 50.000 mães felizes</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-wellness-primary/20 to-wellness-secondary/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Nutra Vida - Suplemento para Fertilidade"
              className="relative w-full h-auto rounded-3xl shadow-hero object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wellness-primary rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">+50.000</div>
                  <div className="text-xs text-muted-foreground">Mães Realizadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};