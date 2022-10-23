import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  }

  const handleClick = (e, data) => {
    // data : props in Menu.Item

    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about ");
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleClick}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleClick}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={handleClick}
      />
    </Menu>
  );
};

export default NavBar;
