const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <h1 className="">Team Member Allocation</h1>
        <h3>
          {selectedTeam} has {teamMemberCount}
        </h3>
      </div>
    </header>
  );
};

export default Header;
