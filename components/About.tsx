import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="section-about relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
    >
      <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-30px]">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                About <span className="text-[#f41a4a]">Me</span>
              </h4>
            </div>
            <div
              className="bix-banner-line mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <span className="inner-border relative flex justify-center"></span>
            </div>
          </div>

          <div className="max-[1199px]:order-2 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px] mb-[30px]">
            <div className="bix-about-contact h-full flex flex-col justify-center">
              <h5 className="mb-[24px] font-montserrat text-[37px] font-bold text-grey-500 tracking-[0.08rem] opacity-[0.5] leading-[1.2] max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[575px]:text-[28px] max-[420px]:text-[22px]">
                "Creativity bleeds from the pen of inspiration."
              </h5>
              <p className="mb-[16px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                Hi, I'm Thu — a passionate App Developer with a love for
                blending intuitive design and clean code.I believe great apps
                don't just work well — they feel right. With a background in
                UI/UX and front-end development, I bring ideas to life through
                elegant interfaces, seamless user experiences, and a constant
                drive to innovate. Whether it's crafting a mobile app from
                scratch or optimizing a product for performance, I thrive at the
                intersection of creativity and functionality
              </p>
              <div className="about-name">
                <h6 className="mb-[0] font-montserrat text-[16px] text-[#111a24] font-bold tracking-[0.03rem] leading-[1.2]">
                  Developer
                </h6>
                <p className="text-[14px] text-[#555] mb-[16px] font-montserrat font-normal leading-[26px] tracking-[0.03rem]">
                  Thu Huynh
                </p>
              </div>
            </div>
          </div>

          <div className="max-[1199px]:order-1 min-[1200px]:w-[33.33%] min-[992px]:w-[100%] w-full px-[12px] mb-[30px]">
            <div className="bix-about-img border-[1px] border-solid border-[#111a24] p-[15px] rounded-[200px] relative max-[1199px]:max-w-fit max-[1199px]:m-auto">
              <Image
                src="/images/thuhuynh2.jpg"
                alt="about"
                width={400}
                height={400}
                className="w-full rounded-[200px]"
              />
              <div className="bix-rounded-circle z-[1] h-[130px] w-[130px] absolute bottom-[0] right-[0] bg-[#000000cc] rounded-[50%] max-[575px]:h-[120px] max-[575px]:w-[120px] max-[575px]:bottom-[20px] max-[575px]:right-[20px] max-[420px]:bottom-[0] max-[420px]:right-[0]">
                <a href="#" className="relative">
                  <svg
                    viewBox="0 0 100 100"
                    width="100"
                    height="100"
                    className="fill-current h-auto origin-center w-full"
                  >
                    <defs>
                      <path
                        id="circle"
                        d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      ></path>
                    </defs>
                    <text>
                      <textPath
                        xlinkHref="#circle"
                        className="text-[10px] text-[#fff] tracking-[1.3px]"
                      >
                        About Me&nbsp; - About Me &nbsp;-&nbsp;About Me &nbsp;-
                      </textPath>
                    </text>
                  </svg>
                  <div className="inner-contact w-full h-full absolute top-[0] left-[0] right-[0] flex justify-center items-center">
                    <i className="ri-arrow-right-up-line text-[30px] text-[#fff]"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="max-[1199px]:order-3 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px]">
            <div
              className="bix-skill h-full flex flex-col justify-center max-[1199px]:h-auto"
              id="progress"
            >
              <div className="skill-inner-box mb-[24px] p-[20px] flex flex-col relative rounded-[100px] max-[420px]:rounded-[50px] bg-[#faf1c6]">
                <div className="skill-contact inline-flex flex-wrap max-[420px]:flex-col justify-center items-center">
                  <div className="skill-box-contact w-[calc(100%-90px)] p-[10px] flex flex-col justify-center max-[420px]:w-full">
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px] tracking-[0.03rem] leading-[1.2]">
                      Frontend{" "}
                      <span className="text-[13px] font-medium text-[#111a24]">
                        (Angular, React)
                      </span>
                    </h4>
                    <Image
                      src="/images/skill1.png"
                      alt="Frontend Skills"
                      width={200}
                      height={150}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/skill2.png"
                      alt="Frontend Skills"
                      width={200}
                      height={150}
                      className="rounded-lg mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="skill-inner-box mb-[24px] p-[20px] flex flex-col relative rounded-[100px] max-[420px]:rounded-[50px] bg-[#ffd5df]">
                <div className="skill-contact inline-flex flex-wrap max-[420px]:flex-col justify-center">
                  <div className="skill-box-contact w-[calc(100%-90px)] p-[10px] flex flex-col justify-center max-[420px]:w-full">
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px] tracking-[0.03rem] leading-[1.2]">
                      UI/UXDesign{" "}
                      <span className="text-[13px] font-medium text-[#111a24]">
                        (Figma, Adobe XD)
                      </span>
                    </h4>
                    <Image
                      src="/images/skill3.png"
                      alt="Design Skills"
                      width={70}
                      height={40}
                      className="rounded-lg mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="skill-inner-box mb-[24px] p-[20px] flex flex-col  relative rounded-[100px] max-[420px]:rounded-[50px] bg-[#d5f5ff]">
                <div className="skill-contact inline-flex flex-wrap max-[420px]:flex-col justify-center">
                  <div className="skill-box-contact w-[calc(100%-90px)] p-[10px] flex flex-col justify-center max-[420px]:w-full">
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px] tracking-[0.03rem] leading-[1.2]">
                      Graphics{" "}
                      <span className="text-[13px] font-medium text-[#111a24]">
                        (Photoshop)
                      </span>
                    </h4>
                    <Image
                      src="/images/photoshop.png"
                      alt="Graphic Skills"
                      width={40}
                      height={40}
                      className="rounded-lg mt-4"
                    />
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
