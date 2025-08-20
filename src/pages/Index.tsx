import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";
import weightLossImage from "@/assets/weight-loss-products.jpg";
import liverDetoxImage from "@/assets/liver-detox.jpg";
import hairGrowthImage from "@/assets/hair-growth.jpg";

const Index = () => {
  const weightLossProducts = [
    {
      title: "SB2 Black",
      description: "Transforme seu corpo neste verão! Entre em forma com SB2 Black e aproveite ao máximo!",
      benefits: [
        "Acelera o metabolismo naturalmente",
        "Queima gordura localizada", 
        "Aumenta energia e disposição",
        "Resultados visíveis em semanas"
      ],
      ctaText: "Quero Me Transformar!",
      ctaLink: "https://app.monetizze.com.br/r/ASS25503415",
      image: weightLossImage,
      featured: true
    },
    {
      title: "New Detox",
      description: "Quer emagrecer com saúde, de forma natural e sem gastar uma fortuna? O método NEW DETOX está mudando milhares de vidas!",
      benefits: [
        "Emagrecimento natural e saudável",
        "Elimina toxinas do organismo",
        "Melhora o funcionamento intestinal", 
        "Aumenta a imunidade"
      ],
      ctaText: "Começar Detox Agora!",
      ctaLink: "https://app.monetizze.com.br/r/ALW20871672"
    },
    {
      title: "SLIM GOTA BLACK",
      description: "Descubra o poder em cada gota! Adeus, gordura teimosa! Seu caminho para a melhor versão do seu corpo começa agora!",
      benefits: [
        "Fórmula concentrada em gotas",
        "Elimina gordura teimosa",
        "Fácil de usar - apenas gotas",
        "Resultados rápidos e eficazes"
      ],
      ctaText: "Experimentar Agora!",
      ctaLink: "https://app.monetizze.com.br/r/AUZ21258214"
    },
    {
      title: "Inibe One",
      description: "Se você ainda não está confortável com seu corpo, iremos te ajudar a emagrecer! Perca peso, ganhe confiança!",
      benefits: [
        "Inibe o apetite naturalmente",
        "30% de desconto + frete grátis",
        "Aumenta a autoestima",
        "Fórmula cientificamente testada"
      ],
      ctaText: "Quero Emagrecer!",
      ctaLink: "https://app.monetizze.com.br/r/APZ25502897"
    },
    {
      title: "OzenVitta",
      description: "Fórmula avançada com Inulina e L-Carnitina, elevando seu metabolismo e saciedade. Perca peso de forma natural e segura!",
      benefits: [
        "Contém Inulina e L-Carnitina",
        "Acelera o metabolismo",
        "Aumenta a saciedade",
        "Mais energia e confiança"
      ],
      ctaText: "Começar Agora!",
      ctaLink: "https://app.monetizze.com.br/r/AKA25502741"
    },
    {
      title: "Diuriefit Black",
      description: "Pó emagrecedor 10x mais eficaz com sabor de laranja. Resultados nos primeiros 6 dias de uso!",
      benefits: [
        "10x mais eficaz que produtos comuns",
        "Sabor delicioso de laranja",
        "Resultados em apenas 6 dias",
        "O que levaria 30 dias, você tem em 6"
      ],
      ctaText: "Experimentar Agora!",
      ctaLink: "https://app.monetizze.com.br/r/APB25502772"
    }
  ];

  const detoxProducts = [
    {
      title: "Fignar",
      description: "Melhore a saúde do seu fígado com apenas 20 gotas! Cuide do órgão mais importante para sua desintoxicação.",
      benefits: [
        "Apenas 20 gotas por dia",
        "Melhora a função hepática",
        "Desintoxica o organismo",
        "Aumenta a energia e disposição"
      ],
      ctaText: "Cuidar do Meu Fígado!",
      ctaLink: "https://app.monetizze.com.br/r/APP25503419",
      image: liverDetoxImage
    },
    {
      title: "Kit Restart Intestinal",
      description: "Comece hoje sua jornada de desintoxicação e renascimento intestinal! Descubra o segredo para uma vida livre de inflamações!",
      benefits: [
        "Desintoxicação completa do intestino",
        "Elimina inflamações",
        "Melhora a absorção de nutrientes",
        "Fortalece o sistema imunológico"  
      ],
      ctaText: "Renovar Meu Intestino!",
      ctaLink: "https://app.monetizze.com.br/r/ACN25503403"
    },
    {
      title: "Super Green Black",
      description: "O segredo para um corpo e mente 10x mais poderosos! Vai muito além do emagrecimento com fórmula avançada!",
      benefits: [
        "Potencializa corpo e mente",
        "Fórmula avançada exclusiva",
        "Vai além do emagrecimento",
        "Benefícios múltiplos para saúde"
      ],
      ctaText: "Potencializar Agora!",
      ctaLink: "https://app.monetizze.com.br/r/ASY18248645"
    },
    {
      title: "Lift Detox Black",
      description: "Reúne todos os ingredientes na medida certa com tecnologia avançada. Tudo pronto - apenas 2 cápsulas por dia!",
      benefits: [
        "Tecnologia avançada comprovada",
        "Apenas 2 cápsulas por dia",
        "Ingredientes na medida certa",
        "Resultados em poucas semanas"
      ],
      ctaText: "Começar Detox!",
      ctaLink: "https://app.monetizze.com.br/r/AQB15367580"
    }
  ];

  const beautyHealthProducts = [
    {
      title: "Kit S.O.S Crescimento Capilar",
      description: "Descubra o kit Nº 1 mais potente em crescimento e no combate à queda capilar! Resultados comprovados!",
      benefits: [
        "Kit completo para crescimento",
        "Combate eficazmente a queda",
        "Produto nº 1 do mercado",
        "Resultados visíveis rapidamente"
      ],
      ctaText: "Recuperar Meu Cabelo!",
      ctaLink: "https://app.monetizze.com.br/r/ACS21486499",
      image: hairGrowthImage
    },
    {
      title: "Clareador Nutralfit",
      description: "Acabe de vez com as manchas escuras da sua pele com nosso clareador revolucionário! Pele uniforme e radiante!",
      benefits: [
        "Elimina manchas escuras definitivamente",
        "Fórmula revolucionária exclusiva",
        "Pele uniforme e radiante",
        "Resultados em poucas semanas"
      ],
      ctaText: "Clarear Minha Pele!",
      ctaLink: "https://app.monetizze.com.br/r/AJX25503066"
    },
    {
      title: "Mounjax - Gotinhas Queima Gordura",
      description: "Chega de evitar fotos ou se esconder em roupas largas. Com Mounjax, emagreça de forma saudável e recupere a alegria de viver!",
      benefits: [
        "Gotinhas que auxiliam queima de gordura",
        "Emagreça de forma saudável",
        "Recupere a autoestima",
        "Volte a se sentir bem consigo"
      ],
      ctaText: "Recuperar Autoestima!",
      ctaLink: "https://app.monetizze.com.br/r/AYR25502743"
    }
  ];

  const specialProducts = [
    {
      title: "SB2 Turbo",
      description: "O suplemento que funciona quando todos os outros falharam! Desenvolvido para pessoas que já gastaram milhares sem sucesso.",
      benefits: [
        "Para quem já tentou outros produtos",
        "Funciona quando outros falharam",
        "Acesso limitado a 500 pessoas/mês",
        "Exclusivo para casos específicos"
      ],
      ctaText: "Quero Acesso Limitado!",
      ctaLink: "https://app.monetizze.com.br/r/AXC11504216"
    },
    {
      title: "Carteira Nacional do Estudante",
      description: "Esqueça os ingressos caros! Compre todos os ingressos que quiser pela metade do preço com sua carteira estudantil!",
      benefits: [
        "Física e Digital disponível",
        "50% de desconto em ingressos",
        "Válida em todo território nacional",
        "Economia garantida em eventos"
      ],
      ctaText: "Garantir Descontos!",
      ctaLink: "https://app.monetizze.com.br/r/AEG25503067"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Produtos de Saúde e Bem-Estar",
            "description": "Produtos naturais para fertilidade, emagrecimento, desintoxicação e bem-estar",
            "url": window.location.href
          })
        }}
      />

      <HeroSection />
      
      <ProductSection 
        title="🔥 Emagrecimento e Transformação Corporal"
        subtitle="Conquiste o corpo dos seus sonhos com produtos comprovadamente eficazes"
        products={weightLossProducts}
        columns={3}
      />

      <TestimonialsSection />

      <ProductSection 
        title="🌿 Desintoxicação e Saúde Interna"
        subtitle="Limpe seu organismo e recupere sua vitalidade natural"
        products={detoxProducts}
        columns={2}
      />

      <ProductSection 
        title="✨ Beleza e Cuidados Especiais"
        subtitle="Produtos especializados para sua beleza e autoestima"
        products={beautyHealthProducts}
        columns={3}
      />

      <ProductSection 
        title="🎯 Produtos Exclusivos"
        subtitle="Soluções especiais para necessidades específicas"
        products={specialProducts}
        columns={2}
      />

      <FinalCTA />
    </main>
  );
};

export default Index;