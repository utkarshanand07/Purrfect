import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  const themeToLogoMap = {
    light: '/logo_black.png',
  dark: '/logo_white.png',
  cupcake: '/logo_black.png',
  bumblebee: '/logo_black.png',
  emerald: '/logo_black.png',
  corporate: '/logo_black.png',
  synthwave: '/logo_white.png',
  retro: '/logo_black.png',
  cyberpunk: '/logo_black.png',
  valentine: '/logo_black.png',
  halloween: '/logo_white.png',
  garden: '/logo_black.png',
  forest: '/logo_white.png',
  aqua: '/logo_white.png',
  lofi: '/logo_black.png',
  pastel: '/logo_black.png',
  fantasy: '/logo_black.png',
  wireframe: '/logo_black.png',
  black: '/logo_white.png',
  luxury: '/logo_white.png',
  dracula: '/logo_white.png',
  cmyk: '/logo_black.png',
  autumn: '/logo_black.png',
  business: '/logo_white.png',
  acid: '/logo_black.png',
  lemonade: '/logo_black.png',
  night: '/logo_white.png',
  coffee: '/logo_white.png',
  winter: '/logo_black.png',
  dim: '/logo_white.png',
  nord: '/logo_black.png',
  sunset: '/logo_white.png',
  };

  const logoSrc = themeToLogoMap[theme] || '/logo_white.png';

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <img src={logoSrc} alt="Logo" className="w-auto h-14" />
              {/* <h1 className="text-lg font-bold">Purrfect</h1> */}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`btn btn-sm gap-2 transition-colors`}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;