export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-500 text-white">
      <p className="text-xs">
        © 2024 memeFactory. Todos os direitos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Termos de Serviço
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Privacidade
        </a>
      </nav>
    </footer>
  );
};
