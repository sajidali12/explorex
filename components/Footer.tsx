import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Image
            src="/logo-t.png"
            alt="ExplorEx Logo"
            width={220}
            height={66}
            className="mx-auto mb-6"
          />
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} ExploreX Travel & Educational Consultant (PVT) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
