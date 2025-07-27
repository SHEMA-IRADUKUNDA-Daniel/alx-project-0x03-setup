import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter();

  // Imeperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div>
      <h1>Welcome to Splash App</h1>
    </div>
  );
}
