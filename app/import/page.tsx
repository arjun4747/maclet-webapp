export default function ImportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Import Developer</h1>
      <p className="mt-3 text-slate-600">
        Enter a GitHub username to trigger validation, data collection, analysis, and evidence generation.
      </p>

      <form className="mt-8 space-y-4 rounded-lg border border-slate-200 p-6">
        <label className="block text-sm font-medium text-slate-700" htmlFor="username">
          GitHub Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="octocat"
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
        <button
          type="button"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Import (Phase 2)
        </button>
      </form>
    </main>
  );
}
