"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import z, { object } from "zod"
import { useRouter } from 'next/navigation';
import { signUpUser } from '../(pages)/(auth)/lib/form-actions';
import { signIn } from "next-auth/react";


interface FormItem {
    name: string;
    type: string;
    placeHolder: string;
}

interface AuthFormProps {
    type: 'LOGIN' | 'SIGNUP';
    formItems: FormItem[];
}

// const signUpFormSchema = z.object({
//     username: z.string().trim().min(5, { message: "Must be 5 or more characters long" }),
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z.string().trim().min(8, { message: "Must be at least 8 characters" }),
//     confirmpassword: z.string().trim()
// }).refine((data) => data.password === data.confirmpassword, {
//     message: "Passwords do not match",
//     path: ["confirmpassword"]
// });

const AuthForm = (props: AuthFormProps) => {
    // const [formData, setFormData] = useState<Record<string, string>>({});
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<Record<string, string>>({});
    // const router = useRouter();

    // useEffect(() => {
    //     setFormData({});
    // }, [props.type])

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {id, value} = e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         [id]: value
    //     }));
    // };

    // const handlesigninUser = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setError({});
    //     console.log(formData);
    //     try {
    //         const res = await signIn("credentials", {
    //             email: formData.email,
    //             password: formData.password,
    //             redirect: false,
    //         });
    //         if (res?.error) {
    //             setError({"": "Invalid UserName/Password, please try again"})
    //         } else {
    //             router.push("/")
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     } finally {
    //         setIsLoading(false);
    //         setFormData({});
    //     }
    // };

    // const handleSignUpUser = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setError({});

    //     try {

    //         const userData = {
    //             username: formData["fullname"],
    //             email: formData["email"],
    //             password: formData["password"],
    //             confirmpassword: formData["confirmpassword"]
    //         }

    //         await signUpFormSchema.parseAsync(userData);

    //         await signUpUser(userData);
    //         router.push("/signin");

    //     } catch (err) {
    //         console.log(err);
    //         if (err instanceof z.ZodError) {
    //             const fieldErrors = err.formErrors.fieldErrors;
    //             const errorMap: Record<string, string> = {};

    //             Object.keys(fieldErrors).forEach((key) => {
    //                 const errorMessages = fieldErrors[key];
    //                 errorMap[key] = errorMessages?.[0] || 'Validation error';
    //             });
    //             setError(errorMap);
    //         }

    //     } finally {
    //         setIsLoading(false);
    //         setFormData({});
    //     }
    // };

    return (
        <div className='flex gap-3 flex-col'>
            <form
                action={() => { }}
                className='flex flex-col gap-4'>
                {
                    props.formItems.map((item, index) => (
                        <section key={index} className='flex flex-col gap-1'>
                            <Label className='text-sm md:text-[16px]' htmlFor={item.name.replaceAll(" ", "").toLowerCase()}>
                                {item.name}
                            </Label>
                            <Input
                                type={item.type}
                                id={item.name.replaceAll(" ", "").toLowerCase()}
                                placeholder={item.placeHolder}
                                required
                                className="rounded-tl-2xl border-2 focus:outline-none focus:ring-0 py-5"
                            />
                        </section>
                    ))
                }
                <button className='bg-black text-gray py-2.5 text-md font-semibold rounded-4xl cursor-pointer hover:bg-green hover:text-dark transition ease-in-out duration-500'>Sign in</button>
            </form>
            <Button className='bg-white text-dark border-2 border-gray-200 p-[22px] text-md font-semibold rounded-4xl cursor-pointer  hover:bg-white'>
                <Image src={"/google.webp"} height={20} width={20} alt='google'></Image>
                Sign in with Google
            </Button>
            {
                props.type =="LOGIN" &&
                <p className='text-center opacity-80'>Don't have account?
                    <Link href="/signup" className="flex-1 text-center">
                        <span className='font-semibold opacity-100'> Sign up</span>
                    </Link>
                </p>
            }

        </div>
    );
};

export default AuthForm;