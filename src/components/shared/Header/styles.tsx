import styled, { useTheme } from "styled-components";

const theme = useTheme();

const StyledHeader = styled.div<any>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding-left: 4px;
  padding-right: 4px;

  @media screen and (max-width: 778px) {
    background-color: ${(props) => props.theme.primary};
  }
`;

{
  /* <div
      className={`w-full relative flex justify-between items-center lg:bg-background lg:pt-4 lg:pb-4 lg:gap-16 lg:px-24 px-4`}
    >
      <Link href="/">
        <h2 className="text-3xl lg:text-white text-black">
          <b>dev</b>Nilton
        </h2>
      </Link>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </div> */
}
