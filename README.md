
      {/* Work Section */}
      <section id="work" className="relative z-10 flex min-h-screen items-center justify-center border-t border-white/10 bg-neutral-900 px-6 py-24">
        <div className="max-w-7xl w-full">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video w-full bg-neutral-800/50 rounded-xl border border-white/5 p-8 flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer group">
                <span className="text-white/20 text-4xl font-bold group-hover:text-white/40 group-hover:scale-110 transition-all">Project 0{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 flex min-h-screen items-center justify-center bg-neutral-950 px-6 py-24">
        <div className="max-w-4xl w-full text-center">
          <span className="text-sm font-bold tracking-widest text-green-500 uppercase mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            "I capture the silence in the chaos and the stories in the stillness."
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Based in Tokyo, I travel the globe documenting landscapes, cultures, and the subtle moments that make life extraordinary. With over 10 years of experience in visual storytelling.
          </p>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="relative z-10 min-h-screen border-t border-white/10 bg-neutral-900 px-6 py-24">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">The Journal</h2>
            <a href="#" className="hidden md:block text-sm font-bold tracking-widest uppercase hover:underline">View All Entries</a>
          </div>
          <div className="space-y-8">
            {["Neon Nights in Shinjuku", "The Silence of the Alps", "Desert Winds of Morocco"].map((title, i) => (
              <div key={i} className="group border-b border-white/10 pb-8 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl md:text-4xl font-bold group-hover:text-green-500 transition-colors">{title}</h3>
                  <span className="text-neutral-500 font-mono">2026.0{i + 1}.15</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 flex min-h-[70vh] items-center justify-center bg-neutral-950 px-6">
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-6">Get in Touch</p>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-8 hover:text-green-500 transition-colors cursor-pointer break-all">
            HELLO@THOMAS.CO
          </h2>
          <div className="flex justify-center gap-8 text-sm uppercase tracking-widest text-neutral-400">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter/X</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </section>