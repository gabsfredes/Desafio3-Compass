import searchIcon from "../../images/search_icon.svg";

const SearchBar: React.FC = () => {
  return (
    <form>
      <div className="bar outlined_bar">
        <input className="style" type="text" placeholder="Enter item or restaurant you are looking for" />
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </form>
  );
};

export default SearchBar;
