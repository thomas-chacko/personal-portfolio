export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-neutral-950 border-t border-white/5 py-8 md:py-12">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold text-white tracking-tight">Thomas Chacko</h4>
                    <p className="text-xs text-neutral-500 mt-1">
                        Built with Next.js, motion & caffeine.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-josefin-sans text-neutral-400 uppercase tracking-widest">
                        All Systems Normal
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-neutral-600 font-medium font-josefin-sans mt-8 md:mt-0">
                    <div className="flex gap-4">
                        <a href="#about" aria-label="About Thomas Chacko" className="hover:text-white transition-colors">About</a>
                        <a href="#gallery" aria-label="Thomas Chacko Photo Gallery" className="hover:text-white transition-colors">Gallery</a>
                        <a href="mailto:thomschacko11@gmail.com" aria-label="Contact Thomas Chacko" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <span>© {currentYear} Thomas Chacko Portfolio.</span>
                </div>

            </div>
        </footer>
    );
};
