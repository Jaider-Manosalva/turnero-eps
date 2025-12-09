import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import consultorios from '../../data/consultorios.json'
import prioridades from '../../data/prioridades.json'

export default function KioskForm() {
  const [now, setNow] = useState(new Date())
  const [cedula, setCedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [step, setStep] = useState<'datos' | 'consultorio' | 'prioridad' | 'resumen' | 'confirm'>('datos')
  const [selConsultorio, setSelConsultorio] = useState<string>('')
  const [selPrioridad, setSelPrioridad] = useState<string>('')
  const [turno, setTurno] = useState<string>('')

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!cedula || !nombre) return
    setStep('consultorio')
  }

  const goResumen = (prioridad: string) => {
    setSelPrioridad(prioridad)
    setStep('resumen')
  }

  const handleConfirm = () => {
    const n = Math.floor(10 + Math.random() * 90)
    const code = `b${n}`
    setTurno(code)
    setStep('confirm')
  }

  useEffect(() => {
    if (step !== 'confirm') return
    const t = setTimeout(() => {
      setCedula('')
      setNombre('')
      setSelConsultorio('')
      setSelPrioridad('')
      setTurno('')
      setStep('datos')
    }, 4000)
    return () => clearTimeout(t)
  }, [step])

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 sm:px-10 py-6">
      <header className="grid grid-cols-3 items-center mb-10">
        <div className="text-xs text-[#439282]">
          <div className="font-semibold">Sede</div>
          <div>Kiosko: Consulta externa</div>
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="text-right text-sm text-[#439282]">
          <div className="font-semibold">{dateStr}</div>
          <div>{timeStr}</div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto">
        {step === 'datos' && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow p-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Cédula</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Ingrese su cédula"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#439282]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#439282]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-[#439282] text-white py-2 font-medium hover:bg-[#377a6b] transition"
            >
              Continuar
            </button>
          </form>
        )}

        {step === 'consultorio' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="text-sm text-[#439282] hover:underline" onClick={() => setStep('datos')}>Regresar</button>
              <div className="text-center flex-1">
                <h2 className="text-xl font-semibold text-[#439282]">Seleccione una opción para tomar el turno</h2>
              </div>
              <div className="w-24" />
            </div>
            <div className="flex flex-col gap-3 max-w-xl mx-auto">
              {consultorios.items.map((c) => (
                <button
                  key={c}
                  className="w-full rounded-full border border-[#439282] py-2 hover:bg-[#eaf3f1]"
                  onClick={() => { setSelConsultorio(c); setStep('prioridad') }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'prioridad' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="text-sm text-[#439282] hover:underline" onClick={() => setStep('consultorio')}>Regresar</button>
              <div className="text-center flex-1">
                <h2 className="text-xl font-semibold text-[#439282]">Seleccione una prioridad del paciente</h2>
              </div>
              <div className="w-24" />
            </div>
            <div className="flex flex-col gap-3 max-w-xl mx-auto">
              {prioridades.items.map((p) => (
                <button
                  key={p}
                  className="w-full rounded-full border border-[#8DBC63] py-2 hover:bg-[#eef6e7]"
                  onClick={() => goResumen(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'resumen' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
            <h2 className="text-xl font-semibold text-[#439282] text-center mb-4">Resumen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div><span className="font-semibold">Cédula:</span> {cedula}</div>
              <div><span className="font-semibold">Nombre:</span> {nombre}</div>
              <div><span className="font-semibold">Consultorio:</span> {selConsultorio}</div>
              <div><span className="font-semibold">Prioridad:</span> {selPrioridad}</div>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <button className="px-4 py-2 rounded-md border" onClick={() => setStep('datos')}>Inicio</button>
              <button className="px-4 py-2 rounded-md bg-[#439282] text-white" onClick={handleConfirm}>Confirmar</button>
            </div>
          </div>
        )}

        {step === 'confirm' && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 text-center">
              <div className="flex justify-center mb-3">
                <img src={logo} alt="Logo" className="h-10" />
              </div>
              <hr className="my-2" />
              <div className="text-lg font-semibold">Turno asignado</div>
              <div className="text-2xl font-bold my-2">{turno}</div>
              <hr className="my-2" />
              <div className="text-sm text-gray-600">{selConsultorio}</div>
              <div className="mt-4 text-xs text-gray-500">Regresando al kiosko inicial…</div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
