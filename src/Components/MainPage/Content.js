
export default function Content() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center reletive">
                <img src="/Resources/Img/pexels-thought-catalog-904616.jpg" alt="Logo" />
                <h1 className="text-white text-6xl absolute">Tea</h1>
            </div>
            <div className="lg:w-[50%]">
                <h1 className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum.</h1>
                <div className="flex flex-col m-6">
                    <div className="flex">
                        <div className="flex flex-col gap-2 justify-between mb-4">
                            <div className="ml-4 w-[80%]">
                                <img src="/Resources/Img/pexels-dominika-roseclay-894608.jpg" alt="Logo" />
                            </div>
                            <div>
                                <img src="/Resources/Img/pexels-lil-artsy-1793035.jpg" alt="Logo" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-around">
                            <div className="">
                                <img src="/Resources/Img/pexels-hasan-albari-1493080.jpg" alt="Logo" />
                            </div>
                            <div className=" w-[80%]">
                                <img src="/Resources/Img/pexels-valeria-boltneva-1872902.jpg" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around gap-2">
                        <div className="ml-4">
                            <img src="/Resources/Img/pexels-ylanite-koppens-1693626.jpg" alt="Logo" />
                        </div>
                        <div className="mt-2">
                            <img src="/Resources/Img/pexels-lil-artsy-1793034.jpg" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}