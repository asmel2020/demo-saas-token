import { ConnectWallet } from "@/components/buttons/connect-wallet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Rocket, Zap } from "lucide-react";
import { useLocation } from "wouter";
const Home = () => {
  const [_, setLocation] = useLocation();
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-500 to-purple-600 text-white flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Crie Sua Própria{" "}
                <span className="text-yellow-300">Memecoin</span> em Minutos!
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100">
                memeFactory torna fácil lançar sua própria memecoin na
                blockchain. Sem necessidade de codificação!
              </p>
            </div>
            <div className="space-x-4">
              <Button
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold text-lg px-8 py-3"
                onClick={() => setLocation("/create-token")}
              >
                Começar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-green-400 flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900">
            Recursos Incríveis
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Rocket className="h-12 w-12 mb-2 text-blue-500" />
              <h3 className="text-2xl font-bold text-blue-900">
                Lançamento Fácil
              </h3>
              <p className="text-lg text-gray-600 text-center">
                Crie e implante sua memecoin com apenas alguns cliques.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Zap className="h-12 w-12 mb-2 text-yellow-500" />
              <h3 className="text-2xl font-bold text-blue-900">
                Transações Rápidas
              </h3>
              <p className="text-lg text-gray-600 text-center">
                Desfrute de transações blockchain ultrarrápidas para sua
                memecoin.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Lock className="h-12 w-12 mb-2 text-green-500" />
              <h3 className="text-2xl font-bold text-blue-900">
                Plataforma Segura
              </h3>
              <p className="text-lg text-gray-600 text-center">
                Construída com segurança de ponta para proteger sua memecoin e
                investimentos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        className="w-full py-12 md:py-24 lg:py-32 bg-purple-500 text-white flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Como Funciona
          </h2>
          <ol className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <li className="flex flex-col items-center space-y-2 bg-purple-600 p-6 rounded-lg shadow-lg">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-purple-900 text-2xl font-bold">
                1
              </span>
              <h3 className="text-2xl font-bold">Escolha Seu Meme</h3>
              <p className="text-lg text-purple-100 text-center">
                Selecione ou faça upload do meme que representará sua moeda.
              </p>
            </li>
            <li className="flex flex-col items-center space-y-2 bg-purple-600 p-6 rounded-lg shadow-lg">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-purple-900 text-2xl font-bold">
                2
              </span>
              <h3 className="text-2xl font-bold">Defina os Parâmetros</h3>
              <p className="text-lg text-purple-100 text-center">
                Defina o nome, símbolo e fornecimento inicial da sua moeda.
              </p>
            </li>
            <li className="flex flex-col items-center space-y-2 bg-purple-600 p-6 rounded-lg shadow-lg">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-purple-900 text-2xl font-bold">
                3
              </span>
              <h3 className="text-2xl font-bold">Lance Sua Moeda</h3>
              <p className="text-lg text-purple-100 text-center">
                Com um clique, implante sua memecoin na blockchain.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section
        id="presale"
        className="w-full py-12 md:py-24 lg:py-32 bg-orange-400 text-white flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Pré-venda de Tokens
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col items-center space-y-2 bg-orange-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Participe da Pré-venda</h3>
              <p className="text-lg text-center">
                Seja um dos primeiros a adquirir tokens das novas memecoins
                antes do lançamento oficial.
              </p>
              <Button
                className="mt-4 bg-white text-orange-500 hover:bg-yellow-100"
                onClick={() => setLocation("/list-presale")}
              >
                Ver Tokens Disponíveis
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-orange-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Benefícios da Pré-venda</h3>
              <ul className="text-lg text-center list-disc list-inside">
                <li>Preços exclusivos</li>
                <li>Acesso antecipado</li>
                <li>Bônus especiais</li>
                <li>Suporte prioritário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="wallet-connection"
        className="w-full py-12 md:py-24 lg:py-32 bg-purple-500 text-white flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Conecte sua Carteira
            </h2>
            <p className="mx-auto max-w-[600px] text-xl md:text-2xl">
              Use o MetaMask para interagir com nossa plataforma de forma segura
              e fácil.
            </p>
            <ConnectWallet />
          </div>
        </div>
      </section>
      <section
        id="cta"
        className="w-full py-12 md:py-24 lg:py-32 bg-yellow-400 text-blue-900 flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Pronto para Criar Sua Memecoin?
              </h2>
              <p className="mx-auto max-w-[600px] text-xl md:text-2xl">
                Junte-se à revolução das memecoins hoje e lance sua própria
                criptomoeda em minutos!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-white text-blue-900 placeholder-blue-400"
                  placeholder="Digite seu email"
                  type="email"
                />
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600 font-bold"
                  type="submit"
                >
                  Começar
                </Button>
              </form>
              <p className="text-sm">
                Ao se inscrever, você concorda com nossos Termos de Serviço e
                Política de Privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
