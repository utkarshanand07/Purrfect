import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

import { useThemeStore } from "../store/useThemeStore";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

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
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              {/* <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              > */}
                <img src={logoSrc} alt="Logo" className="w-auto h-14" />
                {/* <MessageSquare className="w-6 h-6 text-primary" /> */}
              {/* </div> */}
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
    </div>
  );
};
export default LoginPage;
