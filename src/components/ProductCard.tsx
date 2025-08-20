import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  ctaLink: string;
  image?: string;
  variant?: "default" | "featured";
}

export const ProductCard = ({ 
  title, 
  description, 
  benefits, 
  ctaText = "Quero Este Produto!", 
  ctaLink,
  image,
  variant = "default"
}: ProductCardProps) => {
  const handleClick = () => {
    window.open(ctaLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
      variant === "featured" ? "border-2 border-wellness-primary shadow-hero" : ""
    }`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {variant === "featured" && (
            <div className="absolute top-4 right-4 bg-wellness-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              Destaque
            </div>
          )}
        </div>
      )}
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-wellness-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={handleClick}
          variant={variant === "featured" ? "cta" : "wellness"}
          size="lg"
          className="w-full"
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};