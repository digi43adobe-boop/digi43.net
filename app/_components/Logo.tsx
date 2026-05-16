import Image from "next/image";

const LOGO_URL =
  "https://res.cloudinary.com/dz2hugofx/image/upload/e_trim/v1772079170/Digi_43_-_Logo_Official-05_qvwxf5.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={LOGO_URL}
        alt="Digi43"
        width={400}
        height={106}
        priority
        sizes="(max-width: 768px) 120px, 150px"
        className="h-9 w-auto md:h-10"
      />
    </div>
  );
}
