import { signInAction } from "@/app/actions";
import Button from "@/components/button";
import { FormMessage, Message } from "@/components/form-message";
import TextInput from "@/components/ui/textinput";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return <form action={signInAction}>
    <div className="mb-16">
      <h1 className="text-3xl mb-2">
        welcome to leddit
      </h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link className="text-foreground underline" href="/sign-up">
          sign up
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

      <div>
        <div className="mb-2">content</div>
        <TextInput type="password"
          name="password"
          placeholder="password"
          required />
      </div>

      <div>
        <Button text="sign in" />
      </div>
      <FormMessage message={searchParams} />
    </div>
  </form>;
}
