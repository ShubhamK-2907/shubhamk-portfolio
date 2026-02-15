import PolaroidGallery from "./ui/polaroid-gallery";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative font-sans font-normal text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">About</h2>
        
        <div className="space-y-6 leading-relaxed text-gray-700">
          <p>
            I'm Shubham Kumar Sahoo, an experienced fullstack software engineer with a strong track record of success in high-profile projects.
          </p>

          <p>
            I graduated from PES University (CSE | BTech) in 2022 and have been laser-focused on building intuitive, high-performance front-end experiences ever since — especially with React and TypeScript.
          </p>

          <p>
            Over the past three years, I've worked extensively in fast-paced startup, with teams of 6-8 members, operating under tight deadlines as an Individual Contributor. The Startup Hustle? It taught me how to ship — fast and clean.
          </p>

          <p>
            While front-end is my homeground, I bring a solid experience with diverse backend technologies, making me confident across the full stack.
          </p>

          <p>
            Beyond coding, I'm fueled by gaming, Marvel, and travel. That creative energy often finds its way into my work — crafting products that don't just look good, but actually solve real-world problems.
          </p>

          <p className="font-medium text-gray-900">
            I don't just build products. I build experiences that work — and feel great to use.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
              <div className="flex justify-center">
                <PolaroidGallery />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
