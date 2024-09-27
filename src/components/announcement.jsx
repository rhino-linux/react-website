import React from "react";
import Link from "next/link";

export default function Announcement() {
  return (
    <div className="bg-site-400 text-center text-md mt-8">
      <div className="p-2 bg-site-300 items-center text-indigo-100 leading-none rounded-full flex inline-flex mx-4" role="alert">
        <span className="flex rounded-full bg-rhino-purple uppercase px-2 py-1 text-xs font-bold mx-4">New</span>
        <span className="font-semibold mr-2 text-left flex-auto p-2">Rhino Linux 2024.2 out now!</span>
        <p className="text-off-white pr-2">
          <Link href="https://blog.rhinolinux.org/news-15" className="text-off-white underline">Announcement</Link> | <Link href="/download" className="text-off-white underline">Download</Link>
        </p>
      </div>
    </div>
  );
}