interface HeaderProp {
  header: string;
}

const Header = ({ header }: HeaderProp) => {
  return (
    <p className="font-tsu-sahitya py-8 text-center text-3xl md:py-20 md:text-8xl">
      {header}
    </p>
  );
};

export default Header;
