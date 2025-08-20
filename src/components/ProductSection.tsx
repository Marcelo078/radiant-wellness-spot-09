import { ProductCard } from "./ProductCard";

interface Product {
  title: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  ctaLink: string;
  image?: string;
  featured?: boolean;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  columns?: number;
}

export const ProductSection = ({ title, subtitle, products, columns = 3 }: ProductSectionProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-8`}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              benefits={product.benefits}
              ctaText={product.ctaText}
              ctaLink={product.ctaLink}
              image={product.image}
              variant={product.featured ? "featured" : "default"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};