import { StarTwoTone } from "@ant-design/icons";

const MyRate = ({ rate, rateCount }) => {
  return (
    <div>
      <StarTwoTone twoToneColor="#ffff00" /> {rate} - {rateCount} değerlendirme
    </div>
  );
};

export default MyRate;
