import css from "./LinkedTree.module.scss";

export default function LinkedTree() {

    // change the variable here
    const links = [
        {
            color: "bg-red-300",
            text: "Buy me coffee ☕️",
            link: "https://github.com",
        },
        {
            color: "bg-sky-300",
            text: "Join My Newslatter 🗞",
            link: "https://github.com",
        },
        {
            color: "bg-pink-400",
            text: "Learn Code 💻",
            link: "https://github.com",
        },
    ];

    return (
        <div className="w-full h-screen bg-yellow-300 flex justify-center items-center">
            <div className="max-w-2xl mx-auto flex flex-col gap-5">
                <div className="h-48 w-48 mx-auto">
                    <div className={css.imageContainer}>
                    <span className="primaryText yPaddings">Relevant Links </span>
                    </div>
                </div>
                <div className="text-center p-3">
                    {/* <h1 className="text-4xl font-bold">PARAS MADAN</h1>
                    <p className="text-lg mt-3">
                        AI Content Creator
                    </p> */}
                </div>
                <div className={css.upperbox}>
                    {links.map(({ text, color, link }, index) => {
                        return (
                            <a className={css.link} href={link} key={index} target="_blank">
                                <div
                                    className={css.box}
                                >
                                    {text}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );

}
