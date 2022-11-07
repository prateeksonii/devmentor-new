import Link from "next/link";
import { use } from "react";
import { Challenge } from "../../types/models";

export async function getChallenges(): Promise<Challenge[]> {
  return fetch("http://localhost:3001/challenges").then((res) => res.json());
}

export default async function ExplorePage() {
  const challenges = await getChallenges();

  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-2xl font-bold">Latest Challenges</h1>
      <div className="p-2"></div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2">S. No.</th>
            <th className="py-2">Title</th>
            <th className="py-2">Level</th>
            <th className="py-2">Tags</th>
            <th className="py-2"># of submissions</th>
          </tr>
        </thead>
        <div className="p-1" />
        <tbody>
          {challenges.map((challenge) => (
            <Link
              href={`/explore/challenge/${challenge.id}`}
              key={challenge.id}
              className="table-row hover:bg-cyan-600"
            >
              <td className="rounded-l py-2 pl-2">{challenge.id}</td>
              <td className="py-2">{challenge.title}</td>
              <td className="py-2">{challenge.level}</td>
              <td className="py-2">
                {challenge.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gray-600 p-2 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td className="rounded-r py-2">{challenge.submissionCount}</td>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}
