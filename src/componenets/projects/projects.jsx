import "./projects.scss"
import Porfoliolist from "../portfoliolist/porfoliolist";
import {useState,useEffect} from "react";
import {featuredPortfolio,systemPortfolio,webPortfolio} from "../../data.js" 

export default function Projects() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "system",
          title: "System App",
        },
        {
            id: "dmtb",
            title: "Dymmy Tab",
        },
        
      ];
      useEffect(()=> {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "system":
                setData(systemPortfolio);
                break;
            case "dmtb":
                setData(dummyPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }

      },[selected])
    return (
        <div className="projects" id="projects">
            <h1>&nbsp;Portfolio&nbsp;</h1>
            <ul>
            {list.map((item) => (
            <Porfoliolist
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
            />
            ))}
            </ul>
            <div className="container">
                {data.map( d =>(
                    <div className="item">
                    <a href = {d.link}>
                    <img src= {d.img}
                    alt = "Can't Load Image"
                    
                    /></a>
                    <h3>{d.title}</h3>
                </div>

                )
                )}
                
            </div>
        </div>
    )
}
