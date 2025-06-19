import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/problem/${roomId}`);
  };

  return (
    <section className="bg-[#111827]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 bg-[#1f2937] md:space-y-6 sm:p-8 border border-gray-500 rounded-md">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
              Enter In Room
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Problem ID
                </label>
                <input
                  type="text"
                  name="number"
                  onChange={handleRoomIdChange}
                  className="w-full h-[36px] py-0 px-3 bg-[#374151] border border-gray-500 rounded-sm outline-none text-white"
                  placeholder="123456"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4B5563] text-white h-[40px] rounded-sm"
              >
                Enter in Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
