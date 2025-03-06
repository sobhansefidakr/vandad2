function PopularServices() {
    const items = [
        { text: "ایتم اول" },
        { text: "ایتم دوم" },
        { text: "ایتم سوم" },
        { text: "ایتم چهارم" },
    ]
    return (
        <div className="popularServices w-full h-full flex justify-center bg-red-500">
            <div className="popularServices-container w-full h-full max-w-[1300px] flex py-5">
                <div className=" w-[15%] flex justify-center items-center py-3">
                    <h2 className=" text-center text-3xl font-bold" style={{ letterSpacing: "5px" }}>
                        خدمات
                        <br />
                        محبوب
                        <br />
                        ما
                    </h2>
                </div>
                <div className=" w-[85%] py-3">
                    <ul className=" flex justify-around">
                        {
                            items.map((item, i) => {
                                return (
                                    <li className=" w-60 h-60 bg-white hover:scale-[1.03] duration-500 shadow-xl flex items-center justify-center rounded-lg">{item.text}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PopularServices;