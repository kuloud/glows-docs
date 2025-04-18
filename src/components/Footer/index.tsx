import TwitterIcon from "@site/static/img/twitter.svg";
import GithubIcon from "@site/static/img/github.svg";
import DiscordIcon from "@site/static/img/discord.svg";
import ArrowRightIcon from "@site/static/img/arrow-right.svg";
import CloseIcon from "@site/static/img/close.svg";
import CopyIcon from "@site/static/img/copy.svg";

import Link from "@docusaurus/Link";
import {cn} from "@site/src/utils/style";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function Footer(): JSX.Element {
    // get inviter_code from cookie
    const inviter_code = Cookies.get("inviter_code");
    console.log(inviter_code);
    const [isVisible, setIsVisible] = useState(true);
    const [isLoadBlock, setIsLoadBlock] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadBlock(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);
    if (!inviter_code) return null;

    return (
        <>
            <div className={cn(
                "fixed bottom-0 left-0 p-4 lg:px-2 lg:py-4 transition-opacity duration-300 ease-in-out",
                isVisible && "opacity-0 pointer-events-none"
            )}>
                <div
                    className="py-2.5 pl-6 pr-4 bg-gradient-to-r from-[#2854F1] to-[#00BAE2] flex items-center justify-center space-x-2 rounded-[32px] shadow-lg">
                    <div className="t-sb text-white text-center">Invitation <br/> Code</div>
                    <div
                        className="bg-[#FFFFFF29] rounded-full cursor-pointer p-1.5 hover:bg-opacity-80 transition flex items-center"
                        onClick={() => setIsVisible(true)}
                    >
                        <ArrowRightIcon className="w-4 h-4 text-white"/>
                    </div>
                </div>
            </div>

            <div className={cn(
                "fixed bottom-0 left-0 w-full transition-all duration-500 ease-in",
                isLoadBlock ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
            )}>
                <div
                    className={cn(
                        "fixed bottom-0 left-0 w-full z-50 text-white px-8 py-6 flex justify-between items-center rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out transform origin-left",
                        isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 pointer-events-none",
                        isLoadBlock ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    )}
                    style={{
                        backgroundImage: "linear-gradient(to right, #0038FFCC, #9FEEFFCC), url('img/bg-invite.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <button
                        className="w-8 h-8 absolute -top-4 right-4 text-white bg-[#00BAE2] rounded-full p-1 border border-white flex items-center justify-center hover:bg-[#0099CC] transition cursor-pointer"
                        onClick={() => setIsVisible(false)}
                    >
                        <CloseIcon/>
                    </button>

                    <div className="w-full flex flex-row lg:flex-col lg:space-y-6 justify-between items-center">
                        <div className="flex flex-row lg:flex-col lg:space-y-4 items-center space-x-4 lg:space-x-0">
                            <div className="lg:w-full lg:text-center text-2xl leading-5 font-bold">Welcome to Glows.ai
                            </div>

                            <div
                                className="lg:w-full pl-4 pr-2 py-2 rounded-lg bg-[#FFFFFF14] t-sb border border-[#FFFFFF3D] flex items-center space-x-2">
                                <div className="text-white text-opacity-80">Invitation Code:</div>
                                <div className="text-white">{inviter_code}</div>
                                <div className="bg-[#FFFFFF29] rounded-[40px] p-[6px] flex items-center" onClick={() => {
                                    if (typeof inviter_code === "string") {
                                        navigator.clipboard.writeText(inviter_code);
                                    }
                                }}>
                                    <CopyIcon className="w-4 h-4 text-white cursor-pointer"/>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-full lg:w-full">
                            <button
                                className="lg:w-full relative font-bold lg:text-bold lg:leading-[20px] px-8 lg:px-0 py-3 rounded-full border border-white/50 shadow-[0_0_16px_rgba(255,255,255)] transition cursor-pointer"
                                style={{
                                    background: "radial-gradient(circle at -20px 20px, #B3E3FD, #FFFFFF)"
                                }}
                                onClick={() => {
                                    window.location.href = `https://platform.glows.ai/register?inviter_code=${inviter_code}`;
                                }}
                            >
                            <span
                                className="bg-gradient-to-r from-[#2854F1] to-[#00BAE2] bg-clip-text text-transparent">
                                Sign Up Now
                            </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="h-16 border-t-[2px] border-b-0 border-solid border-gray100 flex items-center xl:px-8">
                <div className="w-safe-lg xl:w-full m-auto flex items-center justify-between">
                    <div className="text-secondary t-bold">
                        © {new Date().getFullYear()} Glows.ai |{" "}
                        <a href="mailto:hi@glows.ai" className="text-blue-600">
                            hi@glows.ai
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Link
                            href="https://twitter.com/glowsai"
                            target="_blank"
                            rel="noreferrer noopenner"
                            className="w-12 h-12 icon-btn mr-4"
                        >
                            <TwitterIcon className="text-2xl"/>
                        </Link>
                        <Link
                            href="https://github.com/glowsai"
                            target="_blank"
                            rel="noreferrer noopenner"
                            className="w-12 h-12 icon-btn mr-4"
                        >
                            <GithubIcon className="text-2xl"/>
                        </Link>
                        <Link href="https://discord.gg/glowsai" target="_blank" rel="noreferrer noopenner"
                              className="w-12 h-12 icon-btn">
                            <DiscordIcon className="text-2xl"/>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
