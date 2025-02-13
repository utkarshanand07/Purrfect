import { MessageSquare } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const NoChatSelected = () => {

  const { theme, setTheme } = useThemeStore();

  const themeToLogoMap = {
    light: '/logo_icon_black.png',
  dark: '/logo_icon_white.png',
  cupcake: '/logo_icon_black.png',
  bumblebee: '/logo_icon_black.png',
  emerald: '/logo_icon_black.png',
  corporate: '/logo_icon_black.png',
  synthwave: '/logo_icon_white.png',
  retro: '/logo_icon_black.png',
  cyberpunk: '/logo_icon_black.png',
  valentine: '/logo_icon_black.png',
  halloween: '/logo_icon_white.png',
  garden: '/logo_icon_black.png',
  forest: '/logo_icon_white.png',
  aqua: '/logo_icon_white.png',
  lofi: '/logo_icon_black.png',
  pastel: '/logo_icon_black.png',
  fantasy: '/logo_icon_black.png',
  wireframe: '/logo_icon_black.png',
  black: '/logo_icon_white.png',
  luxury: '/logo_icon_white.png',
  dracula: '/logo_icon_white.png',
  cmyk: '/logo_icon_black.png',
  autumn: '/logo_icon_black.png',
  business: '/logo_icon_white.png',
  acid: '/logo_icon_black.png',
  lemonade: '/logo_icon_black.png',
  night: '/logo_icon_white.png',
  coffee: '/logo_icon_white.png',
  winter: '/logo_icon_black.png',
  dim: '/logo_icon_white.png',
  nord: '/logo_icon_black.png',
  sunset: '/logo_icon_white.png',
  };

  const logoSrc = themeToLogoMap[theme] || '/logo_icon_white.png';
  
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            {/* <div
              className=" flex items-center
             justify-center animate-bounce"
            > */}
              <img src={logoSrc} alt="Logo" className="w-auto h-14" />
              {/* <MessageSquare className="w-8 h-8 text-primary " /> */}
            {/* </div> */}
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Meowssenger!</h2>
        <p className="text-base-content/60">
          Select a conversation and start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
