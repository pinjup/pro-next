import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const route = router.pathname.substring(1);
  const titleMain = route.charAt(0).toUpperCase() + route.slice(1);

  return (
    <nav className="bg-white shadow border-b border-black">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {titleMain}
        </h1>
      </div>
    </nav>
  );
}
