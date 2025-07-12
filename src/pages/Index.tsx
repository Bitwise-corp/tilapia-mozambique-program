import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-muted to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              Uninovia
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-muted-foreground">
              Inovação e excelência em educação para aquicultura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tilapia-mocambique">
                <Button size="lg" className="text-lg px-8 py-4">
                  Ver Programa de Tilápia
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nossos Programas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos soluções educacionais inovadoras para o setor aquícola.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Fish className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Programa de Tilápia - Moçambique</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed mb-6">
                  Formação técnica completa para desenvolvimento da cadeia produtiva de tilápia em Moçambique. 
                  Combinando capacitação online e imersão prática no Brasil.
                </CardDescription>
                <Link to="/tilapia-mocambique">
                  <Button className="w-full">
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nossa Metodologia
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Formação Teórica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Conteúdo técnico especializado com metodologia EAD moderna, 
                  recursos multimídia e certificação internacional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Experiência Prática</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Imersão técnica em fazendas, laboratórios e processadoras de referência mundial, 
                  com networking e aprendizado hands-on.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
