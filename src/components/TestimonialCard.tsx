import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  location?: string;
  rating?: number;
}

export const TestimonialCard = ({ name, text, location, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-gradient-card border-0 shadow-card transition-all duration-300 hover:shadow-hero hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-wellness-accent text-wellness-accent" />
          ))}
        </div>
        
        <blockquote className="text-foreground mb-4 italic leading-relaxed">
          "{text}"
        </blockquote>
        
        <div className="text-sm">
          <div className="font-semibold text-foreground">{name}</div>
          {location && (
            <div className="text-muted-foreground">{location}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};