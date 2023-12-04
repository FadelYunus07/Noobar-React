import React from "react";

function FooterComponent() {
  return (
    <div className="pb-5 text-center">
      <p>Copyright &#169; {new Date().getUTCFullYear()}, Noobar by DGland</p>
    </div>
  );
}

export default FooterComponent;
