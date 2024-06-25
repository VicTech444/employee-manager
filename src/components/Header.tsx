import { useLocation } from "react-router-dom";
import { navList } from "../helpers/navList";

export default function Header() {
    let path = useLocation().pathname;

    let msg = navList.filter(list => list.path === path);

    return (
      <header>
        <h1 className="font-bold">{msg[0].message}</h1>
      </header>
    );
  }