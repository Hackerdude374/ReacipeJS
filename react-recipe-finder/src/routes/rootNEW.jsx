const statuses = {
  1: "Bookmarked",
  2: "Applying",
  3: "Applied",
  4: "Interviewing",
  5: "Negotiating",
  6: "Accepted",
};

function Root() {
  const statusButtons = Object.keys(statuses).map((statusId) => {
    const buttonClass = "px-4 py-2 border";
    return (
      <button
        key={statusId}
        className={buttonClass}
      >
        {statuses[statusId]}
      </button>
    );
  });

  return (
    <div className="mx-auto max-w-4xl">
      <h1>Recipe Finder</h1>
      <div className="grid grid-cols-6 my-4">{statusButtons}</div>
      <div className="flex justify-between">
        <div></div>
        <div>
          <button
            className="bg-blue-500 px-4 py-2 hover:bg-blue-600 transition"
          >
            + Add Job
          </button>
        </div>
      </div>


    </div>
  );
}

export default Root;