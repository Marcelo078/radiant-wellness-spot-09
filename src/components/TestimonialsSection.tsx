import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Maria Silva", 
    location: "São Paulo, SP",
    text: "Depois de 3 anos tentando engravidar, o Nutra Vida mudou minha vida! Em apenas 4 meses consegui minha tão sonhada gravidez. Hoje minha filha tem 8 meses e é minha maior alegria!"
  },
  {
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ", 
    text: "Tinha ovários policísticos e os médicos diziam que seria muito difícil. Com o New Detox perdi 12kg de forma saudável e me sinto uma nova pessoa. Recomendo demais!"
  },
  {
    name: "Carla Mendes",
    location: "Belo Horizonte, MG",
    text: "O Kit S.O.S Crescimento salvou meu cabelo! Estava com queda intensa pós-parto e em 2 meses já via novos fios nascendo. Produto incrível, entrega tudo que promete!"
  },
  {
    name: "Juliana Santos",
    location: "Porto Alegre, RS", 
    text: "Sofria com problemas no fígado há anos. O Fignar me trouxe alívio em poucos dias! Meus exames melhoraram significativamente e me sinto muito mais disposta."
  },
  {
    name: "Patricia Lima",
    location: "Salvador, BA",
    text: "O SB2 Black me deu a confiança que eu precisava para o verão! Perdi 8kg em 6 semanas e finalmente estou feliz com meu corpo. Produto fantástico!"
  },
  {
    name: "Fernanda Oliveira", 
    location: "Brasília, DF",
    text: "Tinha manchas escuras na pele que me incomodavam muito. Com o Clareador Nutralfit em 3 semanas já via diferença. Hoje minha pele está uniforme e radiante!"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mais de 50.000 Pessoas Já Transformaram Suas Vidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja os depoimentos reais de quem confia em nossos produtos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card">
            <div className="text-4xl font-bold text-wellness-primary">50.000+</div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Vidas Transformadas</div>
              <div className="text-sm text-muted-foreground">Resultados comprovados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};