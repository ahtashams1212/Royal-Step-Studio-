import PropTypes from "prop-types";

const PromoDesignDescription = ({ className = "" }) => {
  return (
    <div
      className={`w-[1873px] flex flex-row items-start justify-center pt-0 px-5 pb-[639px] box-border max-w-full text-center text-17xl text-black font-poppins mq750:pb-[415px] mq750:box-border ${className}`}
    >
      <div className="w-[1143px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap mq750:justify-center">
        <div className="w-[222px] bg-white box-border flex flex-row items-start justify-start py-0.5 pr-3 pl-4 whitespace-nowrap z-[1] border-[4px] border-solid border-orchid">
          <div className="h-[67px] w-[222px] relative bg-white box-border hidden border-[4px] border-solid border-orchid" />
          <div className="w-[178px] relative tracking-[-0.02em] leading-[45px] font-medium inline-block shrink-0 z-[2]">
            VIRAL CGI
          </div>
        </div>
        <div className="w-[223px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
          <div className="self-stretch bg-white flex flex-row items-start justify-start py-0.5 px-[34px] z-[1] border-[4px] border-solid border-orchid">
            <div className="h-[67px] w-[214px] relative bg-white box-border hidden border-[4px] border-solid border-orchid" />
            <div className="w-[130px] relative tracking-[-0.02em] leading-[45px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[27px] mq750:text-10xl mq750:leading-[36px]">
              PROMO
            </div>
          </div>
        </div>
        <div className="w-[214px] bg-white box-border flex flex-row items-start justify-start py-0.5 px-9 z-[1] border-[4px] border-solid border-orchid">
          <div className="h-[67px] w-[214px] relative bg-white box-border hidden border-[4px] border-solid border-orchid" />
          <div className="relative tracking-[-0.02em] leading-[45px] font-medium inline-block min-w-[126px] z-[2] mq450:text-3xl mq450:leading-[27px] mq750:text-10xl mq750:leading-[36px]">
            DESIGN
          </div>
        </div>
      </div>
    </div>
  );
};

PromoDesignDescription.propTypes = {
  className: PropTypes.string,
};

export default PromoDesignDescription;
