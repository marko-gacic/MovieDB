import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
	return (
		<span onClick={() => window.scroll(0, 0)} className="header">
			Movie DB App
			<Search />
		</span>
	);
};

export default Header;
