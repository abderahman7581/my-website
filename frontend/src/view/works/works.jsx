import "./Works.css"
import Card from "../../components/Card"
import github_img from "../../assets/github-logo.png"
const WORKS = [
    {
        image: github_img,
        title:"أكثرهم فحساب جيتهب القديم :)",
        link:"https://github.com/0xangoone/"
    }
]
export default function Works(){
    const works = WORKS.map((dev, key) => (
        <Card {...dev} />
      ))
    return (
        <div class="body">  
            <div className="card_container">
                {works}
            </div>
        </div>
    )
}
