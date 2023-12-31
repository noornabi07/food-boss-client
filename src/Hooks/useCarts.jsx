import { useQuery } from '@tanstack/react-query'
import { UserContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCarts = () =>{
    const {user, loading} = useContext(UserContext);
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () =>{
        //     const res = await fetch(`https://food-boss-server-noornabi07.vercel.app/carts?email=${user?.email}`, {
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res axios', res)
            return res.data;
        },

      })
      return [cart, refetch]

}

export default useCarts; 