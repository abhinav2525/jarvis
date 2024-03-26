import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


const DashboardPage = () => {
  return (
    <div>
      <p>DashboardPage</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default DashboardPage;