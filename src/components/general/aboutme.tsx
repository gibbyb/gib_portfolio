
const AboutMe = () => {
  return (
    <section className="my-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="w-5/6 md:w-1/2 lg:w-1/3 mx-auto leading-relaxed indent-5">
        I am a recent USM graduate with a Bachelor&apos;s degree in Computer Science.
        Despite my short time in software development, I have an extensive portfolio
        of web applications & a broad range of knowledge & experience in many different
        stacks & technologies. You can also be sure that any project I create will be
        completely self-hosted on my Fedora Server using technologies such as Docker,
        Caddy, Node, PHP-FPM, PostgreSQL, MySQL, & more!
      </p>
      <p className="w-5/6 md:w-1/2 lg:w-1/3 mx-auto leading-relaxed indent-5 mt-1">
        I am a huge fan of TypeScript and I have been exclusively using it in my web
        projects for the past year with frameworks such as Next.js, React, & React
        Native. I also have experience building applications & backends
        using the technologies listed below!
      </p>
    </section>
  );
}
export default AboutMe;
