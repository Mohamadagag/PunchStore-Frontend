import React from "react";
import "../Css/EditPassword.css";

function EditPassword() {
  return (
    <form className="EditPassword">
      <label>New Password</label>
      <br />
      <input type="password" name="newpassword" placeholder="New Password" />
      <br />
      <label>Confirm Password</label>
      <br />
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
      />
      <br />
      <button>Save</button>
    </form>
  );
}

export default EditPassword;
