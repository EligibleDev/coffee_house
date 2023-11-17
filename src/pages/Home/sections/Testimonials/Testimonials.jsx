import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Parallax } from "react-parallax";
import testimonialBg from "../../../../assets/testimonial-bg.jpg";
import Title from "../../../../components/Title/Title";

const Testimonials = () => {
    return (
        <>
            <Parallax
                className=""
                bgClassName="bg-cover bg-no-repeat bg-center"
                bgImage={testimonialBg}
                bgImageAlt="testimonial bg"
                strength={750}
            >
                <div className="container mx-auto py-10 lg:py-20 px-4 xl:px-0 text-center">
                    <Title
                        className="mb-16"
                        title="Our Clients Say"
                        subTitle="Testimonials"
                    />

                    <h1 className="text-8xl leading-[0.5] font-jost font-extrabold text-primary-green">
                        &quot;
                    </h1>

                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        className="mySwiper "
                    >
                      
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center w-full md:w-3/4 mx-auto ">
                                <h3 className="text-lg md:text-2xl font-jost italic">
                                    Maecenas ultricies felis sit amet libero scelerisque,
                                    ut eleifend leo mattis. Aliquam porta facilisis metus.
                                    Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Aliquam
                                    id.
                                </h3>

                                <div className="">
                                    <img
                                        className="mx-auto rounded-full h-24 w-24 object-cover mb-3 mt-10"
                                        src="http://kaffa.like-themes.com/wp-content/uploads/2019/06/testimonials-07-100x100.jpg"
                                        alt=""
                                    />

                                    <p className="text-primary-green font-bold">
                                        Baten Ali
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Parallax>
        </>
    );
};

export default Testimonials;
