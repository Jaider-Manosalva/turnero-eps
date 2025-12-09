import logo from '../../assets/logo.png'

export default function Admin() {
  return (
    <div className="w-full max-w-3xl bg-white/90 rounded-xl border-2 border-[#439282] p-8">
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-2xl font-bold text-[#439282]">Administración</h1>
      </div>
      <p className="text-gray-700">Vista administrativa en desarrollo.</p>
    </div>
  )
}
