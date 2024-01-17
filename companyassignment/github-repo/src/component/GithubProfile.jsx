import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getrequest } from "./redux/actions";
import { contextdata } from "./contextApi/Contextapi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function GithubProfile() {
  const [username, setUsername] = useState("");
  const data = useSelector((state) => state.reducer.data);
  const dispatch = useDispatch();
  const { userdata, setuserdata } = useContext(contextdata);
setuserdata(data);
  useEffect(() => {
    if (username) {
      dispatch(getrequest(username));
    }
  }, [dispatch, username]);

  const handleSearch = () => {
    if (username) {
      dispatch(getrequest(username));
    }
  };

  return (
    <div>
      <div>GithubProfile</div>
      <label htmlFor="username">GitHub Username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button onClick={handleSearch}>Submit/Search</button>
      <div>
        {data.map((item) => (
          <div key={item.id} className="item">
            <div className="right-content">
              <img src={item.owner.avatar_url} alt={`Avatar for ${item.name}`} />
            </div>
            <div className="left-content">
              <h1>{item.name}</h1>
              <p>{item.description}</p>

              <Link to={`/repo/${item.id}`}>More Details</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubProfile;
