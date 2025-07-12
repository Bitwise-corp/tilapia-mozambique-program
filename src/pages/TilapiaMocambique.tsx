import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Users, MapPin, Globe, Fish, Award, Mail } from "lucide-react";

const TilapiaMocambique = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-muted to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              Formação Técnica e Estratégica da Cadeia Produtiva de Tilápia em Moçambique
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-muted-foreground">
              A Uninovia desenvolveu um programa completo de capacitação para fortalecer a aquacultura em Moçambique, 
              combinando formação online e imersão prática no Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Inscreva-se
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Geral do Projeto */}
      <section id="metodologia" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Uma Metodologia Completa em Duas Fases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos uma abordagem inovadora que combina aprendizado teórico com experiência prática intensiva.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Capacitação Online</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Formação teórica e interativa com foco na cadeia produtiva da tilápia. 
                  40 horas de conteúdo especializado, metodologia EAD moderna e certificação internacional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Imersão Prática</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Capacitação presencial em Santa Catarina, Brasil. 3 semanas de imersão técnica em fazendas, 
                  laboratórios e processadoras de referência mundial.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detalhes da Formação */}
      <section id="detalhes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Explore as Fases do Programa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça em detalhes cada etapa da nossa metodologia de capacitação.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Fase 1: Formação Online Preparatória
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Carga Horária:</h4>
                      <p className="text-muted-foreground">40 horas de formação técnica especializada</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Formato:</h4>
                      <p className="text-muted-foreground">Aulas síncronas com interação direta e atividades práticas online</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Metodologia:</h4>
                      <p className="text-muted-foreground">Plataforma EAD moderna com recursos multimídia e ferramentas colaborativas</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Conteúdo Programático:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li><strong>Módulos 1-2:</strong> Fundamentos da tilapicultura e biologia da espécie</li>
                        <li><strong>Módulos 3-4:</strong> Sistemas de produção e manejo nutricional</li>
                        <li><strong>Módulos 5-8:</strong> Qualidade da água, sanidade, processamento e mercado</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Fase 2: Formação Presencial em Santa Catarina
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Descrição:</h4>
                      <p className="text-muted-foreground">
                        Imersão técnica de 3 semanas no maior polo de tilapicultura do Brasil, 
                        com vivência prática em todas as etapas da cadeia produtiva.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Destaques:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Visitas técnicas a fazendas de reprodução e engorda</li>
                        <li>Imersão em laboratórios de análise e pesquisa</li>
                        <li>Experiência em processadoras industriais</li>
                        <li>Networking com especialistas e produtores</li>
                        <li>Workshops práticos com equipamentos modernos</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Atividades Práticas:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h5 className="font-semibold text-primary">Reprodução</h5>
                          <p className="text-sm text-muted-foreground">Manejo reprodutivo, larvicultura e alevinagem</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h5 className="font-semibold text-primary">Engorda</h5>
                          <p className="text-sm text-muted-foreground">Sistemas intensivos, nutrição e manejo</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h5 className="font-semibold text-primary">Processamento</h5>
                          <p className="text-sm text-muted-foreground">Abate, filetagem e agregação de valor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Especialista e Justificativa */}
      <section id="lideranca" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Liderança e Propósito
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Especialista Responsável</h3>
                <h4 className="text-2xl text-primary font-semibold mb-4">Eng. Frederico Santos da Costa</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Engenheiro de Aquicultura com mais de 15 anos de experiência em tilapicultura. 
                  Especialista em sistemas intensivos de produção, com formação internacional e 
                  vasta experiência em projetos de desenvolvimento na África.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-4">Justificativa Estratégica</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Uninovia assume a responsabilidade de transferir tecnologia de ponta para Moçambique, 
                  aproveitando a excepcional adaptabilidade da tilápia ao clima tropical. Nossa metodologia 
                  mista garante sólida base teórica e experiência prática indispensável para o sucesso 
                  da aquacultura moçambicana.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Fish className="w-32 h-32 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Uninovia</h3>
              <p className="text-primary-foreground/80">
                Transformando o futuro da aquacultura através da educação e inovação.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Navegação</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#metodologia" className="hover:text-primary-foreground transition-colors">Metodologia</a></li>
                <li><a href="#detalhes" className="hover:text-primary-foreground transition-colors">Detalhes</a></li>
                <li><a href="#lideranca" className="hover:text-primary-foreground transition-colors">Liderança</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contato@uninovia.com.br
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Newsletter</h4>
              <p className="text-primary-foreground/80">
                Receba novidades sobre nossos programas.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Uninovia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TilapiaMocambique;