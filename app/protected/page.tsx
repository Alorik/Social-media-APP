import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/config";

export default async function Protectedpage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div>Not logged</div>
  }
  consol.log("projext is on hold");
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}