"use client";

import { redirect } from "next/navigation";

export function Back() {
  return (
    <button
      onClick={() => redirect("/elections/")}
      type="button"
      className="btn btn-warning mt-4"
    >
      Back
    </button>
  );
}
