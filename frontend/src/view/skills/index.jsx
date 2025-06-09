import Image from "../../components/Image.jsx"
import { If, Then } from "react-if";
import Icons from "../../components/Icons.jsx";

import classes from "./style.module.css";
import { useResponsive } from "../../hooks/useResponsive.jsx";
import { Responsive } from "../../Root.jsx";

export function AccountCard({ name, photo}) {
    return (
        <div className={classes.account_card}>
            <Image src={photo} className={classes.card_photo} />
            <h1 className="w-full" style={{ textAlign: "right", paddingRight: "0.5rem" }}>{name}</h1>
        </div>
    )
}

/*
    here you should add someone to the team as a developer
    each object contain
    photo: required string for it to display into the card
    name: required string, must contain the name of the developer (recomended arabic/realname)
    github: another required string, must contain the user name of the developer to github
    discord: required string, must contain the discord user name of the developer
    twitter: optional string, must contain the twitter user name of the developer
    reddit: optional string, must contain the reddit user name of the developer
*/
/** @type {{photo: string, name: string, github: string, discord: string, twitter: string | undefined, reddit: string | undefined}[]} */
const DEVELOPERS = [
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png",
        name: "البرمجة بلغة سي شارب",
    },
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
        name: "البرمجة بلغة سي بلس بلس",
    },
    {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu6NmvKm0sXhLiAMTedt27xLRtlhuq_nYy3d5IYtcvkExJKLZUlJn-_kp1nYtt44rQzY&usqp=CAU",
        name: "البرمجة بلغة اسمبلي؟",
    },
    {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqI3kyCxZHOBcjuwBBLsY_dGikl8Xfmk-mQ&s",
        name: "البرمجة بلغة رصت",
    },
    {
        photo:"https://upload.wikimedia.org/wikipedia/commons/f/fc/Qt_logo_2013.svg",
        name:"برمجة برامج سطح المكتب بكيوتي"
    },
    {
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Android_robot_%282014-2019%29.svg/1200px-Android_robot_%282014-2019%29.svg.png",
        name:"برمجة برامج الهاتف بجافا (سابقا) "
    },
]

export default function AccountsView() {
    const screenType = useResponsive(Responsive);
    const devs = (
        <ul>
            {DEVELOPERS.map((dev, key) => (
                <li key={key}>
                    <AccountCard {...dev} />
                </li>
            ))}
        </ul>
    )
    return (
        <div className={classes.body}>
            <div>
                <h3 className={screenType === "sm" ? classes.h3_sm : ""}>
                    مهاراتي
                </h3>
                {devs}
            </div>
        </div>
    )
}
