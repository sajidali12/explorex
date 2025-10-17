import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#0D47A1] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Image
            src="/logo-t.png"
            alt="ExplorEx Logo"
            width={220}
            height={66}
            className="mx-auto mb-6 brightness-0 invert"
          />
          <p className="text-gray-200 mb-6 text-lg max-w-2xl mx-auto">
            Your trusted partner for international education, travel, and immigration services.
            Making global dreams a reality since 2018.
          </p>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} ExploreX Travel & Educational Consultant (PVT) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
