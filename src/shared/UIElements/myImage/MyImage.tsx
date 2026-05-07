import img from "../../../assets/foto.jpg";

function MyImage({ badge = true }: { badge?: boolean }) {
  return (
    <div className="relative hidden justify-end md:flex">
      <div className="group relative">
        <div className="absolute -inset-4 -rotate-3 rounded-[2.5rem] border border-white/5 transition-transform duration-500 group-hover:rotate-0" />
        <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-tr from-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-4xl shadow-2xl ring-1 ring-white/10">
          <img
            src={img}
            alt="Professional portrait"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#0c0c0c]/40 to-transparent" />
        </div>

        {badge && (
          <div className="animate-bounce-slow absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-bold tracking-tight text-white">
              Available for Work
            </p>
            <p className="mt-1 flex items-center gap-1 text-[10px] font-black tracking-widest text-orange-500 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Full-stack Developer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyImage;
