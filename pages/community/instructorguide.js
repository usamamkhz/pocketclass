import React from "react";
import Footer from "/components/Footer";
import Header from "/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LargeCard from "/components/LargeCard";

export default function InstructorGuide() {
  return (
    <div>
      <Head>
        <title>Pocketclass: Instructor Guide</title>
        <meta
          name="description" content="Our platform contains respected, verified, and trust-worthy instructors to provide the safest, most valuable, greatest experience for our students."
        />
        <link rel="icon" href="/pc_favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      {/*body*/}
      <main className="max-w-7xl mx-auto px-1 py-8 sm:px-5">
        <section>
          <h1 className="text-4xl font-semibold py-5">Join Our Team</h1>
          <h1 className="text-xl font-semibold mt-5">
            Partner with PocketClass
          </h1>
          <p className="text-md text-gray-700">
            Are you a sport/music/art instructor or studio owner looking to grow
            your business?
            <br></br>
            List your service on PocketClass, and reach your target audience.
            <br></br>
            Join the growing number of sports, music, and art instructors that
            are expanding their reach with PocketClass– get started for free
            today.
          </p>

          <h1 className="text-4xl font-semibold mt-10 mb-5">
            Instructor Verification Process
          </h1>
          <p className="text-md text-gray-700">
            We want to make sure our platform contains respected, verified, and
            trust-worthy instructors to provide the safest, most valuable,
            greatest experience for our students.
          </p>

          <div className="overflow-hidden bg-white drop-shadow-2xl sm:rounded-lg mt-5 mb-10">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Verification Methodology & Process
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Before we help you outreach to passionate and curious students
                in your area, we'd love to know more about you!
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-5">
                  <dt className="text-sm font-medium text-gray-500">Skill</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Pocketclass will verify that you have adept skill or the
                    knowledge to teach your chosen subject. Certifications or
                    licenses will accelerate this process.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Experience
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Pocketclass will verify that you have proficient experience
                    in teaching your chosen subject. This will be through a
                    video call, images, videos, as well as one required
                    reference from a previous student or colleague.
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Infrastructure
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    You must provide PocketClass with information on planned
                    equipment used as well as proposed locations for your chosen
                    subject of teaching.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-5">
                  <dt className="text-sm font-medium text-gray-500">Safety</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    PocketClass will conduct a standard background check and
                    valid government issued idenficiation will be required.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <h1 className="text-4xl font-semibold mt-10 mb-5">
            Make money from your passion with PocketClass!
          </h1>
          <h1 className="text-xl font-semibold mt-5">
            Sign up online (in less than 10 minutes)
          </h1>
          <p className="text-md text-gray-700">
            Tell us about your background and experience in your field of
            expertise.
          </p>
          <h1 className="text-xl font-semibold mt-5">
            Add your contact information and availability
          </h1>
          <p className="text-md text-gray-700">
            Tap into new audiences and reach thousands of individuals looking
            for your services in your area.
          </p>
          <h1 className="text-xl font-semibold mt-5">
            Get connected, get paid
          </h1>
          <p className="text-md text-gray-700">
            Get connected with customers in your area looking for service.
          </p>
          <h1 className="text-xl font-semibold mt-5">Who can join?</h1>
          <ul className="list-disc text-md ml-5 text-gray-700">
            <li>
              Are you a full-time or part-time sport, music, or art instructor?
            </li>
            <li>Are you a sport, music, or art club/studio owner?</li>
          </ul>
          <p className="text-md text-gray-700">
            If you answered yes to either of those questions, welcome!
          </p>
          <h1 className="text-xl font-semibold mt-5">
            Benefits of partnering with PocketClass
          </h1>
          {/* <p className="text-md text-gray-700">
            
          </p> */}
          <ul className="list-disc text-md ml-5 text-gray-700">
            <li>Market to your target audience</li>
            <li>
              Student Reviews bring you credibility amonst your community!
            </li>
            <li>Secure Payments</li>
            <li>
              Our cancellation policy protects instructors from late
              cancellations and missed classes
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-xl font-semibold mt-5">Ready to Get Started?</h1>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="Become an Instructor"
            description="Teach your Passion"
            buttonText="I'm Interested"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
