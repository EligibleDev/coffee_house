import { Modal } from "keep-react";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Carousel as Slider } from "keep-react";

const Carousel = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section className="bg-secondary-black text-white py-10 lg:py-20 px-8 xl:px-0">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col justify-between items-center lg:items-start gap-6">
                        <h3 className="text-4xl text-center lg:text-left md:text-5xl font-bold !leading-[1.2em]">
                            <span className="text-primary-green ">Lounge Interior </span>
                            with Calm Music for Chill Out
                        </h3>

                        <p className="font-jost text-lg text-center lg:text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Tempora eveniet nulla expedita placeat deleniti rerum.
                        </p>

                        <span
                            onClick={() => setShowModal(!showModal)}
                            className="flex justify-start items-center gap-3 cursor-pointer"
                        >
                            <FaCirclePlay className="text-4xl text-primary-green" />
                            <h3 className="text-xl font-bold">Watch Video</h3>
                        </span>
                    </div>
                    <Slider
                        showControls={false}
                        indicatorsType="ring"
                        indicatorsTypeColors="slate"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1583443554642-c032da238a82?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664301326532-674ae7612b9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518127877211-b9c92939659e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />
                        <img
                            src="https://images.unsplash.com/photo-1517638851339-a711cfcf3279?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />
                    </Slider>

                    <Slider
                        showControls={false}
                        indicatorsType="ring"
                        indicatorsTypeColors="slate"
                    >
                        <img
                            src="https://plus.unsplash.com/premium_photo-1663040581809-474e639444ba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />

                        <img
                            src="https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />

                        <img
                            src="https://images.unsplash.com/photo-1509770897459-f6ce4f6fa236?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />
                        <img
                            src="https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-full w-full object-cover "
                        />
                    </Slider>
                </div>
            </section>

            <Modal size="4xl" show={showModal} onClose={() => setShowModal(!showModal)}>
                <Modal.Header>Watch the full video</Modal.Header>
                <iframe
                    width="100%"
                    height="460"
                    src="https://www.youtube.com/embed/zXS75W2bqlg?si=FoQKcOlKZ_ZslxyG&amp;controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Modal>
        </>
    );
};

export default Carousel;
