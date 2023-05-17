"use client";

import { useCallback, useState } from "react";
import Input from "@/app/components/inputs/Input"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, SetIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant == "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      gmail: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetIsLoading(true);

    if (variant == "REGISTER") {
      //axios Register
    }
    if (variant == "LOGIN") {
      //next-auth signin
    }
  };

  const socialAction = (action: string) => {
    SetIsLoading(true);

    //social sign in
  };
  return (
    <div
      className="
      mt-8
      sm:mx-auto
      sm:w-full
      sm:max-w-md
      "
    >
      <div
        className="
      bg-white
      px-4
      py-8
      shadow
      sm:px-10
      sm:rounded-lg
      "
      >
        <form className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}>
        <Input />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
