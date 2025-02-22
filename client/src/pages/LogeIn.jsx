import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../components/Layout/nav";
import axios from "axios";

const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8088/api/auth/login",
        data
      );

      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#ffffff] px-5">
        <div className="xl:max-w-3xl w-3/4 p-5 sm:p-10 bg-[#174EBB] rounded-3xl">
          <h1 className="text-center text-xl sm:text-3xl font-semibold">
            Login
          </h1>
          <div className="w-full mt-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm sm:text-base md:text-lg p-2 sm:p-4 md:p-0 text-center">
                    {errors.email.message}
                  </p>
                )}
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm sm:text-base md:text-lg p-2 sm:p-4 md:p-0 text-center">
                    Password must be longer than 8 letters
                  </p>
                )}
                <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none w-64 md:w-80 lg:w-96 xl:w-[28rem] mx-auto">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Login</span>
                </button>
                <p className="mt-6 text-xs text-black text-center">
                  Already have an account?{" "}
                  <Link to="/signup">
                    <span className="text-[#E9522C] font-semibold">SignUp</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
