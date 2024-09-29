import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/kıblegah-icon.jpg"

export default function Logo() {
  return (
    <Link href="/" className="inline-flex bg-white" aria-label="Cruip">
      <Image src={LogoImage} alt="Hero Image" width={50} height={50} />
    </Link>
  );
}
