import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Avatar = () => {
    const { lanyard, status } = useLanyard({
        userId: DISCORD_ID,
        socket: true,
    });
    console.log(status)

    const getAvatar = () => {
        if (!status) {
            return (
                <img
                    class="rounded-full"
                    src=""
                    alt="cosmic#0001"
                    width="64"
                    height="64"
                ></img>
            );
        } else if (status.discord_status === "online") {
            return (
                <div>
                    <div className="absolute lg:h-[4.5rem] lg:w-[4.5rem] md:w-[4.3rem] md:h-[4.3rem] sm:w-[4.2rem] sm:h-[4.2rem] w-[3.5rem] h-[3.5rem] left-[14px] top-[14px] lg:left-[14px] border-[4px] border-green-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-green-500">
                        <img
                            className="rounded-full"
                            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
                            alt={
                                status.discord_user.username +
                                "#" +
                                status.discord_user.discriminator
                            }
                            width="72"
                            height="72"
                        ></img>
                    </div>
                </div>
            );
        } else if (status.discord_status === "idle") {
            return (
                <div>
                    <div className="absolute lg:h-[4.5rem] lg:w-[4.5rem] md:w-[4.3rem] md:h-[4.3rem] sm:w-[4.2rem] sm:h-[4.2rem] w-[3.5rem] h-[3.5rem] left-[14px] top-[14px] lg:left-[14px] border-[4px] border-yellow-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-yellow-500">
                        <img
                            className="rounded-full"
                            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
                            alt={
                                status.discord_user.username +
                                "#" +
                                status.discord_user.discriminator
                            }
                            width="72"
                            height="72"
                        ></img>
                    </div>
                </div>
            );
        } else if (status.discord_status === "dnd") {
            return (
                <div>
                    <div className="absolute lg:h-[4.5rem] lg:w-[4.5rem] md:w-[4.3rem] md:h-[4.3rem] sm:w-[4.2rem] sm:h-[4.2rem] w-[3.5rem] h-[3.5rem] left-[14px] top-[14px] lg:left-[14px] border-[4px] border-red-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-red-500">
                        <img
                            className="rounded-full"
                            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
                            alt={
                                status.discord_user.username +
                                "#" +
                                status.discord_user.discriminator
                            }
                            width="72"
                            height="72"
                        ></img>
                    </div>
                </div>
            );
        } else if (status.discord_status === "offline") {
            return (
                <div>
                    <div className="absolute lg:h-[4.5rem] lg:w-[4.5rem] md:w-[4.3rem] md:h-[4.3rem] sm:w-[4.2rem] sm:h-[4.2rem] w-[3.5rem] h-[3.5rem] left-[14px] top-[14px] lg:left-[14px] border-[4px] border-gray-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-gray-500">
                        <img
                            className="rounded-full"
                            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
                            alt={
                                status.discord_user.username +
                                "#" +
                                status.discord_user.discriminator
                            }
                            width="72"
                            height="72"
                        ></img>
                    </div>
                </div>
            );
        }
    };

    return <div>{getAvatar()}</div>;
};

export default Avatar;
