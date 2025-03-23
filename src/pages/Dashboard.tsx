
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserDashboard from "@/components/UserDashboard";
import AuthCheck from "@/components/AuthCheck";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  return (
    <AuthCheck>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8">
          <Suspense fallback={<Skeleton className="w-full h-[500px]" />}>
            <UserDashboard />
          </Suspense>
        </main>
        <Footer />
      </div>
    </AuthCheck>
  );
};

export default Dashboard;
