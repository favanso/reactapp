import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

export default function App(props) {
  const [user, setUser] = useState("");
  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    });
  }

  return (
    <S.Container>
      <S.Input
        className="user"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <S.Button type="button" onClick={handleSearch}>
        {" "}
        Search{" "}
      </S.Button>
    </S.Container>
  );
}
