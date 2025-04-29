"use client";
export default function Button() {
  return (
    <>
      <button
        className="bg-green-500 rounded-sm px-4 py-1 cursor-pointer"
        onClick={() => console.log("I have clicked here")}
      >
        Click here
      </button>
    </>
  );
}
