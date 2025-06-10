import react from "react"
import "./Search.css"
export default function Search() {
    return (
      <div className="Search">
        <form>
          <input
            type="search"
            placeholder="Type a Location..."
            className="form-search border border-2 rounded-2 p-1"
          />
          <input
            type="submit"
            value="Search"
            className="form-submit border border-2 rounded-2 ms-2 p-1 fw-bold"
          />
        </form>
      </div>
    );
}