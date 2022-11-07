import Head from "next/head";
import { Challenge } from "../../../../types/models";

export type ChallengePageProps = {
  params: {
    id: string;
  };
};

export async function fetchChallenge(id: string): Promise<Challenge> {
  return fetch(`http://localhost:3001/challenges/${id}`).then((res) =>
    res.json()
  );
}

export default async function ChallengePage({ params }: ChallengePageProps) {
  const { id } = params;

  const challenge = await fetchChallenge(id);

  return (
    <div className="container mx-auto py-4">
      <p className="text-sm">Challenge {id}</p>
      <h1 className="text-3xl font-bold">{challenge.title}</h1>
      <div className="p-2" />
      <article>{challenge.description}</article>
      <button className="rounded bg-cyan-600 p-2 font-medium">View Demo</button>
    </div>
  );
}
