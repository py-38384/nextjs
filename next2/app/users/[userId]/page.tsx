import React, { useState } from "react"
import getUser from "@/app/lib/getUser"

type Params = {
  params: {
    userId: string
  };
};

export async function generateMetadata({ userId}){
  const userData = getUser(userId);
  const user = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

const user = async ({ params: userId}) => {
  const userData: Promise<User[]> = getUser(userId);
  const user = await userData;
  return (
    <main>
      <div>User ID: {user.id}</div><br />
      <div>Full Name: {user.name}</div><br />
      <div>Username: {user.username}</div><br />
      <div>Email: {user.email}</div><br />
      <address>
        <div>Address__ </div>
        <div>Street: {user.address.street}</div>
        <div>Suite: {user.address.suite}</div>
        <div>City: {user.address.city}</div>
        <div>Zipcode: {user.address.zipcode}</div>
        <div>
          <div>Geo__ </div>
          <div>Latitude: {user.address.geo.lat}</div>
          <div>Longitude: {user.address.geo.lng}</div>
        </div>
      </address>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
      <div>
        <div>Company__ </div>
        <div>Company Name: {user.company.name}</div>
        <div>Company Catch Phrase: {user.company.catchPhrase}</div>
        <div>Company BS: {user.company.bs}</div>
      </div>
    </main>
  ) 
};

export default user;

// {
//   "id": number,
//   "name": string,
//   "username": string,
//   "email": string,
//   "address": {
//     "street": string,
//     "suite": string,
//     "city": string,
//     "zipcode": string,
//     "geo": {
//       "lat": string,
//       "lng": string
//     }
//   },
//   "phone": string,
//   "website": string,
//   "company": {
//     "name": string,
//     "catchPhrase": string,
//     "bs": string
//   }
// }
