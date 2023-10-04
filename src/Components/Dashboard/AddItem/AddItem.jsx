import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_upload_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, category, price, recipe } = data;
                    const newItem = { name, category, price: parseFloat(price), recipe, image: imgURL };
                    console.log(newItem);

                    // post here coding
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting menu result', data.data);
                            if(data.data.insertedId){
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })
    };


    return (
        <div className='w-full'>
            <SectionTitle subHeading="what's new" heading="add an item"></SectionTitle>

            <div className=' px-10 py-5 m-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* reciepe name input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-400">Reciepe Name*</span>
                        </label>
                        <input type="text"  {...register("name", { required: true, maxLength: 120 })} placeholder="Reciepe name" className="input input-bordered w-full " />
                    </div>

                    <div className='flex justify-between gap-5'>
                        {/* select category input */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-400">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Drinks</option>
                                <option>Offered</option>
                            </select>
                        </div>

                        {/* price input */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-400">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>

                    {/* text area */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-400">Reciepe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Please details recipe here"></textarea>
                    </div>

                    {/* file upload input */}
                    <div className="form-control  mx-auto">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-400">Item Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

                    <div className='text-center'>
                        <input className='btn text-white text-center btn-wide bg-orange-500 border-none mt-3' type="submit" value="Add New Item" />

                    </div>
                </form>
            </div>
        </div>


    );
};

export default AddItem;