import useAllUsers from "../../hooks/useAllUsers";
import underline from "../../assets/img/underline.png";

const DashboardHome = () => {
  const allUsers = useAllUsers();
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="mb-20">
          <h1 className="text-white text-5xl font-bold capitalize">
            Our Super <span className="text-yellow-500">Users</span>
          </h1>
          <img className="mt-5" src={underline} alt="" />
        </div>
        <table className="min-w-full bg-transparent border border-gray-700 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-300 text-gray-900 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Photo</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm font-light">
            {allUsers.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-100 hover:text-gray-950"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <span className="font-medium">{user?.displayName}</span>
                </td>
                <td className="py-3 px-6 text-left font-medium">
                  <span>{user?.email}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="w-16 h-16 rounded-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
