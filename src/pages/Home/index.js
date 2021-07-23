import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import {useHistory, UseHistory} from 'react-router-dom';


export default function App(props) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setError(false);
        history.push('/repositories');
    })
    .catch(err => {
      setError(true);
    }); 
  }

  return (
    <S.HomeContainer>
    <S.Content>
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
    </S.Content>
    {error ?  <S.ErrorMsg>Error, try again.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}
