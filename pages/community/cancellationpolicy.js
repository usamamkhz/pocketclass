import React from "react";
import Footer from "/components/Footer";
import Header from "/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PaperClipIcon } from "@heroicons/react/solid";

export default function CancellationPolicy() {
  return (
    <div>
      <Head>
        <title>Pocketclass: Cancellation Policy</title>
        <meta
          name="Pocketclass: Cancellation Policy"
          content="Generated by create next app"
        />
        <link rel="icon" href="/pc_favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      {/*body*/}
      <main className="max-w-7xl mx-auto px-1 py-8 sm:px-5">
        <section>
          <h1 className="text-4xl font-semibold py-5">
            Class Cancellation Policy
          </h1>
          <p className="text-md text-gray-700">
            We understand that life happens, and there will be times you need to
            cancel a booking. Our cancellation policy is designed to protect
            both our customers and instructors. Please see below for more
            information.
          </p>
          <h1 className="text-xl font-semibold mt-5">Class bookings</h1>
          <p className="text-md text-gray-700">
            All classes require payment upon booking.
          </p>
          <h1 className="text-xl font-semibold mt-5">
            Late Cancellations (In-person)
          </h1>
          <p className="text-md text-gray-700">
            In-person class bookings can be cancelled up to 24 hours prior to
            start time for a full refund.
            <br></br>
            <br></br>
            If an in-person class booking is cancelled up to 12 hours prior to
            start time, a late cancellation fee (cost of 25% of the class fee)
            will be charged. If an in-person class booking is cancelled up to 6
            hours prior to start time, a late cancellation fee (cost of 50% of
            class fee) will be charged. If an in-person class booking is
            cancelled up to 3 hours prior to start time, a late cancellation fee
            (cost of 75% of class fee) will be charged.
          </p>
          <h1 className="text-xl font-semibold mt-5">Missed Classes</h1>
          <p className="text-md text-gray-700">
            If you miss an in-person reservation without cancelling, the classes
            will be charged the full amount. This is to ensure that instructors
            are compensated for their time, commute, and preparation leading up
            to the class.
          </p>
          <h1 className="text-xl font-semibold mt-5">Refund Chart</h1>

          {/* Pricing Chart */}
          <div className="overflow-hidden bg-white drop-shadow-2xl sm:rounded-lg mt-5 mb-10">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Hours notice in advance for class cancellations
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Percentage of refund
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    24+ hours
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Full refund
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    12+ hours
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    75% refund
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    6+
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    50% refund
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    3+
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    25% refund
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">0-3 hours</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    No refund
                  </dd>
                </div>
              </dl>
            </div>


          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}