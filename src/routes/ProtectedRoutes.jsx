import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null; // or a loading spinner
  if (!isSignedIn) return <RedirectToSignIn />;

  return children;
}
