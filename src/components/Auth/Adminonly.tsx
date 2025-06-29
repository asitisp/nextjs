"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedPageProps {
  children: React.ReactNode;
  adminContent?: React.ReactNode;
  moderatorContent?: React.ReactNode;
}

export default function ProtectedPage({
  children,
  adminContent,
  moderatorContent,
}: ProtectedPageProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return;

    const role = session?.user?.role;
    if (!session || (role !== "admin" && role !== "moderator")) {
      router.push("/"); // ❌ Not allowed → Redirect
    } else {
      setIsAuthorized(true); // ✅ Allowed role
    }
  }, [session, status, router]);

  if (status === "loading") return <div>Loading...</div>;
  if (!isAuthorized) return null;

  // ✅ Render different content based on role
  if (session?.user?.role === "admin" && adminContent) return <>{adminContent}</>;
  if (session?.user?.role === "moderator" && moderatorContent)
    return <>{moderatorContent}</>;

  return <>{children}</>; // fallback or shared content
}
