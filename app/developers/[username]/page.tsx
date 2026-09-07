interface DeveloperProfilePageProps {
  params: Promise<{ username: string }>;
}

export default async function DeveloperProfilePage({ params }: DeveloperProfilePageProps) {
  const { username } = await params;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{username}</h1>
      <p className="mt-3 text-slate-600">
        Score breakdown, skill confidence, repositories, and explainable evidence will appear here.
      </p>
    </main>
  );
}
