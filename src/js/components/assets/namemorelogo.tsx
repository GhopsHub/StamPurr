import namelogo from "../../../assets/images/namelogo.png";

export default function NameMoreLogo() {
  return (
    <div>
      <img
        src={namelogo}
        alt="namemorelogo"
        className="h-16 sm:h-20 md:h-20 lg:h-24 w-auto" // Logo en negro
        // className="h-20 w-auto m-5 invert brightness-200" //Logo en blanco
      />
    </div>
  );
}
