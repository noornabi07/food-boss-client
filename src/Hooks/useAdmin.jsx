import { useContext } from "react"
import { UserContext } from "../provider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(UserContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]

}

export default useAdmin;