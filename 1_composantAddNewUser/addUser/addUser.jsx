import { useState } from "react";
import { checkCreateEmail, checkCreatePass } from "../utile/checker";




export function ComposantAddUser()
{
    let [user, setUser] = useState({
        email:"",
        pass:"",
        checkPass:"",
    })
    let [error, setError] = useState({error:0, message:<h5 style={{color:"var(--primary_1)"}}>Your turn to play !</h5>})

    function handleSaveUserTmp(e)
    {
        console.log(user);
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    }

    function handleSaveUser(e)
    {
        let email = checkCreateEmail(user);
        let pass = checkCreatePass(user);

        if (email.code < 0)
        {
             e.preventDefault();
             setError({error:1, message:<h5 style={{color:"red"}}>{email.message}</h5>});
             return ;
        }
        else if (pass.code < 0)
        {
            e.preventDefault();
            setError({error:1, message:<h5 style={{color:"red"}}>{pass.message}</h5>});
            return ;
        }
        else
        {
            alert("Welcome !");
        }
    }
    return (
    <div className="composant_add_User">
        <form className="gate_ver">
            <h4>Create your profile</h4>
            {error.message}
            <div className="gate_2 my_div">
                <h5 className="gray_h4">Your email</h5>
                <input onInput={handleSaveUserTmp} type='text' name='email'/>
            </div>
            <div className="gate_2  my_div">
                <h5 className="gray_h4">Your passWord</h5>
                <input onInput={handleSaveUserTmp} type='text' name='pass'/>
            </div>
            <div className="gate_2  my_div">
                <h5 className="gray_h4">Copy your password</h5>
                <input onInput={handleSaveUserTmp} type='text' name='checkPass'/>
            </div>
            <input onClick={handleSaveUser} type='submit' className="btn"/>
        </form>
    </div>
    );
}