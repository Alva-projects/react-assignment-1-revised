import "../index.css";

function SearchBar() {
    return(
        <>
            <form>
                <div class="search">
                    <input class="search-input" type="search" placeholder="Search for Projects"/>
                    <button className="search-btn">Search <i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </form>
        </>
    )
}

export default SearchBar;