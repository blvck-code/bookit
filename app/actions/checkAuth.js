'use server';


import { createSessionClient } from "../../config/appwrite";
import { cookies } from "next/headers";




async function checkAuth(req, res) {
    const sessionCookie = cookies().get('appwrite-session');

    if (!sessionCookie) {
        return {
            isAuthenticated: false,
        }
    }

    try {
        const { account } =  await createSessionClient(sessionCookie.value);
        const user = await account.get();

        return {
            isAuthenticated: true,
            user: {
                id: user.$id,
                email: user.email,
                name: user.name,

            }
        }


    } catch (error) {
        return {
            isAuthenticated: false,
        }
    }

}


export default checkAuth;







