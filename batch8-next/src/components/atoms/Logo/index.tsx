import IMAGES from "@assets/images";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex-1 px-5 py-2">
      <Link href="/" className="flex w-[120px]">
        <Image
          src={IMAGES.logoBerijalan}
          alt="logo"
          width={30}
          height={50}
          // width={200}
          // height={50}
          style={{ width: 200, height: 50 }}
          priority  
        />
        <h1 className="ml-2 mt-2 text-4xl font-extrabold items-center justify-center">Berijalan</h1>
      </Link>
    </div>
  );
}
