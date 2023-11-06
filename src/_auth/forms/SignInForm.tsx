import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast"
import {z} from "zod";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {  Form, FormControl, FormField, 
  FormItem, FormLabel, FormMessage,} 
  from "@/components/ui/form";
import { SignInValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";

import { useSignInAccount } from "@/lib/react-query/queriesandMutations";
import { useUserContext } from "@/context/AuthContext";

const SignInForm = () => {
  const { toast } = useToast()
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext();
  const navigate = useNavigate();
 
  const { mutateAsync: signInAccount } = 
  useSignInAccount()
  
  //define sign in validation
    const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
  defaultValues: {
      email: '',
    password: '',
  },
})

// 2. Define a submit handler.
async function onSubmit(values: z.infer<typeof SignInValidation>) { 

      const session = await signInAccount({
        email: values.email,
        password: values.password,
      })

      if(!session){
        return toast({ title: "Sign In failed. Please try again"})
      }

        const isLoggedIn = await checkAuthUser();

        console.log({isLoggedIn})

        if(isLoggedIn) {
          form.reset();

            navigate('/')

        }else
          {
           return toast ({ title: "Sign Up failed. Please try again"})
          }
        }

  return (
 <Form {...form}>

  <div className="sm:w-420 flex-center flex-col">
    <img src="/assets/images/ma3logo.svg" alt="logo"  
        width={300}
        height={300}    
    />

    <h2 className="h3-bold md:h2-bold p-5 sm:pt-12">
      Log In to your account
    </h2>
    <p className="text-light-3 small-medium md:base-regular mt-2   ">
      Karibu! Enter your details</p>

    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="example@mail.com"
              className="shad-input"
              {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" className="shad-input"
              {...field} />
            </FormControl>
           <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="shad-button_primary">
        {isUserLoading ? (
          <div className="flex-center gap-2">
            <Loader /> Loading...
          </div>

        ): "Sign In"}  
      </Button>
<p className="text-small-regular text-light-2 text-center">
  Dont have an account? 
    <Link to ="/sign-up" className="text-primary-500 text-small-semibold
    ml-1">
      Sign Up</Link>
</p>

    </form>
    </div>
  </Form>
  
  )
}

export default SignInForm
