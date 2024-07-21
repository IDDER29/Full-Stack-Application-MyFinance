import { useHomeContext } from "../../contexts/HomeContext";

const Card = () => {
  const { profile } = useHomeContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="text-gray-700">Mon Salaire</div>
      <div className="text-2xl font-bold">9123 4567 3454 654</div>
      <div className="text-gray-700 mt-2">{profile.username}</div>
      <div className="text-2xl font-bold mt-4">
        {profile.currentTotalIncome}
      </div>
    </div>
  );
};

export default Card;
