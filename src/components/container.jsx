import "font-awesome/css/font-awesome.min.css"; // Mengimpor Font Awesome

function Container() {
  return (
    <div className="bg-[#1A2B34] h-screen p-20 flex items-center justify-center">
      <div className="flex items-center bg-[#2F4750] p-8 rounded-2xl shadow-xl max-w-4xl w-full">
        {/* Logo / Image */}
        <img
          src="/assets/acelino.png"
          alt="Logo"
          className="w-44 h-54 rounded-xl border-4 border-gray-800"
        />

        {/* Text content */}
        <div className="ml-6 text-white">
          <h1 className="text-4xl font-semibold mb-3 text-teal-400">Hi, I'm Marchelino Kurniawan</h1>
          <p className="text-lg text-gray-300">Fakultas : Teknik dan Ilmu Komputer</p>
          <p className="text-lg text-gray-300">Prodi : Manajemen Informatika</p>
          <p className="text-lg text-gray-300">Nim : 10924005</p>

          {/* Button */}
          <button className="mt-6 px-10 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-400 hover:shadow-2xl transition duration-300 ease-in-out">
            <a href="#" className="flex items-center gap-2">
              <i className="fa fa-briefcase" aria-hidden="true"></i>
            </a>
          </button>
          <button className="mt-6 px-10 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-400 hover:shadow-2xl transition duration-300 ease-in-out">
            <a href="#" className="flex items-center gap-2">
              <i className="fa fa-briefcase" aria-hidden="true"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
