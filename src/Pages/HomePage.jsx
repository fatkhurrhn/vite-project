
function Sample() {
  // useState hanya dibutuhkan jika Anda menggunakan state di dalam komponen ini
  // const [count, setCount] = useState(0); 

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <div className="mt-6"> {/* Tambahkan margin atas */}
          {/* Konten utama di sini */}
          <h1>Ini adalah halaman tes vite+react</h1>
        </div>
      </div>
    </div>
  );
}

export default Sample;