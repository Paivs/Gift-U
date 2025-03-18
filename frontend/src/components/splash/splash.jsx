import "./splash.css";
import Loader from "./loader/loader";

export default function Splash() {

  return (
    <div
      className={`fixed inset-0 z-[9999] w-full h-full bg-background`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          {/* <div className="efeito">
            <h1 className="text-background text-9xl">GIFT-U</h1>
          </div>
          <div className="typewritter">
            <p className="text-background text-2xl">
              Crie sites incríveis para presentear as pessoas que você ama!
            </p>
          </div> */}

          <a href="/" className="block dark:hidden">
            <img
              src="/logo-dark.png"
              className="h-9 w-auto sm:h-12 block dark:hidden"
              alt="logo da Gift U"
            />
          </a>
          <a href="/" className="hidden dark:block">
            <img
              src="/logo.png"
              className="h-9 w-auto sm:h-12 hidden dark:block"
              alt="logo da Gift U"
            />
          </a>
        </div>

        <Loader />
      </div>
    </div>
  );
}
