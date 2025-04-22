function BordIcon({ icon }) {
  return (
    <div className="border-2 border-white-50 flex items-center justify-center p-4 h-fit w-fit rounded-lg">
      <div>{icon}</div>
    </div>
  );
}

export default BordIcon;
