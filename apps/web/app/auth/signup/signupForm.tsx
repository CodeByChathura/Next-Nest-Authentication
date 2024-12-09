import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import React from "react";

const SignUpForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="name">Name</label>
          <Input id="name" name="name" placeholder="Chathura" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" placeholder="chathura@abc.xyz" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input id="password" name="password" placeholder="password" />
        </div>
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
};

export default SignUpForm;
