import style from "./CompanyCard.module.css";

const CompanyCard: React.FC = () => {
  return (
    <>
      <div className={style.companyContainer}>
        <div className={style.card}>
          <h3>Company List</h3>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
