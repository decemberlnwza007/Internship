import { useState } from 'react';

export default function Data() {

    const academicYear = new Date().getFullYear() + 543;

    const [formData, setFormData] = useState({
        studentId: '',
        firstName: '',
        lastName: '',
        academicYear: academicYear,
        email: '',
        phone: '',
        faculty: '',
        academy: 'วิทยาลัยเทคนิคสมุทรสาคร',
        company: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <>
            <div className="flex-1 relative overflow-hidden">
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">
                    <div className="relative text-center space-y-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent drop-shadow-sm mb-8">
                            ข้อมูลนักศึกษา
                        </h1>
                    </div>

                    <div className="relative mt-12 max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        รหัสนักศึกษา
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="studentId"
                                        type="text"
                                        placeholder="กรอกรหัสนักศึกษา"
                                        value={formData.studentId}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        ชื่อ
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="firstName"
                                        type="text"
                                        placeholder="กรอกชื่อ"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        นามสกุล
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="lastName"
                                        type="text"
                                        placeholder="กรอกนามสกุล"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        สาขาวิชา
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="faculty"
                                        type="text"
                                        placeholder="กรอกสาขาวิชา"
                                        value={formData.faculty}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        ประจำปีการศึกษา
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="academicYear"
                                        type="text"
                                        placeholder="ปีการศึกษา"
                                        value={formData.academicYear}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <hr className='text-blue-500 border-1' />

                            <div className="relative text-center space-y-8">
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent drop-shadow-sm">
                                    ใบสมัครงานระบบทวิภาคี
                                </h1>
                                <h1 className="text-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent drop-shadow-sm">
                                    (สำหรับนักเรียน นักศึกษา)
                                </h1>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        ชื่อสถานศึกษาที่สังกัด
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="academy"
                                        type="text"
                                        placeholder="ชื่อสถานศึกษาที่สังกัด"
                                        value={formData.academy}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-800 text-lg font-semibold mb-3">
                                        ชื่อสถานประกอบการที่ต้องการสมัคร
                                    </label>
                                    <input
                                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                        name="company"
                                        type="text"
                                        placeholder="กรอกชื่อสถานประกอบการที่ต้องการสมัคร"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center mt-12">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    บันทึกข้อมูล
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-300 rounded-full opacity-15 blur-2xl"></div>
                </div>
            </div>
        </>
    )
}