import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react-query/queriesandMutations"
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";


const Topbar = () => {
    const {mutate: signOut, isSuccess} = useSignOutAccount();
    const navigate = useNavigate();
    const {user} = useUserContext();

    //adding this - takes back to sign-in/sign-up form
    useEffect(() =>  {
        if(isSuccess) navigate(0);
    })

  return (
   <section className="topbar"  >
    <div className="flex-between py-4 px-5">
        <Link to = "/" className="flex gap-3 items-center">
            <img src="/assets/images/image2.svg" 
            width={130}
            height={325}
            alt="logo" 
            />
        </Link>

        <div className="flex gap-4" >
            <Button variant="ghost" className="shad-button_ghost
            " onClick={() => signOut()}>
                <img src="/assets/icons/logout.svg" alt="logout" />                
            </Button>
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                    <img src={user.imageUrl  || '/assets/icons/profile-placeholder.svg'}
                    
                    className="h-8 w-8 rounded-full"
                    alt="profile" />
            </Link>


        </div>
    </div>
   </section>
  )
}

export default Topbar
