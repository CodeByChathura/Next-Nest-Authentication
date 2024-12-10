"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";
import React from "react";
import { useFormState } from "react-dom";

const SignUpForm = () => {
  const [state, action] = useFormState(signUp, undefined);
  return (
    <form action={action}>
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Chathura" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="chathura@abc.xyz" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="password" />
        </div>
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
};

export default SignUpForm;
