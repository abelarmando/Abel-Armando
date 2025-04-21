function Button({ text, className, img }) {
  return (
    <a className={`${className ?? ""} cta-button group w-[100px]`}>
      <div className="bg-circle" />
      <p className="text ">{text}</p>
      <div className="arrow-wrapper">
        <img src={img} alt="arrow" />
      </div>
    </a>
  );
}

export default Button;
