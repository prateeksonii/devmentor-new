import { ChallengePageProps } from "./page";

type ChallengeLayoutProps = ChallengePageProps & {
  children: React.ReactNode;
};

export default function ChallengeLayout({
  children,
  params,
}: ChallengeLayoutProps) {
  const title = "Challenge " + params.id;

  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      {children}
    </>
  );
}
