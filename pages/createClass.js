import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Router, useRouter } from "next/router";
import { auth, db, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from "react";
import { addDoc, arrayUnion, collection, doc, GeoPoint, getDoc, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

export default function CreateClass() {


    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, userLoading, error] = useAuthState(auth);
    let images = []
    let imagesURL = []

    if (userLoading || !user) {
        return <section className="flex justify-center items-center min-h-[100vh]">
            <Image src="/Rolling-1s-200px.svg" width={'60px'} height={"60px"} />
        </section>
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const className = e.target.className.value
        const classType = e.target.classType.value
        const address = e.target.address.value
        const price = e.target.price.value
        const latitude = e.target.latitude.value
        const longitude = e.target.longitude.value
        const description = e.target.description.value
        const pricing = e.target.pricing.value
        const funfact = e.target.funfact.value
        const experience = e.target.experience.value
        const about = e.target.about.value
        const category = e.target.category.value

        for (let i = 0; i < e.target.images.files.length; i++) {
            images.push(e.target.images.files[i])
        }


        setLoading(true)

        const addingClass = await addDoc(collection(db, "classes"), {
            Address: address,
            Category: category,
            Description: description,
            Pricing: pricing,
            FunFact: funfact,
            Experience: experience,
            About:about,
            Name: className,
            Price: price,
            Type: classType,
            latitude: latitude,
            longitude: longitude,
            Location: new GeoPoint(latitude, longitude),
            Images: imagesURL,
            classCreator: user?.uid

        });

        images.map((img) => {
            const fileRef = ref(storage, `images/${Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000) + "-" + img.name}`)
            uploadBytes(fileRef, img)
                .then(async (res) => {
                    getDownloadURL(ref(storage, res.metadata.fullPath))
                        .then(async (url) => {
                            await updateDoc(doc(db, "classes", addingClass.id), {
                                Images: arrayUnion(url)
                            })
                            toast.success("Class Added", {
                                toastId: "success66"
                            })
                            e.target.className.value = " "
                            e.target.classType.value = " "
                            e.target.address.value = " "
                            e.target.price.value = " "
                            e.target.latitude.value = " "
                            e.target.longitude.value = " "
                            e.target.description.value = " "
                            e.target.pricing.value = " "
                            e.target.funfact.value = " "
                            e.target.experience.value = " "
                            e.target.about.value = " "
                            e.target.category.value = " "

                            setTimeout(() => {
                                setLoading(false)
                                router.push({
                                    pathname: "/classes",
                                    query: {
                                        id: addingClass.id,
                                    },
                                })
                            }, 4000)


                        })
                })
        })


    }

    return (
        <div className="mx-auto">
            <Head>
                <title>Create Class</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pc_favicon.ico" />
            </Head>
            {/* header */}
            <Header />
            {/* banner */}

            <div className="max-w-7xl mx-auto px-8 py-8 min-h-[80vh] sm:px-16">
                <h1 className="text-3xl font-extrabold text-center py-5">Create Class</h1>

                <div className="formContainer mt-10">
                    <form onSubmit={(e) => { handleFormSubmit(e) }}>
                        <div className="grid gap-2 grid-cols-2">
                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Class Name</label>
                                <input
                                    required
                                    name='className'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: Professional Music Lessons by Tony"
                                    type={"text"}
                                />
                            </div>
                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Category</label>
                                <input
                                    required
                                    name='category'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: Music"
                                    type={"text"}
                                />
                            </div>
                            {/* <div className="grid-cols-6">
                                <label className='text-medium font-medium'>Category</label>
                                <select name="category" id="category" defaultValue={"Category"}
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'>
                                    <option hidden value="Category">Category</option>
                                    <option value="sports">Sports</option>
                                    <option value="music">Music</option>
                                    <option value="art">Art</option>
                                </select>
                            </div> */}

                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Address</label>
                                <input
                                    required
                                    name='address'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: 121 Richmond St W, Toronto"
                                    type={"text"}
                                />
                            </div>
                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Class Type</label>
                                <input
                                    required
                                    name='classType'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: Piano"
                                    type={"text"}
                                />
                            </div>
                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Price</label>
                                <input
                                    required
                                    name='price'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: 100"
                                    type={"number"}
                                />
                            </div>
                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Latitude</label>
                                <input
                                    required
                                    name='latitude'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: 43.84914"
                                    step="any"
                                    type={"number"}
                                />
                            </div>
                            <div className="grid-cols-6">
                                <label className='text-lg font-medium'>Longitude</label>
                                <input
                                    required
                                    name='longitude'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Example: -79.32399"
                                    step="any"
                                    type={"number"}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 mt-2">
                            <div className="col-span-12">
                                <label className='text-lg font-medium'>Images (png, jpg)</label>
                                <input
                                    required
                                    name='images'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    multiple
                                    accept="image/png, image/jpeg, image/jpg"
                                    type={"file"}
                                />
                            </div>
                            <div className="col-span-12">
                                <label className='text-lg font-medium'>About</label>
                                <textarea
                                    required
                                    name='about'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Tell your students a little big about yourself!"
                                    type={"text"}
                                />
                            </div>
                            <div className="col-span-12">
                                <label className='text-lg font-medium'>Experience</label>
                                <textarea
                                    required
                                    name='experience'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Impress students with your experience!"
                                    type={"text"}
                                />
                            </div>
                            <div className="col-span-12">
                                <label className='text-lg font-medium'>Description</label>
                                <textarea
                                    required
                                    name='description'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Enter a description"
                                    type={"text"}
                                />
                            </div>
                            <div className="col-span-12">
                                <label className='text-lg font-medium'>Pricing</label>
                                <textarea
                                    required
                                    name='pricing'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Explain your pricing packages!"
                                    type={"text"}
                                />
                            </div>
                            <div className="col-span-12">
                                <label className='text-lg font-medium'>Fun Fact</label>
                                <textarea
                                    required
                                    name='funfact'
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-logo-red focus:ring-1 focus:ring-logo-red'
                                    placeholder="Tell your students a fun fact about yourself!"
                                    type={"text"}
                                />
                            </div>
                            
                            <div className="col-span-12">
                                {
                                    !loading ?
                                        <button
                                            type='submit'
                                            className='active:scale-[.98] w-full active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-logo-red rounded-xl text-white font-bold text-lg'>Create</button>
                                        :
                                        <div class="flex items-center justify-center">
                                            <button type="button"
                                                class="inline-flex items-center justify-center py-4 text-sm font-semibold leading-6 text-white transition duration-150 w-full ease-in-out bg-logo-red rounded-xl shadow cursor-not-allowed hover:bg-logo-red"
                                                disabled="">
                                                <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75" fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                    </path>
                                                </svg>
                                                Uploading...
                                            </button>
                                        </div>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}
