import Button from '@/components/Utils/Button'
import Image from 'next/image'
import React from 'react'

const ProfilePhoto = ({imageurl}:{imageurl:string}) => {
  return (
    <div className=" p-2 gap-2 flex flex-col">
    <h2>Profile Photo</h2>
    <div className="bg-slate-100 h-[300px] w-full relative flex justify-center items-center ">
      <Image
        src={imageurl}
        className="rounded-full aspect-square object-cover"
        alt="Profile Photo"
        width={250}
        height={250}
      ></Image>
    </div>
    <div className="flex gap-2">
    <Button color="primary" label="Change" />
    <Button color="secondary" label="Remove" />

    </div>
  </div>
  )
}

export default ProfilePhoto