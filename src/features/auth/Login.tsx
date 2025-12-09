import bg from '../../assets/background.png'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoaderDots from '../../components/ui/LoaderDots'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/admin')
    }, 1200)
  }

  return (
    <div
      className="fixed inset-0 bg-no-repeat bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[380px] sm:w-[420px] rounded-xl border-2 border-[#439282] bg-white/95 backdrop-blur-sm">
        <div className="px-8 py-6 flex flex-col items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#439282]">Bienvenidos</h1>
            <p className="text-sm text-gray-700">Ingresa a tu cuenta</p>
          </div>

          {loading ? (
            <div className="w-full py-6">
              <LoaderDots />
            </div>
          ) : (
            <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
              <label className="text-sm text-gray-800 text-left">Usuario</label>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#439282]"
                >
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h2c0-2.761 2.239-5 5-5s5 2.239 5 5h2c0-3.866-3.134-7-7-7z" />
                </svg>
                <input
                  type="text"
                  placeholder="Ingrese su usuario"
                  className="w-full rounded-md border border-gray-300 bg-white/90 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#439282]"
                />
              </div>

              <label className="text-sm text-gray-800 text-left">Contraseña</label>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#439282]"
                >
                  <path d="M17 8V7a5 5 0 10-10 0v1H5v14h14V8h-2zm-8 0V7a3 3 0 116 0v1H9zm0 4h6v8H9v-8z" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Ingrese su contraseña"
                  className="w-full rounded-md border border-gray-300 bg-white/90 pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#439282]"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#439282] hover:text-[#377a6b]"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M2.94 2.94l18.12 18.12-1.41 1.41L1.52 4.35 2.94 2.94zm6.34 6.34l-1.06-1.06C5.63 9.06 4.29 10.46 3.3 12c1.8 2.82 5.06 6 8.7 6 1.3 0 2.54-.32 3.68-.9l-1.1-1.1A6 6 0 019 9.28zM12 6c-1.06 0-2.07.28-2.94.76l1.2 1.2A4 4 0 0116 12c0 .48-.08.94-.22 1.37l1.2 1.2c.5-.88.78-1.88.78-2.97 0-3.64-3.18-6.9-6.9-8.7-.3.47-.6.97-.86 1.5z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#8DBC63] text-white py-2 font-medium hover:bg-[#79ac51] transition"
              >
                Ingresar
              </button>
            </form>
          )}

          <a href="#" className="text-xs text-[#439282] hover:underline">
            ¿Olvidaste tu contraseña?
          </a>

          <div className="flex gap-2 pt-2 justify-center">
            <button
              className="px-3 py-1 rounded-full bg-[#8DBC63] text-white text-sm hover:bg-[#79ac51]"
              onClick={() => navigate('/kiosk')}
            >
              Kiosco
            </button>
            <button
              className="px-3 py-1 rounded-full bg-[#439282] text-white text-sm hover:bg-[#377a6b]"
              onClick={() => navigate('/tv')}
            >
              TV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
