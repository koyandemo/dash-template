import Image from 'next/image';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex gap-5">
      {children}
      <div className="hidden w-[65%] md:flex justify-center items-center">
        <figure
          style={{
            width: '824px',
            height: '642.72px',
            objectFit: 'contain',
            scale: '0.9',
          }}
        >
          <Image
            id="mainImage"
            alt="trusted by"
            src="https://dash.popl.co/assets/img/generals/Exportable.png"
            layout="fill"
          />
        </figure>
      </div>
    </div>
  );
}
