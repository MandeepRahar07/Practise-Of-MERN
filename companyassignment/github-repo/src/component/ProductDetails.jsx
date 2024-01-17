import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { contextdata } from './contextApi/Contextapi';

function RepoDetails() {
  const { id } = useParams();
  const {userdata} = useContext(contextdata)
  const repository = userdata.find(item => item.id === id); // Find the repository based on repoName

  if (!repository) {
    return <div>Repository not found</div>; // Handle the case where the repository is not found
  }

  return (
    <div>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <p>Owner: {repository.owner.login}</p>
      <p>Stars: {repository.stargazers_count}</p>
      {/* Add other details you want to display */}
    </div>
  );
}

export default RepoDetails;
