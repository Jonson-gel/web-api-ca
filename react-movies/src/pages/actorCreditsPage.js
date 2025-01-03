import React from "react";
import { getActor } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useParams } from 'react-router-dom';
import ActorCredits from "../components/actorCredit";

const ActorCreditsPage = (props) => {
  const { id } = useParams();
  const { data : actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorCredits actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor credits</p>
      )}
    </>
  );
};
export default ActorCreditsPage;