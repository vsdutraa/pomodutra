import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="max-w-[1.25rem]">
        <Image src="/favicon.ico" width={500} height={500} alt="Logo" />
      </div>
      <span className="text-xl leading-none font-bold">Pomodutra</span>
    </div>
  );
}
