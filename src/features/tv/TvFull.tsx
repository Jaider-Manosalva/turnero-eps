import logo from '../../assets/logo.png'
import data from '../../data/turnos.json'
import { useEffect, useState } from 'react'

export default function TvFull() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const dateStr = now.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' })
  const timeStr = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-4">
      <header className="grid grid-cols-3 items-center mb-4">
        <div />
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="text-right text-sm text-[#439282]">
          <div className="font-semibold">{dateStr}</div>
          <div>{timeStr}</div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <section className="md:col-span-2 border rounded-lg p-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">{data.selected.paciente}</h1>
            <div className="mt-3 text-[#439282] text-2xl font-semibold">{data.selected.codigo}</div>
            <div className="mt-1 text-[#8DBC63] text-2xl font-semibold">{data.selected.lugar}</div>
            <div className="mt-4 text-gray-600 uppercase tracking-wide">{data.selected.motivo}</div>
          </div>
        </section>

        <aside className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 bg-[#439282] text-white text-sm font-semibold p-3">
            <div>Paciente</div>
            <div className="text-right">Turno</div>
          </div>
          <ul className="divide-y">
            {data.lista.map((t, i) => (
              <li key={i} className={`grid grid-cols-2 p-3 ${i === 1 ? 'bg-[#439282] text-white' : i % 2 ? 'bg-[#eaf3f1]' : ''}`}>
                <div className="font-medium">{t.paciente}</div>
                <div className="text-right">
                  <div className="font-semibold">{t.codigo}</div>
                  <div className="text-xs text-gray-600 md:text-white md:opacity-90">{t.lugar}</div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="mt-4 flex items-center justify-between text-xs text-[#439282]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-6" />
          <span>Santa Salud</span>
        </div>
        <div>
          <span className="mr-2">{dateStr}</span>
          <span>{timeStr}</span>
        </div>
      </footer>
    </div>
  )
}
