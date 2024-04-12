import type { Metadata } from "next";
import getAllUsers from "@/app/lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

const UserPage = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  return (
    <section> 
      <h2>
        <Link href={"/"}>back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
};

export default UserPage;
