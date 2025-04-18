import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1>Welcome to GTS!</h1>
      <p>This is a simple static website built with Next.js.</p>
      <p>
        Visit our <a href="/services">services</a> page or{" "}
        <a href="/about">about</a>
        page for more information.
      </p>
      <Image src="/logo.svg" alt="Logo" width={60} height={30} />
    </>
  );
}
