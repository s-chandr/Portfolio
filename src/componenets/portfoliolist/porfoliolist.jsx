import "./portfoliolist.scss"
export default function PorfolioList({id, title , active , setSelected}) {
    return (
        <li
          className={active ? "portfilioList active" : "portfilioList"}
          onClick={() => setSelected(id)}
        >
          {title}
        </li>
      );
}
