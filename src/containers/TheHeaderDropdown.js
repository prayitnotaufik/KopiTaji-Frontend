import React from "react";
import { Button } from "reactstrap";
import { CDropdown, CDropdownToggle, CImg } from "@coreui/react";

const TheHeaderDropdown = () => {
  const LogoutHandle = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar mr-2">
          <CImg
            src={"avatars/9.jpg"}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>

        <div>
          <Button color="danger" onClick={LogoutHandle}>
            LOGOUT
          </Button>
          {/* <h5>Login</h5> */}
        </div>
      </CDropdownToggle>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
