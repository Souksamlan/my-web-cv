export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-extrabold mb-4">Souksamlan Bounmiboupha</h1>
        <p className="text-2xl mb-8">Junior Frontend Developer</p>
        
        <div className="flex justify-center gap-6">
         
          <a href="#contact" className="px-6 py-3 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
