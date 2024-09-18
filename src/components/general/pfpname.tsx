"use server"
import Image from "next/image";

export async function PFPName() {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image src={"/original.png"} alt={"Gabriel's Profile Picture"}
        width={80} height={80} className="rounded-full my-2"
      />
      <div className="mx-4 text-center my-auto">
        <h1 className="text-4xl font-bold">Gabriel Brown</h1>
        <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
      </div>
    </div>
  );
}
