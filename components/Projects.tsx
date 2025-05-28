import Image from "next/image";

export default function Projects() {
  return (
    <section
      className="section-projects py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
      id="projects"
    >
      <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
            >
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                Featured <span className="text-[#f41a4a]">Projects</span>
              </h4>
            </div>
            <div
              className="bix-banner-line mb-[110px]"
            >
              <span className="inner-border relative flex justify-center"></span>
            </div>
          </div>

          <div className="w-full projects-content">
            <div className="flex flex-wrap w-full mb-[-24px]">
              {/* Project 1 */}
              <div className="min-[1200px]:w-[33.33%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                <div className="bix-project-card">
                  <div className="project-image relative px-[30px] pb-[30px] overflow-hidden rounded-[30px] z-[1] max-[480px]:px-[20px] max-[480px]:pb-[20px]">
                    <a
                      href="/projects/project-one"
                      className="flex rounded-[30px] overflow-hidden"
                    >
                      <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-20px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px]"></div>
                      <Image
                        src="/images/Semester Project - bStorm-project1.png"
                        alt="Project 1"
                        width={400}
                        height={500}
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </a>
                  </div>
                  <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
                    <h5 className="mb-[2px] text-[18px] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-medium">
                      <a
                        href="/projects/project-one"
                        className="transition-all duration-[0.3s] ease-in-out font-montserrat leading-[26px] tracking-[0.03rem] text-[18px] max-[1399px]:text-[17px] font-semibold text-[#111a24] hover:text-[#f41a4a]"
                      >
                        Semester Project
                      </a>
                    </h5>
                    <span className="font-montserrat font-normal leading-[26px] tracking-[0.02rem] text-[14px] max-[1399px]:text-[14px] text-[#999]">
                      An auction website
                    </span>
                    <p className="mt-[4px] font-montserrat text-[14px] font-normal tracking-[0.03rem] leading-[22px] text-[#495461]">
                      A modern website built with HTML, Tailwind, Javascript.
                      <a
                        href="/projects/project-one"
                        className="text-[#111a24] inline-flex font-medium font-montserrat text-[14px] leading-[26px] tracking-[0.03rem]"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="min-[1200px]:w-[33.33%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                <div className="bix-project-card">
                  <div className="project-image relative px-[30px] pb-[30px] overflow-hidden rounded-[30px] z-[1] max-[480px]:px-[20px] max-[480px]:pb-[20px]">
                    <a
                      href="/projects/project-two"
                      className="flex rounded-[30px] overflow-hidden"
                    >
                      <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-20px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px]"></div>
                      <Image
                        src="/images/Javascript Frameworks-project2.png"
                        alt="Project 2"
                        width={400}
                        height={300}
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </a>
                  </div>
                  <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
                    <h5 className="mb-[2px] text-[18px] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-medium">
                      <a
                        href="/projects/project-two"
                        className="transition-all duration-[0.3s] ease-in-out font-montserrat leading-[26px] tracking-[0.03rem] text-[18px] max-[1399px]:text-[17px] font-semibold text-[#111a24] hover:text-[#f41a4a]"
                      >
                        Javascript Frameworks
                      </a>
                    </h5>
                    <span className="font-montserrat font-normal leading-[26px] tracking-[0.02rem] text-[14px] max-[1399px]:text-[14px] text-[#999]">
                      E-commerce website
                    </span>
                    <p className="mt-[4px] font-montserrat text-[14px] font-normal tracking-[0.03rem] leading-[22px] text-[#495461]">
                      An e-commerce web application built using HTML,Tailwind
                      and Next.js.
                      <a
                        href="/projects/project-two"
                        className="text-[#111a24] inline-flex font-medium font-montserrat text-[14px] leading-[26px] tracking-[0.03rem]"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="min-[1200px]:w-[33.33%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                <div className="bix-project-card">
                  <div className="project-image relative px-[30px] pb-[30px] overflow-hidden rounded-[30px] z-[1] max-[480px]:px-[20px] max-[480px]:pb-[20px]">
                    <a
                      href="/projects/project-three"
                      className="flex rounded-[30px] overflow-hidden"
                    >
                      <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-20px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px]"></div>
                      <Image
                        src="/images/Project Exam - Holidaze-project3.jpg"
                        alt="Project 3"
                        width={400}
                        height={300}
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </a>
                  </div>
                  <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
                    <h5 className="mb-[2px] text-[18px] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-medium">
                      <a
                        href="/projects/project-three"
                        className="transition-all duration-[0.3s] ease-in-out font-montserrat leading-[26px] tracking-[0.03rem] text-[18px] max-[1399px]:text-[17px] font-semibold text-[#111a24] hover:text-[#f41a4a]"
                      >
                        Project Exam
                      </a>
                    </h5>
                    <span className="font-montserrat font-normal leading-[26px] tracking-[0.02rem] text-[14px] max-[1399px]:text-[14px] text-[#999]">
                      Booking website
                    </span>
                    <p className="mt-[4px] font-montserrat text-[14px] font-normal tracking-[0.03rem] leading-[22px] text-[#495461]">
                      A booking site built with HTML, Next.js, Tailwind, TypeScript.
                      <a
                        href="/projects/project-three"
                        className="text-[#111a24] inline-flex font-medium font-montserrat text-[14px] leading-[26px] tracking-[0.03rem]"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
