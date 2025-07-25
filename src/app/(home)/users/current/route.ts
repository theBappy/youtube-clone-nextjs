import { db } from "@/db";
import { users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export const GET = async () => {
  const { userId } = await auth();

  if (!userId) return redirect("/sign-in");

  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, userId));

  if (!existingUser) return redirect("/sign-in");

  return redirect(`/users/${existingUser.id}`)
};
