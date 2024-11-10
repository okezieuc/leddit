import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Link from "next/link";
import TextInput from "@/components/ui/textinput";
import Button from "@/components/button";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return <form className="">
    <div className="mb-16">
      <h1 className="text-3xl mb-2">
        welcome to leddit
      </h1>
      <p className="text-sm text-foreground">
        already have an account?{" "}
        <Link className="text-foreground underline" href="/sign-in">
          sign in
        </Link>
      </p>
    </div>


    <div className="flex flex-col gap-12 w-full">
      <div className="w-full">
        <div className="mb-2">email</div>
        <TextInput
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="w-full">
        <div className="mb-2">username</div>
        <TextInput
          name="email"
          placeholder="@you"
          required
        />
      </div>

      <div>
        <div className="mb-2">password</div>
        <TextInput type="password"
          name="password"
          placeholder="password"
          required />
      </div>

      <div>
        <Button text="sign up" />
      </div>
      <FormMessage message={searchParams} />
    </div>
  </form>;


}
