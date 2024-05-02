const CARDS = [
    {
        label: "Patients",
        value: 6,
    },
    {
        label: "New Appointments",
        value: 6,
    },

    {
        label: "Cancelled",
        value: 6,
    },

    {
        label: "Programmes",
        value: 6,
    },
];

const APPOINTMENTS = [
    {
        startTime: "10:00 AM",
        endTime: "10:15 AM",
        patientName: "Ananya",
    },
    {
        startTime: "10:15 AM",
        endTime: "10:30 AM",
        patientName: "Ananya",
        isActive: true,
    },
    {
        startTime: "10:30 AM",
        endTime: "11:00 AM",
        patientName: "Ananya",
    },
    {
        startTime: "11:00 AM",
        endTime: "11:15 AM",
        patientName: "Ananya",
        isRescheduled: true,
    },
    {
        startTime: "11:15 AM",
        endTime: "11:45 AM",
        patientName: "Ekum",
        isCancelled: true,
    },
];

const Appoint = () => {
    return (
        <div className="bg-gray-200 h-screen flex">
            <div className="w-60 h-full bg-white flex flex-col gap-7 py-10 px-6">
                <div className="bg-red-300 w-20  aspect-square " />
                <p className="text-lg">Inbox</p>
                <p className="text-lg">Transactions</p>
                <p className="text-lg">
                    Reschedule/Cancel
                    <br />
                    Requests
                </p>
                <p className="text-lg text-orange-400 underline font-bold">
                    Appointments
                </p>

                <div>
                    <p className="text-gray-300">PATIENTS</p>
                    <div className="flex flex-col pl-3 gap-4 mt-3">
                        <p className="text-lg">Patient Schedule</p>
                        <p className="text-lg">Fill OP Form</p>
                        <p className="text-lg">Patient Verification</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-300">PARTNERS</p>
                    <div className="flex flex-col pl-3 gap-4 mt-3">
                        <p className="text-lg">Onboarding</p>
                        <p className="text-lg">Partner Verification</p>
                    </div>
                </div>

                <div className="rounded-md bg-gray-100 text-sm self-center mt-auto py-2 px-2 w-fit">
                    <p>Logged in as Admin</p>
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-10">
                <div className="flex items-center">
                    <div className="flex gap-3">
                        <img
                            alt="user"
                            className="w-14 h-14 rounded-full object-cover"
                            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                        />
                        <div className="flex flex-col">
                            <p className="text-2xl font-medium">Dr Ram Savarkar Schedule</p>
                            <div className="flex gap-5 text-gray-400">
                                <p>+917865747827</p>
                                <p>ram_s@abc.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center pr-6  bg-white rounded-full ml-auto overflow-hidden">
                        <input
                            className="w-80 h-10 pl-6 pr-3 outline-none"
                            placeholder="Search doctor/dietician/centre"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 stroke-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                    <div className="h-12 aspect-square bg-gray-300 ml-6 rounded-full flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-4 flex-1">
                    <div className="basis-3/4 bg-white flex flex-col rounded-lg shadow-md px-4 py-6">
                        <div className="flex items-center">
                            <div className="flex w-full justify-center">
                                <div className="flex gap-6 self-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5 8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                    <p className="text-gray-400">
                                        <span className="font-bold text-black mr-4">March 6,</span>
                                        Monday
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="h-10 aspect-square rounded-full bg-orange-600 flex justify-center items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-6">
                            {CARDS.map(({ label, value }) => {
                                return (
                                    <div
                                        key={label}
                                        className=" col-span-1 rounded-xl bg-gray-200 px-3 gap-2 py-2 flex flex-col"
                                    >
                                        <p className="text-sm">{label}</p>
                                        <p className="font-bold">{value}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-5 flex flex-col gap-3">
                            {APPOINTMENTS.map(
                                ({
                                    endTime,
                                    patientName,
                                    startTime,
                                    isCancelled,
                                    isRescheduled,
                                    isActive,
                                }) => {
                                    return (
                                        <div
                                            key={endTime}
                                            className={"flex py-3 px-3 items-center gap-6 border-l-green-500 border-l-4" + `${isRescheduled ? "border-l-gray-400" : ""} ${isActive ? "bg-orange-200 border-l-0 rounded-lg" : ""}`}
                                        >
                                            <p>{startTime}</p>
                                            <p>{endTime}</p>
                                            <div className="w-0.5 rounded-md bg-gray-300  h-6 " />
                                            <p
                                                className={`${isActive ? "font-bold" : ""} ${(isRescheduled || isCancelled) ? "text-gray-400" : ""}`}
                                            >
                                                {patientName}
                                            </p>
                                            {isRescheduled && (
                                                <div className="px-3 py-1 text-sm bg-blue-200 rounded-full">
                                                    Rescheduled
                                                </div>
                                            )}
                                            {isCancelled && (
                                                <div className="px-3 py-1 text-sm bg-red-200 rounded-full">
                                                    Cancelled
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                    <div className="basis-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Aartis Appointment</p>
                            <div className="h-10 aspect-square rounded-full bg-orange-600 flex justify-center items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-3 text-gray-400 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                />
                            </svg>
                            <p className="text-black text-sm">Monday, 6th March</p>
                        </div>
                        <div className="flex gap-3 text-gray-400 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>

                            <p className="text-black text-sm">10:30 AM</p>
                        </div>
                        <div className="flex gap-3 text-gray-400 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                />
                            </svg>

                            <p className="text-black text-sm">15 Mins</p>
                        </div>
                        <div className="flex gap-3 text-gray-400 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>

                            <p className="text-black text-sm">
                                Dr. Joys Clinic, G-12, MIG Colony, Hyderabad
                            </p>
                        </div>
                        <button className="bg-orange-600 px-20 py-2 text-sm text-white rounded-full w-fit mt-8">
                            Reschedule
                        </button>
                        <button className="border-orange-600 border px-10 py-2 text-sm  rounded-full w-fit ">
                            Assign a New Doctor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appoint;