import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <p> Landing Page (unprotected) </p>
      
      <div>
        <Link href="sign-in">
        <Button>Log-in</Button>
        </Link>
      </div>
      <div>
        <Link href="sign-up">
        <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;