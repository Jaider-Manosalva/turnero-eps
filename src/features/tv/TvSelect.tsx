import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TvSelect() {
  const [now, setNow] = useState(new Date())
  const navigate = useNavigate()

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const dateStr = now.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
  const timeStr = now.toLocaleTimeString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 sm:px-10 py-6">
      <header className="grid grid-cols-3 items-center mb-10">
        <div />
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="text-right text-sm text-[#439282]">
          <div className="font-semibold">{dateStr}</div>
          <div>{timeStr}</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#439282] mb-8">
          Seleccione el tipo de vista
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={() => navigate('/tv/full')} className="w-full sm:w-[360px] bg-white rounded-lg border border-gray-200 shadow hover:shadow-md transition p-5 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded bg-[#439282] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M3 4h18v2H3V4zm0 4h18v2H3V8zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Vista Completa de Turnos</div>
                <div className="text-sm text-gray-600">Muestra todos los turnos en pantalla de forma clásica.</div>
              </div>
            </div>
          </button>

          <button onClick={() => navigate('/tv/media')} className="w-full sm:w-[360px] bg-white rounded-lg border border-gray-200 shadow hover:shadow-md transition p-5 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded bg-[#8DBC63] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M17 10.5l-6.5 3.5V7l6.5 3.5z" />
                  <path d="M4 5h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Vista con Videos + Turnos</div>
                <div className="text-sm text-gray-600">Muestra turnos y videos informativos en pantalla.</div>
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  )
}
