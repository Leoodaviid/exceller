import { Plane } from "lucide-react";

export function TravelBanner() {
  return (
    <div className="hidden lg:flex lg:w-3/5 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <Plane className="w-12 h-12 text-primary" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-6 text-balance">
          Explore o Mundo com Exceller Agency
        </h1>

        <p className="text-xl text-muted-foreground max-w-md text-balance">
          Reserve suas passagens aéreas com facilidade e segurança. Viaje para
          qualquer destino do mundo.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Destinos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50k+</div>
            <div className="text-sm text-muted-foreground">Clientes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </div>
  );
}
