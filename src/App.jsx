import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Mengimpor Font Awesome
import { NavbarSimple } from "./components/navbar";

// Komponen Card
function Card({ imageSrc, title, buttonText, link }) {
  return (
    <div className="flex flex-col items-center bg-[#2F4750] p-6 rounded-xl shadow-lg  w-full">
      {/* Gambar */}
      <img
        src={imageSrc}
        alt="Logo"
        className="w-full h-40 rounded-lg border-4 border-gray-800 mb-4"
      />

      {/* Konten */}
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-2 text-teal-400">{title}</h1>
        <a
          href={link}
          target="_blank" // Membuka di tab baru
          rel="noopener noreferrer" // Keamanan tambahan
        >
          <button className="px-6 py-2 bg-teal-500 text-white font-medium rounded-lg shadow-md hover:bg-teal-400 transition duration-300">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}
  

// Komponen Container
function Container() {
  const handleScroll = () => {
    const targetElement = document.getElementById("myWork");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Menambahkan behavior smooth di sini
        block: "start", // Scroll ke atas dari elemen target
      });
    }
  };

  return (
    <div className="bg-[#1A2B34] h-screen p-20 flex flex-col items-center justify-center">
      <NavbarSimple />
      <div className="flex items-center bg-[#2F4750] p-8 rounded-2xl shadow-xl max-w-4xl w-full">
        {/* Gambar */}
        <img
          src="/assets/acelino.png"
          alt="Logo"
          className="w-44 h-54 rounded-xl border-4 border-gray-800"
        />

        {/* Konten */}
        <div className="ml-6 text-white">
          <h1 className="text-4xl font-semibold mb-3 text-teal-400">
            Hi, I'm Marchelino Kurniawan
          </h1>
          <p className="text-lg text-gray-300">
            Fakultas: Teknik dan Ilmu Komputer
          </p>
          <p className="text-lg text-gray-300">Prodi: Manajemen Informatika</p>
          <p className="text-lg text-gray-300">Nim: 10924005</p>
          <a href="
          "></a>
          <button
            onClick={handleScroll}
             // Fungsi untuk scroll
            className="mt-6 px-10 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
          >
            <span className="flex items-center gap-2">
              <i className="fa fa-briefcase" aria-hidden="true"></i>
              Open Task
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Komponen MyWork
function MyWork() {
  return (
   <> <div className="bg-[#1A2B34] flex flex-col items-center text-center">
   {/* Judul Section */}
   <h1 className="text-4xl font-bold text-teal-500">
     My <span className="text-white">Work</span>
   </h1>
   <hr className="w-40 mt-3" />

   {/* Kontainer Karya */}
   <div
     id="myWork"
     className="bg-[#1A2B34] h-screen p-10 flex items-center justify-center"
   >
     <div className="flex flex-wrap gap-6 justify-center w-[450px]">
       {/* Card */}
       <Card
         imageSrc="/assets/tugas-ktp.png"
         title="Tugas KTP"
         buttonText="Open Task"
       />
     </div>
     <div className="flex flex-wrap gap-6 ml-5 justify-center w-[450px]">
  {/* Card */}
  <Card
    imageSrc="/assets/tugas-ktp.png"
    title="Tugas Pertemuan 13"
    buttonText="Open Task"
    link="https://acelino-tugaspertemuan13.netlify.app/"
  />
</div>

   </div>
 </div>
 </>
  );
}

// Komponen Utama
function App() {
  return (
    <div className="font-sans">
      <Container />
      <MyWork />
    </div>
  );
}

export default App;
