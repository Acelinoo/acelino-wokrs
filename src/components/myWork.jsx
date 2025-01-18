import "font-awesome/css/font-awesome.min.css"; // Mengimpor Font Awesome

function MyWork() {
  return (
    <>
      <div className="flex">
      <h1>My Work</h1>
      <div className="bg-[#1A2B34] h-screen p-20 flex items-center justify-center">
        <div className="flex flex-col items-center bg-[#2F4750] p-8 rounded-2xl shadow-xl max-w-md w-full">
          {/* Logo / Gambar */}
          <img
            src="/assets/tugas-ktp.png"
            alt="Logo"
            className="w-44 h-54 rounded-xl border-4 border-gray-800 mb-6"
          />

          {/* Konten Teks */}
          <div className="text-center text-white">
            <h1 className="text-4xl font-semibold mb-4 text-teal-400">
              Tugas KTP
            </h1>

            {/* Tombol */}  
            <button className="mt-4 px-10 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-400 hover:shadow-2xl transition duration-300 ease-in-out">
              <a href="#" className="flex items-center justify-center gap-2">
                Open Task
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>  
    </>
  
  );
}

export default MyWork;
